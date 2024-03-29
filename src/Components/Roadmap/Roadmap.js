import './Roadmap.css';
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Roadmap() {
    const swipe = (swiper) => {
        const dots = document.querySelectorAll(".dot");
        for (let i = 0; i < 4; i++) {
            dots[i].classList.remove('dot_active')
        }
        dots[swiper.activeIndex].classList.add('dot_active');
    }
    return (
        <div className="Roadmap sect">
            <div className="block2">
                <div className="Roadmap_top">
                    <h1 className="Roadmap_top_h1">Roadmap</h1>
                    <p className="Roadmap_top_p">
                        We could promise you a lot of things here,
                        but our main principle is to <span className="yellow">underpromise</span> and  <span className="yellow">overdeliver</span>
                    </p>
                </div>
                <div className="map_item map_item_pc">
                    <div className='map_item_background'></div>
                    <div className="map_item_h1">
                        1st PHASE
                    </div>
                    <p className="yellow map_item_p teme">
                        GATHERING A COMMUNITY
                    </p>
                    <p className="map_item_p">
                        This step is essential for Mongomons to thrive in the future. They are social creatures, and they need a companion who leves them as much as they love you.<br></br>
                        Our goal is to build a strong community. Daily tweets and collaborations with solid projects will help us with that.
                    </p>
                </div>
                <div className="map_item map_item_pc">
                    <div className='map_item_background'></div>
                    <div className="map_item_h1">
                        2nd PHASE
                    </div>
                    <p className="yellow map_item_p teme">
                        MINT
                    </p>
                    <p className="map_item_p">
                        We have experienced people on our side, so we expect no problems with the Mint.
                        Everyone will have a chance. We will airdrop a token to our whitelisted members, so you will be able to give your whitelist spot to someone else or even sell it.</p>
                </div>
                <div className="map_item map_item_pc">
                    <div className='map_item_background'></div>
                    <div className="map_item_h1">
                        3rd PHASE
                    </div>
                    <p className="yellow map_item_p teme">
                        This is the most exciting part:
                    </p>
                    <p className="map_item_p">
                        • Airdrop collection of 3D mythical trees, which will be used for breeding<br></br>
                        • Donation to Red Pandas Network as we were inspired by red pandas.<br></br>
                        • Weekly raffle for a percentage of royalties.</p>
                </div>
                <div className="map_item map_item_pc">
                    <div className='map_item_background'></div>
                    <div className="map_item_h1">
                        4th PHASE
                    </div>
                    <p className="yellow map_item_p teme">
                        GATHERING A COMMUNITY
                    </p>
                    <p className="map_item_p">
                        Our DAO will determine the future of the project. We will be a middleman between you and most talented professionals in the industry.<br></br>
                        We can do a wide range of cool stuff, starting from blockchain contracts and web-development, up to 3A games and movie production.<br></br>
                        Roadmap 2.0 will be determined by the DAO.</p>
                </div>
            </div>
            <div className='block_swiper'>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSlideChange={(swiper) => swipe(swiper)}
                    onSwiper={(swiper) => swipe(swiper)}
                >
                    <SwiperSlide>
                        <div className="map_item">
                            <div className='map_item_background'></div>
                            <div className="map_item_h1">
                                1st PHASE
                            </div>
                            <p className="yellow map_item_p teme">
                                GATHERING A COMMUNITY
                            </p>
                            <p className="map_item_p">
                                This step is essential for Mongomons to thrive in the future. They are social creatures, and they need a companion who leves them as much as they love you.<br></br>
                                Our goal is to build a strong community. Daily tweets and collaborations with solid projects will help us with that.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="map_item">
                            <div className='map_item_background'></div>
                            <div className="map_item_h1">
                                2nd PHASE
                            </div>
                            <p className="yellow map_item_p teme">
                                MINT
                            </p>
                            <p className="map_item_p">
                                We have experienced people on our side, so we expect no problems with the Mint.
                                Everyone will have a chance. We will airdrop a token to our whitelisted members, so you will be able to give your whitelist spot to someone else or even sell it.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="map_item">
                            <div className='map_item_background'></div>
                            <div className="map_item_h1">
                                3rd PHASE
                            </div>
                            <p className="yellow map_item_p teme">
                                This is the most exciting part:
                            </p>
                            <p className="map_item_p">
                                • Airdrop collection of 3D mythical trees, which will be used for breeding<br></br>
                                • Donation to Red Pandas Network as we were inspired by red pandas.<br></br>
                                • Weekly raffle for a percentage of royalties.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="map_item">
                            <div className='map_item_background'></div>
                            <div className="map_item_h1">
                                4th PHASE
                            </div>
                            <p className="yellow map_item_p teme">
                                GATHERING A COMMUNITY
                            </p>
                            <p className="map_item_p">
                                Our DAO will determine the future of the project. We will be a middleman between you and most talented professionals in the industry.<br></br>
                                We can do a wide range of cool stuff, starting from blockchain contracts and web-development, up to 3A games and movie production.<br></br>
                                Roadmap 2.0 will be determined by the DAO.</p>
                        </div>
                    </SwiperSlide>
                    <div className="dots">
                        <div className="dot dot_active">.</div>
                        <div className="dot">.</div>
                        <div className="dot">.</div>
                        <div className="dot">.</div>
                    </div>
                </Swiper>
            </div>
        </div>
    );
}

export default Roadmap;
