import NavBar from "@/app/ui/navigation";

const Diapers = ({ params: { diaperId }}: {params: { diaperId: string}}) => {
  console.log(diaperId);
  return (
    <div className="flex flex-col">
        <NavBar />
      <div className="mt-36 self-center">
        DIAPERS PAGE text here
      </div>
    </div>
  );
};

export default Diapers;
