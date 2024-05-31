import Row1 from "./Row1";
import Row2 from "./Row2";
import styles from "./index.module.css";

const Count = ()=>{
    return(
        <>
            <div className={styles.count}>
                <Row1/>
                <Row2/>
            </div>
        </>
    )
}

export default Count;