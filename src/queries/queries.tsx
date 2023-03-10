import { gql } from '@apollo/client'

const FRAGMENT_ASSET = `
    title
    description
    url
`

export const QUERY_HOMEPAGE = gql`
  query {
    homepage(id: "5yYBV7yJHXSBBWCogVXZBg") {
      homepage
      background {
        ${FRAGMENT_ASSET}
      }
      sidebar {
        title
        links
        guarantee {
          ${FRAGMENT_ASSET}
        }
      }
      header {
        title
        logo {
          ${FRAGMENT_ASSET}
        }
        links
      }
      headlinesCollection {
        items {
          title
          headline
          subtitle
        }
      }
      textCollection {
        items {
          title
          richText {
            json
          }
        }
      }
      mediaCollection {
        items {
          ${FRAGMENT_ASSET}
        }
      }
      footer {
        title
        logo {
          ${FRAGMENT_ASSET}
        }
        emailIcon {
          ${FRAGMENT_ASSET}
        }
        phoneIcon {
          ${FRAGMENT_ASSET}
        }
        emailAddress
        phoneNumber
      }
    }
    testimonialsCollection {
      items {
        name
        description {
          json
        }
      }
    }
  }
`

export const QUERY_METHODOLOGY = gql`
  query {
    homepage(id: "2ojhB86p7pZqh8kDxnAI1q") {
      homepage
      background {
        ${FRAGMENT_ASSET}
      }
      header {
        title
        logo {
          ${FRAGMENT_ASSET}
        }
        links
      }
      headlinesCollection {
        items {
          title
          headline
          subtitle
        }
      }
      textCollection {
        items {
          richText {
            json
          }
        }
      }
      mediaCollection {
        items {
          ${FRAGMENT_ASSET}
        }
      }
      footer {
        title
        logo {
          ${FRAGMENT_ASSET}
        }
        emailIcon {
          ${FRAGMENT_ASSET}
        }
        phoneIcon {
          ${FRAGMENT_ASSET}
        }
        emailAddress
        phoneNumber
      }
    }
  }
`

export const QUERY_TRIPPAGE = gql`
  query {
    tripPage(id: "3FjjvH06x6nGWQF4OAbext") {
      title
      header {
        title
        logo {
          ${FRAGMENT_ASSET}
        }
        links
      }
      headline {
        title
        headline
        subtitle
      }
      tabSection {
        title
        tabName1
        tabName2
        currentTripHeadline
        link {
          json
        }
        listofImagesCollection {
          items {
            ${FRAGMENT_ASSET}
          }
        }
        listofCardsCollection {
          items {
            ${FRAGMENT_ASSET}
          }
        }
      }
      footer {
        title
        logo {
          ${FRAGMENT_ASSET}
        }
        emailIcon {
          ${FRAGMENT_ASSET}
        }
        phoneIcon {
          ${FRAGMENT_ASSET}
        }
        emailAddress
        phoneNumber
      }
    }
  }
`

export const QUERY_TRIPS = gql`
  query {
    tripsCollection(limit: 20) {
      items {
        title
        slug
        background {
          ${FRAGMENT_ASSET}
        }
        header {
          title
          logo {
            ${FRAGMENT_ASSET}
          }
          links
        }
        imagesMidCollection {
          items {
            ${FRAGMENT_ASSET}
          }
        }
        headline {
          title
          headline
          subtitle
        }
        textCollection {
          items {
            title,
            richText {
              json
            }
          }
        }
        imagesGalleryCollection {
          items {
            ${FRAGMENT_ASSET}
          }
        }
        footer {
          title
          logo {
            ${FRAGMENT_ASSET}
          }
          emailIcon {
            ${FRAGMENT_ASSET}
          }
          phoneIcon {
            ${FRAGMENT_ASSET}
          }
          emailAddress
          phoneNumber
        }
      }
    }
  }
`

export const QUERY_SEOMETA = gql`
  query  {
    seoMetadata(id: "2QrHpTcHZlG49hFhAOqsob") {
      title
      metaTitle
      metaDescription
      ogType
      ogUrl
      ogTitle
      ogDescription
      ogImage {
        ${FRAGMENT_ASSET}
      }
      twitterCard
      twitterUrl
      twitterTitle
      twitterDescription
      twitterImage {
        ${FRAGMENT_ASSET}
      }
    }
  }
`

export const QUERY_WHY_FINAL_MILE = gql`
  query {
    homepage(id: "5ubfgouRBxAuySLhmm0npn") {
      homepage
      background {
        ${FRAGMENT_ASSET}
      }
      header {
        title
        logo {
          ${FRAGMENT_ASSET}
        }
        links
      }
      headlinesCollection {
        items {
          title
          headline
          subtitle
        }
      }
      textCollection {
        items {
          title
          richText {
            json
          }
        }
      }
      mediaCollection {
        items {
         ${FRAGMENT_ASSET}
        }
      }
      footer {
        title
        logo {
          ${FRAGMENT_ASSET}
        }
        emailIcon {
          ${FRAGMENT_ASSET}
        }
        phoneIcon {
          ${FRAGMENT_ASSET}
        }
        emailAddress
        phoneNumber
      }
    }
    componentDropdownCollection(limit: 4) {
      items {
        title,
        body {
        json
        }
      }
    }
  }
`

export const QUERY_PACKAGES = gql`
  query {
    homepage(id: "6kMrXVrWUKF3m9PB5Aym8q") {
      homepage
      header {
        title
        logo {
          ${FRAGMENT_ASSET}
        }
        links
      }
      headlinesCollection {
        items {
          title
          headline
          subtitle
        }
      }
      textCollection {
        items {
          title
          richText {
            json
          }
        }
      }
      mediaCollection {
        items {
          ${FRAGMENT_ASSET}
        }
      }
      footer {
        title
        logo {
          ${FRAGMENT_ASSET}
        }
        emailIcon {
          ${FRAGMENT_ASSET}
        }
        phoneIcon {
          ${FRAGMENT_ASSET}
        }
        emailAddress
        phoneNumber
      }
    }
    componentCardCollection(
    where: { title_contains: "packages" }
    order: title_ASC
  ) {
    items {
      title
      label
      description
      image {
        ${FRAGMENT_ASSET}
      }
    }
  }
    componentTableCollection(where: { title_contains: "packages" }, limit: 2, order: title_DESC) {
      items {
        title
        description
        table {
          json
        }
      }
    }
  }
`

export const QUERY_INTENSIVE_IMMERSION = gql`
  query {
    homepage(id: "3rqLS4PhChjOv1S86pbTOO") {
      homepage
      background {
        ${FRAGMENT_ASSET}
      }
      header {
        title
        logo {
          ${FRAGMENT_ASSET}
        }
        links
      }
      headlinesCollection(limit: 2) {
        items {
          title
          headline
          subtitle
        }
      }
      textCollection(limit: 1) {
        items {
          title
          richText {
            json
          }
        }
      }
      footer {
        title
        logo {
          ${FRAGMENT_ASSET}
        }
        emailIcon {
          ${FRAGMENT_ASSET}
        }
        phoneIcon {
          ${FRAGMENT_ASSET}
        }
        emailAddress
        phoneNumber
      }
    }
  }
`

export const QUERY_BENEFITS = gql`
  query {
    homepage(id: "774uQp5rr5W0b9favVn2at") {
      homepage
      background {
        ${FRAGMENT_ASSET}
      }
      header {
        title
        logo {
          ${FRAGMENT_ASSET}
        }
        links
      }
      headlinesCollection {
        items {
          title
          headline
          subtitle
        }
      }
      textCollection {
        items {
          title
          richText {
            json
          }
        }
      }
      mediaCollection {
        items {
          ${FRAGMENT_ASSET}
        }
      }
      footer {
        title
        logo {
          ${FRAGMENT_ASSET}
        }
        emailIcon {
          ${FRAGMENT_ASSET}
        }
        phoneIcon {
          ${FRAGMENT_ASSET}
        }
        emailAddress
        phoneNumber
      }
    }
  }
`
