import React from 'react'
import Head from 'next/head'
import { Query, SeoMetadata } from '../gql/graphql'
import { QUERY_SEOMETA } from '../queries/queries'
import { useQuery, QueryResult } from '@apollo/client'
import { NextSeo } from 'next-seo'

const Meta = () => {
  const { data }: QueryResult<Query> = useQuery(QUERY_SEOMETA)
  const SEO = data?.seoMetadata!
  return (
    <NextSeo
      title={SEO?.ogTitle!}
      description={SEO?.ogDescription!}
      canonical={SEO?.ogUrl!}
      openGraph={{
        url: SEO?.ogUrl!,
        title: SEO?.ogTitle!,
        description: SEO?.ogDescription!,
        images: [
          {
            url: SEO?.ogImage?.url!,
            width: 800,
            height: 600,
            alt: SEO?.ogImage?.title!,
            type: 'image/jpeg',
          },
        ],
        siteName: SEO?.ogUrl!,
      }}
      twitter={{
        handle: '@FinalMileSpanish',
        site: SEO?.ogUrl!,
        cardType: 'summary_large_image',
      }}
      additionalLinkTags={[
        {
          rel: 'icon',
          href: 'favicon.png',
        },
      ]}
    />
  )
}

export default Meta

/* 
<Head>
      <title>{SEO?.title}</title>
      <link rel="shortcut icon" href="favicon.png" type="image/png" />
      <meta name="title" content={SEO?.metaTitle as string} />
      <meta name="description" content={SEO?.metaDescription as string} />
      <meta property="og:type" content={SEO?.ogType as string} />
      <meta property="og:url" content={SEO?.ogUrl as string} />
      <meta property="og:title" content={SEO?.ogTitle as string} />
      <meta property="og:description" content={SEO?.ogDescription as string} />
      <meta property="og:image" content={SEO?.ogImage?.url as string} />
      <meta property="twitter:card" content={SEO?.twitterCard as string} />
      <meta property="twitter:url" content={SEO?.twitterUrl as string} />
      <meta property="twitter:title" content={SEO?.twitterTitle as string} />
      <meta
        property="twitter:description"
        content={SEO?.twitterDescription as string}
      />
      <meta
        property="twitter:image"
        content={SEO?.twitterImage?.url as string}
      ></meta>
    </Head>
*/
