import mailchimp from '@mailchimp/mailchimp_marketing'
import { NextApiRequest, NextApiResponse } from 'next'

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER,
})

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
    console.log(`error ${error.toString()}`)
    // TODO: duplicate email gives error 500

    return res.status(500).json({ error: error.message || error.toString() })
  }
}

export default Subscribe
