import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { Stack } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";

const Community: NextPage = () => {
  const device = useDeviceDetect();
    const [title, setTitle] = useState<string>("hello");

    if(device === "mobile") {
      return <Stack>COMMUNITY MOBILE</Stack>
    } else {
    return (
      <div style={{ margin: "20px 0" }}>
      <Stack className={"container"}>COMMUINTY</Stack>
    </div>
    );
  }
  };
  
  export default withLayoutBasic(Community);