import Banner from "../components/HomeSections/Banner";
import LatestPost from "../components/HomeSections/LatestPost";
import MostPopular from "../components/HomeSections/MostPopular";
import Layout from "../layout/Layout";

export default function Home() {
  return (
    <Layout>
      <Banner />
      <LatestPost />
      <MostPopular />
    </Layout>
  )
}
