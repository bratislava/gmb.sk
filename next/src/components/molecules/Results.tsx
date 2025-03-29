import Link from '@/src/components/atoms/Link'
import { CommonSearchPageEntityFragment } from '@/src/services/graphql'
import { hasAttributes } from '@/src/utils/isDefined'

interface ResultsProps {
  results: CommonSearchPageEntityFragment[]
  header: string
}

const Results = ({ header, results }: ResultsProps) => {
  return (
    <div className="flex-col">
      <h3 className="text-xxl text-white">{header}</h3>
      <ul className="mt-10 flex h-full flex-col gap-5">
        {results
          ?.filter(hasAttributes)
          .slice(0, 6)
          .map((result, index) => {
            const { slug, title } = result.attributes

            return (
              // eslint-disable-next-line react/no-array-index-key
              <li key={index}>
                <Link
                  key={slug}
                  className="text-md text-white"
                  preserveStyle
                  href={`/detail/${slug}`}
                >
                  {title}
                  {/* TODO show tags, didn't work even before using meilisearch */}
                  {/* {tags ? ( */}
                  {/*  <div className="flex gap-2"> */}
                  {/*    {tags.data.filter(hasAttributes).map((tag) => { */}
                  {/*      return <p key={tag.attributes.slug}>{tag.attributes.title}</p> */}
                  {/*    })} */}
                  {/*  </div> */}
                  {/* ) : null} */}
                </Link>
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export default Results
