import React from 'react'
import { useState } from 'react'
const Die = (props) => {

const styles = {
  backgroundColor: props.isHeld ? "green" : " "
}
  return (
    <div className='die-face' style={styles} onClick={props.log}>
<h2 className='die-num' >{props.value}  </h2>
   





    </div>
  )
}

export default Die