import style from "./MainSG.module.css";
import HomeSG from "../Pages/HomeSG/HomeSG";
import AboutSG from "../Pages/AboutSG/AboutSG";
import CertificateSG from "../Pages/CertificateSG/CertificateSG";
const MainSG = () =>{
    return(
        <>
        <div className={style.mainSGContainer}>
        <HomeSG />
        {/* <AboutSG />    */}
        <CertificateSG />
        </div>
        </>
    );
}
export default MainSG;