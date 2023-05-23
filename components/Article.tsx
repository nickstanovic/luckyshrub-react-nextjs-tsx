import { FC } from 'react';
import Image from 'next/image';

interface ArticleProps {
    id: string;
    image: string;
    title: string;
    description: string;
}

const Article: FC<ArticleProps> = ({ id, image, title, description }) => (
    <article>
        <Image
            src={image}
            alt={title}
            width={75}
            height={150}
            className="mx-auto"
        />
        <h2>{title}</h2>
        <p>{description}</p>
    </article>
)

export default Article;
