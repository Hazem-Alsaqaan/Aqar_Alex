import "./UserNotifications.css"
import { useSelector } from "react-redux";
import { RotatingLines } from "react-loader-spinner"
import SingleNotification from "./SingleNotification";

const UserNotifications = ()=>{
    const {notifications} = useSelector((state)=> state.unitsSlice)
    const {notificationsLoadng} = useSelector((state)=> state.unitsSlice)

    

    return(
        <>
            <section className="notifications">
                {
                    notificationsLoadng ? 
                    <div className="loading">
                        <RotatingLines
                        strokeColor="#FF3D00"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="96"
                        visible={true}
                        /> 
                    </div> 
                    :
                    <div className="notifications-boxes">
                        {notifications.length > 0 ?
                            notifications.map((item)=>
                                <SingleNotification
                                key={item._id}
                                item = {item}
                                startingdate = {item.start_date}
                                endingdate = {item.end_date}
                                />
                                )
                            :
                            <h5>لا يوجد شيء لعرضه...</h5>
                        }
                    </div>
                    }
            </section>
        </>
    )
}
export default UserNotifications