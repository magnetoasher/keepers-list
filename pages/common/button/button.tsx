import classNames from 'classnames'
import styles from './button.module.css'

/** HEADER BUTTONS */ //////////////////

export type HeaderButtonProps = {
  startIcon?: React.ReactNode
  endIcon?: any
  onClick?: () => void
  children: React.ReactNode
}

export const AboutButton = ({
  endIcon,
  onClick = () => {
    console.log('click')
  },
  children,
}: HeaderButtonProps) => {
  return (
    <button onClick={onClick} className={styles.aboutButton}>
      {children}
      {endIcon}
    </button>
  )
}

export const ConnectButton = ({
  startIcon,
  endIcon,
  onClick = () => {
    console.log('click')
  },
  children,
}: HeaderButtonProps) => {
  return (
    <button className={styles.connectButton} onClick={onClick}>
      {startIcon}
      {children}
      {endIcon}
    </button>
  )
}

/** PAGE BUTTONS */ //////////////////

export type PageButtonProps = {
  type: 'primary' | 'secondary'
  disabled?: boolean
  children: React.ReactNode
  onClick?: () => void
}

export const Button = (props: PageButtonProps) => {
  switch (props.type) {
    case 'primary':
      return (
        <FilledButton onClick={props.onClick} disabled={props.disabled}>
          {props.children}
        </FilledButton>
      )
    case 'secondary':
      return (
        <UnfilledButton onClick={props.onClick} disabled={props.disabled}>
          {props.children}
        </UnfilledButton>
      )
  }
}

export const FilledButton = ({
  onClick,
  children,
  disabled,
}: {
  onClick?: () => void
  children: any
  disabled?: boolean
}) => {
  return (
    <button
      className={
        disabled
          ? classNames([styles.primaryDisabled, styles.primary])
          : styles.primary
      }
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export const UnfilledButton = ({
  onClick,
  children,
  disabled,
}: {
  onClick?: () => void
  children: any
  disabled?: boolean
}) => {
  return (
    <button className={styles.secondary} onClick={onClick} disabled={disabled}>
      <div className={styles.secondaryBorder}>
        <svg
          width="64"
          height="55"
          viewBox="0 0 64 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.5 5C0.5 2.51472 2.51472 0.5 5 0.5H58.5C60.9853 0.5 63 2.51472 63 5V37.4289C63 38.6224 62.5259 39.767 61.682 40.6109L49.1109 53.182C48.267 54.0259 47.1224 54.5 45.9289 54.5H5C2.51472 54.5 0.5 52.4853 0.5 50V5Z"
            stroke="white"
          />
        </svg>
      </div>
      {children}
    </button>
  )
}
