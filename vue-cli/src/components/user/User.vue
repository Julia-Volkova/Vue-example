<template>
	<div class="">
		<h1>The User Page</h1>
		<hr>
		<button @click="navigateToHome" class="btn btn-primary">Go to Home</button>
		<hr>
		<router-view/>
	</div>

</template>

<script>
	export default {

		// watch: {
		// 	'$route'(to, from) {
		// 		this.id = to.params.id;
		// 	}
		// },
		methods: {
			navigateToHome() {
				this.$router.push({ name: 'home' });
			}
		}
	}
</script>
