<template>
	<div class="">
		<h3>Some User Details</h3>
		<p>User loaded has ID: {{ $route.params.id }}</p>
		<router-link to="/user/1">User 1</router-link>
		<router-link to="/user/2">User 2</router-link>
		<router-link to="/user/3">User 3</router-link>
	</div>
</template>
