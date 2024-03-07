import { Button, Input } from 'antd'
import React, { useState } from 'react'

const AdditionalInfo = () => {
  const [additionInfo, setAdditionInfo] = useState({
    urlLogo: '',
    website: '',
    facebook: '',
    twitter: '',
    github: '',
    telegram: '',
    instagram: '',
    discord: '',
    reddit: '',
    youtubeVideo: '',
    description: ''
  })
  const handleChange = (value: string, key: string) => {
    setAdditionInfo({ ...additionInfo, [key]: value })
  }
  return (
    <div className='step-add-additional-info'>
      <div className='list-info-social-network'>
        <div className='line'>
          <div className='left'>
            <p className='label'>Logo URL</p>
            <Input
              value={additionInfo.urlLogo}
              onChange={(e) => handleChange(e.target.value, 'urlLogo')}
            />
          </div>
          <div className='right'>
            <p className='label'>Website</p>
            <Input
              value={additionInfo.website}
              onChange={(e) => handleChange(e.target.value, 'website')}
            />
          </div>
        </div>
        <div className='line'>
          <div className='left'>
            <p className='label'>Facebook</p>
            <Input
              value={additionInfo.facebook}
              onChange={(e) => handleChange(e.target.value, 'facebook')}
            />
          </div>
          <div className='right'>
            <p className='label'>Twitter</p>
            <Input
              value={additionInfo.twitter}
              onChange={(e) => handleChange(e.target.value, 'twitter')}
            />
          </div>
        </div>
        <div className='line'>
          <div className='left'>
            <p className='label'>Github</p>
            <Input
              value={additionInfo.github}
              onChange={(e) => handleChange(e.target.value, 'github')}
            />
          </div>
          <div className='right'>
            <p className='label'>Telegram</p>
            <Input
              value={additionInfo.telegram}
              onChange={(e) => handleChange(e.target.value, 'telegram')}
            />
          </div>
        </div>
        <div className='line'>
          <div className='left'>
            <p className='label'>Instagram</p>
            <Input
              value={additionInfo.instagram}
              onChange={(e) => handleChange(e.target.value, 'instagram')}
            />
          </div>
          <div className='right'>
            <p className='label'>Discord</p>
            <Input
              value={additionInfo.discord}
              onChange={(e) => handleChange(e.target.value, 'discord')}
            />
          </div>
        </div>
      </div>
      <div className='reddit'>
        <p className='label'>Reddit</p>
        <Input
          value={additionInfo.reddit}
          onChange={(e) => handleChange(e.target.value, 'reddit')}
        />
      </div>
      <div className='youtube-video'>
        <p className='label'>Youtube video</p>
        <Input
          value={additionInfo.youtubeVideo}
          onChange={(e) => handleChange(e.target.value, 'youtubeVideo')}
        />
      </div>
      <div className='description'>
        <p className='label'>Description</p>
        <Input.TextArea />
      </div>
      <div className='button-step'>
        <Button>Back</Button>
        <Button>Next</Button>
      </div>
    </div>
  )
}

export default AdditionalInfo
