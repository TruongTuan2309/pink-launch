import { Tabs } from 'antd'
import React from 'react'

const TabProfile = () => {
  const tabItems = [
    {
      key: '1',
      label: 'Activities',
      children: <p>Activities</p>
    },
    {
      key: '2',
      label: 'Affiliate',
      children: <p>Activities</p>
    },
    {
      key: '3',
      label: 'Favorited',
      children: <p>Activities</p>
    },
    {
      key: '4',
      label: 'Recently Viewed',
      children: <p>Activities</p>
    }
  ]
  return <Tabs items={tabItems} />
}

export default TabProfile
