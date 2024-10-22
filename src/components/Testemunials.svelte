<div id="testemunials">
	<h3 class="title"><span>A voz</span> dos nossos clientes</h3>
	<div class="list">
		<div class="testemunial">
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M0 12V22.2858H10.2857V12H3.4286C3.4286 8.21908 6.50478 5.14289 10.2857 5.14289V1.71429C4.61384 1.71429 0 6.32813 0 12Z"
					fill="#3A4F39"
				/>
				<path
					d="M24.0001 5.14289V1.71429C18.3282 1.71429 13.7144 6.32813 13.7144 12V22.2858H24.0001V12H17.143C17.143 8.21908 20.2191 5.14289 24.0001 5.14289Z"
					fill="#3A4F39"
				/>
			</svg>
			<p class="text">
				O aniversário do meu filho foi inesquecível! O espaço era perfeito, com tudo pensado ao
				pormenor, e as crianças divertiram-se imenso. Não poderíamos ter escolhido um lugar melhor
				para celebrar!
			</p>
			<div class="author">
				<p>Inês M.</p>
				<span>Aniversário</span>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	#testemunials {
		width: var(--mobile-container);
		padding: 100px 0 50px;
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
		& > .list {
			margin: 30px 20px;
			text-align: left;
			& > .testemunial {
				& > svg {
					margin-bottom: 30px;
				}
				& > .text {
					font-size: 12px;
					line-height: 22px;
					color: #2d2e2e;
					margin-bottom: 30px;
				}
				& > .author {
					& > p {
						font-size: 14px;
						font-weight: 600;
						color: #2d2e2e;
					}
                    & > span {
                        font-size: 14px;
                        font-weight: 400;
                        color: #2D2E2E;
                    }
				}
			}
		}
	}
</style>
