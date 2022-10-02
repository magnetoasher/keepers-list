import { observer } from 'mobx-react-lite'
import { Button } from '../../common/button/button'
import { ArrowLeftIcon } from '../../common/icon/icon'
import { RadioSelect, TextAreaInput } from '../../common/input/input'
import { Question } from '../../common/types'
import { Text, Title } from '../../common/typography/typography'
import { ApplyMessages } from '../apply.messages'
import { Field } from '../apply_presenter'

export type BioContentProps = {
  bioFields: Field[]
  isBioContinueDisabled: boolean
  onContinueClick: () => void
  onBioFieldChange: (name: Question, value: string | boolean) => void
}

export const BioContent = observer(
  ({
    bioFields,
    isBioContinueDisabled,
    onContinueClick,
    onBioFieldChange,
  }: BioContentProps) => {
    return (
      <div className="content">
        <Title>{ApplyMessages.aboutYourself()}</Title>
        <Text type="primary">{ApplyMessages.knowYou()}</Text>
        <div className="spacer"></div>
        <form className="form">
          <RadioSelect
            options={bioFields[0].options}
            name={bioFields[0].name}
            onFieldChange={onBioFieldChange}
            label={bioFields[0].label}
            value={bioFields[0].value}
          />
          <RadioSelect
            options={bioFields[1].options}
            name={bioFields[1].name}
            onFieldChange={onBioFieldChange}
            label={bioFields[1].label}
            value={bioFields[1].value}
          />
          <TextAreaInput
            name={bioFields[2].name}
            onFieldChange={onBioFieldChange}
            label={bioFields[2].label}
            value={bioFields[2].value}
          />
          <RadioSelect
            options={bioFields[3].options}
            name={bioFields[3].name}
            onFieldChange={onBioFieldChange}
            label={bioFields[3].label}
            value={bioFields[3].value}
          />
          <TextAreaInput
            name={bioFields[4].name}
            onFieldChange={onBioFieldChange}
            label={bioFields[4].label}
            value={bioFields[4].value}
          />
        </form>
        <Button
          type="primary"
          disabled={isBioContinueDisabled}
          onClick={onContinueClick}
        >
          <Text type="secondaryBlack">{ApplyMessages.continue()}</Text>
        </Button>
        <div className="footer"></div>
      </div>
    )
  }
)
