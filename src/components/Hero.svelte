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
		'👶 Batizados',
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

		<span><img alt="food" src="/bullet-food.png" width="20px" height="20px" /> Festas & Atividades</span>
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
			>Vamos fazer a festa juntos!</a
		>
	</div>
	<div id="rotating" in:fly={{ delay: 2200, duration: 1400, y: 20 }}>
		{#each phrases as phrase, i}
			{#if i === currentPhrase}
				<span class="rotating" in:fade={{ duration: fadeSpeed}}>
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
		& > #bullet {
			width: 70%;
			height: 30px;
			border-radius: 100px;
			border: 1px solid var(--main-color);
			display: flex;
			justify-content:center;
			align-items: center;
			& > span {
				display: flex;
				justify-content: space-around;
				align-items: center;
				font-size: 12px;
				padding: 0 5px;
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
			}
			& > .description {
				font-weight: 400;
				font-size: 14px;
			}
			& > a {
				font-size: 14px;
				font-weight: 600;
				color: #fff;
				background: var(--main-color);
				border-radius: 100px;
				padding: 15px 30px;
				margin-top: 20px;
			}
		}
		& > #rotating {
			position: relative;
			z-index: -1;
			& > .rotating {
				font-size: 13px;
				font-weight: bold;
			}
		}
	}
</style>
