'use client'

import React, {FC, FormEvent, useState, useEffect} from 'react'
import Image from "next/image"

const ContactForm: FC = () => {
    const [buttonLabel, setButtonLabel] = useState('Send message')
    const [formValues, setFormValues] = useState({ name: '', email: '', message: '' })

    useEffect(() => {
        if (buttonLabel === 'Message sent!') {
            setTimeout(() => {
                setButtonLabel('Send message')
                setFormValues({ name: '', email: '', message: '' })
            }, 5000)
        }
    }, [buttonLabel])

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {id, value} = event.target;
        setFormValues({...formValues, [id]: value})
    }

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        setButtonLabel('Sending...');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formValues)
            });

            if (response.status === 200) {
                setButtonLabel('Message sent!');
            } else {
                const data = await response.json();
                console.error(data);
                setButtonLabel('Message not sent. Try again!');
            }
        } catch (err) {
            console.error(err);
            setButtonLabel('Message not sent. Try again!');
        }
    }

    return (
        <div className={"grid lg:grid-cols-3"}>
            <main className="lg:col-span-3">
                <Image
                    src="/img/lucky-shrub-contact.webp"
                    alt="Contact Lucky Shrub"
                    width={976}
                    height={800}
                    className="mx-auto py-6 drop-shadow-container"
                />
                <h1 className="text-3xl lg:text-5xl text-center">Contact Us</h1>
                <p className="lg:mx-20 lg:text-center lg:mb-10 lg:p-4 p-6">Have a technical issue? Want to send feedback? Any questions at all? Maybe you just want to say hi? Let us know.</p>
                <form onSubmit={handleSubmit} className="space-y-8 mx-6 pt-2 text-white">
                    <div className="grid lg:grid-cols-5 mx-auto">
                        <div className="lg:col-start-2">
                            <label htmlFor="name" className="mb-1">&nbsp;Your Name
                            </label><br/>
                            <input type="name" id="name"
                                   placeholder=" Name"
                                   className="w-full lg:h-11 text-black"
                                   value={formValues.name}
                                   onChange={handleInputChange}
                                   required/>
                        </div>
                        <br/>
                        <div className="lg:col-start-4">
                            <label htmlFor="email" className="mb-1">&nbsp;Your email
                            </label>
                            <input type="email" id="email"
                                   placeholder=" name@email.com"
                                   className="w-full lg:h-11 text-black"
                                   value={formValues.email}
                                   onChange={handleInputChange}
                                   required/>
                        </div>
                        <br/>
                        <div className="lg:col-start-2 lg:col-end-5">
                            <label htmlFor="message" className="block mb-1 lg:pt-5">
                                &nbsp;Your message
                            </label>
                            <textarea id="message"
                                      rows={3}
                                      className="block p-2.5 mb-3 w-full bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 text-black"
                                      placeholder="Tell us how we can help..."
                                      value={formValues.message}
                                      onChange={handleInputChange}>
                            </textarea>
                        </div>
                        <br/>
                        <button type="submit" className="fun-button lg:col-start-3 lg:mt-8">
                            {buttonLabel}
                        </button>
                    </div>
                </form>
            </main>
        </div>
    )
}

export default ContactForm
