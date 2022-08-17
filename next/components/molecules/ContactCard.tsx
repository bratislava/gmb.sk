import React from 'react'

import PhoneIcon from '../../assets/icons/phone.svg'
import MailIcon from '../../assets/icons/social-platforms/E-mail.svg'
import { ContactCardEntityFragment } from '../../graphql'
import { WithAttributes } from '../../utils/isDefined'
import Link from '../atoms/Link'

interface IContactCardProps {
  contact: WithAttributes<ContactCardEntityFragment> | undefined | null
}

const ContactCard = ({ contact }: IContactCardProps) => {
  if (!contact) {
    return null
  }

  const { name, position, email, phone1, phone2 } = contact.attributes

  return (
    <div className="flex border-2 border-black px-xMd py-yMd text-sm">
      <div className="flex flex-col space-y-1">
        <h4 className="text-md">{name}</h4>
        <div className="pb-3">{position}</div>
        {email && (
          <Link href={`mailto:${email}`} preserveStyle>
            {email}
          </Link>
        )}
        {(phone1 || phone2) && (
          <div>
            {phone1 && (
              <>
                <Link href={`tel:${phone1}`} preserveStyle>
                  {phone1}
                </Link>
                ,{' '}
              </>
            )}
            {phone2 && (
              <Link href={`tel:${phone2}`} preserveStyle>
                {phone2}
              </Link>
            )}
          </div>
        )}
      </div>
      {/* TODO add icons */}
      {/* <div className="flex flex-row space-x-8">
        <PhoneIcon className="dw-[32px]" />
        <MailIcon className="dw-[32px]" />
      </div> */}
    </div>
  )
}

export default ContactCard
