<template>
	<div>
		<p>
			Beaming is done whenever possible. So whenever there are more than one note that is shorter than a quarter note,
			they will be beamed together. If you don't want beaming, then you can break the beam with a space between notes. That
			is, there is no beaming done over a space.
		</p>
		<pre>{{ abcString }}</pre>
		<div id="help-beaming-paper" />
	</div>
</template>

<script>
// @nuxt3 MIGRATION:
// const abcjs = process.browser ? require('abcjs') : null; // This requires document and window, so can't be used on the server side.
import abcjsDefaultExport from "abcjs";

const abcjs = import.meta.browser ? abcjsDefaultExport : null;
export default {
	name: "HelpBeaming",
	components: {
	},
	data() {
		return {
			abcString: `X:1
L:1/8
K:C
A B c d AB cd ABcd|`,
		};
	},
	mounted() {
		abcjs.renderAbc("help-beaming-paper", this.abcString);
	},
};
</script>

<style scoped>

</style>
