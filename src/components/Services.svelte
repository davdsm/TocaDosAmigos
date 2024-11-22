<script lang="ts">
	import Carousel from 'svelte-carousel';

	export let links: {
		home: string;
		services: string;
		testemunials: string;
		reservations: string;
		contacts: string;
	};

	const services = [
		{
			title: 'Aniversário',
			img: 'birthday.png',
			description:
				'Um espaço vibrante e cheio de alegria, perfeito para celebrar rodeado de quem mais gostas!'
		},
		{
			title: 'Baby Shower',
			img: 'baby.png',
			description:
				'Um espaço cheio de carinho e diversão, perfeito para reunir família e amigos neste momento especial.'
		},
		{
			title: 'Batizado',
			img: 'baptizado.png',
			description:
				'Um espaço acolhedor para reunir família e amigos, criando memórias inesquecíveis nesse dia tão importante.'
		},
		{
			title: 'Corporativo',
			img: 'corp.png',
			description:
				'Um ambiente profissional e versátil, perfeito para reuniões, workshops ou celebrações empresariais.'
		}
	];
</script>

<div id="services">
	<div class="title">
		<h5 class="part-one">Um espaço aconchegante, <br /> com todos os serviços necessários,</h5>
		<h5 class="part-two">
			cuidadosamente planejados e personalizados para criar atmosferas únicas e <span>
				celebrar momentos especiais.</span
			>
		</h5>
	</div>
	<div class="list">
		<Carousel
			particlesToShow={3}
			particlesToScroll={1}
			autoplayDuration={0}
			duration={3000}
			autoplay
			timingFunction="linear"
			dots={false}
			arrows={false}
			swiping={false}
		>
			{#each services as { title, img, description }}
				<a href={links.contacts} class="service">
					<img src="/services/{img}" alt={title} width="" />
					<h6 class="title">
						{title}
						<!-- <svg
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
						</svg> -->
					</h6>
					<p class="description">
						{description}
					</p>
				</a>
			{/each}
		</Carousel>
	</div>
</div>

<style lang="scss">
	#services {
		z-index: -1;
		position: relative;
		padding: 100px 0;
		@media only screen and (min-width: 992px) {
			font-size: 25px;
		}
		& > .title {
			width: var(--mobile-container);
			text-align: right;
			font-size: 17px;
			color: black;
			margin-bottom: 30px;

			@media only screen and (min-width: 992px) {
				font-size: 25px;
			}
			& > .part-two {
				text-align: left;
				@media only screen and (min-width: 992px) {
					padding: 0 0 0 50%;
				}
				& > span {
					color: var(--main-color);
				}
			}
		}
		& > .list {
			@media only screen and (min-width: 992px) {
				padding: 100px 0 0 0;
			}
			& .service {
				margin: 0 0;
				padding: 0 10px;
				& > img {
					width: 140px;
					height: 130px;
					max-width: 100%;

					@media only screen and (min-width: 992px) {
						width: 90%;
						height: 450px;
						object-fit: contain;
						object-position: left;
					}
				}
				& > .title {
					font-size: 16px;
					color: #000;
					display: flex;
					justify-content: space-between;
					align-items: center;
					font-weight: 400;
					margin: 10px 0 0 0;

					@media only screen and (min-width: 992px) {
						font-size: 26px;
					}
				}
				& > .description {
					font-size: 10px;
					color: #808080;
					font-weight: 400;
					margin: 10px 0 0 0;

					@media only screen and (min-width: 992px) {
						margin: 20px 0 0 0;
						font-size: 20px;
						width: 90%;
					}
				}
			}
		}
	}
</style>
