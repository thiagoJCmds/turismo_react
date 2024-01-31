import {Swiper, SwiperSlide} from 'swiper/react';
import { MoveImage } from './Styles';
import {EffectFade} from 'swiper/modules'

const data = [
    {id: '1', image:"https://www.viajoteca.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/10/Pontes-mais-famosas-de-Veneza.jpg.webp"},
    {id: '2', image:"https://goescocia.com/wp-content/uploads/castelo-escocia.jpg"},
    {id: '3', image:"https://www.onze.com.br/blog/wp-content/uploads/2020/01/shutterstock_644740429-1-770x478.jpg"},
    {id: '4', image:"https://www.melhoresdestinos.com.br/wp-content/uploads/2020/09/arraial-do-cabo-capa2019.jpg"},
    {id: '5', image:"https://evturismo.com.br/wp-content/uploads/2023/11/atracoes-gramado-canela-2.jpg"}
]

const Carrossel = () =>(
    
    
<MoveImage>
    <Swiper
    modules={[EffectFade]}
    slidesPerView={1}
    pagination={{clickable:true}}
    autoplay={{delay:4000}}
    effect='fade'>
        {data.map((item) =>(
               <SwiperSlide key={item.id}>
                <img src={item.image}/>
               </SwiperSlide>
        ))}
    </Swiper>
</MoveImage>
)

export default Carrossel