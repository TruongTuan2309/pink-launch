import AdditionalInfo from '@/components/fair-launch/AdditionalInfo'
import Finish from '@/components/fair-launch/Finish'
import LaunchInfo from '@/components/fair-launch/LaunchInfo'
import VerifyToken from '@/components/fair-launch/VerifyToken'
import CardLaunchpad from '@/components/list-launchpad/CardLaunchpad'

const Home = () => {
  return (
    <div className='home'>
      <VerifyToken />
      <LaunchInfo />
      <AdditionalInfo />
      <Finish />
    </div>
  )
}

export default Home
