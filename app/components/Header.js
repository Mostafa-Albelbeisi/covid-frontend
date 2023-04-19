import Link from "next/link"

export default function Header() {
    return (
        <>

        <div>
            <div>
                <div className="bg-[#3E54AC] text-center p-[30px]">
                    <h1 className="text-[#000] font-bold text-[40px]">COVID<spam className="text-[#fff] bg-[#C92C6D] text-[50px] rounded-full m-1 p-[7px]">19</spam></h1>
                    <h1 className="text-lg py-5 font-bold text-[#fff]">Covid19 Statistics</h1>
                    <p className="text-[#fff]">A Website to provide you with all the updates on Covid-19 Statistics around the world</p>
                </div>
                <div className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1 bg-[#393646]">
                    <nav>
                    <ul className="md:flex items-center justify-between text-base text-[#fff] pt-4 md:pt-0">
                        <li><Link href="/" className="inline-block no-underline hover:text-[#6DA9E4] font-medium text-lg py-2 px-4 lg:-ml-2">Home</Link></li>
                        <li><Link href="/AllCountries" className="inline-block no-underline hover:text-[#6DA9E4] font-medium text-lg py-2 px-4 lg:-ml-2">All countries</Link></li>
                        <li><Link href="/MyRecords" className="inline-block no-underline hover:text-[#6DA9E4] font-medium text-lg py-2 px-4 lg:-ml-2">My recorders</Link></li>
                    </ul>
                    </nav>
                </div>
            </div>
        </div>
            {/* <dev className="bg-[#19A7CE]">
                <dev className="items-center">
                    <h1 className="text-[#000] text-[40px]">COVID<spam className="text-[#fff] bg-[#FFACAC] text-[50px] rounded-full m-1 p-0">19</spam></h1>
                    <h1 className="text-lg ">Covid19 Statistics</h1>
                    <p>A Website to provide you with all the updates on Covid-19 Statistics around the world</p>
                </dev>
            </dev>

            <dev className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1 bg-[#393646]">
                <nav>
                    <ul className="md:flex items-center justify-between text-base text-[#fff] pt-4 md:pt-0">
                        <li><Link href="/" className="inline-block no-underline hover:text-[#6DA9E4] font-medium text-lg py-2 px-4 lg:-ml-2">Home</Link></li>
                        <li><Link href="/AllCountries" className="inline-block no-underline hover:text-[#6DA9E4] font-medium text-lg py-2 px-4 lg:-ml-2">All countries</Link></li>
                        <li><Link href="/MyRecords" className="inline-block no-underline hover:text-[#6DA9E4] font-medium text-lg py-2 px-4 lg:-ml-2">My recorders</Link></li>
                    </ul>
                </nav>
            </dev> */}
        </>
    )
}