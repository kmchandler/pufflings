import { createFamily } from "@/lib/family"

const AddFamilyForm = () => {

  return (
    <form action={createFamily}>
      <div className="flex flex col">
        create a new family below, or ask to be added to an existing family.
      </div>
      
      <label        
        className="text-3xl">family name
      </label>
      <input type="text" name="family_name" className="outline outline-1 outline-oxford-blue rounded text-2xl" />
      <button type="submit" className="text-oxford-blue py-2 px-4 rounded shadow flex bg-tea-green transition hover:drop-shadow-xl transition-all transition-duration-100 text-xl mt-7"> submit new family </button>
    </form>
  )
}

export default AddFamilyForm
