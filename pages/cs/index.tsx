import { Stack } from "@mui/material";
import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { NextPage } from "next";

const CS: NextPage = () => {
  return (
    <>
      <div style={{ margin: "20px 0" }}>
        <Stack className={"container"}>CS LIST</Stack>
      </div>
    </>
  );
};

export default withLayoutBasic(CS);