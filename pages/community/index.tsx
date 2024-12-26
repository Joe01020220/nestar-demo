import { useState } from "react";

const Community = () => {
    const [title, setTitle] = useState<string>("hello");
    return (
      <div>
        Community{" "}
        <button
          onClick={() => {
            alert("hello");
          }}
        >
          PressMe
        </button>
      </div>
    );
  };
  
  export default Community;