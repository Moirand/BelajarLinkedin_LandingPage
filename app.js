import './src/script/components/testimonialCard.js';
import { testimonialsData } from './src/script/data/testimonialsData.js';

const testimonialSlider1 = document.querySelector('#testimonial-slider-1');
const testimonialSlider2 = document.querySelector('#testimonial-slider-2');
const testimonialSlider3 = document.querySelector('#testimonial-slider-3');

const [testimonials1, testimonials2, testimonials3] = splitTestimonialsData(3, testimonialsData);

fillTestimonialSlider(testimonialSlider1, testimonials1);
fillTestimonialSlider(testimonialSlider2, testimonials2);
fillTestimonialSlider(testimonialSlider3, testimonials3);

// Duplikasi agar looping slider mulus
fillTestimonialSlider(testimonialSlider1, testimonials1);
fillTestimonialSlider(testimonialSlider2, testimonials2);
fillTestimonialSlider(testimonialSlider3, testimonials3);

function splitTestimonialsData(splitAmount, testimonialList) {
    const size = Math.ceil(testimonialList.length / splitAmount);

    const part1 = testimonialList.slice(0, size);
    const part2 = testimonialList.slice(size, size * 2);
    const part3 = testimonialList.slice(size * 2);

    return [part1, part2, part3];
}

function fillTestimonialSlider(testimonialSlider, testimonialList) {
    const testimonialCards = testimonialList.map((data) => {
        const testimonialCard = document.createElement('testimonial-card');
        testimonialCard.setTestimonial(data.profile, data.name, data.status, data.testimonial);

        return testimonialCard;
    });

    testimonialSlider.append(...testimonialCards);
}