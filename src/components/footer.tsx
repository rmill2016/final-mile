import React from 'react'
import { Footer } from '../gql/graphql'
import Image from 'next/image'
import Link from 'next/link'

const FooterComponent = ({ footer }: { footer: Footer }) => {
  return (
    <footer className="w-full h-[100px] bg-primary text-white">
      <div className="flex flex-col items-center justify-between w-full h-full max-w-screen-xl px-10 py-2 mx-auto md:flex-row">
        <Link href={'/'}>
          <Image
            src={footer?.logo?.url!}
            alt={footer?.logo?.title!}
            width={218}
            height={40}
            className="w-auto h-8 cursor-pointer"
          />
        </Link>
        <div className="flex flex-col items-center justify-between w-full h-full text-white md:justify-end md:flex-row md:gap-8">
          <div className="inline-flex items-center justify-start h-full gap-4">
            <Image
              src={footer?.emailIcon?.url!}
              alt={footer?.emailIcon?.title!}
              width={32}
              height={32}
              className="w-6 h-auto"
            />
            <p>{footer?.emailAddress}</p>
          </div>
          <div className="inline-flex items-center justify-start h-full gap-4">
            <Image
              src={footer?.phoneIcon?.url!}
              alt={footer?.phoneIcon?.title!}
              width={32}
              height={32}
              className="w-6 h-auto"
            />
            <p>{footer?.phoneNumber}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterComponent
