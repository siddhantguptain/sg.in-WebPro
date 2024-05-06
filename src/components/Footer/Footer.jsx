import style from "./Footer.module.css";

const Footer = () =>{
    return(
        <>
            <div className={style.footerContainer}>
                <div className={style.footerContainerCodeNIL}>{`</>`}</div>
                <div className={style.footerContainerCodeNIL}>{`);`}</div>
                <div className={style.footerContainerCodeNIL}>{`}`}</div>
            </div>
        </>
    );
}
export default Footer;