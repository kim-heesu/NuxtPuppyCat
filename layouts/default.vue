<template>
	<div class="wrap">
		<HeaderView />
		<Nuxt />
	</div>
  </template>
  
  <script>
  import HeaderView from '@/components/common/HeaderView.vue'
  export default {
	components: {
	  HeaderView,
	}
  }
  </script>
  