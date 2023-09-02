import {Header} from "../components/Header"
import { SectionHero } from "../components/home/sectionHero/";
import { ListCharacters } from "../components/home/listCharacters"

export default function Home() {
  return (
    <>
      <Header />
      <SectionHero />
      <ListCharacters />
    </>
  )
}
