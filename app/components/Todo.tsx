export default function Todo() {
    return <div className="m-2 p-1">
        <div className="grid grid-cols-1 gap-2">
            <h1 className="text-2xl font-bold ">This is title of the Todo</h1>
            <h3>this is little description of the todo</h3>
            <button className="bg-[#145DA0] rounded-md p-2 text-white group-hover:block">Edit</button>
        </div>
    </div>
}