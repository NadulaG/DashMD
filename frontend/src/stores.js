import { writable } from 'svelte/store';
export const sidebarValue = writable(1);

export const addPatientModal = writable(false);
export const addRoomModal = writable(false);
export const addEquipmentModal = writable(false);
export const assignPatientModal = writable(false);