import { ApplyPage } from './apply_page'
import { ApplyPresenter, Field } from './apply_presenter'
import { observer } from 'mobx-react-lite'
import { createRef, useEffect } from 'react'
import { Question } from '../common/types'
import { ApplyMessages } from './apply.messages'
import { getGlobalPresenter } from '../_app'
import Router from 'next/router'
import { useMetaMask } from 'metamask-react'

export const createApplyPage = () => {
  const globalPresenter = getGlobalPresenter()
  const presenter = new ApplyPresenter(bioFields, worldFields, referralFields)

  const onContinueClick = () => presenter.onContinueClick()
  const onBackClick = () => presenter.onBackClick()
  const onSubmit = () => presenter.onSubmit()

  const onConnectTwiiterClick = () => presenter.onConnectTwitterClick()
  const onConnectDiscordClick = () => presenter.onConnectDiscordClick()

  const onBioFieldChange = (name: Question, value: string) =>
    presenter.onBioFieldChange(name, value)
  const onWorldFieldChange = (name: Question, value: string) =>
    presenter.onWorldFieldChange(name, value)
  const onReferralFieldChange = (name: Question, value: string) =>
    presenter.onReferralFieldChange(name, value)

  // eslint-disable-next-line react/display-name
  return observer(() => {
    const { status } = useMetaMask()

    useEffect(() => {
      // TODO move this higher up in the tree
      // if the user refreshes, take them back to the home page
      if (status === 'notConnected') {
        Router.push('/')
      }

      // scroll to the top
      var scrollContainer = document.getElementById('container')
      scrollContainer.scrollTop = 0
    }, [presenter.applicationStep])

    return (
      <ApplyPage
        applicationStep={presenter.applicationStep}
        twitterId={presenter.twitterId}
        discordId={presenter.discordId}
        twitterError={presenter.twitterError}
        discordError={presenter.discordError}
        bioFields={presenter.bioFields}
        isBioContinueDisabled={presenter.isBioContinueDisabled}
        worldFields={presenter.worldFields}
        isWorldContinueDisabled={presenter.isWorldContinueDisabled}
        referralFields={presenter.referralFields}
        isSubmitAppDisabled={presenter.isSubmitAppDisabled}
        onConnectTwitterClick={onConnectTwiiterClick}
        onConnectDiscordClick={onConnectDiscordClick}
        onBackClick={onBackClick}
        onContinueClick={onContinueClick}
        onBioFieldChange={onBioFieldChange}
        onWorldFieldChange={onWorldFieldChange}
        onReferralFieldChange={onReferralFieldChange}
        onSubmit={onSubmit}
      />
    )
  })
}

const bioFields: Field[] = [
  {
    name: Question.ONE,
    label: ApplyMessages.bioOne(),
    options: {
      ['A']: ApplyMessages.bioOneA(),
      ['B']: ApplyMessages.bioOneB(),
      ['C']: ApplyMessages.bioOneC(),
      ['D']: ApplyMessages.bioOneD(),
      ['E']: ApplyMessages.bioOneE(),
    },
  },
  {
    name: Question.TWO,
    label: ApplyMessages.bioTwo(),
    options: {
      ['A']: ApplyMessages.bioTwoA(),
      ['B']: ApplyMessages.bioTwoB(),
      ['C']: ApplyMessages.bioTwoC(),
      ['D']: ApplyMessages.bioTwoD(),
      ['E']: ApplyMessages.bioTwoE(),
    },
  },
  {
    name: Question.THREE,
    label: ApplyMessages.bioThree(),
  },
  {
    name: Question.FOUR,
    label: ApplyMessages.bioFour(),
    options: {
      ['A']: ApplyMessages.bioFourA(),
      ['B']: ApplyMessages.bioFourB(),
      ['C']: ApplyMessages.bioFourC(),
      ['D']: ApplyMessages.bioFourD(),
      ['E']: ApplyMessages.bioFourE(),
    },
  },
  {
    name: Question.FIVE,
    label: ApplyMessages.bioFive(),
  },
]

const worldFields: Field[] = [
  {
    name: Question.ONE,
    label: ApplyMessages.worldOne(),
    options: {
      ['A']: ApplyMessages.worldOneA(),
      ['B']: ApplyMessages.worldOneB(),
      ['C']: ApplyMessages.worldOneC(),
    },
  },
  {
    name: Question.TWO,
    label: ApplyMessages.worldTwo(),
    options: {
      ['A']: ApplyMessages.worldTwoA(),
      ['B']: ApplyMessages.worldTwoB(),
      ['C']: ApplyMessages.worldTwoC(),
    },
  },
  {
    name: Question.THREE,
    label: ApplyMessages.worldThree(),
    options: {
      ['A']: ApplyMessages.worldThreeA(),
      ['B']: ApplyMessages.worldThreeB(),
      ['C']: ApplyMessages.worldThreeC(),
      ['D']: ApplyMessages.worldThreeD(),
    },
  },
]

const referralFields: Field[] = [
  {
    name: Question.ONE,
    label: ApplyMessages.referralOne(),
  },
  {
    name: Question.TWO,
    label: ApplyMessages.referralTwo(),
  },
]
