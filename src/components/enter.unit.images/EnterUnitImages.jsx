import { memo } from "react";
import "./EnterUnitImages.css"
import NumberAndText from "../number.and.text/NumberAndText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faImage} from "@fortawesome/free-regular-svg-icons"

// eslint-disable-next-line react-refresh/only-export-components
const EnterUnitImages = ({enterImages, setEnterImages})=>{
    const title = {
        number: "5",
        text: "الصور"
    }

    // handle upload contract img
    const handleUploadContract = (e)=>{
        setEnterImages({...enterImages, contractImage: e.target.files[0]})
    }
    
    // handle upload units img
    const handleUploadUnitsImgs = (e)=>{
        setEnterImages({...enterImages, unitImages: e.target.files})
    }

    return(
        <>
            <section className="enter-unit-images-contract single-section">
                <NumberAndText title={title}/>
                <div className="inputs">
                    <section className="unit-images">
                        <h5>1- ادخل 5 صور علي الاقل للمكان</h5>
                        <div className="upload-container">
                            <FontAwesomeIcon icon={faImage}/>
                            <p>تحميل الصور</p>
                            <input
                            required
                            type="file"
                            multiple
                            onChange={(e)=>handleUploadUnitsImgs(e)}
                            />
                        </div>
                    </section>
                    <section className="unit-contract-image">
                        <h5>2- ادخل صورة لعقد الشقه</h5>
                        <div className="upload-container">
                            <FontAwesomeIcon icon={faImage}/>
                            <p>تحميل الصور</p>
                            <input
                            required
                            type="file"
                            onChange={(e)=>handleUploadContract(e)}
                            />
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}
// eslint-disable-next-line react-refresh/only-export-components
export default memo(EnterUnitImages)