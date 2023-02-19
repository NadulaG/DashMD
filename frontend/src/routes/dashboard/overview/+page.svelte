<script>
	import { AppRail, AppRailTile } from '@skeletonlabs/skeleton';
	import { sidebarValue } from '../../../stores';
	import Patients from '../../../components/Patients.svelte';
	import Rooms from '../../../components/Rooms.svelte';
	import Admin from '../../../components/Admin.svelte';
	import Equipment from '../../../components/Equipment.svelte';

	export let data;
</script>

<title>Dashboard | DashMD</title>

<div class="flex flex-row">
	<div class="flex flex-col gap-10">
		<div class="flex flex-col rounded-md bg-white w-[fit] h-fit shadow-md">
			<div class="flex flex-col">
				<AppRail selected={sidebarValue} class="flex-grow rounded-md m-4">
					<AppRailTile label="Patients" value={1}>
						<i class="fa-solid fa-users text-2xl" />
					</AppRailTile>
					<AppRailTile label="Rooms" value={2}>
						<i class="fa-solid fa-person-booth text-2xl" />
					</AppRailTile>
					<!-- <AppRailTile label="Equipment" value={3}>
						<i class="fa-solid fa-stethoscope text-2xl" />
					</AppRailTile> -->
					<AppRailTile label="Admin" value={3}>
						<i class="fa-solid fa-clipboard-user text-2xl" />
					</AppRailTile>
				</AppRail>
			</div>
		</div>
	</div>

	<div class="flex flex-col w-full p-8">
		{#if $sidebarValue === 1}
			<Patients patients={data.patients} />
		{:else if $sidebarValue === 2}
			<Rooms rooms={data.rooms} equipment={data.equipment} patients={data.patients} />
		<!-- {:else if $sidebarValue === 3}
			<Equipment equipment={data.equipment} /> -->
		{:else if $sidebarValue === 3}
			<Admin />
		{/if}
	</div>
</div>
