import { memo } from "react";
import "./NumberAndText.css"

// eslint-disable-next-line react-refresh/only-export-components
const NumberAndText = ({title})=>{
    return(
        <>
            <section className="number-and-text">
                <h4 className="number">{title.number}</h4>
                <h4 className="text">{title.text}</h4>
            </section>
        </>
    )
}
// eslint-disable-next-line react-refresh/only-export-components
export default memo(NumberAndText)