import Head from 'next/head';
import Categories from "../components/HomeSections/Categories";
import CounterData from '../components/HomeSections/CounterData';
import LatestPost from "../components/HomeSections/LatestPost";
import MostPopular from "../components/HomeSections/MostPopular";
import Trending from '../components/HomeSections/Trending';

export default function Home() {
  // https://www.youtube.com/watch?v=1T3GF6endl8
  return (
    <>
       <Head>
            <title>Blog</title>
        </Head> 
      <Trending />
      <LatestPost />
      <MostPopular />
      <Categories />
      <CounterData />
    </>
  )
}
