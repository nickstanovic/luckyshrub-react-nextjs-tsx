import Image from "next/image"


const Footer = () => {
    return (
        <footer className="md:container md:mx-auto grid grid-cols-4 bg-grass drop-shadow-container">
            <Image
                src='/img/lucky-shrub-logo-footer.webp'
                alt=''
                width={35}
                height={50}
                className="place-self-center py-2"
            />
            <p className="col-start-3 place-self-center">&copy; 2023 Lucky Shrub</p>

        </footer>
    )
}

export default Footer
