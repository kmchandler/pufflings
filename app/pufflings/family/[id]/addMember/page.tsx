import UserSearchBar from "@/app/ui/userSearch"

const AddCaregiver = ({ params: { id }}: {params: { id: string}}) => { 

  return (
    <UserSearchBar familyId={id} />
  )
}

export default AddCaregiver
