<script lang="ts">
	import { fly } from 'svelte/transition';

	import '$lib/global.scss';
	import Header from '../../components/Header.svelte';
	import Contacts from '../../components/Contacts.svelte';
	import Footer from '../../components/Footer.svelte';

	const logo: string = '/full-logo.png';

	const links: {
		home: string;
		services: string;
		testemunials: string;
		reservations: string;
		contacts: string;
		terms: string;
	} = {
		home: '/',
		services: '#services',
		testemunials: '#testemunials',
		reservations: '#reservations',
		contacts: '#contacts',
		terms: '/terms'
	};
</script>

<Header {logo} {links} />

<div id="terms" in:fly={{ delay: 2000, duration: 1000, y: -50 }}>
	<h2><span style="color: rgb(68, 68, 68);">1. Termos</span></h2>
	<p>
		<span style="color: rgb(68, 68, 68);"
			>Ao acessar ao site <a href="https://tocadosamigos.pt">Toca dos Amigos</a>, concorda em
			cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é
			responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com
			algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste
			site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.</span
		>
	</p>
	<h2><span style="color: rgb(68, 68, 68);">2. Uso de Licença</span></h2>
	<p>
		<span style="color: rgb(68, 68, 68);"
			>É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou
			software) no site Toca dos Amigos , apenas para visualização transitória pessoal e não
			comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta
			licença, você não pode:&nbsp;</span
		>
	</p>
	<ol>
		<li><span style="color: rgb(68, 68, 68);">modificar ou copiar os materiais;&nbsp;</span></li>
		<li>
			<span style="color: rgb(68, 68, 68);"
				>usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou
				não comercial);&nbsp;</span
			>
		</li>
		<li>
			<span style="color: rgb(68, 68, 68);"
				>tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Toca
				dos Amigos;&nbsp;</span
			>
		</li>
		<li>
			<span style="color: rgb(68, 68, 68);"
				>remover quaisquer direitos autorais ou outras notações de propriedade dos materiais;
				ou&nbsp;</span
			>
		</li>
		<li>
			<span style="color: rgb(68, 68, 68);"
				>transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro
				servidor.</span
			>
		</li>
	</ol>
	<p>
		<span style="color: rgb(68, 68, 68);"
			>Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá
			ser rescindida por Toca dos Amigos a qualquer momento. Ao encerrar a visualização desses
			materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua
			posse, seja em formato eletrónico ou impresso.</span
		>
	</p>
	<h2><span style="color: rgb(68, 68, 68);">3. Isenção de responsabilidade</span></h2>
	<ol>
		<li>
			<span style="color: rgb(68, 68, 68);"
				>Os materiais no site da Toca dos Amigos são fornecidos 'como estão'. Toca dos Amigos não
				oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras
				garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização,
				adequação a um fim específico ou não violação de propriedade intelectual ou outra violação
				de direitos.</span
			>
		</li>
		<li>
			<span style="color: rgb(68, 68, 68);"
				>Além disso, o Toca dos Amigos não garante ou faz qualquer representação relativa à
				precisão, aos resultados prováveis ​​ou à confiabilidade do uso dos materiais em seu site ou
				de outra forma relacionado a esses materiais ou em sites vinculados a este site.</span
			>
		</li>
	</ol>
	<h2><span style="color: rgb(68, 68, 68);">4. Limitações</span></h2>
	<p>
		<span style="color: rgb(68, 68, 68);"
			>Em nenhum caso o Toca dos Amigos ou seus fornecedores serão responsáveis ​​por quaisquer
			danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos
			negócios) decorrentes do uso ou da incapacidade de usar os materiais em Toca dos Amigos, mesmo
			que Toca dos Amigos ou um representante autorizado da Toca dos Amigos tenha sido notificado
			oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições não permitem
			limitações em garantias implícitas, ou limitações de responsabilidade por danos conseqüentes
			ou incidentais, essas limitações podem não se aplicar a você.</span
		>
	</p>
	<h2><span style="color: rgb(68, 68, 68);">5. Precisão dos materiais</span></h2>
	<p>
		<span style="color: rgb(68, 68, 68);"
			>Os materiais exibidos no site da Toca dos Amigos podem incluir erros técnicos, tipográficos
			ou fotográficos. Toca dos Amigos não garante que qualquer material em seu site seja preciso,
			completo ou atual. Toca dos Amigos pode fazer alterações nos materiais contidos em seu site a
			qualquer momento, sem aviso prévio. No entanto, Toca dos Amigos não se compromete a atualizar
			os materiais.</span
		>
	</p>
	<h2><span style="color: rgb(68, 68, 68);">6. Links</span></h2>
	<p>
		<span style="color: rgb(68, 68, 68);"
			>O Toca dos Amigos não analisou todos os sites vinculados ao seu site e não é responsável pelo
			conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por Toca
			dos Amigos do site. O uso de qualquer site vinculado é por conta e risco do usuário.</span
		>
	</p>
	<p><br /></p>
	<h3><span style="color: rgb(68, 68, 68);">Modificações</span></h3>
	<p>
		<span style="color: rgb(68, 68, 68);"
			>O Toca dos Amigos pode revisar estes termos de serviço do site a qualquer momento, sem aviso
			prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de
			serviço.</span
		>
	</p>
	<h3><span style="color: rgb(68, 68, 68);">Lei aplicável</span></h3>
	<p>
		<span style="color: rgb(68, 68, 68);"
			>Estes termos e condições são regidos e interpretados de acordo com as leis do Toca dos Amigos
			e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou
			localidade.</span
		>
	</p>
</div>

<Contacts {links} />
<Footer />

<style lang="scss">
	#terms {
		width: var(--mobile-container);
		margin: 0 auto 50px;
		& h2 {
			padding: 20px 0 10px;
		}
	}
</style>
