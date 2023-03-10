import React from 'react'
import HeaderComponent from './header'
import FooterComponent from './footer'
import Meta from './meta'
import { Footer, Header } from '../gql/graphql'

const Layout = ({
  children,
  header,
  footer,
}: {
  children: React.ReactNode
  header: Header
  footer: Footer
}) => {
  return (
    <>
      <Meta />
      <HeaderComponent header={header} />
      <main className="w-full min-h-screen">{children}</main>
      <FooterComponent footer={footer} />
    </>
  )
}

export default Layout
