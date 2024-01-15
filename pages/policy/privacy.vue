<template>
	<div class="content-wrap">
		<TermsView />
	</div>
</template>
<script>
import TermsView from '@/components/modal/TermsView.vue';
export default{
	components:{
		TermsView
	}
}
</script>

<style scoped>
	.content-wrap{
		width: 1200px;
		max-width: 100%;
		padding: 7rem 0;
		margin: 0 auto;
	}
</style>