import { Maybe } from 'graphql/jsutils/Maybe'
import React, { useState } from 'react'
import { ComponentTrip } from '../gql/graphql'
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { trip_options } from '../helpers/constants'

type Props = {
  tabSection: Maybe<ComponentTrip> | undefined
}

const TripSelection = (props: Props) => {
  const [activeTab, setActive] = useState<boolean>(true)
  const headline = props?.tabSection?.currentTripHeadline!
  const images = props?.tabSection?.listofImagesCollection?.items!
  const cards = props?.tabSection?.listofCardsCollection?.items!
  const tab1 = props?.tabSection?.tabName1!
  const tab2 = props?.tabSection?.tabName2!
  const links = props?.tabSection?.link?.json?.content!

  return (
    <div className="relative flex flex-col w-full h-auto gap-10 p-8 border-2 border-primary rounded-3xl">
      <div
        id="tabs"
        className="absolute flex items-center w-auto h-auto gap-10 left-4 z-1 -top-6"
      >
        <div
          id="tab1"
          className={
            activeTab
              ? 'w-auto h-auto p-2 text-white rounded-lg bg-primary'
              : 'w-auto h-auto p-2 text-primary bg-white border-2 border-primary rounded-lg'
          }
          onClick={() => setActive(true)}
        >
          {tab1}
        </div>
        <div
          id="tab2"
          className={
            activeTab
              ? 'w-auto h-auto p-2 bg-white border-2 rounded-lg border-primary text-primary'
              : 'w-auto h-auto p-2 bg-primary  rounded-lg  text-white'
          }
          onClick={() => setActive(false)}
        >
          {tab2}
        </div>
      </div>
      <h5 className="font-medium text-center text-primary">{headline}</h5>
      <div className="grid items-start w-full h-full grid-flow-row grid-cols-1 gap-4 place-items-center md:grid-cols-2 lg:grid-cols-3">
        {activeTab
          ? images.map((image) => (
              <Image
                src={image?.url!}
                alt={image?.title!}
                width={720}
                height={480}
                quality={100}
                className="object-cover transition-all duration-500 shadow hover:scale-105"
              />
            ))
          : cards.map((card, index) => (
              <div
                key={index}
                className="flex flex-col w-full h-auto border-2 rounded-md border-primary"
              >
                <Image
                  src={card?.url!}
                  alt={card?.title!}
                  width={1920}
                  height={1080}
                  quality={75}
                  className="object-cover w-full h-auto max-w-sm"
                />
                <hr className="h-1 bg-primary" />
                <h6 className="m-4 text-primary">{card?.title}</h6>
                <p className="m-4 text-black">{card?.description}</p>
                <button className="w-auto h-auto px-4 py-2 m-4 text-white rounded-md bg-primary">
                  {links[index] != null
                    ? documentToReactComponents(links[index])
                    : 'Coming Soon...'}
                </button>
              </div>
            ))}
      </div>
      {activeTab && (
        <div className="ml-auto">
          {documentToReactComponents(links[0], trip_options)}
        </div>
      )}
    </div>
  )
}

export default TripSelection
