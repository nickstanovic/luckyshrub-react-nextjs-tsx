import Link from 'next/link';

const Nav = () => {
    return (
        <nav className="md:container md:mx-auto bg-grass text-center drop-shadow-nav py-2">
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