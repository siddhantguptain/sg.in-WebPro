import style from "./HomeSG.module.css";

const HomeSG = ()=> {
    return (
        <>
         <div className={style.homeContainer}>
            <div className={style.homeHead}>
             <div className={style.homeHeadCoded}> {`const `}  </div>
             <div className={style.homeHeadTitle}> Home </div>
             <div className={style.homeHeadCoded}> {`= ( ) => {`} </div>
               
             </div>


            {/* <h1 className={style.homeHeadNameContainer}>
             <div className={style.codeText}> {`<h1 classname=`} </div> {` {Hello I am}`}       
                   Siddhant Gupta
             {`</h1>`}


            </h1>
            <h3 className={style.homeHeadTitle}>
               
                Full Stack Mern Developer 
            </h3> */}
         </div>
        </>
    );
}
export default HomeSG; 