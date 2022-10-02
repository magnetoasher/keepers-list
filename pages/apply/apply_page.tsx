import { observer } from 'mobx-react'
import { useEffect } from 'react'
import { Question } from '../common/types'
import { ApplicationStep, Field } from './apply_presenter'
import { BioContent } from './bio/bio_content'
import { ReferralContent } from './referral/referral_content'
import { SocialsContent } from './socials/socials_content'
import { WorldContent } from './world/world_content'

type ApplyPageProps = {
  applicationStep: ApplicationStep
  twitterId?: string
  discordId?: string
  twitterError?: boolean
  discordError?: boolean
  bioFields: Field[]
  worldFields: Field[]
  referralFields: Field[]
  isBioContinueDisabled: boolean
  isWorldContinueDisabled: boolean
  isSubmitAppDisabled: boolean
  onConnectTwitterClick: () => void
  onConnectDiscordClick: () => void
  onBackClick: () => void
  onContinueClick: () => void
  onBioFieldChange: (name: Question, value: string) => void
  onWorldFieldChange: (name: Question, value: string) => void
  onReferralFieldChange: (name: Question, value: string) => void
  onSubmit: () => void
}

export const ApplyPage = ({
  applicationStep,
  twitterId,
  discordId,
  twitterError,
  discordError,
  bioFields,
  worldFields,
  referralFields,
  isBioContinueDisabled,
  isWorldContinueDisabled,
  isSubmitAppDisabled,
  onConnectTwitterClick,
  onConnectDiscordClick,
  onBackClick,
  onContinueClick,
  onBioFieldChange,
  onWorldFieldChange,
  onReferralFieldChange,
  onSubmit,
}: ApplyPageProps) => {
  switch (applicationStep) {
    case ApplicationStep.SOCIALS:
      return (
        <SocialsContent
          onContinueClick={onContinueClick}
          twitterId={twitterId}
          discordId={discordId}
          twitterError={twitterError}
          discordError={discordError}
          onConnectTwitterClick={onConnectTwitterClick}
          onConnectDiscordClick={onConnectDiscordClick}
        />
      )
    case ApplicationStep.BIO:
      return (
        <BioContent
          bioFields={bioFields}
          isBioContinueDisabled={isBioContinueDisabled}
          onContinueClick={onContinueClick}
          onBioFieldChange={onBioFieldChange}
        />
      )
    case ApplicationStep.WORLD:
      return (
        <WorldContent
          onBackClick={onBackClick}
          onContinueClick={onContinueClick}
          onFieldChange={onWorldFieldChange}
          worldFields={worldFields}
          isWorldContinueDisabled={isWorldContinueDisabled}
        />
      )
    case ApplicationStep.REFERRAL:
      return (
        <ReferralContent
          onBackClick={onBackClick}
          onSubmit={onSubmit}
          onFieldChange={onReferralFieldChange}
          referralFields={referralFields}
          isSubmitAppDisabled={isSubmitAppDisabled}
        />
      )
    default:
      return (
        <SocialsContent
          onContinueClick={onContinueClick}
          twitterId={twitterId}
          discordId={discordId}
          twitterError={twitterError}
          discordError={discordError}
          onConnectTwitterClick={onConnectTwitterClick}
          onConnectDiscordClick={onConnectDiscordClick}
        />
      )
  }
}
