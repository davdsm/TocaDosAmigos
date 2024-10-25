<script lang="ts">
	export let links;
</script>

<div id="contacts">
	<div class="right">
		<img src="/contacts/imageRight.png" alt="Toca dos Amigos" />
	</div>
	<h1>Toca dos Amigos</h1>

	<div class="left">
		<img src="/contacts/imageLeft.png" alt="Toca dos Amigos" />
	</div>
	<ul>
		<li>
			<a href={links.services}
				>Serviços <svg
					width="28"
					height="28"
					viewBox="0 0 28 28"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M4.66666 14H23.3333"
						stroke="black"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M16.3333 7L23.3333 14L16.3333 21"
						stroke="black"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg></a
			>
		</li>
		<li>
			<a href={links.testemunials}
				>Testemunhos <svg
					width="28"
					height="28"
					viewBox="0 0 28 28"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M4.66666 14H23.3333"
						stroke="black"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M16.3333 7L23.3333 14L16.3333 21"
						stroke="black"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg></a
			>
		</li>
		<li>
			<a href={links.terms}
				>Termos <svg
					width="28"
					height="28"
					viewBox="0 0 28 28"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M4.66666 14H23.3333"
						stroke="black"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M16.3333 7L23.3333 14L16.3333 21"
						stroke="black"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg></a
			>
		</li>
	</ul>
</div>

<style lang="scss">
	#contacts {
		width: var(--mobile-container);
		margin: 0 auto;
		h1 {
			font-weight: 600;
			font-size: 100%;
			text-transform: uppercase;
			font-size: 35px;
			text-align: center;
		}
		& > .right {
			width: 100%;
			text-align: right;
			margin: 0 0 -26px 0;
			z-index: 2;
			position: relative;
		}
		& > .left {
			width: 100%;
			text-align: left;
			margin: -26px 0 0 0;
			z-index: 2;
			position: relative;
		}

		& img {
			box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
		}
		& > ul {
			display: flex;
			justify-content: center;
			align-items: center;
			list-style: none;
			width: 100%;
			margin: 30px 0;
			& > li {
				margin: 0 5px;
				& > a {
					font-size: 15px;
					font-weight: 600;
					display: flex;
					justify-content: center;
					align-items: center;
					& > svg {
						width: 17px;
						margin: 0 0 0 10px;
					}
				}
			}
		}
	}
</style>
