import NavBar from "@/app/ui/navigation";
import { getFamily } from "@/lib/family";

export default async function Family ({ params: { id }}: {params: { id: string}}) {
  
  const familyInfo = await getFamily(parseInt(id));

  const children = familyInfo?.children.map((child: any) => child.name);

  return (
    <div className="flex flex-col">
        <NavBar />
      <div className="mt-36 self-center">
        FAMILY PAGE
        {children}
      </div>
    </div>
  );
};
