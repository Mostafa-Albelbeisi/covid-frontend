import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from "./components/Header";
import HomePage from './HomePage/page.js'
import Footer from "./components/Footer";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
        <HomePage />
    </div>
  )
}
