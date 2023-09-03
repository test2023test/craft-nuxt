import Swiper from 'swiper';
import {Navigation} from "swiper/modules";
export function sliderInit(id, nextId, prevId)
{
	if(process.browser)
	{
		let sliderSection = document.getElementById(id);
		let nextButton = document.getElementById(nextId);
		let prevButton = document.getElementById(prevId);
		new Swiper(sliderSection, {
			modules: [Navigation],
			slidesPerView: 2.2,
			spaceBetween: 8,
			grabCursor: true,
			navigation: {
				nextEl: nextButton,
				prevEl: prevButton
			},
			breakpoints: {
				560: {
					slidesPerView: 3.2,
					spaceBetween: 8
				},
				1024: {
					slidesPerView: 4,
					spaceBetween: 24,
				}
			}
		})
	}
}