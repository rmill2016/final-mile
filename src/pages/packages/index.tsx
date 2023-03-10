import React from 'react'
import Layout from '../../components/layout'
import { QUERY_PACKAGES } from '../../queries/queries'
import { useQuery, QueryResult } from '@apollo/client'
import { Query } from '../../gql/graphql'
import Image from 'next/image'
import PackagesCard from '../../components/packagesCard'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { packages_options } from '../../helpers/constants'
import Table from '../../components/table'

const PackagesPage = () => {
  const { data, error }: QueryResult<Query> = useQuery(QUERY_PACKAGES)

  const page = data?.homepage
  const header = page?.header!
  const footer = page?.footer!
  const headlines = page?.headlinesCollection?.items!
  const images = page?.mediaCollection?.items!
  const cards = data?.componentCardCollection?.items!
  const tables = data?.componentTableCollection?.items!

  if (error) throw error

  if (data) {
    return (
      <Layout header={header} footer={footer}>
        <section id="packages" className="relative">
          <Image
            width={1920}
            height={1080}
            src={require('../../../public/vector.svg')}
            alt={'svg line'}
            priority
            className="absolute inset-0 w-full border-none outline-none top-52 -z-1"
          />
          <div className="flex flex-col items-center w-full h-full max-w-screen-xl gap-20 pt-20 mx-auto xl:py-40">
            <div className="flex flex-col items-center gap-2">
              <h3 className="font-medium uppercase text-primary">
                {headlines[0]?.headline}
              </h3>
              <h5 className="tracking-wider text-gray-400 uppercase">
                {headlines[0]?.subtitle}
              </h5>
            </div>
            <div className="flex flex-col items-start gap-20 lg:flex-row lg:flex-wrap lg:justify-center lg:items-center xl:flex-nowrap xl:items-start xl:pt-20">
              {cards.map((card) => (
                <PackagesCard
                  key={card?.title}
                  label={card?.label!}
                  image={card?.image!}
                  description={card?.description!}
                />
              ))}
            </div>
          </div>
        </section>
        <section id="buddy-packages" className="relative overflow-hidden">
          <div className="absolute top-10 -left-14 w-32 rotate-[135deg] h-60 bg-primary bg-opacity-30 rounded-full blur-lg"></div>
          <div className="absolute bottom-0 w-32  rounded-full -right-10 h-60 bg-primary bg-opacity-30 blur-lg -rotate-[225deg]"></div>
          <div className="flex flex-col items-center w-full h-auto max-w-screen-xl gap-10 mx-auto lg:grid lg:grid-cols-2 lg:grid-flow-row lg:place-items-center lg:h-vh">
            <h3 className="font-medium text-primary lg:col-start-1 lg:col-span-full lg:text-center">
              {headlines[1]?.headline}
            </h3>
            <div className="text-black">
              {documentToReactComponents(
                page?.textCollection?.items[0]?.richText?.json,
                packages_options
              )}
            </div>
            <Image
              src={images[0]?.url!}
              alt={images[0]?.title!}
              width={400}
              height={600}
              quality={100}
              className="w-auto shadow lg:ml-auto"
            />
          </div>
        </section>
        <section id="pricing">
          <div className="flex flex-col items-center w-full h-auto max-w-screen-xl gap-10 mx-auto lg:gap-20">
            <h3 className="font-medium text-primary">
              {headlines[2]?.headline}
            </h3>
            <Table tables={tables[0]} />
            <Table tables={tables[1]} />
          </div>
        </section>
      </Layout>
    )
  }
}

export default PackagesPage
