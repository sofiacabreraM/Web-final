import './WorkPage.css'

import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { useState } from 'react';
import vectorpink from '../../assets/vector-pink.png'

export function Upload() {
    const [ImageSelectedPrevious, setImageSelectedPrevious] = useState(null)
    const changeImage = (e) => {
      console.log(e.target.files);
      if (e.target.files[0] !== undefined) {
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = (e) => {
          e.preventDefault();
          setImageSelectedPrevious(e.target.result);
        };
      }
    };

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
                        <p>Drag and drop your files here or click the 'Upload' button to select PNG or JPG files from your device.</p>
                        <div className='upload-button'>
                        <label htmlFor="file-upload" className="upload-btn">
                            Upload
                        </label>
                        <input
                            id="file-upload"
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={(e) => {
                                changeImage(e);
                            }}
                            style={{ display: "none" }}
                        />
                        </div>
                    </div>
                    <div className="image-preview">
                    <img
                        src={ImageSelectedPrevious}
                        alt=""
                        height="150px"
                        width="250px"
                    />
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
                        <select className="project">
                        <option value="" disabled selected hidden>Select an option</option>
                            <option value="ux-ui">UX / UI Project</option>
                            <option value="graphic">Graphic Project</option>
                            <option value="brand">Brand Project</option>
                        </select>
                    </div>
                    <div className='author-menu'>
                        <h4>Author(s)</h4>
                        <select className="author">
                        <option value="" disabled selected hidden>Select an option</option>
                            <option value="caro">Carolina Velásquez</option>
                            <option value="lina">Lina Manjarrez</option>
                            <option value="pau">María Paula Ortiz</option>
                            <option value="sofi">Sofía Cabrera</option>
                        </select>
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

/*
<label for="dog-names">Choose a dog name:</label>
<select name="dog-names" id="dog-names">
    <option value="rigatoni">Rigatoni</option>
  <option value="dave">Dave</option>
  <option value="pumpernickel">Pumpernickel</option>
  <option value="reeses">Reeses</option>
</select>
*/