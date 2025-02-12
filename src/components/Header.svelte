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

	let hamburgerIcon: HTMLElement;
	let hamburgerAnimation: any;
	let hamburgerDirection: any = 1;

	const switchBurger = () => {
		sidebar = !sidebar;
	};

	const handleClick = () => {
		hamburgerIcon.click();
	};

	onMount(() => {
		animation = true;

		setTimeout(() => {
			import('lottie-web').then((lottie: any) => {
				hamburgerAnimation = lottie.loadAnimation({
					container: hamburgerIcon,
					renderer: 'svg',
					loop: false,
					autoplay: false,
					path: '/animations/hamburger/menu.json'
				});
			});

			hamburgerIcon.addEventListener('click', () => {
				hamburgerAnimation.setDirection(hamburgerDirection);
				hamburgerAnimation.play();
				hamburgerDirection = -hamburgerDirection;
			});
		}, 500);
	});
</script>

<header id="header-container" class={scrollPosY < 50 ? 'top' : 'fixed'}>
	<div id="header">
		{#if animation}
			<div id="logo" in:fly={{ delay: 1000, duration: 1000, y: -50 }}>
				<a href={links.home}>
					<img src={logo} alt="Logo" />
				</a>
			</div>
			<nav id="nav" in:fly={{ delay: 1100, duration: 1000, y: -50 }}>
				<ul>
					<li>
						<a on:click={handleClick} href={links.home}>Início</a>
					</li>
					<li>
						<a on:click={handleClick} href={links.services}>Serviços</a>
					</li>
					<!-- <li>
						<a on:click={handleClick} href={links.testemunials}>Testemunhos</a>
					</li> -->
					<li>
						<a on:click={handleClick} href={links.contacts}>Contactos</a>
					</li>
				</ul>
			</nav>
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
					bind:this={hamburgerIcon}
				>
					<!-- Hamburger will appear here -->
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
		z-index: 90;

		&.fixed {
			box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
			& > #header {
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
	#header {
		max-width: var(--mobile-container);
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		position: relative;
		transition: all ease 0.2s;

		@media only screen and (min-width: 992px) {
			width: var(--desktop-container);
			max-width: var(--desktop-max-width);
		}
	}

	#nav {
		display: none;
		& > ul {
			list-style: none;
			padding: 0;
			display: flex;
			justify-content: space-around;
			align-content: center;
			& > li {
				& > a {
					font-size: 14px;
					font-weight: 600;
				}
			}
		}
		@media only screen and (min-width: 992px) {
			display: inline-block;
			width: 50%;
		}
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

		@media only screen and (min-width: 992px) {
			width: 20%;
		}

		& > #hamburger {
			z-index: 12;
			margin: 0 0 0 10px;
			@media only screen and (min-width: 992px) {
				display: none;
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
			&:hover {
				transform: translateY(-5px);
				box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
			}

			@media only screen and (min-width: 992px) {
				background: var(--main-color);
				font-size: 14px;
			}

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
		@media only screen and (min-width: 992px) {
			display: none;
		}
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
