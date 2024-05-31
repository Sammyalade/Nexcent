import styles from './index.module.css';
import img1 from '../../../../../asset/Icon-row1.png';
import img2 from '../../../../../asset/Iconrow-1-1.png';

const Row1 = ()=>{
    return(
        <>
            <div className={styles.row1}>
                <div className={styles.one}>
                    <div className={styles.mage}>
                        <img src={img1}/>
                    </div>
                    <div className="number">
                        <h2>2,245,341</h2>
                        <p style={{marginTop: "-20px"}}>Members</p>
                    </div>
                </div>
                <div className={styles.one}>
                    <div className={styles.mage}>
                        <img src={img2}/>
                    </div>
                    <div className="number">
                        <h2>46,328</h2>
                        <p style={{marginTop: "-20px"}}>Clubs</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Row1;