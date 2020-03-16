import { NextPage } from 'next';
import MainLayoit from '../layouts/MainLayout';
import SampleArticle from './articles/SampleArticle';

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => (
  <MainLayoit>
    <h1>think; think; think;</h1>
    <p>Sandbox for web development.</p>
    <SampleArticle />
    <p> UA: {userAgent}</p>
  </MainLayoit>
);

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  return { userAgent };
};

export default Home;
