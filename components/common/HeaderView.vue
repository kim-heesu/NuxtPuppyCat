<template>
    <header>
        <h1>
            <a title="PUPPYCAT home" target="_blank" href="#" class="logo"><span class="blind">puppycat</span></a>
        </h1>
        <div class="btn-down-wrap display-pc">
            <button class="btn-down">
                <lottie-player class="btn-animation-area-pc" src="/assets/img/lottie_puppy_btn_appdown.json" background="transparent" speed=".9" loop hover></lottie-player>
            </button>
            <img src="/assets/img/img_puppy_qr_layer.png" class="app-down-layer" alt="QR코드를 스캔해보세요! 퍼피캣 다운받기" />
        </div>

        <div class="btn-down display-m">
            <a title="puppcat 앱 다운로드" target="_blank" href="https://m.site.naver.com/1gXzM">
                <lottie-player class="btn-animation-area-mo display-m" src="/assets/img/lottie_m_puppy_btn_appdown.json" background="transparent" speed=".9" loop autoplay></lottie-player>
            </a>
        </div>
    </header>
</template>

<script>
import NavView from '~/components/common/NavView.vue'
export default {
  components: {
    NavView
  }
}
</script>

<style scoped>
header {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1.8rem 12rem;
    z-index: 10;
    transition: all 0.3s;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.3s;
}
header .logo {
    display: block;
    width: 12rem;
    height: 1.8rem;
    background: url(../img/img_puppy_logo.png) no-repeat center / 100%;
}
header .btn-down-wrap {
    position: relative;
}
header .btn-down {
    width: 14rem;
    height: 7.8rem;
    margin-bottom: -1.4rem;
}
header .btn-down-wrap .app-down-layer {
    display: none;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -o-transform: translateX(-50%);
}
header .btn-down-wrap:hover .app-down-layer {
    display: block;
    max-width: none;
}
@media screen and (max-width: 1024px) {
  header {
        left: 50%;
        width: 768px;
        margin: 0 auto;
        padding: 0.8rem 1.6rem;
        transform: translateX(-50%);
        -webkit-transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        -o-transform: translateX(-50%);
    }
    header .logo {
        width: 10rem;
        height: 1.6rem;
        background: url(../img/img_m_puppy_logo.png) no-repeat center / 100%;
    }
    header .btn-down {
        width: 8.8rem;
        height: auto;
        margin-bottom: -0.9rem;
    }
    header .btn-down-wrap:hover .app-down-layer {
        display: none !important;
    }
}
</style>
