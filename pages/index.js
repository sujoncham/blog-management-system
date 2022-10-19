import Head from 'next/head';
import Banner from "../components/HomeSections/Banner";
import Categories from "../components/HomeSections/Categories";
import LatestPost from "../components/HomeSections/LatestPost";
import MostPopular from "../components/HomeSections/MostPopular";

export default function Home() {
  // https://www.youtube.com/watch?v=1T3GF6endl8
  return (
    <>
       <Head>
            <title>Blog</title>
        </Head> 
      <Banner />
      <LatestPost />
      <MostPopular />
      <Categories />
    </>
  )
}
