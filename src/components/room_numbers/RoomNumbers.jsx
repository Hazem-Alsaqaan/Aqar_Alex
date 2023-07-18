import { useState } from "react";
import { faChevronDown, faMinus, faPlus, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./RoomNumbers.css"
import { useDispatch, useSelector } from "react-redux";
import { setRoomsInSearch } from "../../redux/reducers/searchDataSlice";

const RoomNumbers = ()=>{
    const [selectToggle, setSelectToggle] = useState(false)

    const dispatch = useDispatch()
    const {roomsInSearch} = useSelector((state)=>state.searchDataSlice)
    return(
        <>
        <section className="selection-component">
            <div className="selection">
                <div className="selection-title">
                    <FontAwesomeIcon icon={faUser}/>
                    <span>{` ${roomsInSearch} غرفة  `}</span>
                </div>
                <FontAwesomeIcon icon={faChevronDown}
                onClick={()=>setSelectToggle(!selectToggle)}
                />
            </div>
            {
                selectToggle ?
                <div className="select-person-room">
                <section className="room">
                    <p>غرفة</p>
                    <div className="select-number">
                        <FontAwesomeIcon 
                            icon={faPlus}
                            onClick={()=>dispatch(setRoomsInSearch(roomsInSearch + 1))}
                            />
                        <span>{roomsInSearch}</span>
                        <FontAwesomeIcon 
                            icon={faMinus}
                            onClick={()=>dispatch(setRoomsInSearch(roomsInSearch > 0 ? roomsInSearch - 1 : roomsInSearch))}
                            />
                    </div>
                </section>
            </div>
            : ""}
        </section>
        </>
    )
}

export default RoomNumbers


