"use client";
import { createMedical } from "@/lib/medical";

const AddMedicalForm = () => {

  const options = [
    {
      value: 'fever',
      label: 'fever'
    },
    {
      value: 'illness',
      label: 'illness'
    },
    {
      value: 'injury',
      label: 'injury'
    },
    {
      value: 'other',
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
