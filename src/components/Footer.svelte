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
			<a href="https://google.com" target="_blank" class="icon">
				<FaFacebookF />
			</a>
		</li>
		<li>
			<a href="https://google.com" target="_blank" class="icon">
				<FaInstagram />
			</a>
		</li>
		<li>
			<a href="https://google.com" target="_blank" class="icon">
				<FaMapPin />
			</a>
		</li>
		<li>
			<a href="https://google.com" target="_blank" class="icon">
				<FaPhoneAlt />
			</a>
		</li>
		<li>
			<a href="https://google.com" target="_blank" class="icon">
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
		& > .final-text {
			font-size: 14px;
			color: #2d2e2e;
			text-align: center;
			font-weight: 300;
			opacity: 0.7;
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
