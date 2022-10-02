import { LandingMessages } from '../../landing/landing.messages'
import { AboutButton, ConnectButton } from '../button/button'
import { maskId } from '../helpers'
import { ArrowDiagonalIcon, CarrotIcon, WalletIcon } from '../icon/icon'
import { Text } from '../typography/typography'
import styles from './header.module.css'

export type HeaderProps = {
  id?: string
}

export const Header = (props: HeaderProps) => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <AboutButton endIcon={<ArrowDiagonalIcon />}>
          <Text type="secondary">{LandingMessages.aboutKPR()}</Text>
        </AboutButton>
        <div className={styles.logo}>
          <svg
            width="38"
            height="70"
            viewBox="0 0 38 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.8466 48.312C12.8466 48.9131 13.3328 49.4003 13.9325 49.4003H15.8551C16.4548 49.4003 16.9409 49.8876 16.9409 50.4886V68.9117C16.9409 69.5128 17.4271 70 18.0268 70H19.9493C20.549 70 21.0352 69.5128 21.0352 68.9117V50.4886C21.0352 49.8876 21.5213 49.4003 22.121 49.4003H24.0436C24.6433 49.4003 25.1294 48.9131 25.1294 48.312V38.14C25.1294 37.539 25.6156 37.0517 26.2153 37.0517H36.4023C37.002 37.0517 37.4881 36.5645 37.4881 35.9634V34.0366C37.4881 33.4355 37.002 32.9483 36.4023 32.9483H26.2153C25.6156 32.9483 25.1294 32.461 25.1294 31.86V21.688C25.1294 21.0869 24.6433 20.5997 24.0436 20.5997H22.121C21.5213 20.5997 21.0352 20.1124 21.0352 19.5114V1.08828C21.0352 0.487241 20.549 0 19.9493 0H18.0268C17.4271 0 16.9409 0.487241 16.9409 1.08828V19.5114C16.9409 20.1124 16.4548 20.5997 15.8551 20.5997H13.9325C13.3328 20.5997 12.8466 21.0869 12.8466 21.688V31.86C12.8466 32.461 12.3605 32.9483 11.7608 32.9483H1.59707C0.99738 32.9483 0.51123 33.4355 0.51123 34.0366V35.9634C0.51123 36.5645 0.997379 37.0517 1.59707 37.0517H11.7608C12.3605 37.0517 12.8466 37.539 12.8466 38.14V48.312ZM18.024 20.5772C17.4243 20.5772 16.9382 21.0644 16.9382 21.6655V31.857C16.9382 32.4581 16.452 32.9454 15.8523 32.9454H13.9297C13.33 32.9454 12.8439 33.4326 12.8439 34.0336V35.9708C12.8439 36.5719 13.33 37.0591 13.9297 37.0591H15.8523C16.452 37.0591 16.9382 37.5464 16.9382 38.1474V48.3288C16.9382 48.9299 17.4243 49.4171 18.024 49.4171H19.9467C20.5464 49.4171 21.0325 48.9299 21.0325 48.3288V38.1372C21.0325 37.5361 21.5187 37.0489 22.1184 37.0489H24.041C24.6407 37.0489 25.1268 36.5616 25.1268 35.9606V34.0413C25.1268 33.4403 24.6407 32.953 24.041 32.953H22.1184C21.5187 32.953 21.0325 32.4658 21.0325 31.8647V21.6655C21.0325 21.0644 20.5464 20.5772 19.9467 20.5772H18.024Z"
              fill="white"
            />
          </svg>
        </div>
        <ConnectButton startIcon={<WalletIcon />} endIcon={<CarrotIcon />}>
          <Text type="secondary">
            {props.id ? maskId(props.id) : LandingMessages.connectWallet()}
          </Text>
        </ConnectButton>
      </div>
      <div className={styles.edgeContainer}>
        <div className={styles.edgeTop}></div>
        <svg
          width="258"
          height="53"
          viewBox="0 0 258 53"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.5 1.00037L45.6177 1.00069C52.346 1.00074 58.6233 4.38382 62.3228 10.0037L87.0059 47.4992C88.8557 50.3091 91.9944 52.0007 95.3586 52.0007L161.436 52.0007C164.8 52.0007 167.939 50.3091 169.789 47.4992L194.472 10.0037C198.172 4.38381 204.449 1.00072 211.177 1.00066L258 1.00023"
            stroke="white"
            strokeOpacity="0.15"
          />
        </svg>
        <div className={styles.edgeTop}></div>
        <div></div>
      </div>
    </div>
  )
}
