import  { memo } from "react";
import "./EnterUnitPrice.css"
import NumberAndText from "../number.and.text/NumberAndText";

// eslint-disable-next-line react-refresh/only-export-components
const EnterUnitPrice = ({enterPrice, setEnterPrice})=>{
    const title = {
        number: "3",
        text: "السعر"
    }
    return(
        <>
            <section className="enter-unit-price single-section">
                <NumberAndText title={title}/>
                <div className="inputs">
                    <input 
                    required
                    type="text"
                    placeholder="حدد السعر المطلوب لليوم الواحد"
                    onChange={(e)=>setEnterPrice(e.target.value)}
                    value={enterPrice}
                    />
                </div>
            </section>
        </>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export default memo(EnterUnitPrice)