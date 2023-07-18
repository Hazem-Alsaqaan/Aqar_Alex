import { memo } from "react";
import "./SearchData.css"
import Search from "../search/Search";
import SelectPrice from "../select.price/SelectPrice";
import { useNavigate } from "react-router-dom";
import { getAllUnits } from "../../redux/actions/unitsActions";
import { useDispatch, useSelector } from "react-redux";
import { setChildInSearch, setCityInSearch, setMaxRang, setMinRang, setPersonsInSearch, setRoomsInSearch } from "../../redux/reducers/searchDataSlice";
import RoomNumbers from "../room_numbers/RoomNumbers";

const SearchData = ({pageNumber, setPageNumber})=>{

    const {cityInSearch} = useSelector((state)=>state.searchDataSlice)
    const {personsInSearch} = useSelector((state)=>state.searchDataSlice)
    const {childInSearch} = useSelector((state)=>state.searchDataSlice)
    const {roomsInSearch} = useSelector((state)=>state.searchDataSlice)
    const {minRang} = useSelector((state)=>state.searchDataSlice)
    const {maxRang} = useSelector((state)=>state.searchDataSlice)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {token} = useSelector((state)=>state.authSlice)

    const handleSearch = (e)=>{
        e.preventDefault()
        navigate("/search")
        dispatch(getAllUnits({
            token: token,
            city: cityInSearch,
            persons: personsInSearch,
            rooms: roomsInSearch,
            children: childInSearch,
            minimum_price: minRang,
            highest_price: maxRang,
            page: pageNumber
        }))
        dispatch(setCityInSearch(""))
        dispatch(setPersonsInSearch(0))
        dispatch(setChildInSearch(0))
        dispatch(setRoomsInSearch(0))
        dispatch(setMinRang(0))
        dispatch(setMaxRang(0))
        setPageNumber(1)
    }
    return(
        <>
            <section className="search-data">
                <div className="container">
                    <form onSubmit={(e)=>handleSearch(e)}>
                        <div className="top-part">
                            <Search/>
                            <RoomNumbers/>
                        </div>
                        <div className="bottom-part">
                            
                            <SelectPrice/>
                            <button 
                            type="submit"
                            className="main_btn"
                            >ابحث</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}
export default memo(SearchData)