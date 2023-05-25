'use client'

import React, {FC} from 'react'
import Image from "next/image"

const ContactForm: FC = () => (
    <div className={"grid lg:grid-cols-3"}>
        <main className="lg:col-span-3">
            <Image
                src="/img/lucky-shrub-contact.webp"
                alt="About Lucky Shrub"
                width={976}
                height={800}
                className="mx-auto py-6"
            />
            <h1 className="text-3xl lg:text-5xl text-center">Contact Us</h1>
            <p className="lg:mx-10 p-4">Have a technical issue? Want to send feedback? Any questions at all? Maybe you just want to say hi? Let us know.</p>
            <form action="#" className="space-y-8 mx-6 pt-2">
                <div className="grid lg:grid-cols-5 mx-auto">
                    <div className="lg:col-start-2">
                        <label htmlFor="name" className="mb-1">&nbsp;Your Name
                        </label><br/>
                        <input type="name" id="name"
                               placeholder=" Name"
                               className="w-full"
                               required/>
                    </div><br/>
                    <div className="lg:col-start-4 lg:justify-self-end">
                        <label htmlFor="email" className="block mb-1">
                            &nbsp;Your email
                        </label>
                        <input type="email"
                               id="email"
                               placeholder=" name@email.com"
                               className="w-full"
                               required/>
                    </div><br/>
                    <div className="lg:col-start-2">
                        <label htmlFor="message" className="block mb-1">
                             &nbsp;Your message
                        </label>
                        <textarea id="message"
                                  rows={6}
                                  className="block p-2.5 mb-3 w-full bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                                  placeholder="Leave a comment...">
                        </textarea>
                    </div>
                    <button type="submit" className="py-2 px-5 mb-10 text-xl text-center text-white rounded-lg bg-grass  hover:bg-black focus:ring-4 focus:outline-none focus:ring-primary-300">
                        Send message
                    </button>
                </div>
            </form>
        </main>
    </div>
)

export default ContactForm
