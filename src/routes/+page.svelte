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

	const logo: string = '/full-logo.png';
	let ready: boolean = false;

	const links: {
		home: string;
		services: string;
		testemunials: string;
		reservations: string;
		contacts: string;
	} = {
		home: '/',
		services: '#services',
		testemunials: '#testemunials',
		reservations: '#reservations',
		contacts: '#contacts'
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
	<Testemunials />
	<Reservations />
{/if}
