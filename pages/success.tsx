import { createHeader } from './common/header/create'
import { SuccessPage } from './success/success_page'

export type SuccessPageProps = {}

export const Sucess: React.FC<SuccessPageProps> = (props) => {
  const Header = createHeader()
  // eslint-disable-next-line react/display-name
  return (
    <div>
      <Header />
      <SuccessPage />
    </div>
  )
}

export default Sucess
