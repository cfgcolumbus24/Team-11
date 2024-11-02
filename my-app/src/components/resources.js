// import {React} from 'react'
// import { Link } from "react-router-dom";
// import Header from './Header';
// import VideoCard from './VideoCard';
// import ItemResources from './ItemResources';
// const Resources = () => {

//   const Y_videos = [
//     { id: "y_v_G7ub-n0", title: "Research-Backed Strategies for Better Classroom Management" },
//     { id: "EH_C5GyF1sM", title: "Effective Teaching Strategies for the Classroom" },
//     { id: "_jdTtnWMLVM", title: "The 5 Principles of Highly Effective Teachers" },
//     { id: "RlEwNUxLoD4", title: "Effective Lesson Planning: Procedures and Tips" },
//     { id: "lpZ4x93h7Hw", title: "Vocabulary Teaching Strategies" },
//   ];


//   const res = [
//     {link: 'https://www.coursera.org/learn/teaching-character', title: 'coursera', description: 'This platform shares a wide range of articles, videos, and best practices on innovative and effective teaching strategies. It’s helpful for teachers looking for inspiration and practical tips on everything from lesson planning and classroom management to integrating technology and promoting student-centered learning.'},
//     {link: 'https://www.mooc-list.com/course/teaching-learning-diverse-classroom-edx', title: 'Mooc List', description:'Teaching and Learning in a Diverse Classroom: This resource offers strategies to effectively manage and teach in classrooms with diverse student backgrounds, cultures, and abilities. It is beneficial for teachers aiming to foster an inclusive environment where every student feels supported and is set up for success.'},
//     {link: 'https://www.edutopia.org/', title:'edutopia', description: 'This platform shares a wide range of articles, videos, and best practices on innovative and effective teaching strategies. It’s helpful for teachers looking for inspiration and practical tips on everything from lesson planning and classroom management to integrating technology and promoting student-centered learning.'}
//   ]
//   return (
//     <>
//     <Header/>
//     <div style ={{height: "100vh",backgroundColor: "#282c34", display: "flex", flexDirection: "column",justifyContent: "space-between",}}>
//     <div style={{ textAlign: "center" }}>
//         <h1 style={{ marginBottom: '5px', textAlign: "left", color:"white", margin:"10px", fontSize: '30px' }}>Teaching Resource Links</h1>
//         <ul>

//         {res.map((object) => (
//           <ItemResources link = {object.link} title={object.title} description = {object.description} />))}

        
//         </ul>
//       </div>
//       <div style={{ textAlign: "center" }}>
//           <h1 style={{ marginBottom: '5px', textAlign: "left", color:"white", margin:"10px", fontSize: '30px'  }}>Teaching Strategies Videos</h1>
//               <div style={{ overflowX: "auto", whiteSpace: "nowrap", padding: "10px 20px", width: "95%"}} >
//               {Y_videos.map((vid) => (
//                 <div key={vid.id} style={{ display: "inline-block", width: "300px", marginRight: "10px" }}>
//               <VideoCard title={vid.title} videoId={vid.id} />
//               </div>
//               ))}
//               </div>
//               </div>
//               </div>
//     </>
//   )
// }

// export default Resources

import React from 'react';

import Header from './Header';
import VideoCard from './VideoCard';
import ItemResources from './ItemResources';
import './Resources.css';

const Resources = () => {
  const Y_videos = [
    { id: "y_v_G7ub-n0", title: "Research-Backed Strategies for Better Classroom Management" },
    { id: "EH_C5GyF1sM", title: "Effective Teaching Strategies for the Classroom" },
    { id: "_jdTtnWMLVM", title: "The 5 Principles of Highly Effective Teachers" },
    { id: "RlEwNUxLoD4", title: "Effective Lesson Planning: Procedures and Tips" },
    { id: "lpZ4x93h7Hw", title: "Vocabulary Teaching Strategies" },
  ];

  const res = [
    {link: 'https://www.coursera.org/learn/teaching-character', title: 'coursera', description: 'This platform shares a wide range of articles, videos, and best practices on innovative and effective teaching strategies. It’s helpful for teachers looking for inspiration and practical tips on everything from lesson planning and classroom management to integrating technology and promoting student-centered learning.'},
    {link: 'https://www.mooc-list.com/course/teaching-learning-diverse-classroom-edx', title: 'Mooc List', description: 'Teaching and Learning in a Diverse Classroom: This resource offers strategies to effectively manage and teach in classrooms with diverse student backgrounds, cultures, and abilities. It is beneficial for teachers aiming to foster an inclusive environment where every student feels supported and is set up for success.'},
    {link: 'https://www.edutopia.org/', title: 'edutopia', description: 'This platform shares a wide range of articles, videos, and best practices on innovative and effective teaching strategies. It’s helpful for teachers looking for inspiration and practical tips on everything from lesson planning and classroom management to integrating technology and promoting student-centered learning.'}
  ];

  return (
    <>
      <Header />
      <div className="resources-container" style={{ backgroundColor: '#282c34' }}>
        <h1 className="gradient-heading">Teaching Resource Links</h1>
        <ul className="resources-list">
          {res.map((object) => (
            <ItemResources key={object.link} link={object.link} title={object.title} description={object.description} />
          ))}
        </ul>
        <h1 className="gradient-heading">Teaching Strategies Videos</h1>
        <div className="videos-list">
          {Y_videos.map((vid) => (
            <div key={vid.id} className="video-card-container">
              <VideoCard title={vid.title} videoId={vid.id} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Resources;

