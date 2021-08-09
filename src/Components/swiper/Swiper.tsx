import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../productCard/ProductCard";

interface SwiperProps {
  children?: React.ReactNode[];
  className?: String;
}

function Slide({ children, className }: SwiperProps) {
  return (
    <Swiper  spaceBetween={5}  slidesPerView={3}>
      <SwiperSlide>
        <ProductCard
          xs={12}
          pic="https://http2.mlstatic.com/D_Q_NP_964008-MLA44916357909_022021-AB.webp"
          title="dear"
          discount={20}
        />
      </SwiperSlide>
      <SwiperSlide>
        <ProductCard
          xs={12}
          pic="https://http2.mlstatic.com/D_Q_NP_964008-MLA44916357909_022021-AB.webp"
          title="dear"
          discount={20}
        />
        </SwiperSlide>
      <SwiperSlide>
        <ProductCard
          xs={12}
          pic="https://http2.mlstatic.com/D_Q_NP_964008-MLA44916357909_022021-AB.webp"
          title="dear"
          discount={20}
        />
      </SwiperSlide>
      
    </Swiper>
  );
}

export default Slide;
