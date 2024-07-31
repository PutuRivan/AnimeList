import Link from "next/link"

const Header = ({ title, linkHref, linkTitle }) => {
    return (
        <div className="flex flex-col lg:flex-row lg:justify-between items-center px-10 mt-10">
            <h1 className="text-2xl font-bold text-accent">{title}</h1>
            {
                linkHref && linkTitle
                    ?
                    <Link href={linkHref} className="md:text-xl text-sm hover:underline hover:text-primary transition-all">
                        {linkTitle}
                    </Link>
                    :
                    null
            }
        </div>
    )
}
export default Header








