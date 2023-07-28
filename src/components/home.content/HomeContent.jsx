import MostBookedApartments from "../most.booked.apartments/MostBookedApartments";
import LatestApartments from "../latest.apartments/LatestApartments";
import { memo } from "react";

// eslint-disable-next-line react-refresh/only-export-components
const HomeContent = ({homeContentTitle})=>{
    return(
        <>
            <MostBookedApartments homeContentTitle = {homeContentTitle}/>
            <LatestApartments/>
        </>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export default memo(HomeContent)