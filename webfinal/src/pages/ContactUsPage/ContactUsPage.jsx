import './ContactUsPage.css';

import { Header } from '../../components/Header/Header';

export function ContactUs() {
    return (
        <>
        <Header/>
        <div className='header-container'></div>
        <div className='principal-container'>
            <div className='title-container'>
                <div className='subtitle-form'>
                <h3>Ready to bring your vision to life? <b>Let's work <br/> 
                together to create something extraordinary.</b><br/>
                Contact us today to get started</h3>
                </div>
                <div className='title-form'>
                    <h1>WHAT SERVICES <br/> WE CAN SUPPORT <br/> YOU WITH?</h1>
                </div>
            </div>
            <div className='form-container'>
                <div className='interested'>
                    <div className='up-buttons'>
                        <button className='ux/ui'></button>
                        <button className='graphic'></button>
                    </div>
                    <button className='brand'></button>
                </div>
                <div className='form'>
                    <form action="" method="get" className="form-data">
                            <input type="text" className='name' placeholder='Your name' required />
                            <input type="email" className="email" placeholder='E-mail' required />
                            <input type="number" className="number" placeholder='Phone' required />
                            <input type="text" className="message" placeholder='Message' required />
                    </form>
                </div>
                <div className='button-form'>
                    <button className='send'>Send</button>
                </div>
            </div>
        </div>        
        </>
    )
}