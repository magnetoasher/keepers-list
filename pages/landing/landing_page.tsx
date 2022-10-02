import { Button } from '../common/button/button'
import { maskId } from '../common/helpers'
import { WalletIcon } from '../common/icon/icon'
import { Text, Title } from '../common/typography/typography'
import { LandingMessages } from './landing.messages'
import styles from './landing_page.module.css'

export type LandingPageProps = {
  id: string
  onContinueClick: () => void
  onConnectWalletClick: () => void
}

export const LandingPage = (props: LandingPageProps) => {
  return (
    <div className="container">
      <div className="content">
        <Title>{LandingMessages.keepersList()}</Title>
        <Text type="primaryCenter">{LandingMessages.approvedMemebrs()}</Text>
        <Text type="primaryCenter">{LandingMessages.communityCulture()}</Text>

        {props.id ? (
          <>
            <div className={styles.addressContainer}>
              <WalletIcon />
              <Text type="secondary">{maskId(props.id)}</Text>
            </div>
            <Button type="primary" onClick={props.onContinueClick}>
              <Text type="secondaryBlack">{LandingMessages.continue()}</Text>
            </Button>
          </>
        ) : (
          <Button type="primary" onClick={props.onConnectWalletClick}>
            <Text type="secondaryBlack">{LandingMessages.connectWallet()}</Text>
          </Button>
        )}
      </div>
    </div>
  )
}
