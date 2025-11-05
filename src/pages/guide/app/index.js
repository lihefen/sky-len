import { navigateTo } from '@/utils';
import { Toast,CountDown,Field ,DropdownMenu,DropdownItem,List} from 'vant';
import { get } from 'lodash';
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    name: 'Guide',
    data() {
        return {
            swiperOptionStep:{
                slidesPerView: "auto",
                spaceBetween: 10,
                pagination: {
                    el: ".swiper-pagination",
                },
            },
        };
    },
    mounted() {
    },
    methods: {
    }
};