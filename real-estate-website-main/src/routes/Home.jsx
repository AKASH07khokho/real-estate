import Banner from '../components/Banner'
import Search from '../components/Search/Search'
import HouseList from '../components/Houses/HouseList';
import Testimonials from '../components/Testimonials';
import PopularLocations from '../components/PopularLocations';
import CallToAction from '../components/CallToAction';
import BlogPreview from '../components/BlogPreview';

const Home = () => {
  return (
    <>
      <Banner />
      <Search />
      <HouseList />
      <PopularLocations />
      <CallToAction />
      <Testimonials />
      <BlogPreview />
    </>
  )
}

export default Home;