"use client";

import { createFeed } from "@/lib/feed";

const AddFeedForm = ({ params: { childId, feedId }}: {params: { childId: string, feedId: string }}) => {

  return (
    <form action={createFeed}>
      <label>amount</label>
      <input name="amount" />

      <input name="childId" value={childId} hidden/>
      <input name="feedId" value={feedId} hidden/>
      
      <button type="submit"> submit </button>
    </form>
  )
}

export default AddFeedForm
