import { FileVideo2 } from "lucide-react";

import SecondaryBtn from "../components/secondaryBtn";
import { useNavigate } from "react-router-dom";
const Video = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen p-18 flex flex-col justify-center items-center">
      <div className=" flex justify-center items-center gap-3 text-xl text-gray-400">
        <FileVideo2 className="w-17" />
        <p>Hmm! seems like admin have not reloease any course videos</p>
      </div>
      <div className="mt-4">
        <SecondaryBtn
          label={"Back to Dashboard"}
          width="w-76"
          onCLick={() => navigate("/dashboard")}
        />
      </div>
    </div>
  );
};

export default Video;
