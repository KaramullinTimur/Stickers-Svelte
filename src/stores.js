import { writable } from 'svelte/store';

// Amount component
export let amount = writable(1);

//  Material component
export let material = writable('');

// Format component
export let allFormats = writable([
    {
        format: 'A4',
        width: 210,
        height: 297,
    }, 
    {
        format: 'A3',
        width: 297,
        height: 420,
    }, 
    {
        format: 'A2',
        width: 420,
        height: 594,
    }, 
    
]);
export let format = writable('A4');
export let formatMessage = writable(false);

// Size component
export let width = writable(1);
export let height = writable(1);
