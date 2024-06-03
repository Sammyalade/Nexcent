import img from '../../../asset/pana.png';
import styles from './index.module.css';

const Calender = ()=>{
    return(
        <>
            <div className={styles.calender}>
                <img src={img} alt=""/>
                <div>
                    <div>
                        <h1>How to design your site footer like<span style={{display: "block"}}>we did</span></h1>
                    </div>
                    <div>
                        <p style={{paddingRight: "100px"}}>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie,
                            massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero
                            ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
                            facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt.
                            Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est,
                            finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id
                            gravida.</p>
                    </div>
                    <div>
                        <button
                            style={{color: "#ffffff", background: "#4caf4f", border: "none", borderRadius: "4px", padding: "15px 30px"}}>Learn
                            More
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calender;