import React, { FC } from 'react';
import Link from 'next/link';

const Nav: FC = () => {
    return (
        <nav className="md:container md:mx-auto bg-grass text-white text-center drop-shadow-nav font-bold py-2 hidden lg:block">
            <ul className="grid grid-cols-4">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/products">Products</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;
