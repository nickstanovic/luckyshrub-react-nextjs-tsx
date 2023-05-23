import React, { FC } from 'react';
import Article from "@/components/Article"


const Home: FC = () => {
    return (
        <>
            <main>
                <span className="absolute bg-black bg-opacity-70 text-white z-10 text-2xl lg:text-5xl">
                    20% Spring Sale until June 1st :)
                </span>
                <picture className="drop-shadow-container">
                    <source srcSet="/img/lucky-shrub.webp" media="(min-width: 768px)" />
                    <source srcSet="/img/lucky-shrub-mobile.webp" media="(max-width: 767px)" />
                    <img src="/img/lucky-shrub.webp" alt="Lucky Shrub Shop" />
                </picture>
                <h1 className="text-3xl lg:text-4xl text-center">Welcome to Lucky Shrub!</h1>
            </main>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 text-center">
                <Article
                    image="/img/green-article-logo.webp"
                    title="Green Shrubs"
                    description="You'll love our variety of lush green shrubs, such as boxwood, holly, and juniper, that can enhance the beauty of your garden or indoor space."
                />
                <Article
                    color="text-red-600"
                    image="/img/red-article-logo.webp"
                    title="Red Shrubs"
                    description="Check out our vibrant red shrubs, including red barberry, red twig dogwood, and red chokeberry, which can add a pop of color and visual interest to your garden or landscaping."
                />
                <Article
                    color="text-white"
                    image="/img/white-article-logo.webp"
                    title="White Shrubs"
                    description="We offer elegant white shrubs, including popular options like white hydrangeas, white azaleas, and white snowberry bushes, which can add a touch of classic beauty and charm to any garden or outdoor space"
                />
            </div>
        </>
    );
}

export default Home;