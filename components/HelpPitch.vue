<template>
	<div>
		<p>Pitches are specifed with the note name.</p>
		<p>
			A capital letter is an octave below a lower case letter. If a comma appears
			after a letter, then the note is an octave below that. If an apostrophe appears after a note, then the note is raised an octave.
		</p>
		<p>Rests are specified with the "z" character. The different shaped rests are depend on the duration. (See the duration section for more details.)</p>
		<p>See the following example for specifying pitches:</p>
		<div id="help-pitch-paper" />

		<p>
			Accidentals (that are not in the key signature) are specified with an underscore for flat, an equal sign for natural, and
			a caret for sharp. See the following example:
		</p>
		<div id="help-accidental-paper" />
	</div>
</template>

<script>
// @nuxt3 MIGRATION:
// const abcjs = process.browser ? require('abcjs') : null; // This requires document and window, so can't be used on the server side.
import abcjsDefaultExport from "abcjs";

const abcjs = import.meta.browser ? abcjsDefaultExport : null;
export default {
	components: {
	},
	data() {
		return {
			abcPitch: `X:1
%%staffwidth 350
L:1
K:C
"_G,"G, "_B,"B, "_C"C "_G"G "_B"B "_c"c "_g"g "_b"b "_c'"c' "_d'"d' "_z"z/4|`,
			abcAccidental: `X:1
%%staffwidth 350
L:1
K:C
"__D"_D "_=D"=D "_^D"^D |`,
		};
	},
	mounted() {
		abcjs.renderAbc("help-pitch-paper", this.abcPitch);
		abcjs.renderAbc("help-accidental-paper", this.abcAccidental);
	},
};
</script>

<style scoped>

</style>
