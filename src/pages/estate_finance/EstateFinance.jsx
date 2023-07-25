import  { memo } from "react";
import Footer from "../../components/footer/Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet-async";
import Header from "../../components/header/Header";
import SearchData from "../../components/search.data/SearchData";

// eslint-disable-next-line react-refresh/only-export-components
const EstateFinance = ({pageNumber, setPageNumber, pageRoute})=>{
    return(
        <>
        <Helmet>
            <title>الصفحة الرئيسية | تمويل عقاري</title>
            <meta name="keywords" content="عقار الاسكندرية للعقارات aqar alex - بيع وشراء العقارات شقق فلل شاليهات في مصر"/>
            <meta name="description" content="عقار الاسكندرية aqar alex منصة تداول العقارات في مصر، بيع وشراء العقارات، شقق، فلل، محلات، شاليهات، مكاتب، اراضي، بيوت ومنازل."/>
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
                theme="light"
                />
            <div className="home">
                <section className="home-page-landing">
                    <Header/>
                    <div className="container landing-content">
                        <SearchData pageNumber = {pageNumber} setPageNumber = {setPageNumber} pageRoute = {pageRoute}/>
                    </div>
                </section>
                <Outlet/>
                <Footer/>
            </div>
        </>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export default memo(EstateFinance)
