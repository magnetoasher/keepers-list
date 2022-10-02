import classNames from 'classnames'
import styles from './typography.module.css'

type TitleProps = {
  type?: 'primary' | 'secondary'
  children: React.ReactNode
}

type TextProps = {
  type:
    | 'primary'
    | 'primaryCenter'
    | 'secondary'
    | 'secondaryBlack'
    | 'primaryGreen'
    | 'primaryRed'
  children: React.ReactNode
}

export const Title = ({ type, children }: TitleProps) => {
  switch (type) {
    case 'primary':
      return <div className={styles.title}>{children}</div>
    case 'secondary':
      return (
        <div className={classNames([styles.title, styles.orange])}>
          {children}
        </div>
      )
    default:
      return <div className={styles.title}>{children}</div>
  }
}

export const Text = (props: TextProps) => {
  switch (props.type) {
    case 'primary':
      return <div className={styles.primary}>{props.children}</div>
    case 'primaryCenter':
      return <div className={styles.primaryCenter}>{props.children}</div>
    case 'primaryGreen':
      return (
        <div className={classNames([styles.primary, styles.green])}>
          {props.children}
        </div>
      )
    case 'primaryRed':
      return (
        <div className={classNames([styles.primary, styles.red])}>
          {props.children}
        </div>
      )
    case 'secondary':
      return <div className={styles.secondary}>{props.children}</div>
    case 'secondaryBlack':
      return <div className={styles.secondaryBlack}>{props.children}</div>
  }
}
