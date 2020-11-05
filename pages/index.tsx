import Head from "next/head";
import { GetStaticProps } from "next";

import Hero from '../components/ui/Hero'

import { connectToDatabase } from "../util/mongodb";

interface HomeProps {
  isConnected: boolean;
}

const Home:React.FC<HomeProps> = ({ isConnected }) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero headline="Headline" description="description"/>
        {isConnected ? (
          <h2>You are connected to MongoDB</h2>
        ) : (
          <h2>
            You are NOT connected to MongoDB. Check the <code>README.md</code>{" "}
            for instructions.
          </h2>
        )}
      </main>
    </div>
  );
}

export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
  const { client } = await connectToDatabase();

  const isConnected:boolean = await client.isConnected(); // Returns true or false

  return {
    props: { isConnected },
  };
};
