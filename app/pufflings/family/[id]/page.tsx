import NavBar from "@/app/ui/navigation";
import { getFamily } from "@/lib/family";
import Link from "next/link";

export default async function Family ({ params: { id }}: {params: { id: string}}) {
  
  const familyInfo = await getFamily(parseInt(id));

  const children = familyInfo?.children

  return (
    <div className="flex flex-col mt-36">
      <div className="text-6xl self-center">
        my family
      </div>
      <div className="text-3xl self-center">
        {children?.map(child => {
          return (
            <div>
              <Link href={`/pufflings/family/${id}/child/${child.id}`}>
              {child.name.toLowerCase()}
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  );
};
