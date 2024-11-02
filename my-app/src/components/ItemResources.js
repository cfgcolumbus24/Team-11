import React from 'react'

const ItemResources = ({title, link, description}) => {
  return (
    <li  style={{ display: 'flex', alignItems: 'center', marginLeft: '20px', marginRight: '20px', marginBottom: '20px', backgroundColor: 'rgba(255, 255, 255, 0.1)', height: '100px', borderRadius:'40px' }}>
        <a href={link}
        style={{
        padding: '10px 20px',
        backgroundColor: '#821bd1', // light blue background
        borderRadius: '25px', // rounded edges to create bubble shape
        color: 'white', // link text color
        textDecoration: 'none', // remove underline
        display: 'inline-block', // ensure padding is respected
        fontWeight: 'bold',
        width: '20%',
        
      }}
        >{title}</a>
        <div style = {{color: 'white'}}>{description}</div>
    </li>
  )
}

export default ItemResources
