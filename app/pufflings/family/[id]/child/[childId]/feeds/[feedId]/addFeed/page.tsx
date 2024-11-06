"use client";

import { createFeed } from "@/lib/feed";

const AddFeedForm = ({ params: { childId, feedId }}: {params: { childId: string, feedId: string }}) => {

  return (
    <form action={createFeed} className="flex flex-col">
        <label className="text-3xl self-center mb-2">amount</label>
        <div className="flex flex-row">
           <input name="amount" className="relative text-oxford-blue outline outline-1 outline-oxford-blue rounded self-center w-12 text-xl text-center mr-2" />
           <div className="text-xl">
            oz
           </div>
        </div>

      <input name="childId" value={childId} hidden/>
      <input name="feedId" value={feedId} hidden/>
      
      <button type="submit" className="text-oxford-blue py-2 px-4 rounded shadow flex order-3 bg-tea-green transition hover:drop-shadow-xl transition-all transition-duration-100 text-xl mt-7"> submit </button>
    </form>
  )
}

export default AddFeedForm
