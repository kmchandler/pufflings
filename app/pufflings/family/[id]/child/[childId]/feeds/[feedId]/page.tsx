import NavBar from "@/app/ui/navigation";

const Feeds = ({ params: { feedId }}: {params: { feedId: string}}) => {
  console.log(feedId);
  return (
    <div className="flex flex-col">
        <NavBar />
      <div className="mt-36 self-center">
        FEEDS PAGE text here
      </div>
    </div>
  );
};

export default Feeds;
