import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/router'
import { LandingPage } from './landing_page'
import { useMetaMask } from 'metamask-react'

export const createLandingPage = () => {
  const { connect, account } = useMetaMask()
  const onConnectWalletClick = () => {
    connect()
  }
  // eslint-disable-next-line react/display-name

  return observer(() => {
    const router = useRouter()
    const onContinueClick = () => {
      router.push('/apply')
    }

    return (
      <LandingPage
        id={account}
        onContinueClick={onContinueClick}
        onConnectWalletClick={onConnectWalletClick}
      />
    )
  })
}
