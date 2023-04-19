'use client'

import { useEffect } from "react";
import { useState } from "react";


export default function HomePage() {

    const [worldData, setWorldData] = useState(null);
    const [country, setCountries] = useState("");
    const [sDate, setSDate] = useState("");
    const [eDate, setEDate] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://api.covid19api.com/world/total")
            .then((response) => response.json())
            .then((data) => setWorldData(data))
            .catch((error) => console.error(error));
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const url = `https://api.covid19api.com/country/${country}/status/confirmed?from=${sDate}T00:00:00Z&to=${eDate}T00:00:00Z`;
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setData(data)
        }
    }
    console.log(country)

    return (
        <>
            <section className="min-h-screen w-full min-w-full">

                <div className="text-center">
                    <h1 className="py-[20px] text-[#000] font-bold">World Total Statistics</h1>
                    {worldData && (
                        <div className="grid grid-cols-3 grid-rows-3 sm:grid-cols-3 md:grid:cols-2 lg:grid-cols-3">
                            <h1 className="bg-[#EA5455] px-5 py-5 rounded-full p-0 m-auto text-[#fff]">Total Confirmed: {worldData.TotalConfirmed}</h1>
                            <h1 className="bg-[#EA5455] px-5 py-5  p-0 m-auto text-[#fff]">Total Deaths: {worldData.TotalDeaths}</h1>
                            <h1 className="bg-[#EA5455] px-5 py-5  p-0 m-auto text-[#fff]">Total Recovered: {worldData.TotalRecovered}</h1>
                        </div>

                    )}
                    <h1 className="font-bold">Get Statistics for a specific country</h1>
                    <div className="m-0 p-5">
                        <form className="space-x-3" onSubmit={handleSubmit}>
                            <input value={country} onChange={(event) => setCountries(event.target.value)} type="text" className="border border-[#000] bg-[#fff] py-1 px-2 text-base font-medium text-[#000] outline-none focus:border-[#6A64F1] focus:shadow-md"></input>
                            <input value={sDate} onChange={(event) => setSDate(event.target.value)} type="date" className="border border-[#000] bg-[#fff] py-1 px-2 text-base font-medium text-[#000] outline-none focus:border-[#6A64F1] focus:shadow-md"></input>
                            <input value={eDate} onChange={(event) => setEDate(event.target.value)} type="date" className="border border-[#000] bg-[#fff] py-1 px-2 text-base font-medium text-[#000] outline-none focus:border-[#6A64F1] focus:shadow-md"></input>

                            <button type="submit" className="border border-[#3E54AC] bg-[#3E54AC] hover:bg-[#576CBC] text-[#fff] py-1 px-2">Search</button>
                        </form>


                        <div className="gap grid grid-cols-1 md:grid-cols-4 sm:grid-cols-4">
                            {data.map((items) => (
                                <div className="border border-l-[10px] border-[#EB455F] py-5 m-10 my-10 shadow-2xl">
                                    <h3 className="font-bold text-lg text-[#EA5455]">{items.Date}</h3>
                                    <p className="text-gray-700 m-7">Number of Confirmed Cases: {items.Cases}</p>
                                    <div className="border-b-2 border-dashed border-[#454545]"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}