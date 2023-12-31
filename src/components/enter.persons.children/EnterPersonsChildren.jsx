import { memo } from "react";
import NumberAndText from "../number.and.text/NumberAndText";

// eslint-disable-next-line react-refresh/only-export-components
const EnterPersonsChildren = ({enterPersons, setEnterPersons})=>{
    const title = {
        number: "7",
        text: "عدد الاشخاص والاطفال"
    }

    return(
        <>
            <section className="single-section">
                <NumberAndText title = {title}/>
                <div>
                    <input 
                    required
                    type="text"
                    className="mx-1"
                    placeholder="ادخل عدد الاشخاص"
                    onChange={(e)=>setEnterPersons({...enterPersons, personNum: e.target.value})}
                    value={enterPersons.personNum}
                    />
                    <input 
                    required
                    type="text"
                    className="mx-1"
                    placeholder="ادخل عدد الاطفال"
                    onChange={(e)=>setEnterPersons({...enterPersons, childrenNum: e.target.value})}
                    value={enterPersons.childrenNum}
                    />
                </div>
            </section>
        </>
    )
}
// eslint-disable-next-line react-refresh/only-export-components
export default memo(EnterPersonsChildren)