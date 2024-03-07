import React from 'react'

interface StatusLaunchpadProps {
  status?: string
}

const StatusLaunchpad = ({ status }: StatusLaunchpadProps) => {
  switch (status) {
    case 'filled':
      return <div className='status-launch green'>filled</div>
    case 'live':
      return <div className='status-launch green'>sale live</div>
    case 'lock-upcoming':
      return <div className='status-launch yellow'></div>

    default:
      return <div className='status-launch yellow'>upcoming</div>
  }
}

export default StatusLaunchpad
