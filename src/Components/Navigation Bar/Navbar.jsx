"use client"
import Link from "next/link"
import InputSearch from "./InputSearch"

const Navbar = () => {
    return (
        <div className="navbar bg-base-200 px-10 flex-col lg:flex-row items-center pt-5 gap-2">
            <div className="lg:navbar-start">
                <Link href="/" className="text-xl font-bold text-accent">ANIME LIST</Link>
            </div>
            <div className="lg:navbar-end">
                <InputSearch />
            </div>
        </div>
    )
}

export default Navbar