import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper/modules";
import Button from "../ui/Button";
import Products from "../features/Products/Products";
import { productsData } from "../data";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const homeProducts = productsData.filter((_, i) => i > 3);
  return (
    <main className="bg-softWhite flex flex-col gap-16">
      <section className="h-[88dvh] ">
        <div className="w-full relative text-center h-full">
          <div className="absolute top-0 right-0  w-full h-full z-10 text-softWhite bg-[#0000008a] backdrop-blur-sm flex  px-16 justify-between items-center">
            {/* first box */}
            <div className="flex w-[50%] flex-col gap-4 items-start">
              <h3 className="text-softWhite">Trade-In-Offer</h3>
              <h1 className="text-emeraldGreen">Super Value Deals</h1>
              <h2 className="text-softWhite">On all products</h2>
              <h4>save more with coupons and up to 70% off!</h4>
              <p className="text-emeraldGreen">
                Don’t miss out on this exclusive deal!
              </p>
              <Button onClick={() => navigate("products")} type="orange">
                Shop Now
              </Button>
            </div>
            {/* second box */}
            <div className=" w-[50%] h-[95%]  ">
              <img className="w-full h-full" src="/hero1.png" alt="heroImg" />
            </div>
          </div>
          {/* carousel */}
          <Swiper
            modules={[EffectFade, Autoplay, Navigation, Pagination]}
            effect={"fade"}
            spaceBetween={30}
            className="w-full h-full"
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            centeredSlides={true}
            loop={true}
            navigation={false}
            pagination={{ clickable: true }}
          >
            <SwiperSlide className="w-full">
              <img
                src="/Airforce.jpg"
                alt="Limited Offer 1"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>

            <SwiperSlide className="w-full">
              <img
                src="/IMG-20240805-WA0001.jpg"
                alt="Limited Offer 2"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>

            <SwiperSlide className="w-full">
              <img
                src="/IMG-20240805-WA0004.jpg"
                alt="Limited Offer 3"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section className="hero text-center">
        <h2 className="text-3xl font-bold">Discover Amazing Shoes</h2>
        <p>Your one-stop shop for all things stylish</p>
        <Products products={homeProducts} />
      </section>
    </main>
  );
};

export default HomePage;
