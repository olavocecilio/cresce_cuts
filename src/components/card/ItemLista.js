import Image from 'next/image';


function ItemLista() {
    return (
        <div className="text-gray2 text-sm w-full h-[80px] flex items-center justify-between px-6 border-t border-gray3">
            <div className="w-[30%] flex justify-beteween items-center">
                <Image className="mx-2" src="/frame.svg" width={9} height={12.6} alt="Frame" />
                <Image className="mx-2" src="/mock.png" width={50} height={50} alt="Modelo" />
                <p className="mx-2">Biscoito integral cereale Cacau 150g</p>
            </div>
            <div className="w-[15%]">Percentual</div>
            <div className="w-[15%]">30/12/2023 - 10:25</div>
            <div className="w-[30%]">31/12/2023 - 10:25</div>
            <div className="w-[10%]">
                <Image src="/status-active.svg" width={28} height={16} alt="Status Ativo" />
            </div>
        </div>
    )
}

export default ItemLista