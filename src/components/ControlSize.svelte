<script>
    import {allFormats, format, width, height} from '../stores.js';
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    let widthMessage = false;
    let heightMessage = false;

    // Сохранение ширины
    function setWidth(e) {
        // Установка нижней границы
        if(e.target.value < 1) e.target.value = 1;

        // Установка верхней границы
        if(e.target.value >= 12) {
            e.target.value = 12;
            widthMessage = true; 
        } else {
            widthMessage = false;
        }

        // Сохранение в stores
        width.update(width => width = e.target.value);

        // Отправка события родителю
        dispatch('checkAutoFormat');
    }
    // Сохранение длинны
    function setHeight(e) {
        // Установка нижней границы
        if(e.target.value < 1) e.target.value = 1;

        // Установка верхней границы
        if(e.target.value >= 13) {
            e.target.value = 13;
            heightMessage = true; 
        } else {
            heightMessage = false;
        }

        // Сохранение в stores
        height.update(height => height = e.target.value);

        // Отправка события родителю
        dispatch('checkAutoFormat');
    }
</script>


<div class="size">
    <h3 class="size__title">
        Размер стикеров:
    </h3>
    <div class="size__item">
        <label class="size__label">
            <input 
                type="number" 
                class="size__input"
                value={$width}
                on:input={setWidth}
            >
            см
        </label>
        {#if widthMessage}
            <span class="size__message">Достигнут максимальный размер</span>
        {/if}
    </div>
    <div class="size__item">
        <label class="size__label">
            <input 
                type="number" 
                class="size__input"
                value={$height}
                on:input={setHeight}
            >
            см
        </label>
        {#if heightMessage}
            <span class="size__message">Достигнут максимальный размер</span>
        {/if}
    </div>
</div>



<style>
    .size__title {
        margin-bottom: 20px;
        font-weight: bold;
        font-size: 24px;
        line-height: 29px;
    }
    .size__item {
        margin-bottom: 22px;
        display: flex;
        align-items: center;
    }
    .size__label {
        margin-right: 11px;
        font-weight: bold;
        font-size: 18px;
        line-height: 22px;
    }
    .size__input {
        margin-right: 11px;
        padding: 6px 12px 7px;
        max-width: 232px;
        font-weight: 800;
        font-size: 24px;
        line-height: 29px;
        color: #E60023;
        background-color: #FFFFFF;
        box-shadow: inset 0px 0px 7px rgba(0, 0, 0, 0.2);
        border: 0;
        border-radius: 5px;
        appearance: none;
    }
    .size__message {
        max-width: 160px;
        font-size: 13px;
        color: #E60023;
    }
</style>