import '../css/bannerslider.css';
import bannerImages from '../data/SliderImages';
import { useEffect, useState } from "react";
import { ArrowBackIosRounded, ArrowForwardIosRounded, FiberManualRecordOutlined, FiberManualRecord } from '@mui/icons-material';

const BannerSlider = () => {
    const [slideCurrent, setSlideCurrent] = useState(0);

    function nextSlide() {
        setSlideCurrent(slideCurrent === bannerImages.length - 1 ? 0 : slideCurrent + 1);
    }
    function previousSlide() {
        setSlideCurrent(slideCurrent === 0 ? bannerImages.length - 1 : slideCurrent - 1);
    }
    function dotSlideChange(value) {
        setSlideCurrent(value);
    }
    useEffect(() => {
        const changeSlide = setInterval(nextSlide, 5000);
        return () => clearInterval(changeSlide);
    })

    return (
        <>
            {bannerImages.map((img, index) => (
                <div className={`banner-section ${slideCurrent === index ? "active" : ""}`} style={{ background: `url(${img.imageUrl})` }}>
                    <div className='banner-content'>
                        <h1>{img.imageTitle}</h1>
                        <p>{img.imageDescription}</p>
                        <button>Explore</button>
                    </div>
                </div>
            ))}
            <div className='banner-arrow'>
                <ArrowBackIosRounded onClick={previousSlide} />
                <ArrowForwardIosRounded onClick={nextSlide} />
            </div>
            <div className='banner-dot'>
                {bannerImages.map((img, index) => (
                    slideCurrent === index ? <FiberManualRecord className='dot-active' /> : <FiberManualRecordOutlined onClick={() => dotSlideChange(index)} />
                ))}
            </div>
        </>
    )
}

export default BannerSlider;