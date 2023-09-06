"use client";
import Image from 'next/image'
import { Container } from '../../../styles/global'
import { PopupVideo } from '/src/components/popupVideo'
import { SectionHeroStyle, AreaSocial, ContextText } from './styles'
import YoutubeLogo from '/src/assets/icon-youtube.svg'
import InstagramLogo from '/src/assets/icon-instagram.svg'
import { useEffect } from 'react';

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

export function SectionHero({ data }) {
    console.log(data)
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
                        <h3>{data.value.dataPage.subtitle_hero}</h3>
                        <h1>{data.value.dataPage.title_hero}</h1>
                        <p>{data.value.dataPage.description_hero[0].text}</p>
                        <a href="#" target="_blank">{data.value.dataPage.label_button}</a>
                    </div>
                    <PopupVideo />
                </ContextText>
            </Container>
        </SectionHeroStyle>
    )
}