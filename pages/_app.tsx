import React from 'react'
import '../styles.css'
import 'reflect-metadata'
import { configure, makeAutoObservable } from 'mobx'
import { observable, computed, action } from 'mobx'
import { MetaMaskProvider } from 'metamask-react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

configure({
  enforceActions: 'always',
  reactionRequiresObservable: true,
  disableErrorBoundaries: true,
})
export class GlobalPresenter {
  id?: string

  constructor() {
    makeAutoObservable(this)
  }

  // TODO triggers when connect wallet button is clicked
  // Logic to open metamask and wait for user to sign and connect their wallet
  // Once wallet is retrieved assign address to id
  onConnectWalletClick() {
    console.log('connectWallet clicked!')
  }

  // TODO function to check whether connect wallet address is already in db
  // if it is already in db show an application submitted screen
  checkIdExists() {}

  // TODO should disconnect wallet when user changes wallet or switches chain
  // should always set id back to undefined so state is toggled
  disconnectWallet() {}

  // for testing purposes
  loadId() {
    return ''
  }
}

let globalPresenter
export function getGlobalPresenter() {
  if (!globalPresenter) globalPresenter = new GlobalPresenter()
  return globalPresenter
}

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: any) {
  return (
    <MetaMaskProvider>
      <ToastContainer />
      <Component {...pageProps} />
    </MetaMaskProvider>
  )
}
