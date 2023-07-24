import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./Query.css"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { faMedapps } from "@fortawesome/free-brands-svg-icons"


const Query = ()=>{
    return(
        <>
            <section className="query">
                <h2>للاستفسار</h2>
                <div>
                    <FontAwesomeIcon icon={faPhone}/>
                    <span>01234567890</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={faMedapps}/>
                    <span>message</span>
                </div>
            </section>
        </>
    )
}

export default Query