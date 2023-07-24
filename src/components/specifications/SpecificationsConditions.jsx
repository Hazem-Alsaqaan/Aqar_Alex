import { memo, useState } from "react";
import "./SpecificationsConditions.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPeopleRoof, faWarehouse } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import { useDispatch } from "react-redux";
import { setToggleToast } from "../../redux/reducers/toggleSlice";
// import { Link, useParams } from "react-router-dom";


// eslint-disable-next-line react-refresh/only-export-components
const SpecificationsConditions = ({oneUnit})=>{
    // const {unitId} = useParams()
    // const [showDateList, setShowDateList] = useState(false)
    const dispatch = useDispatch()
    const [dateSelected, setDateSelected] = useState(null)
    const [calendarVisible, setCalendarVisible] = useState(false)

    const handleSelectedDate = (date)=>{
        setDateSelected(date)
    }
    const submitCalendar = ()=>{
        if(dateSelected){
            setCalendarVisible(false)
            console.log(dateSelected)
            dispatch(setToggleToast(true))
        }
    }
    return(
        <>
        <div className="static-specifications">
            <div>
                <h1>{`شقة مساحتها ${oneUnit.apartment_area} متر`}</h1>
                <p>{`${oneUnit.price}`}</p>
            </div>

            <div className="calender_container">

                <button onClick={()=>setCalendarVisible(!calendarVisible)} className="main_btn">حجز طلب معاينه</button>
                {calendarVisible ? 
                <DatePicker 
                inline
                selected={dateSelected} 
                onChange={(date)=> handleSelectedDate(date)}
                shouldCloseOnSelect={false}
                calendarClassName="custom_date_piker"
                dayClassName={(date) =>
                    date.getDate() ? "custom_day" : undefined
                }
                >
                    <button 
                    className="main_btn"
                    onClick={()=>submitCalendar()}
                    >حجز</button>
                </DatePicker>
                :""}
            </div>



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
                        <FontAwesomeIcon icon={faWarehouse}/>
                        <span>{`مساحة الشقة ${oneUnit.apartment_area}`}</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faPeopleRoof}/>
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