import img1 from "../../../../../asset/Icon-row2-3.png"
import img2 from "../../../../../asset/Icon-four.png"
import styles from "./index.module.css"

const Row2 = ()=>{
    return(
        <>
            <div className={styles.row2}>
                <div className={styles.one}>
                    <div className={styles.mage}>
                        <img src={img1} alt=""/>
                    </div>
                    <div className="number">
                        <h2>828,867</h2>
                        <p style={{marginTop: "-20px"}}>Event Bookings</p>
                    </div>
                </div>
                <div className={styles.one}>
                    <div className={styles.mage}>
                        <img src={img2} alt=""/>
                    </div>
                    <div className="number">
                        <h2>1,926,436</h2>
                        <p style={{marginTop: "-20px"}}>Payments</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Row2;