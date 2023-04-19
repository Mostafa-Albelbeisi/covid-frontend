'use client'

import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'


export default function MyRecords() {

    const [records, setRecords] = useState([]);

    useEffect(() => {
        const countries = async () => {
            const response = await fetch('http://127.0.0.1:8000/api/viewRecords/');
            const data = await response.json();
            setRecords(data);
        };
        countries();
    }, []);


    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/deleteRecords/${id}/`, {
                method: 'DELETE'
            });
            if (response.ok) {
                setRecords(records.filter((record) => record.id !== id));
                Swal.fire(
                    'Deleted!',
                    'Your record has been deleted.',
                    'success'
                )
            } else {
                console.error('Failed to delete record:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting record:', error);
        }
    };


    return (
        <>
            <section className="min-h-screen">
                {records.length === 0 ? (
                    <h2 className="text-2xl font-bold mb-4  mt-8 text-center text-[#EB455F]">NO RECORDS AVAILABLE</h2>
                ) : (

                    <div className="text-center">
                        <h1 className='py-[25px] font-bold'>COVID19 Statistics for all countries</h1>
                        <div className="gap grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 px-[20rem]">
                            {records.map((items) => (
                                <div className="py-[15px] m-[40px] p-5 border border-l-[#EB455F] border-l-[10px] shadow-xl">
                                    <div className='m-5'>
                                        <h1 className='text-[#EB455F]'><span className='font-bold'>Country:</span> {items.countriesName}</h1>
                                        <h1 className='py-7'><span className='font-bold'>Date:</span> {items.date}</h1>
                                    </div>
                                    <div className='border-b-2 border-dashed border-[#454545]'></div>
                                    <button onClick={() => handleDelete(items.id)} className='border border-[#3E54AC] bg-[#3E54AC] px-2 py-3 m-3 rounded-lg text-[#fff] hover:bg-[#576CBC]'>Delete</button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </section>
        </>
    )
}