import { observer } from 'mobx-react-lite'
import { Button } from '../../common/button/button'
import { ArrowLeftIcon } from '../../common/icon/icon'
import { RadioSelect } from '../../common/input/input'
import { Question } from '../../common/types'
import { Text, Title } from '../../common/typography/typography'
import { ApplyMessages } from '../apply.messages'
import { Field } from '../apply_presenter'

export type WorldContentProps = {
  onBackClick: () => void
  onContinueClick: () => void
  onFieldChange: (name: Question, value: any) => void
  isWorldContinueDisabled: boolean
  worldFields: Field[]
}

export const WorldContent = observer(
  ({
    onBackClick,
    onContinueClick,
    onFieldChange,
    isWorldContinueDisabled,
    worldFields,
  }: WorldContentProps) => {
    return (
      <div className="content">
        <Title>{ApplyMessages.aboutWorld()}</Title>
        <Text type="primary">{ApplyMessages.dummyWorldLabel()}</Text>
        <div className="spacer"></div>
        <form className="form">
          <RadioSelect
            options={worldFields[0].options}
            name={worldFields[0].name}
            onFieldChange={onFieldChange}
            label={worldFields[0].label}
            value={worldFields[0].value}
          />
          <RadioSelect
            options={worldFields[1].options}
            name={worldFields[1].name}
            onFieldChange={onFieldChange}
            label={worldFields[1].label}
            value={worldFields[1].value}
          />
          <RadioSelect
            options={worldFields[2].options}
            name={worldFields[2].name}
            onFieldChange={onFieldChange}
            label={worldFields[2].label}
            value={worldFields[2].value}
          />
        </form>
        <div className="formFooterContainer">
          <Button type="secondary" onClick={onBackClick}>
            <ArrowLeftIcon />
          </Button>
          <Button
            type="primary"
            onClick={onContinueClick}
            disabled={isWorldContinueDisabled}
          >
            <Text type="secondaryBlack">{ApplyMessages.continue()}</Text>
          </Button>
        </div>
        <div className="footer"></div>
      </div>
    )
  }
)
