import Link from "next/link"
import InputSearch from "./InputSearch"

const Navbar = () => {
    return (
        <div className="bg-base-300 p-5 px-10">
            <div className="flex flex-col gap-3 lg:flex-row justify-between">
                <div className="flex justify-center">
                    <Link 
                    href={"/"} 
                    className="text-2xl text-neutral-content font-bold">Anime List</Link>
                </div>
                <div className="">
                    <InputSearch/>
                </div>
            </div>
        </div>
    )
}

export default Navbar