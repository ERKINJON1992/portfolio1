import React from 'react'
import './Write.css';
import Shohar from '../../../img/shahar.jpg';

function Write() {
  return (
    <div className='write'>
        <img src={Shohar} alt="" className='writeImg' />
    <form className="writeForm">
        <div className="writeFormGroup">
            <label htmlFor="fileInput">
                <i className='writeIcon fas fa-plus'></i>
            </label>
            <input type="file" id='fileInput' style={{display:"none"}} />
            <input type="text" placeholder='Title' className='writeInput' autoFocus={true} />

        </div>
        <div className="writeFormGroup">
            <textarea placeholder="So'zni kiriting..." type="text" className='writeInput writeText'></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
    </form>
    </div>
  );
}

export default Write;
