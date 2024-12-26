import { Stack } from "@mui/material";
import Head from "next/head";

const withLayoutBasic = (Component: any) => {
  return (props: any) => {
    return (
      <>
        <Head>
          <title>Nestar</title>
        </Head>
        <Stack id="pc-wrap">
          <Stack sx={{ background: "#ffb74d" }}>Header Basic</Stack>

          <Stack id={"main"}>
            <Component {...props} />
          </Stack>

          <Stack sx={{ background: "#81c784" }}>Footer</Stack>
        </Stack>
      </>
    );
  };
};

export default withLayoutBasic;