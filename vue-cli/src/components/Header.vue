<template>
	<ul class="nav nav-pills">
		<li class="nav-item">
			<router-link class="nav-link" to="/">Home</router-link>
		</li>
		<li class="nav-item">
			<router-link class="nav-link" to="/user">User</router-link>
		</li>
	</ul>
</template>

<script>
	export default {
		name: "Header.vue",
		head: {
			title: '',
		},
		scrollToTop: true,
		props: {},
		components: {},
		data() {
			return {}
		},
		asyncData() {
		},
		computed: {},
		methods: {},
		directives: {},
		filters: {},
		watch: {},
		mounted() {
		}
	}
</script>
