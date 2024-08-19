/* eslint-disable react/prop-types */
import './VideoModal.css'; 

const VideoModal = ({ videoSrc, isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render if the modal is not open

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        <video width="600" height='750' controls autoPlay>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <button className="button close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default VideoModal;
