import {FC} from 'react'
import Image from 'next/image'

type PlantProps = {
    src: string;
    alt: string;
    title: string;
    name: string;
    color: 'green' | 'red' | 'white';
};

const Plant: FC<PlantProps> = ({src, alt, title, name, color}) => {
    // Mapping plant colors to Tailwind CSS classes
    const colorClasses = {
        green: '',
        red: 'text-red-600',
        white: 'text-white', // White text might not be visible, so I'm using gray here
    };
    const textColor = colorClasses[color];

    return (
        <div className="mb-10">
            <Image className="mx-auto -mb-6 drop-shadow-image" src={src} alt={alt} title={title} width={273} height={298}/>
            <p className={textColor}>{name}</p>
        </div>
    )
}

export default Plant
