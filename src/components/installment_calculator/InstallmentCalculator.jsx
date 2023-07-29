import "./InstallmentCalculator.css"
const InstallmentCalculator = ()=>{
    return(
        <>
        <section className="installment_calculator">
            <h2>حاسبة الأقساط :-</h2>
            <form>
                <label>قيمه العقار</label>
                <input
                type="text"
                />
                <label>المقدم</label>
                <input
                type="text"
                />
                <label>معدل الفائده</label>
                <input
                type="text"
                />
                <label>سنوات التقسيط</label>
                <input
                type="text"
                />
                <div>
                    <button type="submit" className="main_btn"
                    >احسب الان</button>
                </div>
            </form>
        </section>
        </>
    )
}
export default InstallmentCalculator