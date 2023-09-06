import { SectionHeroCharacter } from "../../../components/details/sectionHeroCharacter";
import { metadata } from "next";
import { ListCharacters } from '../../../components/home/listCharacters'



export default function PageCharacter() {
  return (
    <>
        <SectionHeroCharacter />
        <ListCharacters />
    </>
  )
}