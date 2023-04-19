'use client'

import { useEffect } from "react";
import { useState } from 'react';
import Swal from 'sweetalert2'


export default function AllCountries() {

    const [countriesData, setCountriesData] = useState([]);


    useEffect(() => {
        const countries = async () => {
            const response = await fetch('https://api.covid19api.com/summary');
            const data = await response.json();
            setCountriesData(data.Countries);
        };
        countries();
    }, []);


    const handleAddMyRecords = async (country) => {
        try{
            const data = {
                countriesName: country.Country,
                // TotalConfirmedCases: country.TotalConfirmed,
                // TotalDeathsCases: country.TotalDeaths,
                // TotalRecoveredCases: country.TotalRecovered,
                date: new Date().toISOString().slice(0, 10),
                
            };
            const response = await fetch(
                `http://127.0.0.1:8000/api/createRecords/`,
                {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(data),
                }
            );
            Swal.fire(
                '',
                '',
                'success'
              )
        }catch(error){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
              })
        }
    }




    return (
        <>
            <section className="min-h-screen">
                <div className="text-center">
                    <h1 className="font-bold p-5">COVID19 Statistics for All countries</h1>
                    <div className="gap grid sm:grid-cols-4 md:grid-cols-4 grid-cols-1">
                        {countriesData.map((summary) => (
                            <div className="py-[15px] m-[40px] p-5 border border-l-[#EB455F] border-l-[10px] shadow-xl">
                                <h1 className="text-[#EB455F] md:text-[17px] sm:text-[12px]">country: {summary.Country}, {summary.CountryCode}</h1>
                                <div className="py-5 text-[15px] p-2 my-5">
                                    <h1>Total Confirmed cases: {summary.TotalConfirmed} </h1>
                                    <h1>Total Deaths cases: {summary.TotalDeaths}</h1>
                                    <h1>Total Recovered cases: {summary.TotalRecovered}</h1>
                                    <h1>Date: {summary.Date}</h1>
                                </div>
                                <div className="border-b-2 border-dashed border-[#454545]"></div>
                                <button onClick={() => handleAddMyRecords(summary)} className="border border-[#3E54AC] bg-[#3E54AC] px-2 py-3 m-3 rounded-lg text-[#fff] hover:bg-[#576CBC]">Add To My records</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}