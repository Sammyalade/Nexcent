import Section1 from "./Section1";
import Count from "./Count";
import styles from "./index.module.css";

const Achievement = ()=>{
    return (
        <>
            <div className={styles.achievements}>
                <Section1/>
                <Count/>
            </div>
        </>
    )
}

export default Achievement;