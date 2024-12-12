import { RecoilRoot } from "recoil";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";
import Card from "../components/Features/Card";
import cardData from "../data/cardData.json";
import About from "../components/About/About";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <RecoilRoot>
      <div className="flex flex-col">
        <Navbar />
        <div className="grid grid-cols-12">
          <div className="col-span-2">
            <Sidebar />
          </div>
          <div className="col-span-10 relative top-28 left-[-34px]">
            <Hero />
            <div className="cardSection md:mx-24">
              <h2 className="text-3xl text-center mt-4 mb-2">Featured</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-11 p-9 md:p-0 ">
                {cardData.map((card) => (
                  <Card
                    key={card.id}
                    cardImage={card.image}
                    title={card.title}
                    price={card.price}
                  />
                ))}
              </div>
            </div>
            <h1 className="text-center text-4xl font-bold mt-8">
              About CourseNest
            </h1>
            <About />
            <Footer />
          </div>
        </div>
      </div>
    </RecoilRoot>
  );
};

export default Home;
