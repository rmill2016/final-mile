import React, { useState, useEffect, useRef, EventHandler } from 'react'
import { Header } from '../gql/graphql'
import { FaBars } from 'react-icons/fa'
import { RiCloseFill } from 'react-icons/ri'
import { AnimatePresence, motion } from 'framer-motion'
import { MenuTransition, MenuLinks, StaggerLinks } from '../helpers/transitions'
import { useRouter, NextRouter } from 'next/router'
import Image from 'next/image'

const HeaderComponent = ({ header }: { header: Header }) => {
  const aside = useRef<HTMLDivElement>(null)
  const router = useRouter() as NextRouter
  const [menu, setMenu] = useState<boolean>(false)
  const logo = header?.logo
  const links = header?.links

  function MenuRedirect(link: string) {
    if (
      link.toLowerCase() == 'testimonials' ||
      link.toLowerCase() == 'about' ||
      link.toLowerCase() == 'contact us'
    ) {
      setTimeout(
        () =>
          router.push(`/#${link.toLowerCase().replace(/ /g, '-')}`, undefined, {
            scroll: false,
          }),
        1000
      )
      window.scrollTo({ behavior: 'smooth' })
    } else {
      let str = link.toLowerCase().replace('?', '').replace(/\s+/g, '-')
      setTimeout(() => router.push(`/${str}`), 1000)
    }
    setMenu(false)
  }
  function Redirect(link: string) {
    if (
      link.toLowerCase() == 'testimonials' ||
      link.toLowerCase() == 'about' ||
      link.toLowerCase() == 'contact us'
    ) {
      router.push(`/#${link.toLowerCase().replace(/ /g, '-')}`, undefined, {
        scroll: false,
      })
    } else {
      let str = link.toLowerCase().replace('?', '').replace(/\s+/g, '-')
      router.push(`/${str}`)
    }
  }

  function ScrollTop() {
    window.scrollTo({ behavior: 'smooth', top: 0 })
    router.push('/', undefined, { scroll: false })
  }

  useEffect(() => {
    if (menu) document.body.style.overflow = 'hidden'
    else setTimeout(() => (document.body.style.overflow = 'unset'), 500)
  }, [menu])

  useEffect(() => {
    function handleClick(ev: any) {
      if (aside.current && !aside.current.contains(ev.target)) {
        setMenu(false)
      }
    }

    document.addEventListener('mousedown', handleClick)

    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [])

  return (
    <>
      <header className="fixed z-20 w-full h-16 lg:h-20 lg:top-8 top-10">
        <nav
          id="mobileHeader"
          className="flex items-center justify-between h-full px-8 text-white bg-primary lg:hidden"
        >
          <Image
            src={logo?.url!}
            alt={logo?.title!}
            width={218}
            height={50}
            quality={75}
            priority
            className="w-auto h-8 cursor-pointer"
            onClick={ScrollTop}
          />
          <FaBars
            className="w-8 h-auto fill-white"
            onClick={() => setMenu(true)}
          />
        </nav>
        <nav
          id="desktopHeader"
          className="items-center justify-between hidden w-full h-full max-w-screen-xl px-4 mx-auto xl:px-8 lg:flex bg-primary"
        >
          <Image
            src={logo?.url!}
            alt={logo?.title!}
            width={250}
            height={50}
            onClick={ScrollTop}
            priority
            className="w-auto cursor-pointer h-14"
          />
          <ul className="inline-flex items-center gap-8 text-sm text-white list-none xl:text-base">
            {links?.map((link) => (
              <li
                key={link}
                className="cursor-pointer"
                onClick={() => Redirect(link!)}
              >
                {link}
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <motion.aside
        className="fixed top-0 left-0 z-30 w-auto h-vh bg-primary"
        variants={MenuTransition}
        initial="hide"
        animate={menu ? 'show' : 'hide'}
        ref={aside}
      >
        <motion.ul
          className={
            'flex flex-col items-center justify-between h-full text-lg text-white list-none px-10 py-20'
          }
          style={menu ? { padding: '80px 40px' } : { padding: '0' }}
          variants={StaggerLinks}
          initial="hide"
          animate={menu ? 'show' : 'hide'}
        >
          <AnimatePresence>
            {menu &&
              links?.map((link) => (
                <motion.li
                  key={link}
                  variants={MenuLinks}
                  exit={{
                    opacity: 0,
                    x: -20,
                  }}
                  onClick={() => MenuRedirect(link!)}
                  className="cursor-pointer"
                >
                  {link}
                </motion.li>
              ))}
          </AnimatePresence>
        </motion.ul>
      </motion.aside>
      <motion.div
        className="fixed top-0 left-0 z-20 w-auto h-screen bg-black pointer-events-none bg-opacity-30"
        initial={{ width: 0 }}
        animate={menu ? { width: '100%' } : { width: 0 }}
        transition={{ duration: 0 }}
      />
    </>
  )
}

export default HeaderComponent
