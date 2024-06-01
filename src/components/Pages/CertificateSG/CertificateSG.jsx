"use client"
import { useState } from "react";
import style from "./CertificateSG.module.css";

import CertificateCard from './CertificateCard/CertificateCard';
import CertificateModel from "./CertificateModel/CertificateModel";
const CertificateSG = () =>{
    const CertificateDATA = [
        {
            src:"MERN.jpg",
            title:"MERN Stack Development",
            subTitle:"2022",
            color:"#ddd"
        },
        {
            src:"REACTJS.jpg",
            title:"React Framework",
            subTitle:"2021",
            color:"#ddd"
        },
        {
            src:"JS.jpg",
            title:"JavaScript",
            subTitle:"2021",
            color:"#ddd"
        },
        {
            src:"WEBDEV.jpg",
            title:"Web Development BootCamp",
            subTitle:"2020",
            color:"#ddd"
        },
    ];
    const [model , setModel] = useState({active:false, index:0});
    return(
        <>
        <div className={style.certificateSGContainer}>
            <div className={style.main}>
                <div className={style.certificateCards}>
                    {
                        CertificateDATA.map((cer, index) =>{
                            return <CertificateCard key={index} index={index} title={cer.title} subTitle={cer.subTitle} setModel={setModel} />
                        })
                    }
                </div>
                <CertificateModel model={model} CertificateDATA={CertificateDATA} />
            </div>
          
            </div>
        </>
    );
}
export default CertificateSG;