<template>
  <footer>
      <div class="inner-col">
          <h2 class="f-logo"><span class="blind">PUPPYCAT</span></h2>
          <div class="terms-box">
              <a href="javascript:void(0)" class="btn-modal-open" @click="changeModalTitle('개인정보처리방침'),changeModalVisible('TermsView'), openModal('modalWrap')">개인정보처리방침</a>
              <!-- <a href="#">이용약관</a>
              <a href="#">위치기반 서비스</a> -->
          </div>
          <address>
              <div>
                  <span>김정윤</span>
                  <span>476-87-02735</span>
                  <span>help@puppycat.co.kr</span>
              </div>
              <div>
                  <span>1551-2735</span>
                  <span>서울특별시 서초구 사임당로 27,4층4C 47호(서초동,평환빌딩)</span>
              </div>
          </address>
          <p class="copyright">Copyright ⓒ 2023 UX PLUS PET CARE., LTD. All rights Reserved.</p>
          <!-- <a title="puppycat instagram" target="_blank" href="#" class="go-insta"><span class="blind">puppycat instagram</span></a> -->
      </div>
      <ModalWrap v-if="$store.state.modalState.modalWrap" :modalTitle="modalTitle" :visibleModal="visibleModal"/>
  </footer>
</template>

<style scoped>
footer {
    padding: 4.8rem 0 4rem;
    text-align: center;
    background-color: #e0e0e0;
}
footer .f-logo {
    width: 8rem;
    height: 1.2rem;
    margin: 0 auto;
    background: url(@/assets/img/img_puppy_f_logo.png) no-repeat center / 100%;
}
footer .terms-box {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;
    margin: 1.2rem 0 2.4rem;
    font-weight: 800;
    font-size: 1.2rem;
    color: #999;
}
footer address,
footer .copyright {
    font-weight: 700;
    font-size: 1.2rem;
    color: #999;
    line-height: 1.4;
    text-decoration: none;
    text-decoration-line: none;
    -moz-text-decoration-line: none;
}
footer address span {
    display: inline-block;
    vertical-align: middle;
    text-decoration: none;
    -moz-text-decoration-line: none;
}
footer address span + span::before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    width: 1px;
    height: 1rem;
    margin: 0 0.8rem 0 0.7rem;
    background: #eee;
}
footer .go-insta {
    display: block;
    width: 4rem;
    height: 4rem;
    margin: 2.4rem auto 0;
    background: url(@/assets/img/ico_puppy_insta.png) no-repeat center / 100%;
}
@media screen and (max-width: 1024px) {
    footer {
        margin-top: auto;
        padding: 1.6rem 0 2.4rem;
        text-align: left;
    }
    footer .f-logo {
        margin: 1rem 0 0;
    }
    footer .terms-box {
        justify-content: flex-start;
        gap: 1.6rem;
        margin: 1.2rem 0 2rem;
        font-size: 1rem;
    }
    footer address,
    footer .copyright {
        font-size: 1rem;
        text-decoration-line: none;
        -moz-text-decoration-line: none;
    }
    footer .go-insta {
        position: absolute;
        top: -1rem;
        right: 0;
        width: 3.2rem;
        height: 3.2rem;
        margin-top: 0;
    }
}
</style>

<script>
import ModalWrap from '@/components/modal/ModalWrap.vue'
export default {
    components: {
        ModalWrap
    },
    data () {
        return {
            modalTitle: '',
            visibleModal: 'TermsView'
        }
	},
    methods: {
		openModal (modalName) {
			this.$store.dispatch('openModal', modalName)
		},
        changeModalTitle(title){
            this.modalTitle = title
        },
        changeModalVisible(visible){
            this.visibleModal = visible
        }
	}
}
</script>