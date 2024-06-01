import style from "./AboutSG.module.css";

const AboutSG = ()=> {
    return (
        <>
         <div className={style.homeContainer}>
            <div className={style.homeHead}>
             <div className={style.homeHeadCoded}> {`const `}  </div>
             <div className={style.homeHeadTitle}> Sg.in </div>
             <div className={style.homeHeadCoded}> {`= ( ) => {`} </div>
             </div>
             <div className={style.homeBody}>
               <div className={style.homeHeadCodedNL}> {`return (`} </div>  
                 <div className={style.homeHeadCodedNL}> {`<>`} </div>  
                         <div className={style.homeBody}>
                                 <div className={style.homeHeadCoded}> {`<h1 classname = {`} <div className={style.homeHeadCodedClass}>Hi_I_am</div>  {`}> `}  </div>
                                 <div className={style.homeBodyTitle}> Siddhant Gupta </div>
                                 <div className={style.homeHeadCoded}> {`</h1>`} </div>
                                 <br/>
                                 <br/>
                                 <div className={style.homeHeadCoded}> {`<h3 classname = {`} <div className={style.homeHeadCodedClass}>Working </div>  {`}> `}  </div>
                                 <div className={style.homeBodyDesignation}> Full Stack MERN Developer</div>
                                 <div className={style.homeHeadCoded}> {`</h3>`} </div>
                                 <br/>
                                <div className={style.homeBodyBtn}>
                                 <div className={style.homeHeadCoded}> {`<button >`} </div>
                                 <div className={style.homeBodyBtn}> <button>Resume</button></div>
                                 <div className={style.homeHeadCoded}> {`</button>`} </div>
                                </div>  

                         </div>



                <div className={style.homeHeadCodedNL}> {`</>`} </div>  
              <div className={style.homeHeadCodedNL}> {`)`} </div>  
            </div>

             <div className={style.homeHeadCodedNL}> {`}`} </div>  
         </div>
        </>
    );
}
export default AboutSG; 