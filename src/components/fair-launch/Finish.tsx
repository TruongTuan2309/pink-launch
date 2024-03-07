import { useAppSelector } from '@/store/store'
import { Button } from 'antd'

const Finish = () => {
  return (
    <div className='step-finish'>
      <div className='list-info'>
        {/* {listInfo.map((item, index) => {
          if (item.value === '') return
          return (
            <div key={index} className='info-item'>
              <div className='label'>{item.label}</div>
              <div className='value'>{item.value}</div>
            </div>
          )
        })} */}
      </div>
      <div className='button-step'>
        <Button>Back</Button>
        <Button>Next</Button>
      </div>
    </div>
  )
}

export default Finish
