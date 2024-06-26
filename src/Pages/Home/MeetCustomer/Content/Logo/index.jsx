import logo from '../../../../../asset/Vector.png';
import logo1 from '../../../../../asset/Logo(1).png';
import logo2 from '../../../../../asset/Logo(2).png';
import logo3 from '../../../../../asset/Logo(3).png';
import logo4 from '../../../../../asset/Logo(4).png';
import logo5 from '../../../../../asset/Logo(5).png';
import logo6 from '../../../../../asset/Vector2.png';
import styles from "./index.module.css"
const Logo = ()=>{
    return(
        <>
            <div className={styles.mainContainer} >
                <div className={styles.imageContainer}>
                    <img src={logo} alt=""/>
                    <img src={logo1} alt=""/>
                    <img src={logo2} alt=""/>
                    <img src={logo3} alt=""/>
                    <img src={logo4} alt=""/>
                    <img src={logo5} alt=""/>
                </div>
                <div className={styles.buttonContainer}>
                    <p style={{fontFamily: "Inter", color: "#4caf4f", fontWeight: "bold"}}>Meet the customer</p>
                    <img src={logo6} alt=""/>
                </div>
            </div>
        </>

    )
}

export default Logo;