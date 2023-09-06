"use client";
import { SectionHero } from "../components/home/sectionHero/";
import { ListCharacters } from "../components/home/listCharacters"
import { getPrismicClient } from "../services/prismic";
import { useEffect } from "react";


export default async function Home() {
const data = await getStaticProps();
  return (
    <>
      <SectionHero data={data} />
      <ListCharacters />
    </>
  )
}


export const getStaticProps = async () => {
  const prismic = getPrismicClient();
  const contentsPage = await prismic.getSingle("home");
  return {
    value: {
      dataPage: contentsPage.data,
      revalidate: 60,
    },
  };
}