<template>
	<button class="link tree" @click="$emit('click')">
		<span :class="isHeader2 ? 'header' : ''">{{ isOpen ? '▼' : '►' }}</span>
		<h3 v-if="isHeader3">
			{{ label }}
		</h3>
		<h2 v-if="isHeader2">
			{{ label }}
		</h2>
		<span v-if="!isHeader2 && !isHeader3">{{ label }}</span>
	</button>
</template>

<script>
export default {
	name: "ButtonTree",
	props: {
		label: {
			type: String,
			required: true,
		},
		isOpen: {
			type: Boolean,
			required: true,
		},
		isHeader2: {
			type: Boolean,
			required: false,
			default: false,
		},
		isHeader3: {
			type: Boolean,
			required: false,
			default: false,
		},
	},
	// @vue3 MIGRATION: requires emits:
	emits: ["click"],
};
</script>

<style scoped>
.tree {
	margin-bottom: 10px;
	display: flex;
	align-items: center;
}
.tree:hover {
	cursor: pointer;
}
.header {
	color: #0098c4;
	font-size: 1.5em;
}
h2{
	display: inline-block;
	margin: 0;
}
</style>
