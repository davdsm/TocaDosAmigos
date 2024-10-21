<script>
	import { fade } from 'svelte/transition';

	export let logo;
	export let links;

	let hamburger = '';

	const switchBurger = () => {
		hamburger = hamburger === '' ? 'active' : '';
	};
</script>

<div id="header-mobile">
	<div id="logo" in:fade={{ delay: 10000, duration: 30000 }}>
		<a href={links.home}>
			<img src={logo} alt="Logo" height="70px" />
		</a>
	</div>
	<div id="menu">
		<a id="reservation-button" href={links.reservations} in:fade={{ delay: 20000, duration: 30000 }}>
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
					d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z"
				/>
			</svg>

			Make a Party
		</a>
		<button id="hamburger" on:click={switchBurger} in:fade={{ delay: 30000, duration: 30000 }}>
			<svg
				role="button"
				tabindex="0"
				class="ham hamRotate ham7 {hamburger}"
				viewBox="0 0 100 100"
				width="50"
			>
				<path
					class="line top"
					d="m 70,33 h -40 c 0,0 -6,1.368796 -6,8.5 0,7.131204 6,8.5013 6,8.5013 l 20,-0.0013"
				/>
				<path class="line middle" d="m 70,50 h -40" />
				<path
					class="line bottom"
					d="m 69.575405,67.073826 h -40 c -5.592752,0 -6.873604,-9.348582 1.371031,-9.348582 8.244634,0 19.053564,21.797129 19.053564,12.274756 l 0,-40"
				/>
			</svg>
		</button>
	</div>
</div>

<style lang="scss">
	#header-mobile {
		max-width: var(--mobile-container);
		margin: 20px auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}
	#logo {
		width: 20%;
	}
	#menu {
		width: 80%;
		display: flex;
		justify-content: flex-end;
		align-items: center;

		& > #hamburger {
			margin: 0 0 0 10px;
			.ham {
				cursor: pointer;
				-webkit-tap-highlight-color: transparent;
				transition: transform 400ms;
				-moz-user-select: none;
				-webkit-user-select: none;
				-ms-user-select: none;
				user-select: none;
			}
			.hamRotate.active {
				transform: rotate(45deg);
			}
			.hamRotate180.active {
				transform: rotate(180deg);
			}
			.line {
				fill: none;
				transition:
					stroke-dasharray 400ms,
					stroke-dashoffset 400ms;
				stroke: #000;
				stroke-width: 5.5;
				stroke-linecap: round;
			}
			.ham7 .top {
				stroke-dasharray: 40 82;
			}
			.ham7 .middle {
				stroke-dasharray: 40 111;
			}
			.ham7 .bottom {
				stroke-dasharray: 40 161;
			}
			.ham7.active .top {
				stroke-dasharray: 17 82;
				stroke-dashoffset: -62px;
			}
			.ham7.active .middle {
				stroke-dashoffset: 23px;
			}
			.ham7.active .bottom {
				stroke-dashoffset: -83px;
			}
		}

		& > a#reservation-button {
			display: flex;
			justify-content: space-around;
			align-items: center;
			background: #000;
			border-radius: 50px;
			font-size: 16px;
			color: #fff;
			padding: 10px 20px;
			& > svg {
				color: #fff;
				fill: #fff;
				stroke: #fff;
				width: 20px;
				margin-right: 10px;
			}
		}
	}
</style>
