import  { memo } from "react";
import NumberAndText from "../number.and.text/NumberAndText";
import "./EnterUnitDetails.css"

// eslint-disable-next-line react-refresh/only-export-components
const EnterUnitDetails = ({enterDetails, setEnterDetails})=>{
    const title = {
        number: "4",
        text: "تفاصيل الشقه"
    }
    return(
        <>
            <section className="enter-unit-details single-section">
                <NumberAndText title={title}/>
                <div className="inputs">
                    <div className="top-side">
                        <input 
                        required
                        type="text"
                        placeholder="عدد الغرف"
                        onChange={(e)=>setEnterDetails({...enterDetails, rooms: e.target.value})}
                        value={enterDetails.rooms}
                        />
                        <input 
                        required
                        type="text"
                        placeholder="عدد السراير"
                        onChange={(e)=>setEnterDetails({...enterDetails, beds: e.target.value})}
                        value={enterDetails.beds}
                        />
                    </div>
                    <div className="bottom-side">
                        <input 
                        required
                        type="text"
                        placeholder="عدد الحمامات"
                        onChange={(e)=>setEnterDetails({...enterDetails, bathrooms: e.target.value})}
                        value={enterDetails.bathrooms}
                        />
                        <input 
                        required
                        type="text"
                        placeholder="مساحه الشقه"
                        onChange={(e)=>setEnterDetails({...enterDetails, apartment_area: e.target.value})}
                        value={enterDetails.apartment_area}
                        />
                        </div>
                </div>
            </section>
        </>
    )
}
// eslint-disable-next-line react-refresh/only-export-components
export default memo(EnterUnitDetails)