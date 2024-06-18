"use client"
import Link from "next/link"
import InputSearch from "./InputSearch"

const Navbar = () => {
    return (
        <div className="navbar bg-base-300 px-10 flex-col lg:flex-row pt-5 gap-2">
            <div className="lg:navbar-start">
                <Link href="/" className="text-xl">ANIME LIST</Link>
            </div>
            <div className="lg:navbar-end">
                <InputSearch />
            </div>
        </div>
    )
}

export default Navbar