import styles from "./index.module.css";

const Section1 = () => {
    return(
        <>
            <div className={styles.sectionHeading}>
                <div>
                    <h1>Helping a local<span style={{display: "block", color: "#4caf4f"}}>business reinvent itself</span>
                    </h1>
                </div>
                <div>
                    <p>We reached here with our hard work and dedication</p>
                </div>
            </div>
        </>
    )
}

export default Section1