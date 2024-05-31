import styles from "./index.module.css";
import {infos} from "./data";
import img from "../../../asset/Vector2.png";

const GetADemo = () => {

    return(
        <>
            <div style={{display: "flex"}}>
                {
                    infos.map((values, index) => (
                        <div key={index} className={styles.textOverlay2}>
                            <img src={values.img} alt="" style={{height: "300px", width: "450px"}}/>
                            <div className={styles.textOverlay}>
                                <div style={{paddingLeft: "10%", paddingRight: "10%"}}>
                                    <h4>{values.text}</h4>
                                </div>
                                <div className={styles.readMore}>
                                    <button
                                        style={{border: "none", color: "#4caf4f", background: "none",
                                            fontSize: "15px", fontWeight: "bold"
                                        }}>Readmore
                                    </button>
                                    <img src={img} alt=""/>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default GetADemo;