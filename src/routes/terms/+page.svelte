<script lang="ts">
	import { onMount } from 'svelte';

	import '$lib/global.scss';
	import Header from '../../components/Header.svelte';

	const logo: string = '/full-logo.png';
	let ready: boolean = false;

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

<h1>Terms</h1>
