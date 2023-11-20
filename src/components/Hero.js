import React from 'react'
import { Link } from 'react-router-dom'
import Zoom from 'react-reveal/Zoom';


const Hero = () => {

    const bg = '/images/jute1.jpg';

    const slidBG = [
        // '/images/slider/slid1.jpg',
        '/images/slider/slid2.jpeg',
        '/images/slider/slid3.jpeg',
        '/images/slider/slid4.jpeg',
        '/images/slider/slid5.jpeg',
        '/images/slider/slid6.jpeg',
    ]

    const delay = 2000;

    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === slidBG.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);


    return (
        <section className="hero-bg h-[700px] sm:h-[90vh]" style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slidBG[index]})` }}>
            <div className='top-shap-hero hidden sm:block'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                    <path className="fill-white" opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"></path>
                    <path className="fill-white" opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"></path>
                    <path className="fill-white" d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"></path>
                </svg>
            </div>
            <div className="bottom-shap-hero hidden sm:block">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.5 19.6" preserveAspectRatio="none">
                    <path className="fill-white" opacity="0.33" d="M0 0L0 18.8 141.8 4.1 283.5 18.8 283.5 0z"></path>
                    <path className="fill-white" opacity="0.33" d="M0 0L0 12.6 141.8 4 283.5 12.6 283.5 0z"></path>
                    <path className="fill-white" opacity="0.33" d="M0 0L0 6.4 141.8 4 283.5 6.4 283.5 0z"></path>
                    <path className="fill-white" d="M0 0L0 1.2 141.8 4 283.5 1.2 283.5 0z"></path>
                </svg>
            </div>
            <Zoom>
                <div className='container mx-auto'>
                    <div className='h-[80vh] pt-[80px] sm:pt-0 flex flex-col items-center justify-center'>
                        <div className='text-center text-white space-y-4 mb-7'>
                            <h1 className='hero-heading-h1 heading-h1 md:text-6xl leading-[55px] md:leading-[80px] pt-10'>We are one of the leading Jute Goods <br /> Exporter from Bangladesh <br /></h1>
                            <p className='hero-bottom-text pt-5 text-[20px] sm:text-[28px]'>We believe in Quality not Quantity</p>
                        </div>
                        <div className='flex gap-8 pt-5 flex-wrap justify-center'>
                            <Link to='/product' className='button cursor-pointer'>Jute Sack</Link>
                            <Link to='/product' className='button cursor-pointer'>Jute Bags</Link>
                            <Link to='/product' className='button cursor-pointer'>Hessian Cloth</Link>
                        </div>
                    </div>
                </div>
            </Zoom>
        </section>
    )
}

export default Hero