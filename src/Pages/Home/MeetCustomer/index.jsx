import Content from "./Content";
import image from "../../../asset/image 9.png"
import styles from "./index.module.css";


const MeetCustomer = () => {
    return(
        <>
            <div className={styles.frame11}>
                <img src={image} alt=""/>
                <Content/>
            </div>
        </>
    )
}

export default MeetCustomer;