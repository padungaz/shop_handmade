import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getSlide } from '../../redux/thunk/actionThunk';
import { Link } from 'react-router-dom';
function SlideShow() {
    const dispatch = useDispatch();
    const dataSlider = useSelector((state) => state.users.slider);
    useEffect(() => {
        dispatch(getSlide());
    }, [dispatch]);
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };


    return (
        <div className="slideshow">
            <h2> New Product</h2>
            <Slider {...settings}>
                {dataSlider && dataSlider.map((item, i) => (
                    <Link to={`/detail/${item.id}`} key={i}>
                        <div className="card" >
                            <div className="card-top">
                                <div>
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                    />
                                </div>
                                <h5>{item.name}</h5>
                            </div>
                            <div className="card-bottom">
                                <h3>${item.price}</h3>
                                <span className="category">{item.category}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </Slider>
        </div>
    );
}

export default SlideShow;
