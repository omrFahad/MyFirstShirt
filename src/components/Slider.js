import '../styles/slider.scss'
import { Carousel, CarouselItem, Container } from 'react-bootstrap'


let Slider = () => {
    return (
        <Carousel interval={null}>
            {/* 1 */}
            <Carousel.Item  >
                <div id='firstSlide'>
                    <h2>Offer from 30% to 70% END SOON !!!</h2>
                </div>
            </Carousel.Item>
            {/* 2 */}
            <Carousel.Item >
                <div id='secondSlide'>
                    <h2>
                        free SHIPPING over 300
                    </h2>

                </div>
            </Carousel.Item>
            {/* 3 */}
            <Carousel.Item >
                <div id='thirdSlide'>
                </div>
            </Carousel.Item>
        </Carousel >

    )
}

export default Slider



