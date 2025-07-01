/* eslint-disable no-console */
import mailchimp from '@mailchimp/mailchimp_marketing'
import { NextApiRequest, NextApiResponse } from 'next'

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER,
})

/**
 * Based on City library: https://github.com/bratislava/mestskakniznica.sk/blob/master/next/pages/api/subscribe.ts
 */

const Subscribe = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.body

  if (!email) {
    return res.status(400).json({ error: 'Email is required' })
  }

  try {
    if (process.env.MAILCHIMP_AUDIENCE_ID) {
      await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
        email_address: email,
        status: 'subscribed',
      })

      return res.status(201).json({ error: '' })
    }
    throw new Error('Invalid audience.')
  } catch (error: any) {
    // If the e-mail is already subscribed, mailchimp throws an error
    // However we handle it as success so we don't confuse the user
    const isEmailAlreadySubscribed = /member exists/i.test(error?.response?.text)
    if (isEmailAlreadySubscribed) {
      console.log('Email was already subscribed before')

      return res.status(201).json({ error: '' })
    }

    console.log('Newsletter subscription error:')
    console.log(error.message ?? JSON.stringify(error))

    return res.status(500).json({ error: error.message || error.toString() })
  }
}

export default Subscribe
