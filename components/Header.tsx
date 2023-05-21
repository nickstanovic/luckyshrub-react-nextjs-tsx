import Image from "next/image"


const Header = () => {
    return (
        <header className="md:container md:mx-auto bg-clay text-center">
            <Image
                src='/img/lucky-shrub-logo.webp'
                alt='Lucky Shrub Logo - Welcome to Lucky Shrub'
                width={320}
                height={100}
                className=" inline-block py-6"
            />
        </header>
    )
}

export default Header
