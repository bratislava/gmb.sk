import Link from '@/components/atoms/Link'
import { ContactCardEntityFragment } from '@/graphql'
import { WithAttributes } from '@/utils/isDefined'

interface IContactCardProps {
  contact: WithAttributes<ContactCardEntityFragment> | undefined | null
}

const ContactCard = ({ contact }: IContactCardProps) => {
  if (!contact) {
    return null
  }

  const { name, position, email, phone1, phone2 } = contact.attributes

  return (
    <div className="flex flex-col space-y-1 pb-yMd">
      <div className="text-md font-semibold">{name}</div>
      {position && <div className="text-md">{position}</div>}
      {email && (
        <Link
          href={`mailto:${email}`}
          preserveStyle
          className="text-md text-gmbGray underline underline-offset-2"
        >
          {email}
        </Link>
      )}
      {(phone1 || phone2) && (
        <div className="text-md text-gmbGray">
          {phone1 && (
            <Link href={`tel:${phone1}`} preserveStyle className="underline underline-offset-2">
              {phone1}
            </Link>
          )}
          {phone2 && (
            <>
              ,{' '}
              <Link href={`tel:${phone2}`} preserveStyle className="underline underline-offset-2">
                {phone2}
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default ContactCard
