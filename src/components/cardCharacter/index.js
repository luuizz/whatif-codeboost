import Link from 'next/link'
import { StyleCard } from './styles'


import Image from 'next/image'

export function CardCharacter({image, name, slug}) {
    return <StyleCard>
        <Link href={`/character/${slug}`}>
            <div className="image">
                <Image
                src={image}
                alt='Personagem'
                />
            </div>
            <div className="info">
                <h3>{name}</h3>
                <span>What if</span>
            </div>
            <span>Marvel Studios</span>
        </Link>
    </StyleCard>
}