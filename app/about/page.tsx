import React, {FC} from 'react'
import Image from "next/image"

const About: FC = () => {
    return (
        <>
            <main>
                <Image
                    src="/img/lucky-shrub-about.webp"
                    alt="About Lucky Shrub"
                    width={976}
                    height={800}
                    className="mx-auto py-6 drop-shadow-container"
                />
                <h1 className="text-3xl lg:text-5xl text-center">About Us</h1>
                <p className="mx-10 p-4">Lucky Shrub is a medium-sized garden design firm that specializes in garden design and creation, maintenance and landscaping. Based in Taos, New Mexico, Lucky Shrub is a small plant nursery that sells indoor and outdoor plants, making them a one-stop shop for clients to "transform any space into an oasis you can be proud of".</p>
                <p className="mx-10 p-4 pb-10">Lucky Shrub was started by a husband and wife team, Jason and Maria, who share a long-time love for plants. Jason is the garden architect. He creates and oversees all designs while managing his team of landscapers. Maria manages all the marketing for the company and oversees the nursery.</p>
            </main>
        </>
    );
}

export default About;