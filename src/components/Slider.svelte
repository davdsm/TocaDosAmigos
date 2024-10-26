<script lang="ts">
	import Carousel from 'svelte-carousel';
	import { fly } from 'svelte/transition';

	const numberOfImages: number = 21;
	const sizes = [
		{
			width: 218,
			height: 174
		},
		{
			width: 176,
			height: 190
		},
		{
			width: 242,
			height: 174
		},
		{
			width: 119,
			height: 197
		},
		{
			width: 194,
			height: 174
		},
		{
			width: 164,
			height: 190
		},
		{
			width: 164,
			height: 175
		}
	];

	const sizesDesktop = [
		{
			width: '100%',
			height: '535px'
		},
		{
			width: '100%',
			height: '600px'
		},
		{
			width: '100%',
			height: '500px'
		},
		{
			width: '100%',
			height: '500px'
		},
		{
			width: '100%',
			height: '520px'
		},
		{
			width: '100%',
			height: '550px'
		},
		{
			width: '100%',
			height: '585px'
		}
	];
	const tops = ['-20px', '20px', '30px', '-30px', '15px', '-15px'];
	const topsDesktop = ['40px', '-30px', '50px', '-10px', '20px', '-20px'];

	const getRandomSize = () => {
		if (window.innerWidth > 992) {
			const s = Math.floor(Math.random() * (sizesDesktop.length - 1));
			return sizesDesktop[s];
		}
		const n = Math.floor(Math.random() * (sizes.length - 1));
		return sizes[n];
	};

	const getRandomMargin = () => {
		if (window.innerWidth > 992) {
			const s = Math.floor(Math.random() * (topsDesktop.length - 1));
			return topsDesktop[s];
		}
		const n = Math.floor(Math.random() * (tops.length - 1));
		return tops[n];
	};
</script>

<div id="slider" in:fly={{ delay: 2600, duration: 1400, y: 10 }}>
	<Carousel
		particlesToShow={3}
		particlesToScroll={1}
		autoplayDuration={0}
		duration={5000}
		autoplay
		timingFunction="linear"
		dots={false}
		arrows={false}
		swiping={false}
	>
		{#each { length: numberOfImages } as image, i}
			<img
				height="{getRandomSize().height}px"
				width="{getRandomSize().width}px"
				src="/gallery/{i + 1}.jpg"
				alt="Imagem do espaço - Toca dos Amigos"
				style="transform: translateY({getRandomMargin()});"
			/>
		{/each}
	</Carousel>
</div>

<style lang="scss">
	#slider {
		position: relative;
		z-index: -1;
		& img {
			object-fit: cover;
			border-radius: 40px;
			margin: 40px 10px 40px 10px;
		}
	}
</style>
