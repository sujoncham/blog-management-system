import Categories from "../components/HomeSections/Categories";
import CounterData from '../components/HomeSections/CounterData';
import LatestPost from "../components/HomeSections/LatestPost";
import MostPopular from "../components/HomeSections/MostPopular";
import Trending from '../components/HomeSections/Trending';
import Layout from "../layout/Layout";

export default function Home() {
  // https://www.youtube.com/watch?v=1T3GF6endl8
  return (
    <>
      <Trending />
      <LatestPost />
      <MostPopular />
      <Categories />
      <CounterData />
    </>
  )
}

Home.Layout = Layout;
