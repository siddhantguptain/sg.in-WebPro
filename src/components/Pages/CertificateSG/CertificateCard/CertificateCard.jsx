import style from './CertificateCard.module.css';

const CertificateCard = ({index , title , subTitle, setModel})=>{
    return(
        <>
         <div className={style.container}
                // onMouseEnter
                    onMouseEnter={() =>{setModel({active:true, index:index})}}
                // onMOuseLeave
                        onMouseLeave={() =>{setModel({active:false, index:index})}}   
            >
                {/* <h2 className={style.title}>{title}</h2>
                <p className={style.subTitle}>{subTitle}</p> */}

                <div className={style.certificateCardSubContainer}>
                    <div className={style.certificateCardSubContainerCODE}>{`<img src="`} </div>
                    <div className={style.certificateCardSubContainerTitle}>{title} </div>
                    <div className={style.certificateCardSubContainerCODE}>{`".jpg alt="Year :`} </div>
                    <div className={style.certificateCardSubContainerSubTitle}>{subTitle} </div>
                    <div className={style.certificateCardSubContainerCODE}>{`" />`} </div>
                </div>
            </div>
        </>
    );
}
export default CertificateCard;