<template>
    <div class="docSlider">
        <section class="main-visual-col">
            <div class="inner-col">
                <h2><span class="blind">close to you PUPPYCAT</span></h2>
                <p>
                    이 세상 모든 강아지와 고양이가 모여드는<br />
                    당신에게 가장 가까운 곳
                </p>
                <div class="app-box display-pc">
                    <img src="/assets/img/img_puppy_qr.png" class="img-qr" alt="QR코드를 스캔해보세요! 퍼피캣 다운받기" />
                </div>
                <div class="app-box display-m">
                    <a title="puppcat 앱 다운로드" target="_blank" href="https://m.site.naver.com/1gXzM">
                        <img src="/assets/img/img_puppy_btn_appdown.png" class="img-qr" alt="앱 다운로드" />
                    </a>
                </div>
            </div>
            <div class="floor"></div>
        </section>
        <section class="media-col">
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
                    <div class="mobile-img rolling-mobile">
                        <ul>
                            <li><img src="/assets/img/img_puppy_mobile01.png" alt="퍼피캣 모바일화면 이미지" /></li>
                            <li><img src="/assets/img/img_puppy_mobile02.png" alt="퍼피캣 모바일화면 이미지" /></li>
                            <li><img src="/assets/img/img_puppy_mobile03.png" alt="퍼피캣 모바일화면 이미지" /></li>
                            <li><img src="/assets/img/img_puppy_mobile04.png" alt="퍼피캣 모바일화면 이미지" /></li>
                            <li><img src="/assets/img/img_puppy_mobile05.png" alt="퍼피캣 모바일화면 이미지" /></li>
                        </ul>
                    </div>
                    <div class="mobile-img">
                        <img src="/assets/img/img_puppy_mobile06.png" alt="소셜미디어 이미지" />
                    </div>
                </div>
            </div>
        </section>
        <section class="bottom-col">
            <div class="slide-col">
                <!-- 슬라이드 배너  -->
                <div class="slide-arae rolling-banner">
                    <div class="wrap">
                        <div class="roller">
                            <ul>
                                <li></li>
                                <li class="lottie-banner-cat">
                                    <lottie-player src="/assets/img/lottie_puppy_banner_cat.json" speed=".9" loop autoplay></lottie-player>
                                </li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>

                    <div class="wrap-reverse">
                        <div class="roller-reverse">
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li class="lottie-banner-round">
                                    <lottie-player src="/assets/img/lottie_puppy_banner_round.json" speed=".9" loop autoplay></lottie-player>
                                </li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <FooterView />
        </section>
    </div>
</template>

<script>
import FooterView from '@/components/common/FooterView.vue'
export default {
    name: 'IndexPage',
    components:{
        FooterView
    },
    head () {
    return {
      title: 'Payment Page - My awesome project',
      script: [
        {
          hid: 'stripe',
          src: '<https://js.stripe.com/v3/>',
          defer: true,
          // Changed after script load
          callback: () => { this.isStripeLoaded = true } 
        }
      ]
    }
  }
}
</script>