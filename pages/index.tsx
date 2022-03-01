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
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" h-screen bg-slate-700 text-gray-200">
        <header>this is header</header>
        <main>
          <div className=" h-16 bg-slate-300 flex items-center justify-start p-4 my-2 text-black">
            <DisplayContainer />
            
            <span className="mx-1 w-1 h-5 animate-pulse bg-black"></span>
          </div>
          <div className=" h-16 bg-gray-800 flex items-center justify-start p-4 my-2">
            ANS: &nbsp;
            {ans && <span>{ans}</span>}
          </div>

          <div>
            <ButtonsContainer />
          </div>
        </main>

        <footer></footer>
      </div>
    </div>
  );
};

export default HomePage;
