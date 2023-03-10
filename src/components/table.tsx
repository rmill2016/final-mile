import React from 'react'
import { ComponentTable } from '../gql/graphql'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { table_options } from '../helpers/constants'

type Props = {
  tables: ComponentTable | null
}

const Table = (props: Props) => {
  return (
    <div className="flex flex-col items-center w-full h-auto gap-10 lg:grid lg:grid-cols-[auto_fr] lg:grid-flow-row">
      <h5 className="font-medium text-primary lg:col-start-1 lg:col-span-full lg:row-start-1">
        {props?.tables?.title}
      </h5>
      <div className="w-full px-2 py-4 overflow-x-auto bg-transparent rounded-lg shadow-md lg:row-start-2 lg:col-start-1 ">
        {documentToReactComponents(props?.tables?.table?.json, table_options)}
      </div>
      <p className="text-lg text-black lg:col-start-2 lg:row-start-2 lg:place-items-center">
        {props?.tables?.description}
      </p>
    </div>
  )
}

export default Table
