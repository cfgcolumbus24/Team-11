import './App.css';
import { Link } from 'react-router-dom';
import VideoCard from './components/VideoCard';

function App() {

  const videos = [
    { id: "y_v_G7ub-n0", title: "Research-Backed Strategies for Better Classroom Management" },
    { id: "EH_C5GyF1sM", title: "Effective Teaching Strategies for the Classroom" },
    { id: "_jdTtnWMLVM", title: "The 5 Principles of Highly Effective Teachers" },
    { id: "RlEwNUxLoD4", title: "Effective Lesson Planning: Procedures and Tips" },
    { id: "lpZ4x93h7Hw", title: "Vocabulary Teaching Strategies" },
  ];
  return (
    <>
    <h2 style={{ marginBottom: '5px' }}>Teaching Strategies Videos</h2>
    <div style={{ overflowX: "auto", whiteSpace: "nowrap", padding: "10px" }}>
      {videos.map((video) => (
        <VideoCard title={video.title} videoId={video.id}></VideoCard>
      ))}
    </div>
    </>
  );
}

export default App;
