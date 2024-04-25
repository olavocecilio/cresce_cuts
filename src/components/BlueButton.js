import Link from "next/link";

function BlueButton({ href, text }) {
    return (
        <Link className='h-10 text-white text-base bg-blue py-2.5 px-10 border rounded-md flex items-center justify-center' href={href}>
            {text}
        </Link>
    )
}

export default BlueButton