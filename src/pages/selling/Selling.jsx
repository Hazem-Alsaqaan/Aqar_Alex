import  { memo } from "react";
import "./Selling.css"
import Footer from "../../components/footer/Footer";
import { Outlet } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet-async";
import Header from "../../components/header/Header";
import SearchData from "../../components/search.data/SearchData";


// eslint-disable-next-line react-refresh/only-export-components
const Selling =({pageNumber, setPageNumber})=>{
    return(
        <>
        <Helmet>
            <title>الصفحة الرئيسية | بيع</title>
            <meta name="description" content=" شقة للإيجار. توافر جيد وأسعار رائعة لإيجار الشقق. احجز الشقة المناسبة ،اعرض شقتك للايجار ، حدد موقعك ، احجز اونلاين واختر أفضل العروض لإقامتك."/>
            <meta name="keywords" content="سكن، إقامة, فندق, الفنادق, عروض خاصة، شقق مصيفية ،أسعار مغرية، عطل نهاية الأسبوع، قضاء العطل في المدينة، صفقات, اقتصادي، رخيص، حسم، توفير"/>
        </Helmet>
        {/* <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                /> */}
            <div className="home">
                <section className="home-page-landing">
                    <Header/>
                    <div className="container landing-content">
                        <SearchData pageNumber = {pageNumber} setPageNumber = {setPageNumber}/>
                    </div>
                </section>
                <Outlet/>
                <Footer/>
            </div>
        </>
    )
}
// eslint-disable-next-line react-refresh/only-export-components
export default memo(Selling)
