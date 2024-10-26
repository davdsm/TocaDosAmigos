<script>
	import FaFacebookF from 'svelte-icons/fa/FaFacebookF.svelte';
	import FaInstagram from 'svelte-icons/fa/FaInstagram.svelte';
	import FaMapPin from 'svelte-icons/fa/FaMapPin.svelte';
	import FaPhoneAlt from 'svelte-icons/fa/FaPhoneAlt.svelte';
	import FaRegEnvelope from 'svelte-icons/fa/FaRegEnvelope.svelte';
</script>

<div id="footer">
	<p class="final-text">
		Na Toca dos Amigos, cada evento ganha vida com momentos únicos e especiais. Deixa-te envolver
		pelo ambiente acolhedor e celebra com quem mais amas. Esperamos por ti para criares memórias
		inesquecíveis. Vem visitar-nos
	</p>
	<ul id="socials">
		<li>
			<a href="https://www.instagram.com/tocadosamigos.eventos/" target="_blank" class="icon">
				<FaInstagram />
			</a>
		</li>
		<li>
			<a href="https://maps.app.goo.gl/DnfdXxnZUE7WYta38" target="_blank" class="icon">
				<FaMapPin />
			</a>
		</li>
		<li>
			<a href="tel:916998902" target="_blank" class="icon">
				<FaPhoneAlt />
			</a>
		</li>
		<li>
			<a href="mailto:info@tocadosamigos.pt" target="_blank" class="icon">
				<FaRegEnvelope />
			</a>
		</li>
	</ul>
	<a id="davdsm" href="https://davdsm.pt" target="_blank">
		by <span>davdsm.pt</span>
	</a>
</div>

<style lang="scss">
	#footer {
		width: var(--mobile-container);
		margin: 0 auto 30px;

		@media only screen and (min-width: 992px) {
			margin: 0 auto;
			width: var(--desktop-container);
			max-width: 400px;
			margin-bottom: 100px;
		}
		& > .final-text {
			font-size: 14px;
			color: #2d2e2e;
			text-align: center;
			font-weight: 300;
			opacity: 0.7;

			@media only screen and (min-width: 992px) {
				font-size: 16px;
				margin-bottom: 50px;
			}
		}
		& > #socials {
			margin: 30px 0 0 0;
			list-style: none;
			padding: 0;
			display: flex;
			justify-content: space-around;
			align-items: center;
			& > li {
				& > .icon {
					width: 15px;
					padding: 15px;
					height: 15px;
					border-radius: 100%;
					border: 1px solid #eee;
					cursor: pointer;
					display: inline-block;

					@media only screen and (min-width: 992px) {
						width: 15px;
						height: 15px;
						padding: 25px;
					}
				}
			}
		}
		& > #davdsm {
			margin: 50px 0 20px;
			font-size: 14px;
			font-weight: 400;
			color: #c0c0c0;
			text-align: center;
			display: block;
			width: 100%;
			& > span {
				color: #000000;
			}
		}
	}
</style>
