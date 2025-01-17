import VideoStream from './VideoStream';
import ChatSidebar from './ChatSidebar';

const VideoChatContainer = () => {
  return (
    <div className="video-chat-container">
      <VideoStream />
      <ChatSidebar />
    </div>
  );
};

export default VideoChatContainer;
