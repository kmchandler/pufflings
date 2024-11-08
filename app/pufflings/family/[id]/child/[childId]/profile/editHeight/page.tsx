"use client";

import { createHeight } from "@/lib/height";

const EditHeightForm = ({ params: { childId }}: {params: { childId: string }}) => {

  return (
    <form action={createHeight} className="flex">
      <div>
        <label className="text-3xl flex justify-self-center mb-3">height</label>
        <div className="flex flex-row mt-4">
          <div className="flex flex-row">
            <input name="feet" className="relative text-oxford-blue outline outline-1 outline-oxford-blue rounded self-center w-8 text-xl text-center mr-2" />
            <div className="text-xl mr-3 mt-1">
              feet
            </div>
          </div>
          <div className="flex flex-row">
            <input name="inches" className="relative text-oxford-blue outline outline-1 outline-oxford-blue rounded self-center w-8 text-xl text-center mr-2" />
            <div className="text-xl mt-1">
              inches
            </div>
          </div>
          <input name="childId" value={childId} hidden/>
        </div>
        <button type="submit" className="text-oxford-blue py-2 px-4 rounded shadow flex order-3 bg-tea-green transition hover:drop-shadow-xl transition-all transition-duration-100 text-xl ml-4 flex justify-self-center mt-4"> update height </button>
      </div>
    </form>
  )
}

export default EditHeightForm
