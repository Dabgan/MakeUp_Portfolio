import React, { MouseEvent, useState } from 'react';
import SwiperCore, {
    Navigation,
    Keyboard,
    Thumbs,
    Controller,
    Lazy,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image, { FluidObject, FixedObject } from 'gatsby-image';
import { IoMdClose } from 'react-icons/io';

import styles from './carousel.module.scss';
import 'swiper/swiper.scss';
import 'swiper/components/controller/controller.scss';
import 'swiper/components/thumbs/thumbs.scss';
import 'swiper/components/lazy/lazy.scss';

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
            position: number;
        };
    }>;
}

SwiperCore.use([Navigation, Keyboard, Thumbs, Controller, Lazy]);

const Carousel: React.FC<CarouselProps> = ({ projects }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | undefined>();
    const [fullScreen, setFullScreen] = useState<boolean>(false);

    projects.sort((a, b) => a.node.position - b.node.position);

    const getFullScreenClass = (elem: string) => {
        const chooseClass = (fullClass: string, closedClass?: string) => {
            return fullScreen ? fullClass : closedClass || '';
        };

        switch (elem) {
            case 'swiper':
                return chooseClass(styles.swiperFullScreen);
            case 'thumbs':
                return chooseClass(styles.thumbsContainerFullScreen);
            case 'btn':
                return chooseClass(styles.closeBtn, styles.closeBtnClosed);
            default:
                return;
        }
    };

    const handleKeyPress = (key?: string | number) => {
        return key && key === 27 ? setFullScreen(false) : null;
    };

    const handleClick = (e?: MouseEvent<SVGElement | HTMLElement>) => {
        if (e) {
            if ((e.target as HTMLElement).tagName === 'IMG') {
                setFullScreen(true);
            } else if (
                (e.target as SVGElement).tagName === 'svg' ||
                (e.target as SVGElement).tagName === 'path'
            ) {
                setFullScreen(false);
            }
        }
    };

    return (
        <>
            <IoMdClose
                className={getFullScreenClass('btn')}
                onClick={e => handleClick(e)}
            />
            <Swiper
                id="swiper"
                onKeyPress={(event, key) => handleKeyPress(key)}
                className={`${styles.swiper} ${getFullScreenClass('swiper')}`}
                thumbs={{ swiper: thumbsSwiper }}
                controller={{ control: thumbsSwiper, by: `container` }}
                spaceBetween={50}
                touchRatio={0.3}
                navigation
                keyboard
                resizeObserver
                slideToClickedSlide
                breakpoints={{
                    1024: { slidesPerView: 1, spaceBetween: 30 },
                }}
                lazy={{ loadPrevNext: true, loadPrevNextAmount: 3 }}
            >
                {projects.map(project => {
                    const { title, image } = project.node;

                    return (
                        <SwiperSlide
                            onClick={e => handleClick(e)}
                            key={title}
                            className={styles.slide}
                        >
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
                className={`${styles.thumbsContainer} ${getFullScreenClass(
                    'thumbs'
                )}`}
                onSwiper={setThumbsSwiper}
                watchSlidesVisibility
                watchSlidesProgress
                spaceBetween={10}
                slidesPerView={5}
                updateOnWindowResize
                resizeObserver
                breakpoints={{
                    768: { slidesPerView: 6, spaceBetween: 14 },
                    1024: { slidesPerView: 7, spaceBetween: 15 },
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
