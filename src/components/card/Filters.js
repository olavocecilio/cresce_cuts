import Select from "../Select"

function Filters({ title }) {
    return (
        <div className="flex items-center w-full">
            <div className="w-6/12">
                <Select />
            </div>
            <div className="w-6/12">
                <Select />
            </div>
        </div>
    )
}

export default Filters