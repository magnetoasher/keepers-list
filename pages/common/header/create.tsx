import { useMetaMask } from 'metamask-react'
import { observer } from 'mobx-react-lite'
import { Header } from './header'

export const createHeader = () => {
  const { account } = useMetaMask()
  return observer(() => {
    return <Header id={account} />
  })
}
