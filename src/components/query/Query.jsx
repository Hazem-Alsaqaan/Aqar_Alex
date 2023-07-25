import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./Query.css"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons"


const Query = ()=>{
    return(
        <>
            <section className="query">
                <h2>للاستفسار</h2>
                <div className="query_details">
                    <span>01234567890</span>
                    <FontAwesomeIcon icon={faPhone}/>
                </div>
                <div className="query_details">
                    <span>Send Message</span>
                    <FontAwesomeIcon icon={faFacebookMessenger}/>
                </div>
            </section>
        </>
    )
}

export default Query