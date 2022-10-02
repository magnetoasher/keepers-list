import { Text, Title } from '../common/typography/typography'
import { LandingMessages } from '../landing/landing.messages'
import styles from './success_page.module.css'

export const SuccessPage = () => {
  return (
    <div className="container">
      <div className="content">
        <Title type="primary">{LandingMessages.applicationCompleted()}</Title>
        <Text type="primaryCenter">{LandingMessages.congrats()}</Text>
        <div className={styles.statusOutline}>
          <Text type="secondary">{LandingMessages.applicationStatus()}</Text>
          <Title type="secondary">{LandingMessages.status()}</Title>
        </div>
      </div>
    </div>
  )
}
