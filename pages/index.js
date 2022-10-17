import Banner from "../components/HomeSections/Banner";
import LatestPost from "../components/HomeSections/LatestPost";
import Layout from "../layout/Layout";

export default function Home() {
  return (
    <Layout>
      <Banner />
      <LatestPost />
    </Layout>
  )
}
