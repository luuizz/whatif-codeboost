import { SectionHero } from "../components/home/sectionHero/";
import { ListCharacters } from "../components/home/listCharacters"
import { getPrismicClient } from "../services/prismic"


export default function Home() {
  return (
    <>
      <SectionHero
      />
      <ListCharacters />
    </>
  )
}


export const getStaticProps = async () => {
  const prismic = getPrismicClient()
  const contentsPage = await prismic.getSingle("home");

  const characters = await prismic.getAllByType('character');

  console.log(characters);

  console.log(contentsPage.data);

  return {
    props: {
      dataPage: contentsPage.data,
    },
    revalidate: 60,
  };
}