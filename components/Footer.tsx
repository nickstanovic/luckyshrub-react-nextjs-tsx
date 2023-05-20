import Image from "next/image"


const Footer = () => {
    return (
        <footer className="md:container md:mx-auto grid grid-cols-8 bg-grass drop-shadow-container">
            <Image
                src='/img/lucky-shrub-logo-footer.webp'
                alt=''
                width={35}
                height={50}
                className="col-start-1 place-self-center py-2"
            />
            <p className="col-start-3 col-end-8 place-self-center">&copy; 2023 Lucky Shrub</p>

        </footer>
    )
}

export default Footer
