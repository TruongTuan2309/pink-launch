import InputNumber from '@/components/common/InputNumber'
import { useAppSelector } from '@/store/store'
import { Button, Checkbox, DatePicker, Radio, Select } from 'antd'
import React, { useState } from 'react'

const LaunchInfo = () => {
  const { lisFairLaunch } = useAppSelector((state) => state.fairLaunchReducer)
  const [launchInfo, setLaunchInfo] = useState({
    totalSellAmount: '',
    whiteList: 'disable',
    softCap: '',
    isMaxContribution: false,
    maxContribution: '',
    router: '',
    liquidity: '',
    enableBuyback: false,
    startTime: '',
    endTime: '',
    liquidityLock: ''
  })
  const handleChange = (value: string | number | boolean, key: string) => {
    setLaunchInfo({ ...launchInfo, [key]: value })
  }
  return (
    <div className='step-fair-launch-info'>
      <div className='total-sell-amount'>
        <p className='label'>Total sell amount</p>
        <InputNumber
          value={launchInfo.totalSellAmount}
          onChange={(e) => handleChange(e.target.value, 'totalSellAmount')}
        />
      </div>
      <div className='white-list'>
        <Radio.Group
          value={launchInfo.whiteList}
          onChange={(e) => handleChange(e.target.value, 'whiteList')}
        >
          <Radio value='disable'>Disable</Radio>
          <Radio value='enable'>Enable</Radio>
        </Radio.Group>
      </div>
      <div className='soft-cap'>
        <p className='label'>Soft cap</p>
        <InputNumber
          value={launchInfo.softCap}
          onChange={(e) => handleChange(e.target.value, 'softCap')}
        />
        <Checkbox
          checked={launchInfo.isMaxContribution}
          onChange={(e) => handleChange(e.target.checked, 'isMaxContribution')}
        >
          Setting max contribution
        </Checkbox>
        {launchInfo.isMaxContribution && (
          <div className='input-max-contribution'>
            <p className='label'>Max Contribution ({lisFairLaunch.currency})</p>
            <InputNumber
              value={launchInfo.maxContribution}
              onChange={(e) => handleChange(e.target.value, 'maxContribution')}
            />
          </div>
        )}
      </div>
      <div className='router'>
        <p className='label'>Router</p>
        <Select />
      </div>
      <div className='liquidity'>
        <p className='label'>Liquidity</p>
        <InputNumber
          value={launchInfo.liquidity}
          onChange={(e) => handleChange(e.target.value, 'liquidity')}
        />
        <Checkbox
          checked={launchInfo.enableBuyback}
          onChange={(e) => handleChange(e.target.checked, 'enableBuyback')}
        >
          Enable Buyback
        </Checkbox>
        {launchInfo.enableBuyback && (
          <div className='buyback-percent'>
            <p className='label'>Buyback Percent (%)</p>
            <InputNumber />
          </div>
        )}
      </div>
      <div className='range-time'>
        <p className='label'>Select start time & end time (UTC)</p>
        <div className='select-time'>
          <div className='flex-1'>
            <p className='label'>Start time (UTC)</p>
            <DatePicker showTime />
          </div>
          <div className='flex-1'>
            <p className='label'>End time (UTC)</p>
            <DatePicker showTime />
          </div>
        </div>
      </div>
      <div className='liquidity-lock'>
        <p className='label'>Liquidity lockup (minutes)</p>
        <InputNumber
          value={launchInfo.liquidityLock}
          onChange={(e) => handleChange(e.target.value, 'liquidityLock')}
        />
      </div>
      <div className='button-step'>
        <Button>Back</Button>
        <Button>Next</Button>
      </div>
    </div>
  )
}

export default LaunchInfo
