import Link from "next/link"

const Header = ({ title, linkHref, linkTitle }) => {
    return (
        <div className="flex flex-col lg:flex-row lg:justify-between items-center px-10 mt-10">
            <h1 className="text-2xl font-bold text-color-white">{title}</h1>
            {
                linkHref && linkTitle
                    ?
                    <Link href={linkHref} className="md:text-xl text-sm underline hover:text-primary text-neutral-content transition-all">
                        {linkTitle}
                    </Link>
                    :
                    null
            }

        </div>
    )
}
export default Header








