import { memo } from "react";
import "./EnterUnitName.css"
import NumberAndText from "../number.and.text/NumberAndText";

// eslint-disable-next-line react-refresh/only-export-components
const EnterUnitName = ({enterName, setEnterName})=>{
    const title = {
        number: "1",
        text: "الاسم"
    }

    return(
        <>
            <section className="enter-unit-name single-section">
                <NumberAndText title = {title}/>
                <div>
                    <input 
                    required
                    type="text"
                    placeholder="ادخل اسم مكان الشقة الخاصه بك"
                    onChange={(e)=>setEnterName(e.target.value)}
                    value={enterName}
                    />
                </div>
            </section>
        </>
    )
}
// eslint-disable-next-line react-refresh/only-export-components
export default memo(EnterUnitName)