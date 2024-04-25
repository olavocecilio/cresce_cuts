function Select({ text, name, options, handleOnChange, value }) {
    return (
        <div className="w-full h-10 border rounded-md border-gray3">
            <label htmlFor={name}>{text}:</label>
            <select
                name={name}
                id={name}
                onChange={handleOnChange}
                value={value || ''}
            >
                <option>Selecione uma opção</option>
                
            </select>
        </div>
    )
}

export default Select