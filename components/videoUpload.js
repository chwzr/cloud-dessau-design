import React from 'react';


const VideoUpload = (props) => {
  return (
    <div>
      <div className="file has-name is-boxed">
        <label className="file-label">
          <input className="file-input" type="file" name="resume" onChange={props.onFileChange}/>
          <span className="file-cta">
            <span className="file-icon">
              <i className="fas fa-upload"></i>
            </span>
            <span className="file-label">
              Choose a file…
            </span>
          </span>
          <span className="file-name">
          <progress className="progress is-info pd-top" value={props.progress} max="100">{props.progress}%</progress>
          </span>
        </label>
      </div>



    </div>
  )
}


export default VideoUpload