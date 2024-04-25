function Top({ title, subtitle }) {
    return (
        <div className="w-full mt-2 flex flex-col justify-start">
            <h1 className="mt-12 text-[32px] text-gray1 font-medium">{title}</h1>
            <p className="text-sm text-gray2">{subtitle}</p>
        </div>
    )
}

export default Top