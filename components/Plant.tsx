import {FC} from 'react'
import Image from 'next/image'

type PlantProps = {
    src: string;
    alt: string;
    title: string;
    name: string;
};

const Plant: FC<PlantProps> = ({src, alt, title, name}) => (
    <div className="mb-10">
        <Image className="mx-auto -mb-6 drop-shadow-image" src={src} alt={alt} title={title} width={273} height={298}/>
        <p>{name}</p>
    </div>
)

export default Plant
