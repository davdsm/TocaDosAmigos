<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let testemunials = [
		{
			id: 0,
			name: 'Inês M.',
			party: 'Aniversário',
			message:
				'O aniversário do meu filho foi inesquecível! O espaço era perfeito, com tudo pensado ao pormenor, e as crianças divertiram-se imenso. Não poderíamos ter escolhido um lugar melhor para celebrar!'
		},
		{
			id: 1,
			name: 'David M.',
			party: 'Baby Shower',
			message:
				'O aniversário do meu filho foi inesquecível! O espaço era perfeito, com tudo pensado ao pormenor, e as crianças divertiram-se imenso.'
		},
		{
			id: 2,
			name: 'Sara M.',
			party: 'Festa Familia',
			message:
				'O aniversário do meu filho foi inesquecível! Não poderíamos ter escolhido um lugar melhor para celebrar!'
		},
		{
			id: 3,
			name: 'Raquel M.',
			party: 'Festa Corporativa',
			message:
				'O espaço era perfeito, com tudo pensado ao pormenor, e as crianças divertiram-se imenso. Não poderíamos ter escolhido um lugar melhor para celebrar!'
		}
	];
	let currentTestemunial = 0;
	let fadeSpeed = 500;
	let pauseSpeed = 5000;

	const rotateTestemunial = () => {
		currentTestemunial = (currentTestemunial + 1) % testemunials.length;
	};

	onMount(() => {
		const interval = setInterval(rotateTestemunial, pauseSpeed + fadeSpeed * 2);
		return () => clearInterval(interval);
	});
</script>

<div id="testemunials">
	<h3 class="title"><span>A voz</span> dos nossos clientes</h3>
	<div class="list">
		{#each testemunials as testemunial, i}
			{#if i === currentTestemunial}
				<div class="testemunial" in:fade={{ duration: fadeSpeed }}>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M0 12V22.2858H10.2857V12H3.4286C3.4286 8.21908 6.50478 5.14289 10.2857 5.14289V1.71429C4.61384 1.71429 0 6.32813 0 12Z"
							fill="#3A4F39"
						/>
						<path
							d="M24.0001 5.14289V1.71429C18.3282 1.71429 13.7144 6.32813 13.7144 12V22.2858H24.0001V12H17.143C17.143 8.21908 20.2191 5.14289 24.0001 5.14289Z"
							fill="#3A4F39"
						/>
					</svg>
					<p class="text">
						{testemunial.message}
					</p>
					<div class="author">
						<p>{testemunial.name}</p>
						<span>{testemunial.party}</span>
					</div>
				</div>
			{/if}
		{/each}
	</div>
</div>

<style lang="scss">
	#testemunials {
		width: var(--mobile-container);
		padding: 100px 0 50px;
		text-align: center;
		height: 270px;
		& > .title {
			font-size: 20px;
			font-weight: bold;
			color: #000;
			& > span {
				font-weight: bold;
				color: var(--main-color);
			}
		}
		& > .list {
			margin: 30px 20px;
			text-align: left;
			& > .testemunial {
				& > svg {
					margin-bottom: 30px;
				}
				& > .text {
					font-size: 12px;
					line-height: 22px;
					color: #2d2e2e;
					margin-bottom: 30px;
				}
				& > .author {
					& > p {
						font-size: 14px;
						font-weight: 600;
						color: #2d2e2e;
					}
					& > span {
						font-size: 14px;
						font-weight: 400;
						color: #2d2e2e;
					}
				}
			}
		}
	}
</style>
