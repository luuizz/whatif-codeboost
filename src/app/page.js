import { SectionHero } from "../components/home/sectionHero/";
import { ListCharacters } from "../components/home/listCharacters"
import { getPrismicClient } from "../services/prismic"


export default function Home({dataPage}) {
  return (
    <>
      <SectionHero
      data={dataPage}
      />
      <ListCharacters />
    </>
  )
}


export const getStaticProps = async () => {
  const prismic = getPrismicClient();
  const contentsPage = await prismic.getSingle("home");

  console.log(dataPage);
  return {
    props: {
      dataPage: contentsPage.data,
    },
    revalidate: 60,
  };
}