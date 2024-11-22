<script lang="ts">
	import { onMount } from 'svelte';

	import '$lib/global.scss';
	import Header from '../components/Header.svelte';
	import Loader from '../components/Loader.svelte';
	import Hero from '../components/Hero.svelte';
	import Slider from '../components/Slider.svelte';
	import Services from '../components/Services.svelte';
	import Gallery from '../components/Gallery.svelte';
	import Testemunials from '../components/Testemunials.svelte';
	import Reservations from '../components/Reservations.svelte';
	import Contacts from '../components/Contacts.svelte';
	import Footer from '../components/Footer.svelte';

	const logo: string = '/full-logo.png';
	let ready: boolean = false;

	const links: {
		home: string;
		services: string;
		testemunials: string;
		reservations: string;
		contacts: string;
		terms: string
	} = {
		home: '/',
		services: '#services',
		testemunials: '#testemunials',
		reservations: '#reservations',
		contacts: '#contacts',
		terms: '/terms'
	};

	onMount(() => {
		setTimeout(() => {
			ready = true;
		}, 5200);
	});
</script>

{#if !ready}
	<Loader />
{/if}

{#if ready}
	<Header {logo} {links} />
	<Hero {links} />
	<Slider />
	<Services {links} />
	<Gallery />
	<!-- <Testemunials /> -->
	<Reservations />
	<Contacts {links} />
	<Footer />
{/if}
