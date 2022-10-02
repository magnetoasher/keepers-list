import { observer } from 'mobx-react-lite'
import { Button } from '../../common/button/button'
import { ArrowLeftIcon } from '../../common/icon/icon'
import { TextAreaInput, TextInput } from '../../common/input/input'
import { Question } from '../../common/types'
import { Text, Title } from '../../common/typography/typography'
import { ApplyMessages } from '../apply.messages'
import { Field } from '../apply_presenter'

type ReferralContentProps = {
  isSubmitAppDisabled: boolean
  referralFields: Field[]
  onFieldChange: (name: Question, value: string) => void
  onBackClick: () => void
  onSubmit: () => void
}

export const ReferralContent = observer(
  ({
    isSubmitAppDisabled,
    referralFields,
    onFieldChange,
    onBackClick,
    onSubmit,
  }: ReferralContentProps) => {
    return (
      <div className="content">
        <Title>{ApplyMessages.referralTitle()}</Title>
        <Text type="primaryCenter">{ApplyMessages.referralSubtitle()}</Text>
        <div className="spacer"></div>
        <form className="form">
          <TextInput
            name={referralFields[0].name}
            onFieldChange={onFieldChange}
            label={referralFields[0].label}
            value={referralFields[0].value}
          />
          <TextAreaInput
            name={referralFields[1].name}
            onFieldChange={onFieldChange}
            label={referralFields[1].label}
            value={referralFields[1].value}
          />
        </form>
        <div className="formFooterContainer">
          <Button type="secondary" onClick={onBackClick}>
            <ArrowLeftIcon />
          </Button>
          <Button
            type="primary"
            onClick={onSubmit}
            disabled={isSubmitAppDisabled}
          >
            <Text type="secondaryBlack">{ApplyMessages.submitApp()}</Text>
          </Button>
        </div>
        <div className="footer"></div>
      </div>
    )
  }
)
