import {Swiper, SwiperSlide} from 'swiper/react';
import { MoveImage } from './Styles';

const data = [
    {id: '1', image:"https://img.freepik.com/fotos-gratis/praia-tropical_74190-188.jpg"},
    {id: '2', image:"https://img.freepik.com/fotos-premium/palmeiras-em-uma-praia-ao-por-do-sol_865967-48808.jpg"},
    {id: '3', image:"https://www.onze.com.br/blog/wp-content/uploads/2020/01/shutterstock_644740429-1-770x478.jpg"}
]

const Carrossel = () =>(
    
    
<MoveImage>
    <Swiper
    slidesPerView={1}
    pagination={{clickable:true}}

    autoplay={{delay:5000}}>
        {data.map((item) =>(
               <SwiperSlide key={item.id}>
                <img src={item.image}/>
               </SwiperSlide>
        ))}
    </Swiper>
</MoveImage>
)

export default Carrossel