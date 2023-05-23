import React, { FC } from 'react';
import Image from 'next/image';

const Footer: FC = () => {
    return (
        <footer className="hidden md:container md:mx-auto lg:grid grid-cols-2 bg-grass text-white drop-shadow-container">
            <Image
                src="/img/lucky-shrub-logo-footer.webp"
                alt=""
                width={35}
                height={50}
                className="place-self-center py-2"
            />
            <p className="place-self-center">&copy; 2023 Lucky Shrub</p>
        </footer>
    );
};

export default Footer;
