import React, { useRef, useState } from 'react'
import { QUERY_HOMEPAGE } from '../queries/queries'
import { useQuery, QueryResult } from '@apollo/client'
import { ContentTypeRichTextCollection, Query } from '../gql/graphql'
import Layout from '../components/layout'
import { motion } from 'framer-motion'
import { FadeInDown, FadeInLeft, FadeInRight } from '../helpers/transitions'
import { useRouter, NextRouter } from 'next/router'
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import {
  paragraphs,
  testimonial_options,
  plus55_options,
} from '../helpers/constants'
import Contact from '../components/contact'
import Link from 'next/link'
const Index = () => {
  const router = useRouter() as NextRouter
  const { data, error, loading }: QueryResult<Query> = useQuery(QUERY_HOMEPAGE)
  const homepage = data?.homepage!
  const header = homepage?.header!
  const footer = homepage?.footer!
  const testimonials = data?.testimonialsCollection?.items!
  const images = homepage?.mediaCollection?.items!
  const headlines = homepage?.headlinesCollection?.items!
  const text = homepage?.textCollection?.items!
  const [showMore, setShowMore] = useState<boolean>(false)
  const content = homepage?.textCollection?.items[3]?.richText?.json
  const oneline = homepage?.textCollection?.items[3]?.richText?.json?.content[0]
  const handleClick = () => {
    setShowMore(!showMore)
  }
  const resetClick = () => {
    setCounter(1)
  }
  const [counter, setCounter] = useState<number>(1)
  const handleClickT = () => {
    setCounter(counter + 3)
  }

  function SidebarRedirect(link: string) {
    if (
      link.toLowerCase().includes('content') ||
      link.toLowerCase().includes('intensive')
    ) {
      router.push(`/${link.toLowerCase().replace(/ /g, '-')}`)
    } else
      router.push(`#${link.toLowerCase().replace(/ /g, '-')}`, undefined, {
        scroll: false,
      })
  }

  if (error) throw error

  if (data) {
    return (
      <Layout header={header} footer={footer}>
        <section className="relative z-auto">
          <Image
            src={homepage?.background?.url!}
            alt={homepage?.background?.title!}
            width={1920}
            height={1080}
            quality={100}
            priority
            className="absolute inset-0 object-cover w-full h-full -z-1"
          />
          <div className="flex flex-col justify-between w-full gap-8 md:grid md:grid-cols-2 md:grid-flow-row lg:grid-cols-[auto_1fr_auto] lg:grid-rows-1 max-w-screen-xl mx-auto py-20">
            <motion.div
              variants={FadeInLeft}
              initial="hide"
              animate="show"
              className="mx-auto shadow lg:my-auto lg:mr-0 lg:ml-auto w-60 md:col-start-2 lg:col-start-3 lg:w-80 md:mr-auto md:ml-0"
            >
              <Image
                src={images[0]?.url!}
                alt={images[0]?.title!}
                width={358}
                height={490}
                quality={75}
                priority
              />
            </motion.div>
            <motion.div
              className="flex flex-col w-full h-auto gap-4 lg:m-auto md:col-start-2 lg:row-start-1 "
              variants={FadeInRight}
              initial="hide"
              animate="show"
            >
              <h2 className="italic font-semibold leading-snug xl:leading-tight text-secondary">
                {homepage?.headlinesCollection?.items[0]?.headline}
              </h2>
              <h5>{homepage?.headlinesCollection?.items[0]?.subtitle}</h5>
            </motion.div>
            <div className="flex flex-col items-center justify-between w-full h-auto gap-20 p-4 bg-primary md:col-start-1 md:row-start-1 md:row-span-2 md:w-60 md:px-8 md:py-10">
              <ul className="flex flex-col justify-between h-full gap-8 text-center text-white list-none">
                <div className="flex flex-col gap-2">
                  {homepage?.sidebar?.links
                    ?.map((link, index) => (
                      <li
                        className="cursor-pointer"
                        key={index}
                        onClick={() => SidebarRedirect(link!)}
                      >
                        {link}
                      </li>
                    ))
                    .slice(0, 3)}
                </div>
                {homepage?.sidebar?.links
                  ?.map((link, index) => (
                    <li
                      className="cursor-pointer"
                      key={index}
                      onClick={() => SidebarRedirect(link!)}
                    >
                      {link}
                    </li>
                  ))
                  .slice(3)}
              </ul>
              <Link href={'/why-final-mile#money-back-guarantee'}>
                <Image
                  src={homepage?.sidebar?.guarantee?.url!}
                  alt={homepage?.sidebar?.guarantee?.title!}
                  width={250}
                  height={100}
                  priority
                  className="w-auto h-auto"
                />
              </Link>
            </div>
          </div>
        </section>
        <section id="our-students" className="relative overflow-hidden">
          <div className="absolute top-10 -left-14 w-32 rotate-[135deg] h-60 bg-primary bg-opacity-30 rounded-full blur-lg"></div>
          <div className="absolute bottom-0 w-32  rounded-full -right-10 h-60 bg-primary bg-opacity-30 blur-lg -rotate-[225deg]"></div>
          <div className="flex flex-col items-center w-full h-full max-w-screen-xl gap-10 mx-auto lg:grid lg:grid-cols-2">
            <div className="flex flex-col items-center lg:col-start-1 lg:col-span-full lg:mx-auto">
              <Image
                src={images[1]?.url!}
                alt={images[1]?.title!}
                width={100}
                height={100}
                className="w-auto ml-auto"
              />
              <h3 className="font-medium text-primary">
                {headlines[1]?.headline}
              </h3>
            </div>
            <div className="flex flex-col items-center gap-10 md:flex-row lg:flex-col lg:col-start-2">
              <motion.div
                variants={FadeInLeft}
                initial="hide"
                whileInView="show"
              >
                <Image
                  src={images[2]?.url!}
                  alt={images[2]?.title!}
                  width={500}
                  height={500}
                  className="h-auto rounded-full shadow w-60 md:w-80"
                />
              </motion.div>
              <motion.div
                variants={FadeInRight}
                initial="hide"
                whileInView="show"
              >
                <Image
                  src={images[3]?.url!}
                  alt={images[3]?.title!}
                  width={500}
                  height={500}
                  className="h-auto rounded-full shadow w-60 md:w-80"
                />
              </motion.div>
            </div>
            <motion.div
              className="w-full text-black lg:col-start-1 lg:row-start-2"
              variants={FadeInDown}
              initial="hide"
              whileInView="show"
            >
              {documentToReactComponents(text[0]?.richText?.json, paragraphs)}
            </motion.div>
          </div>
        </section>
        <section id="55-plus">
          <div className="flex flex-col items-center justify-center h-full max-w-screen-xl gap-10 p-8 mx-auto border-2 border-primary rounded-3xl lg:grid lg:grid-cols-2 lg:grid-rows-auto">
            <h3 className="font-medium text-primary lg:col-start-1 lg:col-span-full lg:mx-auto ">
              {headlines[2]?.headline}
            </h3>
            <div className="flex flex-col items-center justify-between h-full lg:col-start-2 md:flex-row md:gap-10 lg:flex-col">
              {images.slice(4, 6).map((image) => (
                <motion.div
                  key={image?.title}
                  variants={FadeInRight}
                  initial="hide"
                  whileInView="show"
                  className=" even:mr-auto odd:ml-auto"
                >
                  <Image
                    src={image?.url!}
                    alt={image?.title!}
                    width={1024}
                    height={800}
                    quality={100}
                    className="object-cover h-auto shadow md:w-auto lg:w-96 "
                  />
                </motion.div>
              ))}
            </div>
            <motion.div
              className="lg:col-start-1 max-w-[500px] lg:row-start-2"
              variants={FadeInLeft}
              initial="hide"
              whileInView="show"
            >
              {documentToReactComponents(
                text[1]?.richText?.json,
                plus55_options
              )}
            </motion.div>
          </div>
        </section>
        <section id="medical-professionals">
          <div className="flex flex-col items-center max-w-screen-xl gap-12 mx-auto lg:place-items-center lg:grid lg:grid-cols-2 lg:grid-rows-auto">
            <h3 className="mx-auto font-medium text-primary lg:row-start-1 lg:col-span-full ">
              {headlines[3]?.headline}
            </h3>
            <motion.div
              className="lg:row-start-2 lg:col-start-1 lg:mb-auto"
              variants={FadeInLeft}
              initial="hide"
              whileInView="show"
            >
              <Image
                src={images[6]?.url!}
                alt={images[6]?.title!}
                width={550}
                height={350}
                className="h-auto shadow"
              />
            </motion.div>
            <motion.div
              className="max-w-[600px] lg:col-start-2 lg:row-start-2 lg:mb-auto"
              variants={FadeInRight}
              initial="hide"
              whileInView="show"
            >
              {documentToReactComponents(text[2]?.richText?.json, paragraphs)}
            </motion.div>
          </div>
        </section>
        <section id="about" className="text-white bg-primary">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            <h3 className="font-medium text-white">{headlines[4]?.headline}</h3>
            <video
              preload="true"
              width={800}
              height={400}
              controls
              playsInline
              className="h-auto shadow aspect-video"
            >
              <source src={images[7]?.url!} type="video/mp4" />
            </video>
            <div className="max-w-screen-md">
              {showMore
                ? documentToReactComponents(content, paragraphs)
                : documentToReactComponents(oneline)}
            </div>
            <button
              className="w-auto h-auto px-4 py-2 text-white bg-transparent border border-white rounded-lg hover:bg-white hover:text-primary hover:transition-all hover:duration-500"
              onClick={handleClick}
            >
              {!showMore ? 'Read More' : 'See Less'}
            </button>
          </div>
        </section>
        <section id="testimonials">
          <div className="flex flex-col justify-between w-auto h-auto max-w-screen-xl mx-auto gap-14 lg:justify-center">
            <div className="flex flex-col items-center gap-8">
              <div className="flex flex-col items-center gap-2">
                <h3 className="font-medium text-primary">
                  {headlines[5]?.headline}
                </h3>
                <h5 className="text-black opacity-50">
                  {headlines[5]?.subtitle}
                </h5>
              </div>
              {testimonials.slice(0, counter).map((testimonial) => (
                <div
                  key={testimonial?.name}
                  className="flex flex-col items-start w-full h-auto gap-4"
                >
                  <h5 className="relative text-secondary after:absolute after:bg-secondary after:w-full after:h-px after:-bottom-2 after:left-0">
                    {testimonial?.name}
                  </h5>
                  <div className="text-black ">
                    {documentToReactComponents(
                      testimonial?.description?.json,
                      testimonial_options
                    )}
                  </div>
                </div>
              ))}
              <div className="flex gap-10">
                <button
                  className="w-24 h-10 text-white rounded-lg bg-primary"
                  onClick={handleClickT}
                >
                  Read More
                </button>
                <button
                  className="w-24 h-10 text-white rounded-lg bg-primary"
                  onClick={resetClick}
                >
                  See Less
                </button>
              </div>
            </div>
          </div>
        </section>
        <Contact contactHeadline={headlines[6]!} />
      </Layout>
    )
  }
}

export default Index
