'use client';
import { createDiaper } from "@/lib/diaper"
import { useState } from 'react';

const AddDiaperForm = ({ params: { childId }}: {params: { childId: string }}) => {
  const [hasPee, setHasPee] = useState(false);
  const [hasPoop, setHasPoop] = useState(false);

  return (
    <form action={createDiaper}>
      add diaper

      <label>type</label>  

      <label>pee</label>
        <input type="checkbox"
               name="pee"
               value="pee"
               checked={hasPee}
               onChange={() => setHasPee(!hasPee)}
        />

      <label>poop</label>
        <input type="checkbox"
               name="poop"
               value="poop"
               checked={hasPoop}
               onChange={() => setHasPoop(!hasPoop)}
        />

      <input name="childId" value={childId} hidden/>

      <button type="submit"> submit </button>
    </form>
  )
}

export default AddDiaperForm
