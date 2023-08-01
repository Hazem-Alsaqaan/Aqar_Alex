import { memo, useState } from "react";
import "./SpecificationsConditions.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPeopleRoof, faWarehouse } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";
import { setReserveRentSuccess, setReserveSellingSuccess, setShowCalculator } from "../../redux/reducers/toggleSlice";
import { useLocation } from "react-router-dom";
import Query from "../query/Query";
import InstallmentCalculator from "../installment_calculator/InstallmentCalculator";
import ApplicationFinance from "../application_finance/ApplicationFinance";


// eslint-disable-next-line react-refresh/only-export-components
const SpecificationsConditions = ({oneUnit})=>{
    const location  = useLocation()
    const dispatch = useDispatch()
    const [dateSelected, setDateSelected] = useState(null)
    const [calendarVisible, setCalendarVisible] = useState(false)
    const {showCalculator} = useSelector((state)=>state.toggleSlice)
    const {showApplicationFinance} = useSelector((state)=>state.toggleSlice)
    const handleSelectedDate = (date)=>{
        setDateSelected(date)
    }
    const submitCalendar = ()=>{
        if(dateSelected){
            setCalendarVisible(false)
            dispatch(setReserveSellingSuccess(true))
        }
    }
    const handleReserveRent = ()=>{
        dispatch(setReserveRentSuccess(true))
    }
    return(
        <>
        <div className="static-specifications">
            <div>
                <h1>{`شقة مساحتها ${oneUnit.apartment_area} متر`}</h1>
                <p>{`${oneUnit.price}`}</p>

{/* ///////////////////////////////////////////////////////////////////////////////////////// */}
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
                        {showCalculator === false && showApplicationFinance === false ?
                        <section className="description">
                            <h3>الوصف :</h3>
                            <p>{oneUnit.description}</p>
                        </section>:""}
                    </section>
                </div>
{/* ///////////////////////////////////////////////////////////////////////////////////////// */}

            </div>
            {location.pathname === `/selling/showUnit/${oneUnit._id}` ? 
            <div>
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
            <Query/>
            </div> 
            : location.pathname === `/rent/showUnit/${oneUnit._id}` ? 
            <button
            onClick={()=>handleReserveRent()}
            className="main_btn"
            >احجز الأن</button>
            : location.pathname === `/estate_finance/showUnit/${oneUnit._id}` ? 
            <div className="install_calculator_container">
                {showApplicationFinance ? <ApplicationFinance/> 
                :<button onClick={()=>dispatch(setShowCalculator(!showCalculator))} className="main_btn">حاسبه الأقساط</button>
                }
                {showCalculator ? <InstallmentCalculator/> :""}
            </div>
            :""}
            
        </div>
        </>
    )
}
// eslint-disable-next-line react-refresh/only-export-components
export default memo(SpecificationsConditions)