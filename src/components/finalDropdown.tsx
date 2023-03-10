import React, { useEffect, useState, useRef } from 'react'
import { ComponentDropdownBody } from '../gql/graphql'
import { AnimatePresence, motion } from 'framer-motion'
import { FaPlus, FaMinus } from 'react-icons/fa'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { instructors_options } from '../helpers/constants'

type Props = {
  title: string
  body: ComponentDropdownBody
  keyProp: number
}

const Dropdown = (props: Props) => {
  const [opened, isOpened] = useState<boolean>(false)
  const dropdown = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (opened && dropdown.current) {
      dropdown.current.style.gridArea = '1 / 2 / 4 / 2'
    }
    if (!opened && dropdown.current) {
      dropdown.current.style.gridArea = ''
    }
    if (typeof document !== undefined) {
      document.addEventListener('mousedown', (ev) => {
        if (
          dropdown.current &&
          !dropdown.current.contains(ev.target as HTMLElement)
        ) {
          isOpened(false)
        }
      })
    }
  }, [opened])
  return (
    <div
      ref={dropdown}
      className=" grid grid-cols-[1fr_auto] w-full h-fit bg-primary text-white grid-flow-row px-4 py-2 rounded-3xl max-w-screen-sm lg:col-start-1"
    >
      <h5>{props?.title}</h5>
      {!opened ? (
        <FaPlus
          className="w-8 h-auto fill-white"
          onClick={() => isOpened(!opened)}
        />
      ) : (
        <FaMinus
          className="w-8 h-auto fill-white"
          onClick={() => isOpened(!opened)}
        />
      )}

      <motion.div
        initial={{ height: 0 }}
        animate={opened ? { height: 'auto' } : { height: 0 }}
        transition={{ type: 'tween', duration: 0.5, ease: 'easeInOut' }}
        className="px-4 col-span-full max-h-[400px] overflow-y-auto"
      >
        <AnimatePresence>
          {opened &&
            documentToReactComponents(props?.body?.json, instructors_options)}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default Dropdown
