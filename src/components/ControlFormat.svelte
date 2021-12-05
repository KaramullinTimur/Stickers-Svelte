<script>
    import {formatMessage, allFormats, format, width, height} from '../stores.js';
    
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    // Сохранение формата
    function setFormat(i) {
        format.update(format => format = $allFormats[i].format);
        closeMessage();
        dispatch('checkAutoFormat');
    }

    // Скрытие сообщения
    function closeMessage() {
        formatMessage.update(el => el = false)
    }
</script>


<div class="format">
    <h3 class="format__title">
        Формат бумаги:
    </h3>
    <div class="format__wrapper">
        {#each $allFormats as el, i}
            <button 
                class="format__button"
                class:active = {el.format === $format}
                on:click={() => setFormat(i)}
            >
                {el.format}
            </button>
        {/each}
        <div 
            class="format__message"
            class:active={$formatMessage}
            on:click={closeMessage}
        >
            Слишком большой размер! Формат изменен!
        </div>
    </div>
</div>



<style>
    .format__title {
        margin-bottom: 27px;
        font-weight: bold;
        font-size: 24px;
        line-height: 29px;
    }
    .format__wrapper {
        display: flex;
        justify-content: start;
        align-items: center;
        column-gap: 12px;
    }
    .format__button {
        width: 53px;
        height: 53px;
        background: #F2F3F4;
        border: 0;
        border-radius: 6px;
        font-weight: 800;
        font-size: 24px;
        line-height: 29px;
        text-align: center;
        cursor: pointer;
    }
    .format__button:hover {
        background-color: rgb(230, 230, 230)    
    }
    .format__button.active {
        background-color: #fff;
        color: #E60023;
        box-shadow: 0px 1px 12px rgba(101, 31, 9, 0.05);
    }
    .format__message {
        max-width: 160px;
        font-size: 13px;
        color: #E60023;
        display: none;
    }
    .format__message.active {
        display: block;
    }
</style>