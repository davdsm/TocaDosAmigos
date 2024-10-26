<script lang="ts">
	export let links;
</script>

<div id="contacts">
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

		@media only screen and (min-width: 992px) {
			width: var(--desktop-container);
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
				@media only screen and (min-width: 992px) {
					margin: 0 20px;
				}
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

					@media only screen and (min-width: 992px) {
						font-size: 18px;
					}
				}
			}
		}
	}
</style>
