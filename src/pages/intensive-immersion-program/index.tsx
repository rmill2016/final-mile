import { QueryResult, useQuery } from '@apollo/client'
import React from 'react'
import Layout from '../../components/layout'
import { Query } from '../../gql/graphql'
import { QUERY_INTENSIVE_IMMERSION } from '../../queries/queries'
import Image from 'next/image'
import { FaLongArrowAltDown } from 'react-icons/fa'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { intensive_options } from '../../helpers/constants'

const Intensive = () => {
  const { data, error }: QueryResult<Query> = useQuery(
    QUERY_INTENSIVE_IMMERSION
  )
  const page = data?.homepage
  const headlines = page?.headlinesCollection?.items!
  const header = page?.header!
  const footer = page?.footer!
  const content = page?.textCollection?.items[0]?.richText?.json!

  if (error) throw error

  if (data) {
    return (
      <Layout header={header} footer={footer}>
        <section className="relative z-auto h-vh">
          <Image
            src={page?.background?.url!}
            alt={page?.background?.title!}
            width={1920}
            height={1080}
            quality={100}
            priority
            className="absolute inset-0 object-cover w-full h-full -z-1"
          />
          <div className="flex flex-col items-center justify-between w-full h-full max-w-screen-xl pt-20 mx-auto lg:py-28">
            <div className="flex flex-col w-full h-auto gap-4 text-center">
              <h1 className="tracking-wider text-white uppercase">
                {headlines[0]?.headline}
              </h1>
              <h3 className="capitalize text-primary">
                {headlines[0]?.subtitle}
              </h3>
            </div>
            <div className="flex flex-col items-center gap-4">
              <h5 className="text-white capitalize">
                scroll down to learn more
              </h5>
              <FaLongArrowAltDown className="w-10 h-auto fill-white animate-bounce" />
            </div>
          </div>
        </section>
        <section id="intensive-immersion">
          <div className="flex flex-col items-center w-full h-full max-w-screen-xl gap-10 mx-auto">
            <h3 className="italic text-center text-primary">
              {headlines[1]?.headline}
            </h3>
            <div className="text-black intensive-immersion-links">
              {documentToReactComponents(content, intensive_options)}
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default Intensive
