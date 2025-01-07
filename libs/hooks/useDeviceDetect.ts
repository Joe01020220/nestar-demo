import { useEffect, useState } from "react";

const useDeviceDetect = (): string => {
    const [device, setDevice] = useState<string>("desktop");

    useEffect(() => {
        const userAgent = navigator.userAgent;
        const isMobile =
        /Android|webOs|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            userAgent
        );
        setDevice(isMobile ? "mobile" : "desktop");
    }, [device]);
    return device;
};

export default useDeviceDetect;