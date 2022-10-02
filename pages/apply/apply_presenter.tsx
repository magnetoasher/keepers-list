import { makeAutoObservable } from 'mobx'
import { GetStaticProps } from 'next'
import Router from 'next/router'
import { toast } from 'react-toastify'

import { Question } from '../common/types'
import prisma from '../../lib/prisma'

export const enum ApplicationStep {
  SOCIALS = 'social',
  BIO = 'bio',
  WORLD = 'world',
  REFERRAL = 'referral',
}

export type Field = {
  name: Question
  label: string
  value?: string
  error?: string
  options?: { [key: string]: string }
}

// db function
export const getStaticProps: GetStaticProps = async () => {
  const user = await prisma.user.findUnique({
    where: { id: '0xA6439D7Fe3EF5ab1E14b567975dca8a1C4ef21F6' },
  })
  return {
    props: { user },
    revalidate: 10,
  }
}

export class ApplyPresenter {
  applicationStep: ApplicationStep = ApplicationStep.SOCIALS

  twitterId: string
  discordId: string
  twitterError: boolean
  discordError: boolean

  bioFields: Field[]
  worldFields: Field[]
  referralFields: Field[]

  constructor(
    bioFields: Field[],
    worldFields: Field[],
    referralFields: Field[]
  ) {
    this.bioFields = bioFields
    this.worldFields = worldFields
    this.referralFields = referralFields

    makeAutoObservable(this, {}, { deep: true })
  }

  get isBioContinueDisabled() {
    return this.bioFields && this.bioFields.some((field) => !field.value)
  }

  get isWorldContinueDisabled() {
    return this.worldFields && this.worldFields.some((field) => !field.value)
  }

  get isReferralContinueDisabled() {
    // console.log(this.referralFields.some((field) => !field.value));
    return (
      this.referralFields && this.referralFields.some((field) => !field.value)
    )
  }

  get isSubmitAppDisabled() {
    return (
      this.isBioContinueDisabled ||
      this.isWorldContinueDisabled ||
      this.isReferralContinueDisabled
    )
  }

  onContinueClick() {
    if (this.applicationStep === ApplicationStep.SOCIALS) {
      this.applicationStep = ApplicationStep.BIO
    } else if (this.applicationStep === ApplicationStep.BIO) {
      this.applicationStep = ApplicationStep.WORLD
    } else if (this.applicationStep === ApplicationStep.WORLD) {
      this.applicationStep = ApplicationStep.REFERRAL
    }
  }

  onBackClick() {
    if (this.applicationStep === ApplicationStep.BIO) {
      this.applicationStep = ApplicationStep.SOCIALS
    } else if (this.applicationStep === ApplicationStep.WORLD) {
      this.applicationStep = ApplicationStep.BIO
    } else if (this.applicationStep === ApplicationStep.REFERRAL) {
      this.applicationStep = ApplicationStep.WORLD
    }
  }

  async onSubmit() {
    if (!this.isSubmitAppDisabled) {
      const formData = {}
      this.bioFields.forEach((field, index) => {
        const key = `bio${String.fromCharCode('A'.charCodeAt(0) + index)}`
        if (field.options) {
          formData[key] = field.options[field.value]
        } else {
          formData[key] = field.value
        }
      })
      this.worldFields.forEach((field, index) => {
        const key = `world${String.fromCharCode('A'.charCodeAt(0) + index)}`
        if (field.options) {
          formData[key] = field.options[field.value]
        } else {
          formData[key] = field.value
        }
      })
      this.referralFields.forEach((field, index) => {
        const key = `referral${String.fromCharCode('A'.charCodeAt(0) + index)}`
        if (field.options) {
          formData[key] = field.options[field.value]
        } else {
          formData[key] = field.value
        }
      })
      // TODO API CALL TO POST DATA TO BE
      // fields, worldFields, referralFields
      const data = await fetch('/api/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ formData }),
      })

      if (data.status === 201) {
        Router.push('/success')
      } else {
        toast.error('Something went wrong!', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        })
      }
    }
  }

  onConnectTwitterClick = () => {
    console.log('do some backend magic to connect twitter')
  }

  onConnectDiscordClick = () => {
    console.log('do some backend magic to connect discord')
  }

  onBioFieldChange(name: Question, value: string) {
    this.bioFields.find((field) => field.name == name).value = value
    // console.log(toJS(this.fields));
  }

  onWorldFieldChange(name: Question, value: string) {
    this.worldFields.find((field) => field.name == name).value = value
    // console.log(toJS(this.worldFields));
  }

  onReferralFieldChange(name: Question, value: string) {
    this.referralFields.find((field) => field.name == name).value = value
    // console.log(toJS(this.referralFields));
  }
}
