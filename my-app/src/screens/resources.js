import {React} from 'react'
import { Link } from "react-router-dom";
import Header from '../components/Header';
import VideoCard from '../components/VideoCard';
import './screens_css/resources.css';

const Resources = () => {

  const Y_videos = [
    { id: "y_v_G7ub-n0", title: "Research-Backed Strategies for Better Classroom Management" },
    { id: "EH_C5GyF1sM", title: "Effective Teaching Strategies for the Classroom" },
    { id: "_jdTtnWMLVM", title: "The 5 Principles of Highly Effective Teachers" },
    { id: "RlEwNUxLoD4", title: "Effective Lesson Planning: Procedures and Tips" },
    { id: "lpZ4x93h7Hw", title: "Vocabulary Teaching Strategies" },
  ];

  return (
    <>
    <Header/>
    <div style ={{height: "100vh",backgroundColor: "#282c34", display: "flex", flexDirection: "column",justifyContent: "space-between",}}>
    <div style={{ textAlign: "center" }}>
        <h1 style={{ marginBottom: '5px', textAlign: "left", color:"white", margin:"%" }}>Teaching Resource Links</h1>
        <a href='https://www.coursera.org/learn/teaching-character'>coursera</a>
        <a hre></a>
      </div>
      <div style={{ textAlign: "center" }}>
          <h1 style={{ marginBottom: '5px', textAlign: "left", color:"white", margin:"2%" }}>Teaching Strategies Videos</h1>
              <div style={{ overflowX: "auto", whiteSpace: "nowrap", padding: "10px 20px", width: "95%"}} >
              {Y_videos.map((vid) => (
                <div key={vid.id} style={{ display: "inline-block", width: "300px", marginRight: "10px" }}>
              <VideoCard title={vid.title} videoId={vid.id} />
              </div>
              ))}
              </div>
              </div>
              </div>
    </>
  )
}

export default Resources
