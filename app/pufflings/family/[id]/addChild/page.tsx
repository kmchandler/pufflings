import { createChild } from "@/lib/child"

const AddChildForm = () => {

  return (
    <form action={createChild}>
      <label>name</label>
      <input type="text" name="name" />
      <button type="submit"> submit </button>
    </form>
  )
}

export default AddChildForm
