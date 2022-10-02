import classNames from 'classnames'
import { Color } from '../../common/helpers'
import {
  ArrowRightIcon,
  DiscordIcon,
  TwitterIcon,
} from '../../common/icon/icon'
import { Text } from '../../common/typography/typography'
import { ApplyMessages } from '../apply.messages'
import styles from './connect_socials.module.css'

export type ConnectSocialsProps = {
  onConnectTwitterClick?: () => void
  onConnectDiscordClick?: () => void
  twitterId?: string
  discordId?: string
  twitterError?: boolean
  discordError?: boolean
}

export const ConnectSocials = (props: ConnectSocialsProps) => {
  const doubleError = props.discordError && props.twitterError
  const doubleSuccess = props.discordId && props.twitterId

  return (
    <div
      className={
        doubleError
          ? styles.connectSocialsContainer
          : doubleSuccess
          ? classNames([
              styles.connectSocialsContainer,
              styles.connectSocialsContainerGreen,
            ])
          : styles.connectSocialsContainer
      }
    >
      {/* TWITTER //////////// */}

      {props.twitterError && (
        <button
          className={classNames([
            styles.connectSocialsButton,
            styles.borderBottom,
          ])}
        >
          <TwitterIcon color={Color.RED} />
          <Text type="primaryRed">{ApplyMessages.twitterFailed()}</Text>
          <ArrowRightIcon color={Color.RED} />
        </button>
      )}

      {props.twitterId && !props.twitterError && (
        <button
          className={
            props.discordId
              ? classNames([
                  styles.connectSocialsButton,
                  styles.borderBottomGreen,
                ])
              : classNames([
                  styles.connectSocialsButton,
                  styles.connectSocialsContainerGreen,
                ])
          }
        >
          <TwitterIcon color={Color.GREEN} />
          <Text type="primaryGreen">{`@${props.twitterId}`}</Text>
          <ArrowRightIcon color={Color.GREEN} />
        </button>
      )}

      {!props.twitterId && !props.twitterError && (
        <button
          className={classNames([
            styles.connectSocialsButton,
            styles.borderBottom,
          ])}
          onClick={props.onConnectTwitterClick}
        >
          <TwitterIcon />
          <Text type="primary">{ApplyMessages.connectTwitter()}</Text>
          <ArrowRightIcon />
        </button>
      )}

      {/* DISCORD /////////// */}

      {props.discordError && (
        <button className={styles.connectSocialsButton}>
          <DiscordIcon color={Color.RED} />
          <Text type="primaryRed">{ApplyMessages.discordFailed()}</Text>
          <ArrowRightIcon color={Color.RED} />
        </button>
      )}

      {props.discordId && !props.discordError && (
        <button
          className={
            props.twitterId
              ? styles.connectSocialsButton
              : classNames([
                  styles.connectSocialsButton,
                  styles.connectSocialsContainerGreen,
                ])
          }
        >
          <DiscordIcon color={Color.GREEN} />
          <Text type="primaryGreen">{props.discordId}</Text>
          <ArrowRightIcon color={Color.GREEN} />
        </button>
      )}

      {!props.discordId && !props.discordError && (
        <button
          className={styles.connectSocialsButton}
          onClick={props.onConnectDiscordClick}
        >
          <DiscordIcon />
          <Text type="primary">{ApplyMessages.connectDiscord()}</Text>
          <ArrowRightIcon />
        </button>
      )}
    </div>
  )
}
