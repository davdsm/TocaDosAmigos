<script lang="ts">
	import { onMount } from 'svelte';
	import lottie from 'lottie-web';

	let terms = false;
	let checkboxIcon: HTMLElement;
	let checkboxDiretction = 1;
	let checkboxAnimation: any;
	let areas: string[] = [
		'Aniversário',
		'Baptizado / Comunhão',
		'Aluguer do Espaço',
		'Corporativo / Familiar',
		'Baby Shower',
		'Outro'
	];
	let activeAreas: string[] = [];

	const handleArea = (area: string) => {
		const index = activeAreas.indexOf(area);
		if (index > -1) {
			activeAreas = [...activeAreas.slice(0, index), ...activeAreas.slice(index + 1)];
		} else {
			activeAreas = [...activeAreas, area];
		}
	};

	const submit = (e: Event) => {
		e.preventDefault();
		console.log('yeah');
	};

	const handleClickCheckbox = () => {
		checkboxIcon.click();
	};

	onMount(() => {
		checkboxAnimation = lottie.loadAnimation({
			container: checkboxIcon,
			renderer: 'svg',
			loop: false,
			autoplay: false,
			path: '/animations/checkbox/checkbox.json'
		});

		// Handle click to play the animation in reverse or forward
		checkboxIcon.addEventListener('click', () => {
			checkboxAnimation.setDirection(checkboxDiretction);
			checkboxAnimation.play();
			checkboxDiretction = -checkboxDiretction;
		});
	});
</script>

<div id="reservations">
	<h3 class="title">Prepara o teu <br /> <span>evento mágico</span></h3>
	<form id="form" on:submit={submit} method="get" action="">
		<p>Estou interessado/a em:</p>
		<ul class="options">
			{#each areas as area, i}
				<li>
					<button
						type="button"
						class={activeAreas.includes(area) ? 'active' : ''}
						on:click={() => handleArea(area)}>{area}</button
					>
				</li>
			{/each}
		</ul>
		<div class="input">
			<label for="name">Nome</label>
			<input type="text" name="name" placeholder="O Teu Nome" required />
		</div>
		<div class="input">
			<label for="date">Data</label>
			<input type="datetime-local" name="datetime" placeholder="Dia & Hora" required />
		</div>
		<div class="input">
			<label for="message">Mensagem</label>
			<textarea rows="8"></textarea>
		</div>
		<div class="checkbox">
			<input type="checkbox" required hidden bind:this={terms} />
			<button type="button" class="checkbox-item" bind:this={checkboxIcon}></button>
			<button type="button" class="text" on:click={handleClickCheckbox}
				>Li e concordo com os termos descritos.</button
			>
		</div>
		<button class="submit" type="submit">Enviar Mensagem</button>
	</form>
</div>

<style lang="scss">
	#reservations {
		width: var(--mobile-container);
		padding: 50px 0 100px;
		text-align: center;
		& > .title {
			font-size: 20px;
			font-weight: bold;
			color: #000;
			& > span {
				font-weight: bold;
				color: var(--main-color);
			}
		}
		& > #form {
			margin: 30px 0;
			& > p {
				font-size: 14px;
				color: var(--main-color);
				font-weight: 600;
				text-align: left;
			}
			& > ul {
				padding: 0;
				margin: 20px 0;
				list-style: none;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				flex-wrap: wrap;
				& > li {
					margin: 0 10px 10px 0;
					& > button {
						width: auto;
						padding: 10px 20px;
						background: white;
						color: var(--main-color);
						border-radius: 100px;
						font-size: 12px;
						border: 1px solid var(--main-color);
						transition: all ease 0.2s;
						&.active {
							background: var(--main-color);
							color: #fff;
							transform: translateY(-2px);
						}
					}
				}
			}
			& > .input {
				display: flex;
				justify-content: start;
				align-items: start;
				flex-wrap: wrap;
				margin: 30px 0;
				& > label {
					text-align: left;
					color: #959595;
					font-weight: 600;
					font-size: 14px;
					width: 100%;
				}
				& > input {
					width: 100%;
					padding: 10px 0;
					margin: 0 0;
					border-bottom: 2px solid #ccd0c5;
					transition: all ease 0.2s;
					&:focus {
						border-bottom: 2px solid var(--main-color);
					}
				}
				& > textarea {
					border: 2px solid #ccd0c5;
					border-radius: 15px;
					width: 100%;
					margin: 10px 0 0 0;
					padding: 20px;
					font-size: 12px;
					transition: all ease 0.2s;
					&:focus {
						border: 2px solid var(--main-color);
					}
				}
			}
			& > .checkbox {
				display: flex;
				justify-content: flex-start;
				align-items: center;
				font-size: 14px;
				color: #808080;
				margin: -20px 0 0 0;
				& > .checkbox-item {
					width: 20px;
					margin: 0 5px 0 0;
				}
				& > button.text {
					color: #808080;
					font-size: 13px;
					font-weight: bold;
				}
			}
			& > button.submit {
				font-size: 14px;
				font-weight: bold;
				color: #fff;
				padding: 10px 30px;
				background: var(--main-color);
				margin: 30px 0;
				border-radius: 100px;
			}
		}
	}
</style>
