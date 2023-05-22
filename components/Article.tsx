import { FC } from 'react';
import Image from 'next/image';

interface ArticleProps {
    id: string;
    image: string;
    title: string;
    description: string;
}

const Article: FC<ArticleProps> = ({ id, image, title, description }) => (
    <article className="article-item" id={id}>
        <Image
            src={image}
            alt={title}
            width={75}
            height={150}
        />
        <h2>{title}</h2>
        <p>{description}</p>
    </article>
)

export default Article;
