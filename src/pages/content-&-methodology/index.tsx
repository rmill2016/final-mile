import React from 'react'
import { Query } from '../../gql/graphql'
import { QueryResult, useQuery } from '@apollo/client'
import { methodology_options } from '../../helpers/constants'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { QUERY_METHODOLOGY } from '../../queries/queries'
import Layout from '../../components/layout'
import Image from 'next/image'

const Content = () => {
  const { data, error, loading }: QueryResult<Query> =
    useQuery(QUERY_METHODOLOGY)
  const methodology = data?.homepage!
  const header = methodology?.header!
  const footer = methodology?.footer!

  const text = methodology?.textCollection?.items[0]?.richText?.json
  if (error) {
    throw error
  }

  if (data) {
    return (
      <>
        <Layout header={header} footer={footer}>
          <section id="methodology" className="relative w-full h-auto">
            <Image
              src={methodology?.background?.url!}
              alt={methodology?.background?.title!}
              width={1920}
              height={1080}
              quality={100}
              priority
              className="absolute inset-0 object-cover w-full h-full -z-1"
            />
            <div className="flex flex-col items-center justify-center w-full h-full gap-8 py-20 xl:grid xl:grid-cols-2 xl:grid-rows-[auto_1fr] max-w-screen-xl mx-auto xl:place-items-center xl:gap-20">
              <h3 className="font-medium text-center text-white xl:col-start-1 xl:col-span-full xl:row-start-1">
                {methodology?.headlinesCollection?.items[0]?.headline}
              </h3>
              <div className="flex flex-col justify-center w-full h-auto gap-8 md:flex-row md:gap-4 xl:col-start-2 xl:row-start-2 xl:flex-col xl:items-center xl:h-full">
                {methodology?.mediaCollection?.items?.map((image) => (
                  <Image
                    key={image?.title!}
                    src={image?.url!}
                    alt={image?.title!}
                    width={700}
                    height={350}
                    quality={100}
                    priority
                    className="w-full h-auto max-w-[550px] xl:w-full odd:mr-auto even:ml-auto"
                  />
                ))}
              </div>
              <div className="w-full max-w-screen-md text-white methodology-content-link xl:col-start-1">
                {documentToReactComponents(text, methodology_options)}
              </div>
            </div>
          </section>
        </Layout>
      </>
    )
  }
}

export default Content
