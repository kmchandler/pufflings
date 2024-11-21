"use client";

import SubmitButton from "@/app/ui/submitButton";
import { createFeed } from "@/lib/feed";

const AddFeedForm = ({ params: { childId, feedId }}: {params: { childId: string, feedId: string }}) => {

  return (
    <form action={createFeed} className="flex flex-col items-center">
        <label className="text-3xl self-center mb-2">amount</label>
        <div className="flex flex-row">
           <input name="amount" className="relative text-oxford-blue outline outline-1 outline-oxford-blue rounded self-center w-12 text-xl text-center mr-2" />
           <div className="text-xl">
            oz
           </div>
        </div>

      <input name="childId" value={childId} hidden/>
      <input name="feedId" value={feedId} hidden/>
      <SubmitButton message="submit" />
    </form>
  )
}

export default AddFeedForm
