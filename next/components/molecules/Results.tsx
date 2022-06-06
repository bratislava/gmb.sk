import React from 'react'
import { ContentPage } from '../../graphql'
import { hasAttributes } from '../../utils/isDefined'
import Link from '../atoms/Link'

interface ResultsProps {
  results: ContentPage[]
  header: string
}

const Results = ({ header, results }: ResultsProps) => {
  return (
    <div className="flex-col">
      <h3 className="text-white text-xxl ">{header}</h3>
      <div className="flex flex-col h-full gap-5 mt-10">
        {results?.slice(0, 3).map((result) => {
          return (
            <Link key={result.slug} className="text-white" preserveStyle href={`/detail/${result.slug}`}>
              <p className="text-md">{result.title}</p>
              {result.tags ? (
                <div className="flex gap-2">
                  {result.tags.data.filter(hasAttributes).map((tag) => {
                    return <p key={tag.id}>{tag.attributes.title}</p>
                  })}
                </div>
              ) : null}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Results
