import { QueryResult, useQuery } from '@apollo/client'
import React from 'react'
import Layout from '../../components/layout'
import { Headline, Query } from '../../gql/graphql'
import { QUERY_BENEFITS } from '../../queries/queries'
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { benefits_options } from '../../helpers/constants'
import { useRouter, NextRouter } from 'next/router'
import { motion } from 'framer-motion'
import { FadeInDown } from '../../helpers/transitions'
import Link from 'next/link'

const Benefits = () => {
  const { data, error }: QueryResult<Query> = useQuery(QUERY_BENEFITS)
  const page = data?.homepage
  const background = page?.background!
  const header = page?.header!
  const footer = page?.footer!
  const headlines = page?.headlinesCollection?.items!
  const images = page?.mediaCollection?.items!
  const textContent = page?.textCollection?.items.filter((e) =>
    e?.title?.toLowerCase().includes('benefits')
  )!
  const router = useRouter() as NextRouter

  function Scroll(headline: Headline | null) {
    if (headline) {
      router.push(
        `#${headline?.headline?.toLowerCase().replace(/ /g, '-')}`,
        undefined,
        { scroll: false }
      )
    }
  }
  if (error) throw error

  if (data) {
    return (
      <Layout header={header} footer={footer}>
        <section className="relative">
          <div className="absolute inset-0 w-full h-[50vh] bg-primary -z-1"></div>
          <div className="max-w-screen-xl mx-auto pt-28 lg:h-auto">
            <div className="flex flex-col items-center w-full h-auto gap-8">
              <h3 className="text-center text-white capitalize">
                {headlines[0]?.headline}
              </h3>
              <Image
                src={background?.url!}
                alt={background?.title!}
                width={1920}
                height={1080}
                className="object-cover w-full h-auto max-w-screen-lg mx-auto shadow aspect-video"
              />
              <div className="flex flex-wrap items-center justify-center h-auto gap-10 md:gap-20 w-fit md:h-full">
                {headlines.slice(1, 4).map((headline, index: number) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-10 md:justify-between md:h-[100px]"
                  >
                    <h5
                      className="relative text-center cursor-pointer text-primary after:absolute after:bg-primary after:w-full after:h-px after:bottom-0 after:left-0"
                      onClick={() => Scroll(headline)}
                    >
                      {headline?.headline}
                    </h5>
                    <Image
                      src={images[index]?.url!}
                      alt={images[index]?.title!}
                      width={150}
                      height={150}
                      className="w-14 md:w-20"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="flex flex-col items-center w-full h-full max-w-screen-xl gap-10 mx-auto lg:gap-32">
            <motion.div
              variants={FadeInDown}
              initial="hide"
              whileInView="show"
              id={`${textContent[0]?.richText?.json?.content[0]?.content[0]?.value
                .toLowerCase()
                .replace(/ /g, '-')}`}
              className="flex flex-col items-center w-full h-full gap-10 scroll-mt-32 lg:flex-row lg:even:flex-row-reverse lg:gap-20"
            >
              <div className="text-black">
                {documentToReactComponents(
                  textContent[0]?.richText?.json,
                  benefits_options
                )}
              </div>
              <Image
                src={images[3]?.url!}
                alt={images[3]?.title!}
                width={1920}
                height={1080}
                className="w-full max-w-screen-sm mx-auto select-none max-h-[700px] shadow"
              />
            </motion.div>
            <motion.div
              variants={FadeInDown}
              initial="hide"
              whileInView="show"
              id={`${textContent[1]?.richText?.json?.content[0]?.content[0]?.value
                .toLowerCase()
                .replace(/ /g, '-')}`}
              className="flex flex-col items-center w-full h-full gap-10 scroll-mt-32 lg:flex-row lg:even:flex-row-reverse lg:gap-20"
            >
              <div className="text-black">
                {documentToReactComponents(
                  textContent[1]?.richText?.json,
                  benefits_options
                )}
              </div>
              <div className="flex flex-col items-center gap-8">
                <Image
                  src={images[4]?.url!}
                  alt={images[4]?.title!}
                  width={1920}
                  height={1080}
                  className="shadow lg:w-3/4"
                />
                <Image
                  src={images[5]?.url!}
                  alt={images[5]?.title!}
                  width={1920}
                  height={1080}
                  className="shadow lg:w-3/4"
                />
              </div>
            </motion.div>
            <motion.div
              variants={FadeInDown}
              initial="hide"
              whileInView="show"
              id={`${textContent[2]?.richText?.json?.content[0]?.content[0]?.value
                .toLowerCase()
                .replace(/ /g, '-')}`}
              className="flex flex-col items-center w-full h-full gap-10 scroll-mt-32 lg:flex-row lg:even:flex-row-reverse lg:gap-20"
            >
              <div className="text-black">
                {documentToReactComponents(
                  textContent[2]?.richText?.json,
                  benefits_options
                )}
              </div>
              <Image
                src={images[6]?.url!}
                alt={images[6]?.title!}
                width={1920}
                height={1080}
                className="shadow"
              />
            </motion.div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default Benefits
