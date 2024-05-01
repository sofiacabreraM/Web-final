import "./LandingPage.css"

export function Landing() {
    return (
        <main className="landing-container">
            <div className="background-land">
                <img className="image" src='../../src/assets/Vector 8.png'/>
                <img className="imageD" src='../../src/assets/Vector 8.svg'/>
                <div className="first-section">
                    <h1>CRAFTING FOR THE PEOPLE, <br/>
                     DESIGNING WITH PURPOSE.</h1>
                    <h4>Graphic Design | Brand Design | Web Design</h4>
                    <div className="btn-container">
                        <button className="btn-land">
                            <span className="btn-txt">Let's work together</span>
                        </button>
                    </div>
                </div>
                <div className="bombombun">
                    <div className="second-section">
                        <div className="text">
                            <h4>Our team of experts can help you with...</h4>
                            <h2>BRAND DESIGN</h2>
                            <hr></hr>
                            <h2>WEB DESIGN</h2>
                            <hr></hr>
                            <h2>DIGITAL PRODUCTS</h2>
                        </div>
                    </div>
                </div>
                <img className="image2" src='../../src/assets/yellow.png'/>
                <div className="third-section">
                    <h4>ABOUT US</h4>
                    <h2>WE BELIEVE IN DESIGNING FOR <br/>
                    PEOPLE, NOT JUST FOR USERS.</h2>
                    <p>Every design we create is crafted with <br/>
                    individuals in mind, understanding their <br/>
                    needs, desires, and aspirations. We are <br/>
                    firm believers that every design should be <br/>
                    anchored in a thoughtful strategy.</p>
                </div>
                <div className="scroll-container">
                    <img src='../../src/assets/dosTazas.png'/>
                    <img src='../../src/assets/dTazasApp.png'/>
                </div>
                <div className="scrollD-container">
                <img src='../../src/assets/dtdc.svg'/>
                <img src='../../src/assets/dtdcd.svg'/>
                </div>
                <div className="white">
                    <img src='../../src/assets/Rectangle 404.svg'/>
                </div>
                <div className="last-section">
                    <h4>OUR WORK</h4>
                    <p>We are storytellers, strategists, and creators driven by the belief <br/>
                    that every design should have a purpose. Our mission is simple: <br/>
                    to craft meaningful experiences that resonate with people.</p>
                </div>
            </div>
        </main>
    )
}