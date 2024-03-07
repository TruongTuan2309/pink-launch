import StatusLaunchpad from '@/components/list-launchpad/StatusLaunchpad'
import TagLinkLaunchpad from '@/components/list-launchpad/TagLinkLaunchpad'
import React from 'react'
import { Link } from 'react-router-dom'

const CardLaunchpad = () => {
  return (
    <div className='card-launchpad'>
      <div className='avatar-and-status'>
        <div className='avatar-and-token'>
          <img
            src='https://photos.pinksale.finance/file/pinksale-logo-upload/1709505915396-bbc61559c599d7870456a9c85f5999a4.jpg'
            alt='avatar'
            className='avatar'
          />
          <div className='token'>
            <img
              src='https://www.pinksale.finance/static/media/ic-bsc.419dfaf2.png'
              alt='token'
            />
          </div>
        </div>
        <div className='status'>
          <StatusLaunchpad status='filled' />
          <TagLinkLaunchpad tag='KYC' link='' />
        </div>
      </div>
      <div className='title-card'>
        <p className='title'>Baby Obama</p>
        <p className='token'>1 BNB = 5,000,00 BabyObama</p>
      </div>
      <div className='soft-and-progress'>
        <div className='soft-hard-cap'>
          <p className='label'>Soft/Hard</p>
          <p className='range-token'>50 BNB - 100 BNB</p>
        </div>
        <div className='progress'>
          <p className='label'>Progress (0.00%)</p>
          <div className='progress-bar'>
            <div className='progress-bar-full'></div>
            <div className='progress-bar-fill' style={{ width: '50%' }}></div>

            <div className='min-max'>
              <span>0 BNB</span>
              <span>100 BNB</span>
            </div>
          </div>
        </div>
      </div>

      <div className='description'>
        <div className='description-item'>
          <p className='label'>Liquidity %:</p>
          <p className='value'>51%</p>
        </div>
        <div className='description-item'>
          <p className='label'>Lockup Time:</p>
          <p className='value'>90 days</p>
        </div>
      </div>
      <div className='card-footer'>
        <div className='left'>
          <div className='countdown'>
            <p className='title'>Sale starts in:</p>
            <p className='value'>01:22:40:50</p>
          </div>
        </div>
        <div className='right'>
          <div className='btn-action'>Noti</div>
          <div className='btn-action'>Favorite</div>
          <Link to='' className='btn-view'>
            View
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CardLaunchpad
