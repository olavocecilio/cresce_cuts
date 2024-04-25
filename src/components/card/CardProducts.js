import BlueButton from "../BlueButton"
import TopCard from "./TopCard"
import Filters from "./Filters"
import ItemLista from "./ItemLista"

function CardProducts() {
    return (
        <div className='bg-white w-full flex flex-col items-center my-6 border border-gray3 rounded-md'>
            <div className="flex justify-between items-center h-[72px] w-full p-4 border-b border-gray4">
                <TopCard title="Lista de Produtos" />
                <BlueButton href="./" text="Novo desconto" />
            </div>
            <div className="py-6 px-4 w-full">
                <Filters />
            </div>
            <div className="bg-gray4 text-gray2 text-sm w-full h-[50px] flex items-center justify-between px-6">
                <h4 className="w-[30%]">Desconto</h4>
                <h4 className="w-[15%]">Tipo</h4>
                <h4 className="w-[15%]">Data ativação</h4>
                <h4 className="w-[30%]">Data inativação</h4>
                <h4 className="w-[10%]">Status</h4>
            </div>
            <ItemLista />
            <ItemLista />
            <ItemLista />
            <ItemLista />
            <ItemLista />
        </div>
    )
}

export default CardProducts