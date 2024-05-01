import './WorkPage.css'

import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import vectorpink from '../../assets/vector-pink.png'

export function Upload() {
    return (
        <>
            <Header/>
            <div className='rectangle-container'>
                <div className='text-banner'>
                    <h1>UPLOAD A  NEW PROJECT <br/> SUCCESS AWAITS.</h1>
                </div>
                <img src={vectorpink}/>
            </div>
            <div className='upload-container'>
                <div className='title'>
                    <h3>Title</h3>
                    <input type='text' className='title-input'></input>
                </div>
                <div className='upload-rectangle'>
                    <div className='upload-text'>
                        <h3>Upload media</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        <button className="upload-btn" href=" ">Upload</button>
                    </div>
                </div>
                <div className='cover-container'>
                    <div className='cover-text'>
                        <h3>Choose a cover</h3>
                    </div>
                    <div className='cover'>
                        <div className='cover-rectangle'/>
                        <div className='cover-rectangle'/>
                        <div className='cover-rectangle'/>
                    </div>
                </div>
                <div className='description'>
                    <h3>Description</h3>
                    <input type='text' className='description-input'></input>
                </div>
                <div className='menus'>
                    <div className='project-menu'>
                    <h4>Type of project</h4>
                        <nav id="project">
                            <ul>
                                <li><a href="#">Enlace 1</a></li>
                                <li><a href="#">Enlace 2</a></li>
                                <li><a href="#">Enlace 3</a></li>
                                <li><a href="#">Enlace 4</a></li>
                                <li><a href="#">Enlace 5</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className='author-menu'>
                        <h4>Author(s)</h4>
                        <nav id="author">
                            <ul>
                                <li><a href="#">Enlace 1</a></li>
                                <li><a href="#">Enlace 2</a></li>
                                <li><a href="#">Enlace 3</a></li>
                                <li><a href="#">Enlace 4</a></li>
                                <li><a href="#">Enlace 5</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className='buttons'>
                    <button className="draft-btn" href=" ">Save as draft</button>
                    <button className="publish-btn" href=" ">Publish</button>

                </div>
            </div>
            <Footer/>
        </>
    )
}