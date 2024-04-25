import Link from "next/link";

function WhiteButton({ href, text }) {
    return (
        <Link className='h-10 text-blue text-base bg-white py-2.5 px-10 border border-blue rounded-md flex items-center justify-center' href={href}>
            {text}
        </Link>
    )
}

export default WhiteButton