import React from 'react'
import { NumericFormat } from 'react-number-format'

interface InputNumberProps {
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  disabled?: boolean
  className?: string
  isAllowNegative?: boolean
  prefix?: string
  suffix?: string
}

const InputNumber = ({
  value,
  onChange,
  placeholder,
  disabled,
  className = '',
  isAllowNegative = false,
  prefix,
  suffix,
  ...rest
}: InputNumberProps) => {
  return (
    <NumericFormat
      allowNegative={isAllowNegative}
      allowLeadingZeros
      disabled={disabled}
      suffix={suffix}
      prefix={prefix}
      value={value}
      onChange={onChange}
      className={`input-number ${className}`}
      {...rest}
    />
  )
}

export default InputNumber
