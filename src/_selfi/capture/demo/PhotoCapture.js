import React from 'react';
import CameraPhoto from '../lib'
import './styles.css';

class PhotoCapture extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.cameraPhoto = null;
  }

  componentDidMount() { 
    this.cameraPhoto = new CameraPhoto(this.refs.video, this.refs.clickImg);
    this.startCamera(); 
  }

  startCamera() {
    let idealFacingMode = 'ENVIRONMENT';
    let idealResolution = { width: 300, height: 300 };
    let imgElement = document.getElementById('imgId'); 
    imgElement.src = null
    this.cameraPhoto.startCamera(idealFacingMode, idealResolution)
      .then(() => {
      })
      .catch((error) => {
        console.error('Camera not started!', error);
      });
  }
  stopCamera() {
    this.cameraPhoto.stopCamera()
      .then(() => {
        console.log('Camera stoped!');
      })
      .catch((error) => {
        console.log('No camera to stop!:', error);
      });
  }

  takePhoto() {
    let imgElement = document.getElementById('imgId'); 
    this.cameraPhoto.takePhoto(imgElement)
    this.stopCamera()
  } 
  render() {
    return (
      <div> 
          <div>
            <video ref="video" autoPlay="true" />
            <div>
              <img id="imgId" alt="" src="" ref="clickImg" />
            </div>
          </div> 
          <button onClick={() => { this.takePhoto(); }}> Click</button>
          <span> </span>
          <button onClick={() => { this.startCamera(); }}> Clear </button> 
      </div>
    );
  }
}

export default PhotoCapture;
