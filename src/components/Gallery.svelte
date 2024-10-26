<script lang="ts">
	import { fade } from 'svelte/transition';
	let numberOfImages: number = 21;

	const sizes = [
		{
			width: '100%',
			height: '135px'
		},
		{
			width: '100%',
			height: '200px'
		},
		{
			width: '100%',
			height: '100px'
		},
		{
			width: '100%',
			height: '100px'
		},
		{
			width: '100%',
			height: '120px'
		},
		{
			width: '100%',
			height: '150px'
		},
		{
			width: '100%',
			height: '185px'
		}
	];

	const sizesDesktop = [
		{
			width: '100%',
			height: '335px'
		},
		{
			width: '100%',
			height: '400px'
		},
		{
			width: '100%',
			height: '300px'
		},
		{
			width: '100%',
			height: '300px'
		},
		{
			width: '100%',
			height: '320px'
		},
		{
			width: '100%',
			height: '350px'
		},
		{
			width: '100%',
			height: '385px'
		}
	];
	const getRandomImage = (): string => {
		return `gallery/${Math.floor(Math.random() * (numberOfImages - 1)) + 1}.jpg`;
	};
	const getSize = (pos: number): { width: string; height: string } => {		
		if (window.innerWidth > 992) {
			return sizesDesktop[pos - 1];
		}
		return sizes[pos - 1];
	};
	const buildImages = () => {
		return [
			{
				image: getRandomImage(),
				width: getSize(1).width,
				height: getSize(1).height
			},
			{
				image: getRandomImage(),
				width: getSize(2).width,
				height: getSize(2).height
			},
			{
				image: getRandomImage(),
				width: getSize(3).width,
				height: getSize(3).height
			},
			{
				image: getRandomImage(),
				width: getSize(4).width,
				height: getSize(4).height
			},
			{
				image: getRandomImage(),
				width: getSize(5).width,
				height: getSize(5).height
			},
			{
				image: getRandomImage(),
				width: getSize(6).width,
				height: getSize(6).height
			},
			{
				image: getRandomImage(),
				width: getSize(7).width,
				height: getSize(7).height
			}
		];
	};

	let images = buildImages();

	setInterval(() => {
		images = buildImages();
	}, 3000);
</script>

<div id="gallery">
	{#each images as { image, width, height }, i}
		<div class="davdsm-item" in:fade={{ delay: 250, duration: 300 }}>
			<img src={image} alt="Imagem do Espaço - Toca dos Amigos" {width} {height} />
		</div>
	{/each}
</div>

<style lang="scss">
	#gallery {
		width: var(--mobile-container);
		column-gap: 10px;
		column-count: 3;
		& > .davdsm-item {
			margin: 0 0 10px;
			display: inline-block;
			width: 100%;
			& > img {
				object-fit: cover;
				border-radius: 20px;
			}
		}
	}
</style>
