import { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './VideoStream.css'; // Minimal custom CSS for specific needs

import Java from '../../assets/JAVA.png';
import Cpp from '../../assets/Cpp.png';
import analog from '../../assets/analog.jpeg';
import CloudComp from '../../assets/CloudComp.jpeg';
import digital from '../../assets/digital.jpeg';
import japSpeak from '../../assets/japSpeak.jpeg';
import japWrite from '../../assets/japWrite.jpeg';
import python from '../../assets/Python.png';
import vlsi from '../../assets/vlsi.jpeg';
import webDev from '../../assets/webDev.png';

const technologies = [
  { img: Java, alt: 'Java', text: 'Introduction to JAVA Programming' },
  { img: Cpp, alt: 'Cpp', text: 'Introduction to C++ Programming' },
  { img: python, alt: 'Python', text: 'Introduction to Python Programming' },
  { img: webDev, alt: 'Web Development', text: 'Introduction to Web Development' },
  { img: CloudComp, alt: 'Cloud Computing', text: 'Basics Of Cloud Computing' },
  { img: digital, alt: 'Digital Electronics', text: 'Learn Digital Electronics' },
  { img: analog, alt: 'Analog Electronics', text: 'Learn Analog Electronics' },
  { img: vlsi, alt: 'VLSI Designing', text: 'Basics Of VLSI designing' },
  { img: japWrite, alt: 'Japanese Writing', text: 'Learn to write in Japanese' },
  { img: japSpeak, alt: 'Japanese Speaking', text: 'Learn to speak Japanese' },
];

const VideoStream = () => {
  const [isVideoStarted, setIsVideoStarted] = useState(false);
  const videoRef = useRef(null);

  // Function to request camera and microphone access
  const askForPermissions = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsVideoStarted(true); // Start the video chat
      }
    } catch (error) {
      console.error('Permission denied or error accessing media devices', error);
      setIsVideoStarted(false); // If permission is denied, keep the video chat inactive
    }
  };

  return (
    <div className="video-stream container py-4">
      <h3 className="text-center mb-4">Video Stream</h3>

      {/* Start Video Chat Button */}
      <div className="text-center mb-4">
        {!isVideoStarted ? (
          <button className="btn btn-primary" onClick={askForPermissions}>
            Start Video Chat
          </button>
        ) : (
          <button className="btn btn-danger" onClick={() => setIsVideoStarted(false)}>
            End Video Chat
          </button>
        )}
      </div>

      {/* Video Container */}
      {isVideoStarted && (
        <div className="video-container mb-4">
          <video ref={videoRef} autoPlay playsInline className="w-100 border border-secondary rounded"></video>
        </div>
      )}

      {/* Technologies Section */}
      <div className="technologies-section">
        <h4 className="text-center mb-4">Learn Trending Technologies</h4>
        <div className="row">
          {technologies.map((tech, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div className="card h-100 text-center border-0 shadow-sm">
                <img src={tech.img} alt={tech.alt} className="card-img-top tech-image" />
                <div className="card-body">
                  <p className="card-text">{tech.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoStream;
