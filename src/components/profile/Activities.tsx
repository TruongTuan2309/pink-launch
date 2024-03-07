import React from 'react'

const Activities = () => {
  return (
    <div className='tab-activities'>
      <div className='tab-activities__top'>
        <div className='item'>
          <p className='title'>total pool invested</p>
          <p className='value'>0</p>
        </div>
        <div className='item'>
          <p className='title'>total BNB invested</p>
          <p className='value'>0</p>
        </div>
        <div className='item'>
          <p className='title'>total invested</p>
          <p className='value'>0</p>
        </div>
      </div>
      <div className='tab-activities-table'></div>
    </div>
  )
}

export default Activities
