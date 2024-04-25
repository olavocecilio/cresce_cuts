import Link from "next/link";
import Image from "next/image";

function LinkButton({ href, text }) {
    return (
        <Link className='h-[50px] w-full flex flex-row items-center content center justify-start text-white text-xs' href={href}>
            <Image src="./money.svg" width={32} height={25.52} />
            <span className="text-left ml-2 w-44">{text}</span>
            <Image className='' src="./chevron.svg" width={24} height={24} />
        </Link>
    )
}

export default LinkButton