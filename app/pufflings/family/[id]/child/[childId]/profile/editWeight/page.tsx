"use client";

import { createWeight } from "@/lib/weight";

const EditWeightForm = ({ params: { childId }}: {params: { childId: string }}) => {

  return (
    <form action={createWeight} className="flex">
      <div>
        <label className="text-3xl flex justify-self-center mb-3">height</label>
        <div className="flex flex-row mt-4">
          <div className="flex flex-row">
            <input name="pounds" className="relative text-oxford-blue outline outline-1 outline-oxford-blue rounded self-center w-8 text-xl text-center mr-2" />
            <div className="text-xl mr-3 mt-1">
              pounds
            </div>
          </div>
          <div className="flex flex-row">
            <input name="ounces" className="relative text-oxford-blue outline outline-1 outline-oxford-blue rounded self-center w-8 text-xl text-center mr-2" />
            <div className="text-xl mt-1">
              ounces
            </div>
          </div>
          <input name="childId" value={childId} hidden/>
        </div>
        <button type="submit" className="text-oxford-blue py-2 px-4 rounded shadow flex order-3 bg-tea-green transition hover:drop-shadow-xl transition-all transition-duration-100 text-xl ml-4 flex justify-self-center mt-4"> update weight </button>
      </div>
    </form>
  )
}

export default EditWeightForm
