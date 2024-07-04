import { Header } from "./header";
import { NFTDetail } from "./nft-detail";

const Home = () => {
  return (
    <main className="container grid h-screen grid-rows-[auto_1fr] gap-5">
      <Header />
      <NFTDetail />
    </main>
  );
};
export default Home;
