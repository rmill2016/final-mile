import React from 'react'
import { Asset, Maybe } from '../gql/graphql'
import Image from 'next/image'

type Props = {
  label: Maybe<string> | null
  description: Maybe<string> | null
  image: Maybe<Asset> | null
}

const PackagesCard = (props: Props) => {
  return (
    <div className="flex flex-col w-full h-auto max-w-sm gap-4">
      <div className="flex items-center justify-between w-full">
        <h5 className="text-black uppercase">{props?.label}</h5>
        <Image
          width={100}
          height={100}
          src={props?.image?.url!}
          alt={props?.image?.title!}
          className="w-auto"
        />
      </div>
      <hr className="w-full h-[2px] bg-primary" />
      <p className="text-justify text-black">{props?.description}</p>
    </div>
  )
}

export default PackagesCard
