import React from 'react'


const Person = (props) => {
  return (
    <div>
      <img src="img/mydp.jpeg" alt="" style={{width: '50%', borderRadius: '10%'}}/>
        <h2> Hi,  I'm {props.fullName}</h2>
         <h2> I am a {props.profession}</h2>
        <h2> {props.bio}</h2>
        
    </div>
  )
}

export default Person