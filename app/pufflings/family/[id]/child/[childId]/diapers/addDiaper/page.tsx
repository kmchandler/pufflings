'use client';
import SubmitButton from "@/app/ui/submitButton";
import { createDiaper } from "@/lib/diaper"
import { useState } from 'react';

const AddDiaperForm = ({ params: { childId }}: {params: { childId: string }}) => {
  const [hasPee, setHasPee] = useState(false);
  const [hasPoop, setHasPoop] = useState(false);

  return (
    <form action={createDiaper} className="flex flex-col order-1">
      <div className="text-6xl self-center text-atomic-tangerine [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)]">add diaper
      </div>
      <div className="flex flex-col self-center">
        <label className="text-3xl mb-2">type</label>  

        <div className="flex flex-row text-2xl">
           <label className="mr-6">pee</label>
           <input type="checkbox"
               name="pee"
               value="pee"
               checked={hasPee}
               onChange={() => setHasPee(!hasPee)}
        />
        </div>

        <div className="flex flex-row text-2xl">
          <label className="mr-3">poop</label>
          <input type="checkbox"
               name="poop"
               value="poop"
               checked={hasPoop}
               onChange={() => setHasPoop(!hasPoop)}
        />
        </div>


        <input name="childId" value={childId} hidden/>
        <SubmitButton message="submit" />
      </div>
     
    </form>
  )
}

export default AddDiaperForm
