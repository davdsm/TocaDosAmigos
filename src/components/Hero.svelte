<script lang="ts">
	import { onMount } from 'svelte';
	import { fly, fade } from 'svelte/transition';
	export let links: {
		home: string;
		services: string;
		testemunials: string;
		reservations: string;
		contacts: string;
	};

	let phrases = [
		'🍂 Outono é a estação perfeita',
		'🏢 Eventos empresas',
		'☀️ Àrea exterior',
		'🎁 Festas de aniversário',
		'🌳 Uma vista fenomenal',
		'‍🍼 Baby showers',
		'👶 Batizados'
	];
	let currentPhrase = 0;
	let fadeSpeed = 500;
	let pauseSpeed = 2000;

	const rotatePhrases = () => {
		currentPhrase = (currentPhrase + 1) % phrases.length;
	};

	onMount(() => {
		const interval = setInterval(rotatePhrases, pauseSpeed + fadeSpeed * 2);
		return () => clearInterval(interval);
	});
</script>

<div id="hero">
	<div id="bullet" in:fly={{ delay: 1400, duration: 1000, y: 10 }}>
		<span>🥤</span>
		<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M6.75 2.25L10.5 6M10.5 6L6.75 9.75M10.5 6H1.5"
				stroke="black"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>

		<span
			><img alt="food" src="/bullet-food.png" width="20px" height="20px" /> Festas & Atividades</span
		>
		<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M6.75 2.25L10.5 6M10.5 6L6.75 9.75M10.5 6H1.5"
				stroke="black"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>

		<span>🍭</span>
	</div>
	<div id="intro">
		<h1 in:fly={{ delay: 1600, duration: 1000, y: 20 }} class="title">
			Celebrações Radiantes, <br /> Festas Cheias de Magia e Energia!
		</h1>
		<h5 in:fly={{ delay: 1800, duration: 1000, y: 20 }} class="description">
			Um espaço pensado para dar vida a qualquer tipo de evento. Seja uma festa de aniversário, um
			baby shower, ou um evento corporativo, aqui o ambiente é vibrante, cheio de luz e alegria.
		</h5>
		<a in:fly={{ delay: 2000, duration: 1000, y: 20 }} href={links.reservations}
			>Vamos fazer a festa juntos!
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="size-6"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
				/>
			</svg>
		</a>
	</div>
	<div id="rotating" in:fly={{ delay: 2200, duration: 1400, y: 20 }}>
		{#each phrases as phrase, i}
			{#if i === currentPhrase}
				<span class="rotating" in:fade={{ duration: fadeSpeed }}>
					{phrase}
				</span>
			{/if}
		{/each}
	</div>
</div>

<style lang="scss">
	#hero {
		width: var(--mobile-container);
		height: calc(80svh - 100px);
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		padding-bottom: 30px;

		@media only screen and (min-width: 992px) {
			width: var(--desktop-container);
		}

		& > #bullet {
			width: 70%;
			height: 30px;
			border-radius: 100px;
			border: 1px solid var(--main-color);
			display: flex;
			justify-content: center;
			align-items: center;

			@media only screen and (min-width: 992px) {
				width: 300px;
			}
			& > span {
				display: flex;
				justify-content: space-around;
				align-items: center;
				font-size: 12px;
				padding: 0 5px;
				@media only screen and (min-width: 992px) {
					font-size: 14px;
				}
				& > img {
					width: 20px;
					height: 20px;
					border-radius: 100%;
					margin-right: 5px;
				}
			}
		}
		& > #intro {
			text-align: center;
			height: 34vh;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-wrap: wrap;

			& > .title {
				font-size: 25px;
				font-weight: bold;

				@media only screen and (min-width: 992px) {
					font-size: 30px;
				}
			}
			& > .description {
				font-weight: 400;
				font-size: 14px;
				@media only screen and (min-width: 992px) {
					font-size: 20px;
					padding: 0 20%;
				}
			}
			& > a {
				font-size: 14px;
				font-weight: 600;
				color: #fff;
				background: var(--main-color);
				border-radius: 100px;
				padding: 15px 30px;
				margin-top: 20px;
				display: flex;
				justify-content: center;
				align-items: center;
				transition: all ease 0.2s;
				&:hover {
					transform: translateY(-5px);
					box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
				}

				& > svg {
					color: #fff;
					width: 14px;
					margin: 0 0 0 10px;
					stroke: #fff;

					@media only screen and (min-width: 992px) {
						font-size: 16px;
					}
				}

				@media only screen and (min-width: 992px) {
					font-size: 16px;
				}
			}
		}
		& > #rotating {
			position: relative;
			z-index: -1;
			& > .rotating {
				font-size: 13px;
				font-weight: bold;

				@media only screen and (min-width: 992px) {
					font-size: 16px;
				}
			}
		}
	}
</style>
