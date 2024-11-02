import React from 'react'

const VideoCard = ({ title, videoId }) => {
  return (

        <div
          key={videoId}
          style={{
            display: "inline-block",
            width: "300px",
            marginRight: "10px",
            textAlign: "center",
          }}
        >
          <iframe
            width="300"
            height="200"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{borderRadius:"10%"}}
          ></iframe>
          <div
          style={{
        padding: '10px',
        backgroundColor: '#821bd1', // light blue background
        borderRadius: '25px', // rounded edges to create bubble shape
        color: 'white', // link text color
        textDecoration: 'none', // remove underline
        display: 'inline-block', // ensure padding is respected
        fontWeight: 'bold',
        marginRight: '20px'}}
        >
          <p 
           style={{
              whiteSpace: "nowrap",     
              overflow: "hidden",        
              textOverflow: "ellipsis",   
              maxWidth: "280px",         
              margin: "8px auto 0",       
            }}      
          >
          {title}</p>
          </div>
        </div>

  )
}

export default VideoCard
