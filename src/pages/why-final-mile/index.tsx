import React, { useRef } from 'react'
import { QueryResult, useQuery } from '@apollo/client'
import { QUERY_WHY_FINAL_MILE } from '../../queries/queries'
import { ComponentDropdown, Query } from '../../gql/graphql'
import Layout from '../../components/layout'
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import {
  final_mile_options,
  methodology_options,
} from '../../helpers/constants'
import { motion } from 'framer-motion'
import {
  FadeInDown,
  FadeInLeft,
  FadeInRight,
  FadeInTop,
} from '../../helpers/transitions'
import Dropdown from '../../components/finalDropdown'

const WhyFinalMile = () => {
  const { data, error }: QueryResult<Query> = useQuery(QUERY_WHY_FINAL_MILE)
  const finalMile = data?.homepage!
  const dropdowns: any = data?.componentDropdownCollection?.items
  const header = finalMile?.header!
  const footer = finalMile?.footer!
  const landingLinks = finalMile?.textCollection?.items[0]?.richText?.json
  const instructorsImages = finalMile?.mediaCollection?.items.slice(0, 2)
  const proprietaryContent = finalMile?.textCollection?.items.filter((e) =>
    e?.title?.toLowerCase().includes('proprietary')
  )!
  const proprietaryImages = finalMile?.mediaCollection?.items.slice(2, 6)!
  const individualizedContent = finalMile?.textCollection?.items.filter((e) =>
    e?.title?.toLowerCase().includes('individualized')
  )!
  const individualizedImages = finalMile?.mediaCollection?.items.slice(6, 10)!
  const commitmentContent = finalMile?.textCollection?.items.filter((e) =>
    e?.title?.toLowerCase().includes('commitment')
  )[0]?.richText?.json!
  const moneyImage = finalMile?.mediaCollection?.items.slice(9, 10)[0]!
  const moneyContent = finalMile?.textCollection?.items.filter((e) =>
    e?.title?.toLowerCase().includes('money')
  )[0]?.richText?.json!
  const funImage = finalMile?.mediaCollection?.items.slice(10, 11)[0]!
  const funContent = finalMile?.textCollection?.items.filter((e) =>
    e?.title?.toLowerCase().includes('fun')
  )[0]?.richText?.json!
  if (error) {
    throw error
  }

  if (data) {
    return (
      <Layout header={header} footer={footer}>
        <section className="relative w-full">
          <Image
            src={finalMile?.background?.url!}
            alt={finalMile?.background?.title!}
            width={1920}
            height={1080}
            quality={100}
            priority
            className="absolute inset-0 object-cover w-full h-full -z-1"
          />
          <div className="flex flex-col items-center justify-center w-full max-w-screen-xl gap-20 mx-auto h-vh md:pt-32">
            <h2 className="col-start-1 font-medium text-primary col-span-full">
              {finalMile?.headlinesCollection?.items[0]?.headline}
            </h2>
            <div className="grid w-full h-auto grid-flow-row grid-cols-2 gap-10 text-center md:gap-24 final-landing-links ">
              {documentToReactComponents(landingLinks, final_mile_options)}
            </div>
          </div>
        </section>
        <section id="our-instructors">
          <div className="flex flex-col items-center w-full h-full max-w-screen-xl gap-10 mx-auto lg:gap-20 lg:h-auto">
            <h3 className="headline-underline">
              {finalMile?.headlinesCollection?.items[1]?.headline}
            </h3>
            <div className="flex items-center justify-center w-full h-full gap-10 lg:justify-around">
              {instructorsImages?.map((image) => (
                <motion.div
                  variants={FadeInDown}
                  initial="hide"
                  whileInView="show"
                >
                  <Image
                    key={image?.title}
                    src={image?.url!}
                    alt={image?.title!}
                    width={300}
                    height={300}
                    className="w-40 h-auto border-2 rounded-full shadow-md shadow-zinc-900 lg:w-52 border-primary xl:w-64"
                  />
                </motion.div>
              ))}
            </div>
            <div className="flex flex-col h-full gap-8 lg:grid lg:grid-cols-2 lg:place-items-center lg:h-auto">
              {dropdowns
                ?.slice(0)
                .reverse()
                .map((dropdown: ComponentDropdown, index: number) => (
                  <Dropdown
                    key={index}
                    keyProp={index}
                    title={dropdown?.title!}
                    body={dropdown?.body!}
                  />
                ))}
            </div>
          </div>
        </section>
        <section id="proprietary-content">
          <div className="flex flex-col h-full max-w-screen-xl gap-20 mx-auto">
            <h3 className="mx-auto headline-underline w-fit">
              {finalMile?.headlinesCollection?.items[2]?.headline}
            </h3>
            {proprietaryContent.map((block, index) => (
              <motion.div
                key={index}
                variants={FadeInLeft}
                initial="hide"
                whileInView="show"
                className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between lg:items-start lg:even:flex-row-reverse"
              >
                <Image
                  src={proprietaryImages[index]?.url!}
                  alt={proprietaryImages[index]?.title!}
                  width={550}
                  height={350}
                  className="w-full h-auto max-w-[550px] shadow-gray-500 shadow-md"
                />
                <div className="text-black lg:my-auto lg:max-w-[600px]">
                  {documentToReactComponents(block?.richText?.json)}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        <section id="individualized-study-plan" className="w-full">
          <div className="flex flex-col items-center w-full h-full gap-20 py-10 lg:py-20">
            <h3 className="headline-underline">
              {finalMile?.headlinesCollection?.items[3]?.headline}
            </h3>
            {individualizedContent.map((block, index) => (
              <motion.div
                key={index}
                variants={FadeInLeft}
                initial="hide"
                whileInView="show"
                className="flex flex-col items-center h-full gap-20 lg:flex-row lg:justify-between lg:items-start lg:even:flex-row-reverse"
              >
                <Image
                  src={individualizedImages[index]?.url!}
                  alt={individualizedImages[index]?.title!}
                  width={550}
                  height={350}
                  className="shadow-md shadow-gray-500"
                />
                <div className="text-black lg:my-auto lg:max-w-[500px]">
                  {documentToReactComponents(block?.richText?.json)}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        <section id="commitment" className="w-full">
          <div className="flex flex-col items-center justify-between w-full h-full gap-10 pt-10 lg:pt-20">
            <h3 className="headline-underline">
              {finalMile?.headlinesCollection?.items[4]?.headline}
            </h3>
            <motion.div
              className="max-w-screen-lg mx-auto text-justify text-black"
              variants={FadeInTop}
              initial="hide"
              whileInView="show"
            >
              {documentToReactComponents(
                commitmentContent,
                methodology_options
              )}
            </motion.div>
          </div>
        </section>
        <section id="money-back-guarantee" className="w-full">
          <div className="flex flex-col items-center w-full h-full max-w-screen-xl gap-20 py-10 mx-auto lg:py-20">
            <h3 className="headline-underline">
              {finalMile?.headlinesCollection?.items[5]?.headline}
            </h3>
            <motion.div
              className="flex flex-col items-center w-full gap-10 lg:flex-row lg:justify-between"
              variants={FadeInRight}
              initial="hide"
              whileInView="show"
            >
              <Image
                src={moneyImage?.url!}
                alt={moneyImage?.title!}
                width={550}
                height={350}
                className="w-full max-w-[550px] h-auto max-h-[350px]  shadow-gray-500 shadow-md"
              />
              <div className="max-w-lg mx-auto text-black">
                {documentToReactComponents(moneyContent, methodology_options)}
              </div>
            </motion.div>
          </div>
        </section>
        <section id="fun" className="w-full">
          <div className="flex flex-col items-center w-full h-full max-w-screen-xl gap-20 py-10 mx-auto lg:py-20">
            <h3 className="headline-underline">
              {finalMile?.headlinesCollection?.items[6]?.headline}
            </h3>
            <motion.div
              className="flex flex-col items-center w-full gap-10 lg:flex-row-reverse lg:justify-between"
              variants={FadeInLeft}
              initial="hide"
              whileInView="show"
            >
              <Image
                src={funImage?.url!}
                alt={funImage?.title!}
                width={550}
                height={350}
                className="shadow-md shadow-gray-500"
              />
              <div className="text-black max-w-[500px]">
                {documentToReactComponents(funContent, methodology_options)}
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default WhyFinalMile
