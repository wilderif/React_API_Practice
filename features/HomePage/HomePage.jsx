import Header from "../../src/components/Header";
import BottomNavBar from "../../src/components/BottomNavBar";

const HomePage = () => {
  return (
    <>
      <Header isHome={true} />
      <main className="mx-4 bg-orange-300"></main>
      <BottomNavBar />
    </>
  );
};

export default HomePage;
