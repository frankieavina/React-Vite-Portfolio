/* eslint-disable react/prop-types */
import './VideoModal.css'; 

const VideoModal = ({ videoSrc, isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render if the modal is not open

  console.log('Video ID:', typeof(videoSrc))
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        { videoSrc == 1 &&
          <YoutubeEmbed embedId='PR0QV1Ufvps'/>
        }
        {
          videoSrc == 3 &&
          <YoutubeEmbed embedId='2t2kVE15CQA'/>
        }
        
        <button className="button close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default VideoModal;


const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);