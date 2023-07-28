import { memo } from "react";
import NumberAndText from "../number.and.text/NumberAndText";
import "./EnterAboutUnit.css"

// eslint-disable-next-line react-refresh/only-export-components
const EnterAboutUnit = ({enterAboutUnit, setEnterAboutUnit})=>{
    const title = {
        number: "6",
        text: "عن الشقة"
    }
    return(
        <>
            <section className="enter-about-unit single-section">
                <NumberAndText title={title}/>
                <div className="inputs">
                    <textarea
                    required
                    placeholder="تفاصيل عن الشقة والمكان"
                    onChange={(e)=>setEnterAboutUnit(e.target.value)}
                    value={enterAboutUnit}
                    ></textarea>
                </div>
            </section>
        </>
    )
}
// eslint-disable-next-line react-refresh/only-export-components
export default memo(EnterAboutUnit)