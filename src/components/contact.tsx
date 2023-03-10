import React, { useEffect, useState } from 'react'
import { Headline } from '../gql/graphql'
import * as Emailjs from '@emailjs/browser'
import Script from 'next/script'

const Contact = ({ contactHeadline }: { contactHeadline: Headline }) => {
  const [state, setState] = useState({
    name: '',
    subject: '',
    message: '',
  })

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  function sendEmail(e: any) {
    e.preventDefault()

    if (state.name !== '' && state.subject !== '' && state.message !== '') {
      Emailjs.sendForm(
        `${process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID}`,
        `${process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID}`,
        e.target,
        `${process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY}`
      ).then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )

      setState({ name: '', message: '', subject: '' })
      setTimeout(() => window.location.reload, 500)
    }
  }

  useEffect(() => {
    Emailjs.init(`${process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY}`)
  }, [])
  return (
    <section id="contact-us">
      <div className="flex flex-col h-auto max-w-screen-md gap-2 p-8 mx-auto text-white rounded-lg bg-primary">
        <h5 className="mx-auto font-medium">{contactHeadline?.headline}</h5>
        <h5 className="mx-auto font-medium">{contactHeadline?.subtitle}</h5>
        <div className="flex flex-col gap-y-3">
          <form
            onSubmit={sendEmail}
            className="flex flex-col w-full h-auto gap-4 mx-auto md:w-2/3 "
          >
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="name" className="text-base font-medium">
                Name
              </label>
              <input
                name="name"
                type="text"
                onChange={handleChange}
                value={state.name}
                required
                className="w-full p-4 text-black bg-white rounded-lg outline-none placeholder:text-black placeholder:opacity-80"
                placeholder="Enter your name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-base font-medium">
                Subject
              </label>
              <input
                name="subject"
                type="text"
                onChange={handleChange}
                value={state.subject}
                required
                className="w-full p-4 text-black bg-white rounded-lg outline-none placeholder:text-black placeholder:opacity-80"
                placeholder="Enter Subject"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-base font-medium">
                Message
              </label>
              <textarea
                name="message"
                onChange={handleChange}
                required
                value={state.message}
                className="w-full  p-4 bg-white text-black placeholder:text-black placeholder:opacity-80 border rounded-lg outline-none resize-none min-h-[150px]"
                placeholder="Enter your message"
              />
            </div>
            <button
              type="submit"
              className="h-auto px-6 py-2 font-medium text-black bg-white rounded-lg w-fit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Script
        type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
      />
    </section>
  )
}

export default Contact
