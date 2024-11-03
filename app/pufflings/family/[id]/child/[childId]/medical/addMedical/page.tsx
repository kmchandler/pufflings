"use client";
import { createMedical } from "@/lib/medical";
import Select from "react-dropdown-select";

const AddMedicalForm = () => {

  const options = [
    {
      value: 1,
      label: 'fever'
    },
    {
      value: 2,
      label: 'illness'
    },
    {
      value: 3,
      label: 'injury'
    },
    {
      value: 4,
      label: 'other'
    }
  ];

  return (
    <form action={createMedical}>
      <label>type</label>
      <select name="type" id="medTypes">
        <option selected disabled>select type</option>
        {options.map(option => {
          return <option value={option.value}>{option.label}</option>
        })}
      </select>

      <label>notes</label>
      <textarea name="notes" />
      <button type="submit"> submit </button>
    </form>
  )
}

export default AddMedicalForm
