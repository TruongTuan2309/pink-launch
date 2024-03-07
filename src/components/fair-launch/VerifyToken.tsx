import InputNumber from '@/components/common/InputNumber'
import { updateStateFairLaunch } from '@/store/slices/fair-launch/fair-launch.slice'
import { useAppDispatch } from '@/store/store'
import { Button, Input } from 'antd'
import Radio from 'antd/es/radio'
import { ethers } from 'ethers'
import { useEffect, useMemo, useState } from 'react'

const VerifyToken = () => {
  const dispatch = useAppDispatch()
  const [verifyToken, setVerifyToken] = useState({
    tokenAddress: '',
    currency: 'BNB',
    feeOption: 'recommended',
    listingOption: 'auto-listing',
    poolType: 'presale',
    affiliateProgram: 'disable',
    percentage: ''
  })

  const handleChange = (value: string | number, key: string) => {
    setVerifyToken({ ...verifyToken, [key]: value })
  }
  const listCurrency = useMemo(() => {
    return [
      { label: 'BNB', value: 'BNB' },
      { label: 'BUSD', value: 'BUSD' },
      { label: 'USDT', value: 'USDT' },
      { label: 'USDC', value: 'USDC' }
    ]
  }, [])
  const textSelect = listCurrency.find(
    (item) => item.value === verifyToken.currency
  )?.label
  const handleNextStep = () => {
    dispatch(updateStateFairLaunch(verifyToken))
  }
  const getDisabled = useMemo(() => {
    if (
      verifyToken.tokenAddress === '' ||
      (verifyToken.affiliateProgram === 'enable' &&
        verifyToken.percentage === '')
    )
      return true
    return false
  }, [verifyToken])
  return (
    <div className='step-verify-token'>
      <div className='token-address'>
        <div className='token-address__top'>
          <p className='label'>Token address</p>
          <Button type='default'>Create token</Button>
        </div>
        <div className='token-address__input'>
          <Input
            placeholder='Enter token address'
            onChange={(e) => handleChange(e.target.value, 'tokenAddress')}
          />
        </div>
      </div>
      <div className='list-radio-optional'>
        <div className='option-item'>
          <p className='label'>Currency</p>
          <Radio.Group
            className='flex-column'
            value={verifyToken.currency}
            onChange={(e) => handleChange(e.target.value, 'currency')}
          >
            {listCurrency.map((item, index) => {
              return (
                <Radio key={index} value={item.value}>
                  {item.label}
                </Radio>
              )
            })}
          </Radio.Group>
        </div>
        <div className='option-item'>
          <p className='label'>Fee option</p>
          <Radio.Group
            className='flex-column'
            value={verifyToken.feeOption}
            onChange={(e) => handleChange(e.target.value, 'feeOption')}
          >
            <Radio value='recommended'>
              <span>5% {textSelect} raised only</span>
              <span className='note'> (Recommended)</span>
            </Radio>
            <Radio value='other'>
              {verifyToken.feeOption === 'other'
                ? `2% ${textSelect} raised + 2% token sold`
                : 'Other'}
            </Radio>
          </Radio.Group>
        </div>
        <div className='option-item'>
          <p className='label'>Listing options</p>
          <Radio.Group
            className='flex-column'
            value={verifyToken.listingOption}
            onChange={(e) => handleChange(e.target.value, 'listingOption')}
          >
            <Radio value='auto-listing'>Auto Listing</Radio>
            <Radio value='manual-listing'>
              <span>Manual listing</span>
              <span className='note'> (Recommended for Seed/Private Sale)</span>
            </Radio>
          </Radio.Group>
          {verifyToken.listingOption === 'manual-listing' && (
            <div className='option-item'>
              <p className='label'>Choose a pool type</p>
              <Radio.Group
                className='flex-column'
                value={verifyToken.poolType}
                onChange={(e) => handleChange(e.target.value, 'poolType')}
              >
                <Radio value='presale'>Presale</Radio>
                <Radio value='private-sale'>Private Sale</Radio>
                <Radio value='seed-sale'>Seed Sale</Radio>
              </Radio.Group>
            </div>
          )}
        </div>
        <div className='option-item'>
          <p className='label'>Affiliate program</p>
          <Radio.Group
            className='flex-column'
            value={verifyToken.affiliateProgram}
            onChange={(e) => handleChange(e.target.value, 'affiliateProgram')}
          >
            <Radio value='disable'>Disable Affiliate</Radio>
            <Radio value='enable'>Enable Affiliate</Radio>
            {verifyToken.affiliateProgram === 'enable' && (
              <InputNumber
                placeholder='Enter percentage. Max: 5, Ex: 1.'
                onChange={(e) => handleChange(e.target.value, 'percentage')}
              />
            )}
          </Radio.Group>
        </div>
      </div>
      <div className='next-step'>
        <Button onClick={handleNextStep} disabled={getDisabled}>
          Next
        </Button>
      </div>
    </div>
  )
}

export default VerifyToken
