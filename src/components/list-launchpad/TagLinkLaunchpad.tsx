import React from 'react'
import { Link } from 'react-router-dom'

interface TagLinkLaunchpadProps {
  tag: string
  link: string
}

const TagLinkLaunchpad = ({ tag, link }: TagLinkLaunchpadProps) => {
  return (
    <Link
      to={link}
      className='tag-launch'
      target='_blank'
      rel='noopener noreferrer'
    >
      {tag}
    </Link>
  )
}

export default TagLinkLaunchpad
