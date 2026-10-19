<script setup lang="ts">
const { cdnURL, baseURL } = useRuntimeConfig().app
useHead({
	title: "abcjs: Quick Editor",
	link: [
		{
			rel: 'apple-touch-icon',
			sizes: "180x180",
			href: `${cdnURL || baseURL}apple-touch-icon.png`,
		},
		{
			rel: 'icon',
			type: 'image/png',
			sizes: '32x32',
			href: `${cdnURL || baseURL}favicon-32x32.png`,
		},
		{
			rel: 'icon',
			type: 'image/png',
			sizes: '16x16',
			href: `${cdnURL || baseURL}favicon-16x16.png`,
		},
		{
			rel: 'icon',
			type: 'image/x-icon',
			href: `${cdnURL || baseURL}favicon.ico?x=2`,
		},
	],
})
</script>
<template>
	<div>
		<NuxtLayout />
	</div>
</template>
