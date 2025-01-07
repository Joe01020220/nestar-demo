import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { Container, Stack } from "@mui/material";

const PropertyDetail = () => {
  const device = useDeviceDetect();

  if(device === "mobile") {
    return <Stack>PROEPRTY DETAIL MOBILE</Stack>
  } else {
    return (
       <Container>PROEPRTY DETAIL</Container>
    )
  } 
    
  };
  
  export default withLayoutBasic(PropertyDetail);