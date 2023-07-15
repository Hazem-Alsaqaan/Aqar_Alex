import "./HomePage.css"

const HomePage = () => {
    return (
        <>
            <section className="home_page">
                <div className="container">
                    <div className="choosing_boxes">
                        <div className="box">
                            <img src="https://res.cloudinary.com/dkhu7rt8n/image/upload/v1689416522/AqarAlex/cartoon-sweet-home-sale-cute-new-design-126961117-removebg-preview_1_tb9maw.jpg" alt=""/>
                            <h3>بيع</h3>
                        </div>
                        <div className="box">
                            <img src="https://res.cloudinary.com/dkhu7rt8n/image/upload/v1689416606/AqarAlex/istockphoto-925138596-612x612-removebg-preview_1_ggwrlc.jpg" alt=""/>
                            <h3>شراء</h3>
                        </div>
                        <div className="box">
                            <img src="https://res.cloudinary.com/dkhu7rt8n/image/upload/v1689416634/AqarAlex/mortgage-concept-house-loan-money-investment-to-real-estate-man-buying-home-shaking-hands-agent-modern-illustration-190696067-removebg-preview_1_ufzfvz.jpg" alt=""/>
                            <h3>تمويل عقاري</h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default HomePage;
