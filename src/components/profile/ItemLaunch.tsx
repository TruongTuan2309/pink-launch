import React from 'react'
import { Link } from 'react-router-dom'

const ItemLaunch = () => {
  return (
    <div className='item-launch-profile'>
      <div className='left'>
        <div className='avatar'>
          <img src='' alt='' />
        </div>
        <div className='title-launch'>
          <p className='title'>C64Coin Fair launch</p>
          <p className='sub'>C64</p>
        </div>
      </div>
      <div className='right'>
        <Link to=''>view</Link>
      </div>
    </div>
  )
}

export default ItemLaunch
