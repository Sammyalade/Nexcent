import styles from './index.module.css';
import logo from '../../../asset/Logo.png';
import logo1 from '../../../asset/Logo(1).png';
import logo2 from '../../../asset/Logo(2).png';
import logo3 from '../../../asset/Logo(3).png';
import logo4 from '../../../asset/Logo(4).png';
import logo5 from '../../../asset/Logo(5).png';
import logo6 from '../../../asset/Logo(6).png';
import {members} from "./data";

const Client = ()=>{
    return(
        <>
            <div className={styles.client}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    fontFamily: "Inter",
                    color: "#4d4d4d",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <h1 style={{margin: "0"}}>Our Clients</h1>
                    <p>We have been working with some Fortune 500+ clients</p>
                </div>
                <div className={styles.clientsLogo}>
                    <img src={logo}/>
                    <img src={logo1}/>
                    <img src={logo2}/>
                    <img src={logo3}/>
                    <img src={logo4}/>
                    <img src={logo5}/>
                    <img src={logo6}/>
                </div>
            </div>

            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", fontFamily: "Inter", color: "#4d4d4d", paddingTop: "30px"}}>
                <h1>Manage your entire community <span
                    style={{display:"block", paddingLeft: "100px"}}>in a single system</span></h1>
                <p style={{margin: "-10px!important"}}>Who is Nextcent suitable for?</p>
            </div>

            <div className={styles.member}>
                {
                    members.map((values, index) =>(
                        <div key={index} style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                            <img src={values.img}/>
                            <h2>{values.title}</h2>
                            <p style={{width: "50%", textAlign: "center"}}>{values.text}</p>
                        </div>
                    ))
                }
             </div>

        </>
    )
}

export default Client;