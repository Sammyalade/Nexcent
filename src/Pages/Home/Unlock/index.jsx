import image from '../../../asset/rafiki.png'
import styles from './index.module.css'
const Unlock =()=>{
    return(
        <>
            <div className={styles.unlock}>
                <div>
                    <img src={image} alt=""/>
                </div>
                <div>
                    <div>
                        <div>
                            <h1>The unseen of spending three<span style={{display: "block"}}>years at Pixelgrade</span></h1>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum.
                                Sed <br/>accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum
                                lorem sed <br/>porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus
                                pretium auctor. Etiam<br/> quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
                                elementum pulvinar odio.</p>
                        </div>
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

export default Unlock;