import { createFamily } from "@/lib/family"

const AddFamilyForm = () => {

  return (
    <form action={createFamily}>
      hello world
      <input type="text" name="family_name" />
      <button type="submit"> submit family </button>
    </form>
  )
}

export default AddFamilyForm
