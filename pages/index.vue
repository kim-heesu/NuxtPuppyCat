<template>
    <div id="slideWrap">
        <section class="slide-items main-visual-col">
            <div class="inner-col">
                <h2><span class="blind">close to you PUPPYCAT</span></h2>
                <p>
                    이 세상 모든 강아지와 고양이가 모여드는<br />
                    당신에게 가장 가까운 곳
                </p>
                <div class="app-box display-pc">
                    <img src="@/assets/img/img_puppy_qr.png" class="img-qr" alt="QR코드를 스캔해보세요! 퍼피캣 다운받기" />
                </div>
                <div class="app-box display-m">
                    <a title="puppcat 앱 다운로드" target="_blank" href="https://m.site.naver.com/1gXzM">
                        <img src="@/assets/img/img_puppy_btn_appdown.png" class="img-qr" alt="앱 다운로드" />
                    </a>
                </div>
            </div>
            <div class="floor"></div>
        </section>
        <section class="slide-items media-col">
            <div class="inner-col">
                <div class="txt-box">
                    <h2>
                        <span>더 가깝고<span class="lottie-cat"></span></span><br />
                        <span>더 사랑스럽개<span class="lottie-dog"></span></span>
                    </h2>
                    <p>
                        소셜 미디어로 사랑스러운<br />
                        반려동물 일상을 공유해 봐요!
                    </p>
                </div>
                <div class="img-box">
                    <div class="mobile-img">
                        <div class="media-slide swiper-container">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide"><img src="@/assets/img/img_puppy_mobile01.png" alt="퍼피캣 모바일화면 이미지" /></div>
                                <div class="swiper-slide"><img src="@/assets/img/img_puppy_mobile02.png" alt="퍼피캣 모바일화면 이미지" /></div>
                                <div class="swiper-slide"><img src="@/assets/img/img_puppy_mobile03.png" alt="퍼피캣 모바일화면 이미지" /></div>
                                <div class="swiper-slide"><img src="@/assets/img/img_puppy_mobile04.png" alt="퍼피캣 모바일화면 이미지" /></div>
                                <div class="swiper-slide"><img src="@/assets/img/img_puppy_mobile05.png" alt="퍼피캣 모바일화면 이미지" /></div>
                            </div>
                        </div>  
                    </div>
                    <div class="mobile-img">
                        <img src="@/assets/img/img_puppy_mobile06.png" alt="소셜미디어 이미지" />
                    </div>
                </div>
            </div>
        </section>
        <section class="slide-items bottom-col">
            <div class="slide-col">
                <div class="bottom-slide01 swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide"><img src="@/assets/img/img_puppy_banner_top_1.png" alt="퍼피캣 슬라이드이미지" /></div>
                        <div class="swiper-slide"><lottie :options="lottieSlideCat" /></div>
                        <div class="swiper-slide"><img src="@/assets/img/img_puppy_banner_top_3.png" alt="퍼피캣 슬라이드이미지" /></div>
                        <div class="swiper-slide"><img src="@/assets/img/img_puppy_banner_top_4.png" alt="퍼피캣 슬라이드이미지" /></div>
                        <div class="swiper-slide"><img src="@/assets/img/img_puppy_banner_top_5.png" alt="퍼피캣 슬라이드이미지" /></div>
                        <div class="swiper-slide"><img src="@/assets/img/img_puppy_banner_top_6.png" alt="퍼피캣 슬라이드이미지" /></div>
                        <div class="swiper-slide"><img src="@/assets/img/img_puppy_banner_top_7.png" alt="퍼피캣 슬라이드이미지" /></div>
                    </div>
                </div> 
                <div class="bottom-slide02 swiper-container" dir="rtl">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide"><img src="@/assets/img/img_puppy_banner_bottom_1.png" alt="퍼피캣 슬라이드이미지" /></div>
                        <div class="swiper-slide"><img src="@/assets/img/img_puppy_banner_bottom_2.png" alt="퍼피캣 슬라이드이미지" /></div>
                        <div class="swiper-slide"><img src="@/assets/img/img_puppy_banner_bottom_3.png" alt="퍼피캣 슬라이드이미지" /></div>
                        <div class="swiper-slide"><img src="@/assets/img/img_puppy_banner_bottom_4.png" alt="퍼피캣 슬라이드이미지" /></div>
                        <div class="swiper-slide"><lottie :options="lottieSlideRound" /></div>
                        <div class="swiper-slide"><img src="@/assets/img/img_puppy_banner_bottom_6.png" alt="퍼피캣 슬라이드이미지" /></div>
                        <div class="swiper-slide"><img src="@/assets/img/img_puppy_banner_bottom_7.png" alt="퍼피캣 슬라이드이미지" /></div>
                    </div>
                </div> 
            </div>

        </section>
        <section class="slide-items footer-col">
            <FooterView />
        </section>
    </div>
</template>

<style scoped>
.slide-items{
    position: relative;
    width: 100%;
}
.slide-items:not(.footer-col,.bottom-col){
    height: 100vh;
}
section {
    background-color: #fffef9;
    overflow: hidden;
}

/* content */
.main-visual-col {
    position: relative;
    padding-top: 0;
    z-index: 1;
}
.main-visual-col .floor {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 16.2rem;
    background: url(@/assets/img/bg_puppy_main_floor.png) no-repeat center / cover;
    z-index: -1;
}
.main-visual-col::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 2rem;
    width: 57.5rem;
    height: 90.8rem;
    max-height: 100vh;
    background: url(@/assets/img/img_puppy_main_dog.png) no-repeat left bottom / contain;
}
.main-visual-col::after {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    width: 60.7rem;
    height: 100%;
    max-width: 55vh;
    max-height: 100vh;
    background: url(@/assets/img/img_puppy_main_cat.png) no-repeat right top / 100%;
}
.main-visual-col .inner-col {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    z-index: 1;
}
.main-visual-col h2 {
    width: 56.6rem;
    height: 17rem;
    background: url(@/assets/img/img_puppy_maintxt.png) no-repeat center / 100%;
}
.main-visual-col h2 + p {
    margin-top: 4rem;
    font-weight: 700;
    font-size: 2.8rem;
    color: var(--neutral_600);
    line-height: 1.6;
    text-align: center;
}
.main-visual-col .app-box {
    margin: 8rem auto 0;
}
.media-col .inner-col {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.media-col h2 {
    font-weight: 900;
    font-size: 5.6rem;
    line-height: 1.3;
}
.media-col h2 span {
    position: relative;
    display: inline-block;
    z-index: 1;
}
.media-col h2 span span[class*='lottie-'] {
    position: absolute;
    top: -3.1rem;
    right: 0.2rem;
    z-index: -1;
}
.media-col .lottie-cat {
    width: 6rem;
    height: 4.8rem;
}
.media-col .lottie-dog {
    width: 4.1rem;
    height: 4.5rem;
}
.media-col h2 + p {
    margin-top: 5rem;
    font-weight: 700;
    font-size: 2.4rem;
    color: var(--neutral_600);
    line-height: 1.6;
}
.media-col .img-box {
    position: relative;
    top: 3rem;
}
.media-col .img-box::after {
    content: '';
    position: absolute;
    right: -9.4rem;
    bottom: 0;
    width: 17.2rem;
    height: 16rem;
    background: url(@/assets/img/img_puppy_maru.png) no-repeat center / 100%;
    z-index: 2;
}
.media-col .img-box .mobile-img {
    position: relative;
    display: inline-block;
    width: 32rem;
    height: 65.8rem;
    padding: 1.2rem;
    overflow: hidden;
    z-index: 1;
    background: #fff;
    border-radius: 5.8rem;
    -webkit-border-radius: 5.8rem;
    -moz-border-radius: 5.8rem;
    -ms-border-radius: 5.8rem;
    -o-border-radius: 5.8rem;
}
.media-col .img-box .mobile-img img {
    position: relative;
    display: block;
    margin: 0 auto;
    z-index: 1;
}
.media-col .img-box .mobile-img::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
    background: url(@/assets/img/bg_puppy_mobile.png) no-repeat center / 100%;
}
.media-col .img-box .mobile-img::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1rem solid #fffef9;
    z-index: 2;
    border-radius: 5.8rem;
    -webkit-border-radius: 5.8rem;
    -moz-border-radius: 5.8rem;
    -ms-border-radius: 5.8rem;
    -o-border-radius: 5.8rem;
}
.media-col .img-box .mobile-img:nth-child(2) {
    top: -8rem;
    margin-left: 6rem;
}
.media-col .img-box .media-slide ul {
    position: relative;
    white-space: nowrap;
}
.media-col .img-box .media-slide li {
    display: inline-block;
    vertical-align: middle;
    transition: all 0.3s;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.3s;
}
.bottom-col {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
}
.bottom-col::-webkit-scrollbar {
    display: none;
}
.slide-col {
    position: relative;
    padding: 9rem 0 32rem;
    background-image: url(@/assets/img/bg_puppy_f_floor.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center bottom;
}
.slide-col::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 2rem;
    width: 45.2rem;
    height: 16.3rem;
    background: url(@/assets/img/img_puppy_f_left.png) no-repeat left bottom / contain;
}
.slide-col::after {
    content: '';
    position: absolute;
    right: -5rem;
    bottom: 2rem;
    width: 61.6rem;
    height: 20rem;
    background: url(@/assets/img/img_puppy_f_right.png) no-repeat right bottom / contain;
}
.slide-col .swiper-wrapper{
    transition-timing-function: linear;    
}
.slide-col .swiper-slide{
    width: 30rem;
    height: 30rem;
    border-radius: 2rem;
    overflow: hidden;
}
.slide-col .bottom-slide02{
    margin-top: 3rem;
}
@media screen and (max-width: 1024px) {
    html {
        background: #f8f8f8;
    }
    #slideWrap {
        width: 768px;
        max-width: 100%;
        margin: 0 auto;
    }
    .display-pc {
        display: none;
    }
    .display-m {
        display: block;
    }
    .main-visual-col .floor {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 23vh;
        background: url(@/assets/img/bg_puppy_main_floor.png) no-repeat center / cover;
    }
    .main-visual-col::before {
        bottom: 2rem;
        width: 22.3rem;
        height: 28.1rem;
        background: url(@/assets/img/img_m_puppy_main_dog.png) no-repeat left bottom / contain;
    }
    .main-visual-col::after {
        top: -2rem;
        width: 16.8rem;
        height: 90vh;
        background: url(@/assets/img/img_m_puppy_main_cat.png) no-repeat right top / contain;
    }
    .main-visual-col h2 {
        width: 26rem;
        height: 8.8rem;
        background: url(@/assets/img/img_m_puppy_maintxt.png) no-repeat center / 100%;
    }
    .main-visual-col h2 + p {
        margin-top: 5rem;
        font-size: 1.6rem;
    }
    .main-visual-col .app-box {
        margin-top: 5rem;
    }
    .main-visual-col .img-qr {
        width: 13.8rem;
        height: 6.2rem;
    }
    .media-col .inner-col {
        display: block;
        padding-top: 4rem;
        overflow: hidden;
    }
    .media-col .txt-box {
        text-align: center;
    }
    .media-col h2 {
        font-size: 2.9rem;
    }
    .media-col h2 + p {
        margin-top: 1.6rem;
        font-size: 1.4rem;
    }
    .media-col .img-box .mobile-img:last-of-type {
        display: none;
    }
    .media-col .img-box::after {
        content: none;
    }
    .media-col h2 span span[class*='lottie-'] {
        top: -2.4rem;
        right: -0.1rem;
    }
    .media-col .lottie-cat {
        width: 4.1rem;
        height: 3.3rem;
    }
    .media-col .lottie-dog {
        width: 2.8rem;
        height: 3.1rem;
    }
    .media-col .img-box {
        top: 5vh;
        text-align: center;
    }
    .media-col .img-box .mobile-img {
        width: 45vh;
        height: 93vh;
        max-width: 100%;
        padding: 1.4rem;
        border-radius: 4.2rem;
        -webkit-border-radius: 4.2rem;
        -moz-border-radius: 4.2rem;
        -ms-border-radius: 4.2rem;
        -o-border-radius: 4.2rem;
    }
    .media-col .img-box .mobile-img::after {
        background-position: center top;
    }
    .media-col .img-box .mobile-img::before {
        border-radius: 0;
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        -ms-border-radius: 0;
        -o-border-radius: 0;
    }
    .media-col .img-box .rolling-mobile li,
    .media-col .img-box .rolling-mobile li img {
        width: 100%;
    }
    .bottom-col {
        display: flex;
        flex-direction: column;
    }
    .slide-col {
        height: 100%;
        min-height: 55.2rem;
        padding: 12vh 0 0;
        background-image: url(@/assets/img/bg_m_puppy_f_floor.png);
    }
    .slide-col::before {
        bottom: 0.5rem;
        width: 16.9rem;
        height: 61.5rem;
        background: url(@/assets/img/img_m_puppy_f_left.png) no-repeat left bottom / contain;
    }
    .slide-col::after {
        right: -1.8rem;
        bottom: 0.5rem;
        width: 20.4rem;
        height: 7.19rem;
        background: url(@/assets/img/img_m_puppy_f_right.png) no-repeat right bottom / contain;
    }
    .slide-col .swiper-slide{
        width: 16rem;
        height: 16rem;
    }
    .slide-col .bottom-slide02{
        margin-top: 1.5rem;
    }
}
</style>

<script>
import FooterView from '@/components/common/FooterView.vue'
import lottie from 'vue-lottie/src/lottie.vue'
import Swiper from 'swiper';
import * as lottieSlideCat from "~/assets/img/lottie_puppy_banner_cat.json"
import * as lottieSlideRound from "~/assets/img/lottie_puppy_banner_round.json"
export default {
    name: 'Index',
    components: {
        FooterView,
        lottie,
        Swiper,
    },
    data () {
        return {
            inMove: false,
            inMoveDelay: 400,
            activeSection: 0,
            offsets: [],
            touchStartY: 0,
            lottieSlideCat: { animationData: lottieSlideCat.default},
            lottieSlideRound: { animationData: lottieSlideRound.default}
        }
    },
    computed: {
        modalViewCheck() {
            return this.$store.state.modalState.modalWrap;
        }
    },
    mounted () {
        this.mediaSwiper = new Swiper('.media-slide', {
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            }
        });

        this.bottmo01Swiper = new Swiper('.bottom-slide01', {
            autoplay: {
                delay: 0,
                stopOnLastSlide: false,
                disableOnInteraction: true,
            },
            spaceBetween: 20,
            speed: 8000,
            touchRatio: 0,
            loop:true,
            slidesPerView: "auto",
            loopedSlides: 5,
            observer:true, 
            observeParents:true,
        });

        this.bottmo02Swiper = new Swiper('.bottom-slide02', {
            autoplay: {
                delay: 0,
                stopOnLastSlide: false,
                disableOnInteraction: true,
            },
            spaceBetween: 20,
            speed: 8000,
            touchRatio: 0,
            loop:true,
            slidesPerView: "auto",
            loopedSlides: 5,
            observer:true, 
            observeParents:true,
        });
        
        this.calculateSectionOffsets();
        
        window.addEventListener('DOMMouseScroll', this.handleMouseWheelDOM);  // Mozilla Firefox
        window.addEventListener('mousewheel', this.handleMouseWheel, { passive: false }); // Other browsers
        
        window.addEventListener('touchstart', this.touchStart, { passive: false }); // mobile devices
        window.addEventListener('touchmove', this.touchMove, { passive: false }); // mobile devices

        document.querySelector('header').style.opacity = 0;
        window.addEventListener('scroll', function(){
            const scrollPosition = window.scrollY;
            if (scrollPosition > 0) {
                document.querySelector('header').style.opacity = 1;
            } else {
                document.querySelector('header').style.opacity = 0;
            }
        });
    },
    destroyed (){
        window.removeEventListener('DOMMouseScroll', this.handleMouseWheelDOM); // Mozilla Firefox
        window.removeEventListener('mousewheel', this.handleMouseWheel, { passive: false });  // Other browsers
        
        window.removeEventListener('touchstart', this.touchStart); // mobile devices
        window.removeEventListener('touchmove', this.touchMove); // mobile devices
    },
    methods: {
        calculateSectionOffsets() {
            let sections = document.getElementsByTagName('section');
            let length = sections.length;
            
            for(let i = 0; i < length; i++) {
                let sectionOffset = sections[i].offsetTop;
                this.offsets.push(sectionOffset);
            }
        },
        handleMouseWheel(e) {
            if (!this.modalViewCheck) {
                if (e.wheelDelta < 30 && !this.inMove) {
                    this.moveUp();
                } else if (e.wheelDelta > 30 && !this.inMove) {
                    this.moveDown();
                }

                e.preventDefault();
                return false;
            }
        },
        handleMouseWheelDOM(e) {
            if (!this.modalViewCheck) {
                if (e.detail > 0 && !this.inMove) {
                    this.moveUp();
                } else if (e.detail < 0 && !this.inMove) {
                    this.moveDown();
                }

                return false;
            }
        },
        moveDown() {
            this.inMove = true;
            this.activeSection--;

            if (this.activeSection < 0) this.activeSection = 0;

            this.scrollToSection(this.activeSection, true);
        },
        moveUp() {
            this.inMove = true;
            this.activeSection++;

            if (this.activeSection >= this.offsets.length) this.activeSection = this.offsets.length - 1;

            this.scrollToSection(this.activeSection, true);
        },
        scrollToSection(id, force = false) {
            if(this.inMove && !force) return false;
            
            this.activeSection = id;
            this.inMove = true;
            
            // get section and scroll into view if it exists
            let section = document.getElementsByTagName('section')[id];
            if(section) {
                document.getElementsByTagName('section')[id].scrollIntoView({behavior: 'smooth'});
            }
            
            setTimeout(() => {
                this.inMove = false;
            }, this.inMoveDelay);
            
        },
        touchStart(e) {
            e.preventDefault();
            
            this.touchStartY = e.touches[0].clientY;
        },
        touchMove(e) {
            if(this.inMove) return false;
            e.preventDefault();
            
            const currentY = e.touches[0].clientY;
            
            if(this.touchStartY < currentY) {
                this.moveDown();
            } else {
                this.moveUp();
            }
            
            this.touchStartY = 0;
            return false;
        },
        headerVisible(){
            const scrollPosition = window.scrollY;

            console.log('dd')
            if (scrollPosition > 0) {
                this.$store.dispatch('checkHeader', true);
            } else {
                this.$store.dispatch('checkHeader', false);
            }
        }
    },
    watch: {
        modalViewCheck: function (val) {
            console.log(this.modalViewCheck)
        }
  }
}
</script>