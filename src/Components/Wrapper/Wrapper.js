import './Wrapper.css';
import React, { useEffect, useMemo, useState } from "react";
import mogo from "../../images/mongomon_baby_wrapper.png";
import CountDown from "../CountDown/CountDown";
import babyMongomons1 from '../../images/flowers/flower_1.png';
import Gen2 from '../../images/flowers/Gen2.png';

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const Timer = ({ deadline = new Date().toString() }) => {
    const parsedDeadline = React.useMemo(() => Date.parse(deadline), [deadline]);
    const [time, setTime] = React.useState(parsedDeadline - Date.now());

    React.useEffect(() => {
        const interval = setInterval(
            () => setTime(parsedDeadline - Date.now()),
            1000,
        );

        return () => clearInterval(interval);
    }, [parsedDeadline]);

    //s: (time / SECOND) % 60,
    return (
        <div className="timer">
            {Object.entries({
                d: time / DAY,
                h: (time / HOUR) % 24,
                m: (time / MINUTE) % 60
            }).map(([label, value]) => (
                <div key={label} className="Timer_box">
                    <div className="box" role="timer" aria-atomic="true">
                        <p>{`${Math.floor(value)}`.padStart(2, "0")}</p>
                        <span className="Timer_box_text">{label}{label === 'm' ? (null) : (':')}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};


function Wrapper() {

    return (
        <div className="Wrapper_sect sect">
            <div className="Wrapper">
                <div className='Wrapper_first_section block'>
                    <Timer deadline="August, 15, 2022" />
                    {/* <div className='Timer'>17D:22H:32m</div> */}
                    <h1 className="Wrapper_text">
                        MON<div className="flex_badis"><span className="Wrapper_text_red minus">-</span><span className="Wrapper_text_red">GO</span><span className="Wrapper_text_red minus">-</span></div>MONS
                        <div className='Gen2' >
                            <img src={Gen2} alt="" />
                            <div className='Gen2_text'>Gen 2!</div>
                        </div>
                    </h1>
                    {/* <div className="mint_now_block">
                        <a href="https://mint.mongomons.com" className="mint_now">MINT NOW</a>
                    </div> */}
                    <img src={mogo} alt="" className="mongo_ava" />
                </div>
                <div className="header_bottom">
                    <div className="header">
                        {/* <a href="https://twitter.com/Mongomonsol" className="links">
                            <svg width="40" height="60" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" className="limk_svg">
                                <path d="M8.83809 0.600098C4.20729 0.600098 0.44043 4.37044 0.44043 9.00244V21.0024C0.44043 25.6332 4.21077 29.4001 8.84277 29.4001H20.8428C25.4736 29.4001 29.2404 25.6298 29.2404 20.9978V8.99775C29.2404 4.36695 25.4701 0.600098 20.8381 0.600098H8.83809ZM23.2404 5.4001C23.9028 5.4001 24.4404 5.9377 24.4404 6.6001C24.4404 7.2625 23.9028 7.8001 23.2404 7.8001C22.578 7.8001 22.0404 7.2625 22.0404 6.6001C22.0404 5.9377 22.578 5.4001 23.2404 5.4001ZM14.8404 7.8001C18.8112 7.8001 22.0404 11.0293 22.0404 15.0001C22.0404 18.9709 18.8112 22.2001 14.8404 22.2001C10.8696 22.2001 7.64043 18.9709 7.64043 15.0001C7.64043 11.0293 10.8696 7.8001 14.8404 7.8001ZM14.8404 10.2001C13.5674 10.2001 12.3465 10.7058 11.4463 11.606C10.5461 12.5062 10.0404 13.7271 10.0404 15.0001C10.0404 16.2731 10.5461 17.494 11.4463 18.3942C12.3465 19.2944 13.5674 19.8001 14.8404 19.8001C16.1135 19.8001 17.3344 19.2944 18.2345 18.3942C19.1347 17.494 19.6404 16.2731 19.6404 15.0001C19.6404 13.7271 19.1347 12.5062 18.2345 11.606C17.3344 10.7058 16.1135 10.2001 14.8404 10.2001Z" />
                            </svg>
                        </a> */}
                        <a href="https://twitter.com/Mongomonsol" className="links">
                            <svg width="50" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" className="limk_svg">
                                <path d="M56 13.874C54.086 14.724 52.03 15.296 49.872 15.554C52.076 14.234 53.766 12.144 54.562 9.65201C52.502 10.874 50.218 11.762 47.786 12.242C45.84 10.168 43.068 8.87201 40 8.87201C34.108 8.87201 29.332 13.65 29.332 19.54C29.332 20.376 29.428 21.192 29.608 21.97C20.742 21.526 12.882 17.278 7.61799 10.822C6.70199 12.398 6.17599 14.23 6.17599 16.188C6.17599 19.888 8.05798 23.154 10.92 25.066C9.17198 25.01 7.52598 24.53 6.08799 23.732C6.08799 23.778 6.08799 23.82 6.08799 23.866C6.08799 29.036 9.76398 33.348 14.646 34.326C13.752 34.57 12.808 34.7 11.834 34.7C11.148 34.7 10.478 34.632 9.82798 34.51C11.186 38.748 15.126 41.834 19.794 41.92C16.144 44.782 11.544 46.488 6.54399 46.488C5.68399 46.488 4.83399 46.438 3.99799 46.338C8.71999 49.364 14.326 51.13 20.352 51.13C39.976 51.13 50.704 34.874 50.704 20.776C50.704 20.314 50.694 19.854 50.674 19.396C52.76 17.89 54.57 16.012 56 13.874Z" />
                            </svg>
                        </a>
                        <a href="https://t.co/jQywzTdnRg" className="links">
                            <svg className="limk_svg" width="50" height="60" viewBox="0 0 71 55" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0)">
                                    <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z" />
                                </g>
                                <defs>
                                    <clipPath id="clip0">
                                        <rect width="71" height="55" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className='Wrapper_second_section'>
                    <img src={babyMongomons1} alt="" className='babyMongomons1' />
                    <div className='shadowBlock_secondSection'></div>
                    <div className='beautiful_pink_block'>
                        <div className='beautiful_pink_block_introductory'><span className='colorMongoMons'>BABY MONGOMONS</span> - the next generation of the original Mongomons, who are willing to take over the spotlight!</div>
                        <div className='beautiful_pink_block_text1'>
                            There are <span className='colorMongoMons'>2</span> <span className='colorMongoMons'>things</span> you need to know about the Mongomon babies:
                            1. They are million times cuter than their parents.
                            2. Even billion times cuter.
                        </div>
                        <div className='beautiful_pink_block_text2'>These wonderful creatures descended from the magical trees, on which they were born and were endowed with their unique bodies and truly amazing cuteness.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Wrapper;
