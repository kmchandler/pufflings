import NavBar from "@/app/ui/navigation";

const Family = ({ params: { id }}: {params: { id: string}}) => {
  console.log(id);
  return (
    <div className="flex flex-col">
        <NavBar />
      <div className="mt-36 self-center">
        FAMILY PAGE text here
      </div>
    </div>
  );
};

export default Family;
