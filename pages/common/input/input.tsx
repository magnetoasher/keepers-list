import classNames from 'classnames'
import { observer } from 'mobx-react-lite'
import { Question } from '../types'
import { Text } from '../typography/typography'
import styles from './input.module.css'

export type RadioSelectProps = {
  options: { [key: string]: string }
  name: Question
  onFieldChange: (name: Question, value: string) => void
  label: string
  value?: string
}

export const RadioSelect = (props: RadioSelectProps) => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onFieldChange(props.name, event.target.id)
  }

  return (
    <div className={styles.choiceContainer}>
      <Text type="secondary">{props.label}</Text>
      <div className="spacer"></div>
      {Object.keys(props.options).map((key) => (
        <div
          className={classNames([styles.format, styles.formatHighlight])}
          key={key}
        >
          <div className={styles.radioLabelContainer}>
            <label className={styles.radioContainer}>
              <input
                className={styles.radio}
                type="radio"
                name={props.name}
                onChange={onChange}
                id={key}
                checked={props.value ? props.value === key : false}
              />
              <span className={styles.radioInnerCircle}></span>
            </label>
          </div>
          <Text type="primary">{props.options[key]}</Text>
        </div>
      ))}
    </div>
  )
}

export type TextAreaInputProps = {
  onFieldChange: (name: Question, value: string) => void
  label: string
  name: Question
  value?: string
}

export const TextAreaInput = (props: TextAreaInputProps) => {
  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    props.onFieldChange(props.name, event.target.value)
  }

  return (
    <div className={styles.choiceContainer}>
      <Text type="secondary">{props.label}</Text>
      <div className="spacer"></div>
      <textarea
        className={styles.textArea}
        onChange={onChange}
        value={props.value}
      ></textarea>
    </div>
  )
}

export type TextInputProps = {
  onFieldChange: (name: Question, value: string) => void
  label: string
  name: Question
  value?: string
}

export const TextInput = (props: TextInputProps) => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onFieldChange(props.name, event.target.value)
  }

  return (
    <div className={styles.choiceContainer}>
      <Text type="secondary">{props.label}</Text>
      <div className="spacer"></div>
      <input
        className={styles.text}
        type="text"
        onChange={onChange}
        defaultValue={props.value}
      ></input>
    </div>
  )
}
