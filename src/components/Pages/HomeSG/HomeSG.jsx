import style from "./HomeSG.module.css";

const HomeSG = ()=> {
    return (
        <>
         <div className={style.homeContainer}>
         
             <div className={style.homeBody}>
                
                         <div className={style.homeBody}>
                                 <div className={style.homeHeadCoded}> {`<h1 classname = {`} <div className={style.homeHeadCodedClass}>Hi-I-am,</div>  {`}> `}  </div>
                                 <div className={style.homeBodyTitle}> Siddhant Gupta </div>
                                 <div className={style.homeHeadCoded}> {`</h1>`} </div>
                                 <br/>
                                 <br/>
                                 <div className={style.homeHeadCoded}> {`<h3> `}  </div>
                                 <div className={style.homeBodyDesignation}> MERN Stack Developer</div>
                                 <div className={style.homeHeadCoded}> {`</h3>`} </div>
                                 <br/>
                                <div className={style.homeBodyBtn}>
                                 <div className={style.homeHeadCoded}> {`<button >`} </div>
                                 <div className={style.homeBodyBtn}> <button>Resume</button></div>
                                 <div className={style.homeHeadCoded}> {`</button>`} </div>
                                </div>  
                         </div>
            </div>
         </div>
        </>
    );
}
export default HomeSG; 