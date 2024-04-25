import Image from 'next/image';
import Menu from '../menu/Menu';

function Left() {
    return (
        <div className='flex flex-col items-center w-[22%] min-h-[1000px] bg-blue px-3'>
            <Image className='py-10' src="/logo-vale-vantagens-white.png" width={147} height={79} alt="Vale Vantagens" />
            <Menu />
        </div>
    )
}

export default Left