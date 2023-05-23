import { FC } from 'react';
import Image from 'next/image';
import Article from './Article';

const Main: FC = () => {
    return (
        <>
            <main className="drop-shadow-container">
                <span className="absolute bg-black bg-opacity-70 text-white z-10 text-xl">20% Spring Sale until June 1st :)</span>
                <Image
                    src='/img/lucky-shrub.webp'
                    alt='Lucky Shrub Shop'
                    width={1600}
                    height={1066}
                />
                <h1 className="text-2xl text-center">Welcome to Lucky Shrub!</h1>
            </main>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 text-center">
                <Article
                    image="/img/green-article-logo.webp"
                    title="Green Shrubs"
                    description="You'll love our variety of lush green shrubs, such as boxwood, holly, and juniper, that can enhance the beauty of your garden or indoor space."
                />
                <Article
                    image="/img/red-article-logo.webp"
                    title="Red Shrubs"
                    description="Check out our vibrant red shrubs, including red barberry, red twig dogwood, and red chokeberry, which can add a pop of color and visual interest to your garden or landscaping."
                />
                <Article
                    image="/img/white-article-logo.webp"
                    title="White Shrubs"
                    description="We offer elegant white shrubs, including popular options like white hydrangeas, white azaleas, and white snowberry bushes, which can add a touch of classic beauty and charm to any garden or outdoor space"
                />
            </div>
        </>
    );
}

export default Main;
