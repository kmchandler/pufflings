import NavBar from "@/app/ui/navigation";

const Child = ({ params: { childId }}: {params: { childId: string}}) => {
  console.log(childId);
  return (
    <div className="flex flex-col">
        <NavBar />
      <div className="mt-36 self-center">
        CHILD PAGE text here
      </div>
    </div>
  );
};

export default Child;
