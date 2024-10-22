<script lang="ts">
	import { onMount } from 'svelte';

	const party: string = '/party.gif';
	let status: 'opening' | 'closing' | 'hide' = 'opening';

	onMount(() => {
		setTimeout(() => {
			status = 'closing';
		}, 2500);
		setTimeout(() => {
			status = 'hide';
		}, 5000);
	});
</script>

<div id="loader" class={status}>
	<img src={party} alt="Toca dos Amigos" height="70px" />
</div>

<style lang="scss">
	#loader {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		width: 100vw;
		height: 100svh;
		z-index: 5;
		background: white;
		display: flex;
		justify-content: center;
		align-items: center;
		&.closing {
			& > img {
				opacity: 1;
				transform: translateY(0);
				animation-name: fadeOut;
				animation-delay: 0.5s;
				animation-duration: 2s;
			}
		}
		&.hide {
			display: none;
		}
		& > img {
			width: 30%;
			height: auto;
			opacity: 0;
			animation-name: fadeIn;
			animation-delay: 0.5s;
			animation-duration: 2s;
			animation-direction: normal;
			animation-play-state: running;
			animation-fill-mode: forwards;
			transform: translateY(20vh);
		}

		@keyframes fadeIn {
			0% {
				opacity: 0;
				transform: translateY(20vh);
			}
			100% {
				opacity: 1;
				transform: translateY(0);
			}
		}
		@keyframes fadeOut {
			0% {
				opacity: 1;
				transform: translateY(0);
			}
			100% {
				opacity: 0;
				transform: translateY(-20vh);
			}
		}
	}
</style>
