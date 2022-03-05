import type { NextPage } from "next";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import ButtonsContainer from "../components/buttons/buttons-container";
import { RootState } from "../redux/store";
import DisplayContainer from "../components/display-container/display-container";

const HomePage: NextPage = () => {
  const { expr, ans, texExpOutput } = useSelector(
    (state: RootState) => state.calculator
  );
  const dispatch = useDispatch();

  return (
    <div>
      <Head>
        <title>Scientific Calculator</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" h-screen bg-slate-700 text-gray-200 overflow-hidden">
        <main
          className=" h-full flex flex-col sm:border-solid sm:border-2 sm:w-10/12 sm:mx-auto sm:rounded-md 
         md:w-9/12 lg:w-8/12"
        >
          <div className=" h-24 w-full bg-slate-300 flex items-center justify-start p-2 my-2 text-black overflow-x-scroll">
            <DisplayContainer />
          </div>
          <div className=" h-16 bg-gray-800 flex items-center justify-start p-4 my-2">
            ANS: &nbsp;
            {ans && <span>{ans}</span>}
          </div>

          <div className=" mb-auto ">
            <ButtonsContainer />
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
