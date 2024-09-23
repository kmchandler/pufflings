import { createChild } from "@/lib/child"

const AddChildForm = () => {

  return (
    <form action={createChild}>
      hello world
      <input type="text" name="name" />
      <button type="submit"> submit child </button>
    </form>
  )
}

export default AddChildForm
