import Image from 'next/image'
import { Container } from '@/styles/global'
import { PopupVideo } from '/src/components/popupVideo'
import { SectionHeroStyle, AreaSocial, ContextText } from './styles'
import YoutubeLogo from '/src/assets/icon-youtube.svg'
import InstagramLogo from '/src/assets/icon-instagram.svg'

const socials = [
    {
        name: 'Youtube',
        url: "#",
        icon: YoutubeLogo,
    },
    {
        name: 'Instagram',
        url: "#",
        icon: InstagramLogo,
    }
]

export function SectionHero() {
    return (
        <SectionHeroStyle>
            <Container>
                <AreaSocial>
                    <ul>
                        {
                            socials.map(({name, url, icon, index}) => {
                                return (
                                    <li key={index}>
                                        <a href={url} target="_blank" title={name}>
                                            <Image
                                            src={icon}
                                            alt={icon}
                                            />
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </AreaSocial>
                <ContextText>
                    <div className="left">
                        <h3>Comming Soon</h3>
                        <h1>Marvel's WHAT IF... ?</h1>
                        <p>Disponível no Disney+, What If… ? é uma série de animação que leva o público para um terreno desconhecido ao contar, de forma alternativa, momentos cruciais do Universo Cinematográfico Marvel, imaginando o que teria acontecido aos super-heróis se a história fosse totalmente diferente e se passasse em outra realidade.</p>
                        <a href="#" target="_blank">Saiba mais</a>
                    </div>
                    <PopupVideo />
                </ContextText>
            </Container>
        </SectionHeroStyle>
    )
}