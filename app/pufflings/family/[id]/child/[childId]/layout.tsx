import { getChild } from "@/lib/child";
import ChildNavigation from "./childNavigation";

export default async function ChildLayout({
    children,
    params: { childId, id }
  }: {
    
    children: React.ReactNode;
    params: { childId: string, id: string }  }) {

    console.log(childId)

    const childInfo = await getChild(parseInt(childId))

    return (
        <div className="px-5 sm:px-20">
          <ChildNavigation childId={childId} familyId={id} childInfo={childInfo} />
          {children}
        </div>
    )
}