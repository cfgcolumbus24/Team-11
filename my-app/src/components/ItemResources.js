import React from 'react'

const ItemResources = ({title, link, description}) => {
  return (
    <li  style={{ display: 'flex', alignItems: 'center', marginBottom: '50px' }}>
        <a href={link}
        style={{
        padding: '10px 20px',
        backgroundColor: '#e0f7fa', // light blue background
        borderRadius: '25px', // rounded edges to create bubble shape
        color: '#00796b', // link text color
        textDecoration: 'none', // remove underline
        display: 'inline-block', // ensure padding is respected
        fontWeight: 'bold',
        width: '20%',
        
      }}
        >{title}</a>
        <div>{description}</div>
    </li>
  )
}

export default ItemResources
