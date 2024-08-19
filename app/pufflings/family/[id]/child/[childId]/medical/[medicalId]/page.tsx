import NavBar from "@/app/ui/navigation";

const Medical = ({ params: { medicalId }}: {params: { medicalId: string}}) => {
  console.log(medicalId);
  return (
    <div className="flex flex-col">
        <NavBar />
      <div className="mt-36 self-center">
        MEDICAL PAGE text here
      </div>
    </div>
  );
};

export default Medical;
