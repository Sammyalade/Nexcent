import send from "../../asset/send.png"
import nexcus from "../../asset/LogoN.png"
import insta from "../../asset/insta.png"
import web from "../../asset/web.png"
import twitter from "../../asset/twitter.png"
import youtube from "../../asset/youtube.png"
import styles from "./index.module.css"
const Footer = ()=>{
    return(
        <>
            <div className={styles.footer}>
                <div>
                    <img src={nexcus}/>
                    <p>Copyright © 2020 Nexcent ltd. <span style={{display: "block"}}>All rights reserved</span></p>
                    <div>
                        <img src={insta}/>
                        <img src={web}/>
                        <img src={twitter}/>
                        <img src={youtube}/>
                    </div>
                </div>
                <div className={styles.footerSide}>
                    <div>
                        <div><p>Company</p></div>
                        <p>About us</p>
                        <p>Blog</p>
                        <p>Contact us</p>
                        <p>Pricing</p>
                        <p>Testimonials</p>
                    </div>
                    <div>
                        <div><p>Support</p></div>
                        <p>Help center</p>
                        <p>Terms of service</p>
                        <p>Legal</p>
                        <p>Privacy policy</p>
                        <p>Status</p>
                    </div>
                    <div>
                        <p>Stay up to date</p>
                        <label>
                            <input placeholder="Your email address" className={styles.input}/>
                            <img src={send} className={styles.image}/>
                        </label>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Footer;