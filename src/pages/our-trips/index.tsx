import { QueryResult, useApolloClient, useQuery } from '@apollo/client'
import { GetStaticProps } from 'next'
import React from 'react'
import Layout from '../../components/layout'
import TripSelection from '../../components/tripSelection'
import { Query } from '../../gql/graphql'
import { QUERY_TRIPPAGE } from '../../queries/queries'

export default function TripPage() {
  const { data, error }: QueryResult<Query> = useQuery(QUERY_TRIPPAGE)

  const page = data?.tripPage
  const headline = page?.headline
  const tabSection = page?.tabSection

  const header = page?.header!
  const footer = page?.footer!

  if (error) throw error

  if (data) {
    return (
      <Layout header={header} footer={footer}>
        <section>
          <div className="flex flex-col items-center w-full h-full max-w-screen-xl gap-20 py-20 mx-auto">
            <div className="flex flex-col items-center gap-4">
              <h3 className="font-medium text-center text-primary">
                {headline?.headline}
              </h3>
              <h5 className="text-center text-gray-500">
                {headline?.subtitle}
              </h5>
            </div>
            <TripSelection tabSection={tabSection} />
          </div>
        </section>
      </Layout>
    )
  }
}
