import { memo } from "react";
import "./SpecificationsConditions.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
const SpecificationsConditions = ({oneUnit})=>{
    const {unitId} = useParams()
    return(
        <>
        <div className="static-specifications">
            <div>
                <h1>{`شقة مساحتها ${oneUnit.apartment_area} متر`}</h1>
                <p>{`${oneUnit.price}`}</p>
            </div>
            <Link to= {`/showUnit/${unitId}/payment`} className="btn">حجز طلب معاينه</Link>
        </div>
        <div className="specifications-conditions">
            <section className="specifications">
                <h2 className="title">المواصفات</h2>
                <div className="specifications-data">
                    <div>
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <span>{`${oneUnit.city} - مصر`}</span>
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/dkhu7rt8n/image/upload/v1682941496/sayf/809090_architecture_family_home_house_residential_icon_1_ahokpe.svg" alt=""/>
                        <span>{`مساحة الشقة ${oneUnit.apartment_area}`}</span>
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/dkhu7rt8n/image/upload/v1682941534/sayf/6714576_family_home_house_insurance_investment_icon_1_fe6wn5.svg" alt=""/>
                        <span>مناسب للعائلات والعزاب</span>
                    </div>
                </div>
                <section className="description">
                    <h3>الوصف :</h3>
                    <p>{oneUnit.description}</p>
                </section>
            </section>
        </div>
        </>
    )
}
// eslint-disable-next-line react-refresh/only-export-components
export default memo(SpecificationsConditions)