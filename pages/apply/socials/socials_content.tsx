import { Button } from '../../common/button/button'
import { Text, Title } from '../../common/typography/typography'
import { ApplyMessages } from '../apply.messages'
import { ConnectSocials } from './connect_socials'

export type SocialsContentProps = {
  onContinueClick: () => void
  onConnectTwitterClick: () => void
  onConnectDiscordClick: () => void
  twitterId?: string
  discordId?: string
  twitterError?: boolean
  discordError?: boolean
}

export const SocialsContent = ({
  onContinueClick,
  onConnectTwitterClick,
  onConnectDiscordClick,
  twitterId,
  discordId,
  twitterError,
  discordError,
}: SocialsContentProps) => {
  const doubleSuccess = true

  return (
    <div className="content">
      <Title>{ApplyMessages.linkAccounts()}</Title>
      <Text type="primaryCenter">
        {ApplyMessages.applicationWorksByReferral()}
      </Text>
      <ConnectSocials
        twitterId={twitterId}
        discordId={discordId}
        twitterError={twitterError}
        discordError={discordError}
        onConnectTwitterClick={onConnectTwitterClick}
        onConnectDiscordClick={onConnectDiscordClick}
      />
      <Button
        type="primary"
        onClick={onContinueClick}
        // TODO replace with discordId && twitterId
        disabled={!doubleSuccess}
      >
        <Text type="secondaryBlack">{ApplyMessages.continue()}</Text>
      </Button>
    </div>
  )
}
