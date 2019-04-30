<template>
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
				<h1>Routing</h1>
				<Header/>
				<router-view/>
			</div>
		</div>
	</div>
</template>

<script>
	import Header from './components/Header.vue';

	export default {
		components: {
			Header: Header,
		}
	}
</script>

<style>
</style>
