import { useState } from "react";
import WhiteHeader from "../../components/white.header/WhiteHeader";
import Footer from "../../components/footer/Footer";
import EnterUnitName from "../../components/enter.unit.name/EnterUnitName";
import "./ShowYourApartment.css"
import EnterUnitAdress from "../../components/enter.unit.adress/EnterUnitAdress";
// import EnterUnitLocation from "../../components/enter.unit.location/EnterUnitLocation";
// import EnterUnitConditions from "../../components/enter.unit.conditions/EnterUnitConditions";
import EnterUnitDetails from "../../components/enter.unit.details/EnterUnitDetails";
import EnterUnitPrice from "../../components/enter.unit.price/EnterUnitPrice";
import EnterAboutUnit from "../../components/enter.about.unit/EnterAboutUnit";
import EnterUnitImages from "../../components/enter.unit.images/EnterUnitImages";
import { useDispatch, useSelector } from "react-redux";
import EnterPersonsChildren from "../../components/enter.persons.children/EnterPersonsChildren";
import { addNewUnit } from "../../redux/actions/unitsActions";
import {ToastContainer } from "react-toastify"
import { RotatingLines } from "react-loader-spinner";
import { Helmet } from "react-helmet-async";


const ShowYourApartment = ()=>{
    const dispatch = useDispatch()
    const {token} = useSelector((state)=>state.authSlice)
    const {searchUnitsLoading} = useSelector((state)=>state.unitsSlice)
    const [enterName, setEnterName] = useState("")
    const [enterAdress, setEnterAdress] = useState({
        city: "",
        street: "",
        houseNum: "",
        zibCode: ""
    })
    // const [enterLocation, setEnterLocation] = useState({
    //     lat: "",
    //     long: ""
    // })
    const [enterDetails, setEnterDetails] = useState({
        rooms: "",
        beds: "",
        bathrooms : "",
        apartment_area: ""
    })
    // const [enterConditions, setEnterConditions] = useState("")
    const [enterAboutUnit, setEnterAboutUnit] = useState("")
    const [enterPrice, setEnterPrice] = useState("")
    const [enterPersons, setEnterPersons] = useState({
        personNum: "",
        childrenNum: ""
    })
    const [enterImages, setEnterImages] = useState({
        unitImages: [],
        contractImage: null
    })

    const unitInfo = {
        images: enterImages.unitImages,
        contractImage: enterImages.contractImage,
        name: enterName,
        city: enterAdress.city,
        street: enterAdress.street,
        house_num: enterAdress.houseNum,
        code: enterAdress.zibCode,
        // conditions: enterConditions,
        rooms: Number(enterDetails.rooms),
        persons: Number(enterPersons.personNum),
        children: Number(enterPersons.childrenNum),
        beds: enterDetails.beds,
        bathrooms: enterDetails.bathrooms,
        apartment_area: enterDetails.apartment_area,
        description: enterAboutUnit,
        price: Number(enterPrice),
        about: enterAboutUnit,
        // lat: Number(enterLocation.lat),
        // long: Number(enterLocation.long),
        token: token
    }
    
//handle submit unit data and information function 
    const handleSubmitUnitData = (e)=>{
        e.preventDefault()
        // // dispatch add new units
        dispatch(addNewUnit(unitInfo))
        // rest all inputs values
        setEnterName("")
        setEnterAdress({...enterAdress, 
            city: "",
            street: "",
            houseNum: "",
            zibCode: ""
        })
        setEnterDetails({...enterDetails,
            rooms: "",
            beds: "",
            bathrooms : "",
            apartment_area: ""
        })
        // setEnterConditions("")
        setEnterAboutUnit("")
        setEnterPrice("")
        setEnterPersons({
            personNum: "",
            childrenNum: ""
        })
    }
    return(
        <>
        <Helmet>
            <title>Egypt House | إعرض وحدتك </title>
            <meta name="keywords" content=" للعقارات Egypt House - بيع وشراء وايجار وتمويل عقاري العقارات شقق فلل شاليهات في مصر"/>
            <meta name="description" content=" Egypt House منصة تداول العقارات في مصر، بيع وشراء وايجار وتمويل عقاري العقارات، شقق، فلل، محلات، شاليهات، مكاتب، اراضي، بيوت ومنازل."/>
        </Helmet>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"/>
        <section className="show-your-apartment single-section">
            <WhiteHeader/>
            <div className="container">
                <h1 className="main-title">اعرض شقتك عندنا</h1>
                <section className="enter-unit-information">
                    <form onSubmit={(e)=>handleSubmitUnitData(e)}>
                        <EnterUnitName enterName={enterName} setEnterName={setEnterName}/>
                        <EnterUnitAdress enterAdress={enterAdress} setEnterAdress={setEnterAdress}/>
                        {/* <EnterUnitLocation enterLocation={enterLocation} setEnterLocation={setEnterLocation}/> */}
                        <EnterUnitPrice enterPrice ={enterPrice} setEnterPrice ={setEnterPrice}/>
                        <EnterUnitDetails enterDetails ={enterDetails} setEnterDetails ={setEnterDetails}/>
                        {/* <EnterUnitConditions enterConditions={enterConditions} setEnterConditions={setEnterConditions}/> */}
                        <EnterUnitImages enterImages ={enterImages} setEnterImages ={setEnterImages}/>
                        <EnterAboutUnit enterAboutUnit={enterAboutUnit} setEnterAboutUnit={setEnterAboutUnit}/>
                        <EnterPersonsChildren enterPersons ={enterPersons} setEnterPersons ={setEnterPersons}/>
                        <div className="btn-purple">
                            <button 
                            className="btn"
                            >{searchUnitsLoading ? 
                                <div className="loading">
                                    <RotatingLines
                                    strokeColor="#fff"
                                    strokeWidth="5"
                                    animationDuration="0.75"
                                    width="30"
                                    visible={true}
                                    /> 
                                </div>
                            : "اعرض شقتك"}
                            </button>
                    </div>
                    </form>
                </section>
            </div>
            <Footer/>
        </section>
        </>
    )
}
export default ShowYourApartment


