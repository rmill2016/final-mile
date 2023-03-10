import { ApolloQueryResult, QueryResult } from '@apollo/client'
import { GetStaticProps } from 'next'
import { Query, TripsCollection } from '../../gql/graphql'
import { QUERY_TRIPS } from '../../queries/queries'
import { client } from '../_app'
import { useRouter, NextRouter } from 'next/router'
import Layout from '../../components/layout'
import Image from 'next/image'
import { FaLongArrowAltDown } from 'react-icons/fa'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { medical_options } from '../../helpers/constants'

const Trips = ({ trips }: { trips: TripsCollection }) => {
  const router = useRouter() as NextRouter
  const trip = trips?.items.filter((e) => e?.slug === router.query.slug)[0]
  const headline = trip?.headline
  const texts = trip?.textCollection?.items!
  const images = trip?.imagesMidCollection!
  const gallery = trip?.imagesGalleryCollection?.items!
  const header = trip?.header!
  const footer = trip?.footer!
  return (
    <Layout header={header} footer={footer}>
      <section className="relative z-auto h-vh">
        <Image
          src={trip?.background?.url!}
          alt={trip?.background?.title!}
          width={1920}
          height={1080}
          priority
          className="absolute inset-0 object-cover w-full h-full -z-1"
        />
        <div className="flex flex-col items-center justify-between w-full h-full max-w-screen-xl pt-20 mx-auto lg:py-28">
          <div className="flex flex-col w-full h-auto gap-4 text-center">
            <h1 className="font-medium tracking-wider text-white">
              {headline?.headline}
            </h1>
            <h3 className="text-white capitalize">{headline?.subtitle}</h3>
          </div>
          <div className="flex flex-col items-center gap-4">
            <h5 className="text-white capitalize">scroll down to learn more</h5>
            <FaLongArrowAltDown className="w-10 h-auto fill-white animate-bounce" />
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col items-center w-full h-full max-w-screen-xl gap-20 mx-auto lg:gap-40">
          {texts.map((text, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-full h-full gap-10 lg:flex-row lg:even:flex-row-reverse lg:gap-20 lg:justify-between"
            >
              <div className="text-black lg:max-w-[50%]">
                {documentToReactComponents(
                  text?.richText?.json,
                  medical_options
                )}
              </div>
              <Image
                src={images?.items[index]?.url!}
                alt={images?.items[index]?.title!}
                width={1920}
                height={1080}
                quality={100}
                className="w-auto lg:w-auto lg:max-h-[800px] shadow"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center w-full h-auto max-w-screen-xl gap-10 pt-20 mx-auto">
          <h3 className="font-medium text-center text-primary">
            Gallery of {trip?.title}
          </h3>
          <div className="flex flex-col items-center justify-center gap-10 md:justify-between md:flex-row md:flex-wrap md:w-full">
            {gallery.map((image, index) => (
              <Image
                key={index}
                src={image?.url!}
                alt={image?.title!}
                width={1920}
                height={1080}
                className="shadow md:w-auto"
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Trips

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = client
  const { data }: ApolloQueryResult<Query> = await apolloClient.query({
    query: QUERY_TRIPS,
  })

  return { props: { trips: data?.tripsCollection } }
}

export const getStaticPaths = async () => {
  const apolloClient = client
  const { data }: ApolloQueryResult<Query> = await apolloClient.query({
    query: QUERY_TRIPS,
  })

  const paths = data?.tripsCollection?.items.map((trip) => {
    return { params: { slug: trip?.slug } }
  })
  return {
    paths,
    fallback: false,
  }
}
