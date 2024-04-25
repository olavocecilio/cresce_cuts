import LinkButton from './LinkButton';

function Menu() {
    return (
        <div className='flex-col'>
            <LinkButton href="/" text="Lista descontos" />
            <LinkButton href="desconto-percentual" text="Desconto Percentual" />
            <LinkButton href="desconto-de-por" text="Desconto De Por" />
            <LinkButton href="desconto-leve-mais-pague-menos" text="Desconto Leve+ Pague-" />
        </div>
    )
}

export default Menu