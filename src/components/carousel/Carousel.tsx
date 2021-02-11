import React, { useState } from 'react';
import SwiperCore, { Navigation, Keyboard, Thumbs, Controller } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image, { FluidObject, FixedObject } from 'gatsby-image';

import styles from './carousel.module.scss';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/thumbs/thumbs.scss';

interface CarouselProps {
    projects: Array<{
        node: {
            title: string;
            description: string;
            image: {
                fluid: FluidObject;
            };
            thumb: {
                fixed: FixedObject;
            };
        };
    }>;
}

SwiperCore.use([Navigation, Keyboard, Thumbs, Controller]);

const Carousel: React.FC<CarouselProps> = ({ projects }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<null | any>(null);
    return (
        <>
            <Swiper
                id="swiper"
                className={styles.swiper}
                thumbs={{ swiper: thumbsSwiper }}
                controller={{ control: thumbsSwiper, by: 'container' }}
                spaceBetween={50}
                touchRatio={0.5}
                navigation
                keyboard
                grabCursor
                slideToClickedSlide
                // loop

                breakpoints={{
                    1024: { slidesPerView: 1, spaceBetween: 30 },
                }}
            >
                {projects.map(project => {
                    const { title, image } = project.node;

                    return (
                        <SwiperSlide key={title} className={styles.slide}>
                            <Image
                                className={styles.image}
                                fluid={image.fluid}
                                alt={title}
                                imgStyle={{
                                    objectFit: 'contain',
                                }}
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>

            <Swiper
                id="thumbs"
                className={styles.thumbsContainer}
                onSwiper={setThumbsSwiper}
                watchSlidesVisibility
                watchSlidesProgress
                spaceBetween={10}
                slidesPerView={5}
                slideToClickedSlide
                touchRatio={0.5}
                breakpoints={{
                    768: { slidesPerView: 'auto', spaceBetween: 12 },
                    1024: {
                        slidesPerView: 'auto',
                    },
                }}
            >
                {projects.map(project => {
                    const { title, thumb } = project.node;
                    return (
                        <SwiperSlide key={title} className={styles.thumb}>
                            <Image
                                className={styles.thumbImage}
                                fixed={thumb.fixed}
                                alt={title}
                                imgStyle={{
                                    objectFit: 'cover',
                                    objectPosition: '50% 30%',
                                }}
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </>
    );
};

export default React.memo(Carousel);
