<template>
	<ul class="nav nav-pills">
			<router-link class="nav-link" to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
			<router-link class="nav-link" to="/user" tag="li" active-class="active"><a>User</a></router-link>
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
