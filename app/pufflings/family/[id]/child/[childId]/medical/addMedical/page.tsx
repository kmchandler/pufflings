"use client";
import { createMedical } from "@/lib/medical";

const AddMedicalForm = ({ params: { childId }}: {params: { childId: string }}) => {

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
    <div className="flex flex-col">
      <div className="text-4xl self-center text-atomic-tangerine [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)] mb-5">
      add medical
     </div>
      <form action={createMedical} className="flex flex-col">
        
        <label className="text-3xl self-center mb-2">type</label>
          <div className="flex flex-row self-center">
              <select name="type" id="medTypes" className="self-center text-xl text-oxford-blue outline outline-1 outline-oxford-blue rounded">
              <option selected disabled>select type</option>
                  {options.map(option => {
                  return <option value={option.value}>{option.label}</option>
                  })}
            </select>
          </div>

        <label className="text-3xl self-center mb-2 mt-5">notes</label>
        <textarea name="notes" className="relative text-oxford-blue outline outline-1 outline-oxford-blue rounded self-center text-xl text-center"/>

        <input name="childId" value={childId} hidden/>
        
        <button type="submit" className="text-oxford-blue py-2 px-4 rounded shadow flex order-3 bg-tea-green transition hover:drop-shadow-xl transition-all transition-duration-100 text-xl mt-7 w-20 self-center"> submit </button>
      </form>
    </div>
  )
}

export default AddMedicalForm
