<template>
	<div class="wrap">
		<HeaderView v-if="showHeaderView"/>
		<Nuxt />
	</div>
  </template>
  
  <script>
  import HeaderView from '@/components/common/HeaderView.vue'
  export default {
	components: {
	  HeaderView,
	},
	data() {
		return {
			currentPath: this.$route.path
		};
	},
	mounted(){
	},
	computed: {
        showHeaderView() {
            return this.$store.state.showHeaderView;
        }
    },
	watch: {
		$route(to, from) {
			if(to.path.includes('/policy')){
				this.$store.dispatch('checkHeader', false);
			} else {
				this.$store.dispatch('checkHeader', true);
			}
		},
	},
  }
  </script>
  