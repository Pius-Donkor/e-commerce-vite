// src/pages/HomePage.js
import Header from "../ui/Header";
import Footer from "../ui/Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <main className="p-4">
        <section className="slider bg-blue-700 text-white h-[450px] relative overflow-hidden">
          <div className="slides flex animate-slide">
            <div className="slide w-full flex-shrink-0 text-center">
              <img
                src="/img/Airforce.jpg"
                alt="Limited Offer 1"
                className="w-full h-full object-cover"
              />
              <h2 className="text-2xl">Limited Offer 1</h2>
              <p>Don’t miss out on this exclusive deal!</p>
            </div>
            <div className="slide w-full flex-shrink-0 text-center">
              <img
                src="/img/IMG-20240810-WA0022.jpg"
                alt="Limited Offer 2"
                className="w-full h-full object-cover"
              />
              <h2 className="text-2xl">Limited Offer 2</h2>
              <p>Get your favorite shoes at a great price!</p>
            </div>
            <div className="slide w-full flex-shrink-0 text-center">
              <img
                src="/img/Airforce.jpg"
                alt="Limited Offer 3"
                className="w-full h-full object-cover"
              />
              <h2 className="text-2xl">Limited Offer 3</h2>
              <p>Shop now while stocks last!</p>
            </div>
          </div>
        </section>
        <section className="hero text-center my-8">
          <h2 className="text-3xl font-bold">Discover Amazing Shoes</h2>
          <p>Your one-stop shop for all things stylish</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
