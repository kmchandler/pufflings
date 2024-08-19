import NavBar from "@/app/ui/navigation";

const Sleeps = ({ params: { sleepId }}: {params: { sleepId: string}}) => {
  console.log(sleepId);
  return (
    <div className="flex flex-col">
        <NavBar />
      <div className="mt-36 self-center">
        SLEEPS PAGE text here
      </div>
    </div>
  );
};

export default Sleeps;
