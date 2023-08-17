
export const Navbar = () => {
    return (
        <div className="flex border-[3px] border-green-500">
            <div className="p-[2px] mr-[3px] w-1/10 border-[2px] border-red-300 border-double bg-gray-300 rounded-[5px] font-bold text-lime-800">item1</div>
            <div className="p-[2px] mr-[3px] w-1/10 border-[2px] border-red-300 border-double bg-gray-300 rounded-[5px] font-bold text-lime-800">item2</div>
            <div className="p-[2px] mr-[3px] w-1/10 border-[2px] border-red-300 border-double bg-gray-300 rounded-[5px] font-bold text-lime-800">item3</div>
            <div className="p-[2px] mr-[3px] w-1/10 border-[2px] border-red-300 border-double bg-gray-300 rounded-[5px] font-bold text-lime-800">item4</div>
            <div className="p-[2px] mr-[3px] w-1/10 border-[2px] border-red-300 border-double bg-gray-300 rounded-[5px] font-bold text-lime-800">item5</div>
            <input className="ml-auto mr-[3px] bg-yellow-100 rounded-[5px] border border-red-400" type="search" placeholder="search"/>
        </div>
    )
}