import { createHeader } from './common/header/create'
import { UserProps } from './common/types'
import { createLandingPage } from './landing/create'

type LandingPageProps = {
  user: UserProps
}

export const Landing: React.FC<LandingPageProps> = () => {
  const LandingPage = createLandingPage()
  const Header = createHeader()
  // eslint-disable-next-line react/display-name
  return (
    <div>
      <Header />
      <LandingPage />
    </div>
  )
}

export default Landing
