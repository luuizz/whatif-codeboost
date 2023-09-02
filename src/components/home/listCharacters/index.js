import Image from "next/image";
import { StyleSectionCharacters, StyleListCharacters } from "./styles"
import { Container } from "@/styles/global"
import {CardCharacter} from "../../cardCharacter";
import LogoMarvel from "../../../assets/logo-marvel.svg"
import KillmongerImage from '../../../assets/character-01.jpg'

const characters = [
    {
        name: "Killmonger",
        image: KillmongerImage,
        slug: "killmonger",
    },
    {
        name: "Captain Carter",
        image: "",
        slug: 'captain-carter',
    },
    {
        name: "Captain Carter",
        image: "",
        slug: 'captain-carter',
    },
    {
        name: "Captain Carter",
        image: "",
        slug: 'captain-carter',
    },
    {
        name: "Captain Carter",
        image: "",
        slug: 'captain-carter',
    },
    {
        name: "Captain Carter",
        image: "",
        slug: 'captain-carter',
    },
    {
        name: "Captain Carter",
        image: "",
        slug: 'captain-carter',
    }
]

export function ListCharacters() {
    return (
        <>
        <StyleSectionCharacters>
            <Container>
            <div className="title">
                <span>What if?</span>
                <h2>Personagens Marvel</h2>
            </div>
            <StyleListCharacters>
                {
                    characters.map(({name, image, slug}) => {
                        return (
                            <CardCharacter 
                            key={name} 
                            image={image}
                            slug={slug} 
                            name={name} />
                        )
                    })
                }
                <div className="marvel">
                    <Image
                    src={LogoMarvel}
                    alt="Logo da Marvel"
                    title="Marvel Studios"
                    />
                </div>
            </StyleListCharacters>
            </Container>
        </StyleSectionCharacters>
        </>
    )
}