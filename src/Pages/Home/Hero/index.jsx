import img from '../../../asset/Illustration.png';
import styles from './index.module.css';
const Hero = () => {
    return(
        <>
            <div className={styles.heroSection}>
                <div>
                    <h1>Lessons and Insights <span
                        style={{color: "#4caf4f", display: "block", lineHeight: "76px", fontFamily: "Inter"}}>from 8 years</span>
                    </h1>
                    <p style={{fontFamily: "Inter", paddingBottom: "30px"}}>Where to grow your business as a photographer:
                        site or social media?</p>
                    <button
                        style={{color: "#ffffff", background: "#4caf4f", border: "none", borderRadius: "4px", padding: "15px 30px"}}>Register
                    </button>
                </div>
                <div style={{width: "400px", height: "500px", objectFit: "contain"}}>
                    <img src={img}/>
                </div>
            </div>

        </>
    )
}

export default Hero;