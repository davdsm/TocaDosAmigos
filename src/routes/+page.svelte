<script>
    import '$lib/global.scss';
    import Header from '../components/Header.svelte';
    const logo = '/full-logo.png'
    const links = {
        home: "/",
        services: "#services",
        testemunials: "#testemunials",
        reservations: "#reservations",
        contacts: "#contacts",
    }

</script>
<Header logo={logo} links={links} />