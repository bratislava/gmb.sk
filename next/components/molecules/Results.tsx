import { CommonSearchPageEntityFragment } from '../../graphql'
import { hasAttributes } from '../../utils/isDefined'
import Link from '../atoms/Link'

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
          .map((result) => {
            const { slug, title } = result.attributes
            return (
              <li>
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
