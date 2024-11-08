import { createChild } from "@/lib/child"

const AddChildForm = () => {

  return (
    <form action={createChild}>
      <div  className="flex flex-col">
        <label className="text-3xl">name</label>
        <input type="text" name="name" className="outline outline-1 outline-oxford-blue rounded"/>
      </div>
      <div  className="flex flex-col">
        <label className="text-3xl">birthday</label>
        <input type="date" name="birthday" className="outline outline-1 outline-oxford-blue rounded text-2xl"/>
      </div>
      <button type="submit" className="text-oxford-blue py-2 px-4 rounded shadow flex order-3 bg-tea-green transition hover:drop-shadow-xl transition-all transition-duration-100 text-xl flex flex-col mt-7"> submit </button>
    </form>
  )
}

export default AddChildForm
