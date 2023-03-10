import React from 'react'
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Link from 'next/link'

export const paragraphs = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => (
      <>
        <p>{children}</p>
        <br />
      </>
    ),
  },
}

export const medical_options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => (
      <>
        <p>{children}</p>
        <br />
      </>
    ),
    [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => (
      <a
        onClick={() => window.open(`${node?.data?.uri}`)}
        className="cursor-pointer text-secondary"
      >
        {children}
      </a>
    ),
  },
}

export const testimonial_options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => (
      <>
        <p>{children}</p>
        <br />
      </>
    ),
    [BLOCKS.LIST_ITEM]: (node: any, children: React.ReactNode) => {
      const UnTaggedChildren = documentToReactComponents(node, {
        renderNode: {
          [BLOCKS.PARAGRAPH]: (node, children) => children,
          [BLOCKS.LIST_ITEM]: (node, children) => children,
        },
      })

      return <li>{UnTaggedChildren}</li>
    },
  },
}

export const methodology_options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => (
      <>
        <p>{children}</p>
        <br />
      </>
    ),
    [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => (
      <Link href={node?.data?.uri} style={{ color: 'rgb(26, 111, 247)' }}>
        {children}
      </Link>
    ),
  },
  renderMark: {
    [MARKS.BOLD]: (text: React.ReactNode) => <h5>{text}</h5>,
  },
}

export const final_mile_options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => children,
    [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => (
      <Link href={`${node?.data?.uri}`} className="text-white">
        {children}
      </Link>
    ),
  },
}

export const instructors_options = {
  renderNode: {
    [BLOCKS.LIST_ITEM]: (node: any, children: React.ReactNode) => {
      const transformedChildren = documentToReactComponents(node, {
        renderNode: {
          [BLOCKS.PARAGRAPH]: (node, children) => children,
          [BLOCKS.LIST_ITEM]: (node, children) => children,
        },
      })
      return <li>{transformedChildren}</li>
    },
    [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => (
      <>
        <p>{children}</p>
        <br />
      </>
    ),
    [BLOCKS.OL_LIST]: (node: any, children: React.ReactNode) => (
      <ol>{children}</ol>
    ),
  },
}

export const packages_options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => (
      <>
        <p>{children}</p>
        <br />
      </>
    ),
    [BLOCKS.LIST_ITEM]: (node: any, children: React.ReactNode) => {
      const UnTaggedChildren = documentToReactComponents(node, {
        renderNode: {
          [BLOCKS.PARAGRAPH]: (node, children) => children,
          [BLOCKS.LIST_ITEM]: (node, children) => children,
        },
      })

      return <li>{UnTaggedChildren}</li>
    },
    [BLOCKS.UL_LIST]: (node: any, children: React.ReactNode) => (
      <ul className="buddy-packages-list">{children}</ul>
    ),
  },
}

export const table_options = {
  renderNode: {
    [BLOCKS.TABLE_HEADER_CELL]: (node: any, children: React.ReactNode) => {
      const child = documentToReactComponents(node, {
        renderNode: {
          [BLOCKS.PARAGRAPH]: (node, children) => children,
          [BLOCKS.TABLE_HEADER_CELL]: (node, children) => children,
        },
      })
      return <th className="p-4 text-xs">{child}</th>
    },
    [BLOCKS.TABLE_ROW]: (node: any, children: React.ReactNode) => (
      <tr className="table-row">{children}</tr>
    ),
    [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => children,
  },
}

export const intensive_options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => (
      <>
        <p className="text-black">{children}</p>
        <br />
      </>
    ),
    [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => {
      documentToReactComponents(node, {
        renderNode: {
          [BLOCKS.PARAGRAPH]: (node, children) => children,
          [INLINES.HYPERLINK]: (node, children) => children,
        },
      })
      return <Link href={`${node?.data?.uri}`}>{children}</Link>
    },
  },
  renderMark: {
    [MARKS.BOLD]: (text: React.ReactNode) => (
      <strong className="text-primary">{text}</strong>
    ),
  },
}

export const benefits_options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => (
      <>
        <p className="text-black">{children}</p>
        <br />
      </>
    ),
    [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => {
      documentToReactComponents(node, {
        renderNode: {
          [BLOCKS.PARAGRAPH]: (node, children) => children,
          [INLINES.HYPERLINK]: (node, children) => children,
        },
      })
      return (
        <a
          onClick={() => window.open(`${node?.data?.uri}`, '_blank')}
          className="benefits-links"
        >
          {children}
        </a>
      )
    },
    [BLOCKS.UL_LIST]: (node: any, children: React.ReactNode) => (
      <ul className="benefits-list">{children}</ul>
    ),
  },
  renderMark: {
    [MARKS.BOLD]: (text: React.ReactNode) => (
      <h6 className="relative text-primary after:absolute after:w-full after:h-px after:-bottom-2 after:left-0 after:bg-primary">
        {text}
      </h6>
    ),
  },
}

export const trip_options = {
  renderNode: {
    [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => {
      documentToReactComponents(node, {
        renderNode: {
          [BLOCKS.PARAGRAPH]: (node, children) => children,
          [INLINES.HYPERLINK]: (node, children) => children,
        },
      })
      return (
        <Link href={`${node?.data?.uri}`} className="benefits-links">
          {children}
        </Link>
      )
    },
  },
}

export const plus55_options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => (
      <>
        <p>{children}</p>
        <br />
      </>
    ),
    [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => (
      <Link href={`${node?.data?.uri}`} className="benefits-links">
        {children}
      </Link>
    ),
  },
}
