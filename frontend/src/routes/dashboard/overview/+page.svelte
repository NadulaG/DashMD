<script>
	import { AppRail, AppRailTile } from '@skeletonlabs/skeleton';
	import { sidebarValue } from '../../../stores';
	import Patients from '../../../components/Patients.svelte';
	import Rooms from '../../../components/Rooms.svelte';

	export let data;
</script>

<title>Dashboard | MedDash</title>

<div class="flex flex-row h-screen">
	<div class="flex flex-col rounded-md bg-white w-[fit] h-[89%]">
		<div class="flex flex-col">
			<AppRail selected={sidebarValue} class="flex-grow rounded-md m-4">
				<AppRailTile label="Patients" value={1}>
					<i class="fa-solid fa-users w-[100%] text-2xl" />
				</AppRailTile>
				<AppRailTile label="Rooms" value={2}>
					<i class="fa-solid fa-person-booth text-2xl" />
				</AppRailTile>
			</AppRail>
		</div>
	</div>
	<div class="flex flex-col w-full p-8">
		{#if $sidebarValue === 1}
			<Patients patients={data.patients} />
		{:else if $sidebarValue === 2}
			<Rooms rooms={data.rooms} />
		{/if}
	</div>
</div>
