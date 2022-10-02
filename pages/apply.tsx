import { createApplyPage } from './apply/create'
import { createHeader } from './common/header/create'
import { Header } from './common/header/header'

const Apply = () => {
  const ApplyPage = createApplyPage()
  const Header = createHeader()
  return (
    <>
      <Header />
      <div className="modalContainer">
        <div className="container" id="container">
          <ApplyPage />
        </div>
      </div>
    </>
  )
}

export default Apply
