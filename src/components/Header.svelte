<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	export let logo: string;
	export let links: {
		home: string;
		services: string;
		testemunials: string;
		reservations: string;
		contacts: string;
	};

	let sidebar: boolean = false;
	let animation: boolean = false;
	let scrollPosY: number = 0;

	const switchBurger = () => {
		sidebar = !sidebar;
	};

	const handleClick = () => {
		sidebar = false;
	};

	onMount(() => {
		animation = true;
	});
</script>

<header id="header-container" class={scrollPosY < 50 ? 'top' : 'fixed'}>
	<div id="header-mobile">
		{#if animation}
			<div id="logo" in:fly={{ delay: 1000, duration: 1000, y: -50 }}>
				<a href={links.home}>
					<img src={logo} alt="Logo" />
				</a>
			</div>
			<div id="menu">
				<a
					id="reservation-button"
					href={links.reservations}
					in:fly={{ delay: 1200, duration: 1000, y: -50 }}
				>
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

					Fazer uma festa
				</a>
				<button
					id="hamburger"
					on:click={switchBurger}
					in:fly={{ delay: 1400, duration: 1000, y: -50 }}
				>
					<svg
						role="button"
						tabindex="0"
						class="ham hamRotate ham7 {sidebar && 'active'}"
						viewBox="0 0 100 100"
						width="40"
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

			<aside id="sidebar" class={sidebar ? 'open' : 'closed'}>
				<ul>
					<li>
						<a on:click={handleClick} href={links.home}>Início</a>
					</li>
					<li>
						<a on:click={handleClick} href={links.services}>Serviços</a>
					</li>
					<li>
						<a on:click={handleClick} href={links.testemunials}>Testemunhos</a>
					</li>
					<li>
						<a on:click={handleClick} href={links.reservations}>Faz já a tua festa!</a>
					</li>
					<li>
						<a on:click={handleClick} href={links.contacts}>Contactos</a>
					</li>
				</ul>
			</aside>
		{/if}
	</div>
</header>

<svelte:window bind:scrollY={scrollPosY} />

<style lang="scss">
	#header-container {
		position: sticky;
		top: 0;
		background: #fff;
		padding: 10px 0;
		margin: 20px auto;
		transition: all ease 0.2s;
		&.fixed {
			box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
			& > #header-mobile {
				& > #logo {
					& > a > img {
						height: 30px;
					}
				}
				& > #menu {
					& > #reservation-button {
						transform: scale(0.8);
					}
					& > #hamburger {
						transform: scale(0.8);
						margin: 0 0 0 0;
					}
				}
			}
		}
	}
	#header-mobile {
		max-width: var(--mobile-container);
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		position: relative;
		transition: all ease 0.2s;
	}
	#logo {
		width: 20%;
		& > a > img {
			height: 70px;
			transition: all ease 0.2s;
		}
	}
	#menu {
		width: 80%;
		display: flex;
		justify-content: flex-end;
		align-items: center;

		& > #hamburger {
			z-index: 12;
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
				stroke-width: 5;
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
			font-size: 12px;
			color: #fff;
			padding: 10px 20px;
			transition: all ease 0.2s;
			& > svg {
				color: #fff;
				fill: #fff;
				stroke: #fff;
				width: 20px;
				margin-right: 10px;
			}
		}
	}
	aside#sidebar {
		position: fixed;
		top: 0;
		right: 0;
		width: 100%;
		height: 100dvh;
		background: white;
		opacity: 1;
		z-index: 10;
		display: flex;
		justify-content: center;
		align-items: center;
		left: 100%;
		transition: all ease 0.2s;
		&.open {
			left: 0%;
		}
		& > ul {
			list-style: none;
			padding: 0;
			margin: 0;
			& > li {
				text-align: center;
				padding: 20px 0;
				& > a {
					font-size: 30px;
					font-weight: 500;
					position: relative;
				}
			}
		}
	}
</style>
