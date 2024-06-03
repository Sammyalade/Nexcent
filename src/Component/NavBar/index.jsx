import Style from './index.module.css';
import logo from '../../asset/Icon(1).png';
import Hamburger from 'hamburger-react';
import menu from "../../asset/menu.png"
import {useState} from "react";
const NavBar = ()=>{
    const isMobile = window.innerWidth <= 1080;
    const [isOpen, setIsOpen] = useState(false);
    return(
        <>
            <div className={Style.nav}>

                <div className={Style.logoContainer}>
                    <div>
                        <img src={logo} rel="logo" style={{ width: "30px", height: "20px" }}/>
                    </div>
                    <div>
                        <h2 style={{color: "#263238", fontFamily: "Cambria", padding: "5px"}}>Nexcent</h2>
                    </div>
                </div>

                {/*<div className={Style.midSection}>*/}
                {/*    <a href="home.html" target="_self">*/}
                {/*        <p>Home</p>*/}
                {/*    </a>*/}
                {/*    <p>Service</p>*/}
                {/*    <p>Feature</p>*/}
                {/*    <p>Product</p>*/}
                {/*    <p>Testimonial</p>*/}
                {/*    <p>FAQ</p>*/}
                {/*</div>*/}

                {/*{isMobile ? (*/}
                {/*    <>*/}
                {/*        <div className={Style.hamburger}>*/}
                {/*            <Hamburger toggled={isOpen} toggle={setIsOpen}/>*/}
                {/*        </div>*/}
                {/*        <div className={`${Style.midSection} ${isOpen ? Style.showMenu : ''}`}>*/}
                {/*            <a href="home.html" target="_self">*/}
                {/*                <p>Home</p>*/}
                {/*            </a>*/}
                {/*            <p>Service</p>*/}
                {/*            <p>Feature</p>*/}
                {/*            <p>Product</p>*/}
                {/*            <p>Testimonial</p>*/}
                {/*            <p>FAQ</p>*/}
                {/*        </div>*/}
                {/*        <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "10px"}}>*/}
                {/*            <button style={{color: "#4caf4f", background: "none", border: "none", fontSize: "16px", fontWeight: "500"}}>Login</button>*/}
                {/*            <button style={{padding: "10px", borderRadius: "4px", background: "#4caf4f", color: "#fff", border: "none"}}>Sign up</button>*/}
                {/*        </div>*/}
                {/*        </>*/}
                {/*) : (*/}
                {/*    <div className={Style.midSection}>*/}
                {/*        <a href="home.html" target="_self">*/}
                {/*            <p>Home</p>*/}
                {/*        </a>*/}
                {/*        <p>Service</p>*/}
                {/*        <p>Feature</p>*/}
                {/*        <p>Product</p>*/}
                {/*        <p>Testimonial</p>*/}
                {/*        <p>FAQ</p>*/}

                {/*        <div className={Style.authButtons}>*/}
                {/*            <button style={{*/}
                {/*                color: "#4caf4f",*/}
                {/*                background: "none",*/}
                {/*                border: "none",*/}
                {/*                fontSize: "16px",*/}
                {/*                fontWeight: "500"*/}
                {/*            }}>Login*/}
                {/*            </button>*/}
                {/*            <button style={{*/}
                {/*                padding: "10px",*/}
                {/*                borderRadius: "4px",*/}
                {/*                background: "#4caf4f",*/}
                {/*                color: "#fff",*/}
                {/*                border: "none"*/}
                {/*            }}>Sign up*/}
                {/*            </button>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*)}*/}

                {isMobile ? (
                    <>
                        <div className={Style.hamburger}>
                            <Hamburger toggled={isOpen} toggle={setIsOpen} />
                        </div>
                        {isOpen && (
                            <div className={Style.mobileMenu}>
                                <div className={Style.midSection}>

                                    <p>Home</p>
                                    <p>Service</p>
                                    <p>Feature</p>
                                    <p>Product</p>
                                    <p>Testimonial</p>
                                    <p>FAQ</p>
                                </div>
                                <div className={Style.authButtons}>
                                    <button style={{ color: "#4caf4f", background: "none", border: "none", fontSize: "16px", fontWeight: "500" }}>Login</button>
                                    <button style={{ padding: "10px", borderRadius: "4px", background: "#4caf4f", color: "#fff", border: "none" }}>Sign up</button>
                                </div>
                            </div>
                        )}
                    </>
                ) : (
                    <>
                        <div className={Style.midSection}>
                            <p>Home</p>
                            <p>Service</p>
                            <p>Feature</p>
                            <p>Product</p>
                            <p>Testimonial</p>
                            <p>FAQ</p>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
                            <button style={{ color: "#4caf4f", background: "none", border: "none", fontSize: "16px", fontWeight: "500" }}>Login</button>
                            <button style={{ padding: "10px", borderRadius: "4px", background: "#4caf4f", color: "#fff", border: "none" }}>Sign up</button>
                        </div>
                    </>
                )}

                {/*<div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "10px"}}>*/}
                {/*    <button*/}
                {/*        style={{*/}
                {/*            color: "#4caf4f",*/}
                {/*            background: "none",*/}
                {/*            border: "none",*/}
                {/*            fontSize: "16px",*/}
                {/*            fontWeight: "500"*/}
                {/*        }}>Login*/}
                {/*    </button>*/}
                {/*    <button*/}
                {/*        style={{*/}
                {/*            padding: "10px",*/}
                {/*            borderRadius: "4px",*/}
                {/*            background: "#4caf4f",*/}
                {/*            color: "#fff",*/}
                {/*            border: "none"*/}
                {/*        }}>Sign up*/}
                {/*    </button>*/}
                {/*</div>*/}
            </div>
        </>
    )
}

export default NavBar;