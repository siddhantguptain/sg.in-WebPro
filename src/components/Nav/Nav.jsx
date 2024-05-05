import style from "./Nav.module.css";

const Nav = () =>{
    return(
        <>
            <div className={style.navContainer}>
                <div className={style.navContainerCode}>{`const `}</div>
                <div className={style.navContainerTitle}>Sg.in </div>
                <div className={style.navContainerCode}>{`  = ( ) = > {`}</div>
                <div className={style.navContainerCodeNIL}>{`return (`}</div>
                <div className={style.navContainerCodeNIL}>{`<>`}</div>
            </div>
        </>
    );
}
export default Nav;