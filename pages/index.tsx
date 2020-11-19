import Head from "next/head";
import { GetStaticProps } from "next";

import useSWR from "swr";

import Hero from "../components/ui/Hero";
import { fetcher } from "../util/fetcher";
import { useEffect } from "react";

interface HomeProps {
  locale: any;
}

const Home: React.FC<HomeProps> = ({ locale }) => {
  const { data } = useSWR(`/api/projects`, fetcher);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero
          headline="Desenvolvedor web pronto para criar algo incrível"
          description=""
        />
        {!data ? <h3>Loading</h3> : <h3></h3>}
      </main>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: { locale },
  };
};
