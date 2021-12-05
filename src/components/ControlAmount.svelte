<script>
    import {amount, height, allFormats, format} from '../stores.js';
    let amountMessage = false;

    // Добавление стикера и вывод/скрытие сообщения
    function addOneSticker() {
        if($amount < 12) {
            amount.update(n => n+1); 
            amountMessage = false;
        } else {
            amountMessage = true;
        }
    }

    // Убавление стикера
    function removeOneSticker() {
        if($amount > 1) amount.update(n => n-1);
        amountMessage = false;
    }
</script>


<div class="amount">

    <h3 class="amount__title">
        Кол-во стикеров:
    </h3>
    <div class="amount__wrapper">
        <button class="amount__button amount__button--minus" on:click={removeOneSticker}></button>
        <div class="amount__number">
            {$amount}
        </div>
        <button class="amount__button amount__button--plus" on:click={addOneSticker}></button>
        {#if amountMessage}
            <span class="amount__message">Достигнуто максимальное количество</span>
        {/if}
    </div>
</div>

<style>
    .amount__title {
        margin-bottom: 22px;
        font-weight: bold;
        font-size: 24px;
        line-height: 29px;
    }
    .amount__wrapper {
        display: flex;
        justify-content: start;
        align-items: center;
        column-gap: 20px;
    }
    .amount__button {
        width: 38px;
        height: 38px;
        border: 0;
        border-radius: 10px;
        background-color: #F2F3F4;
        cursor: pointer;
        position: relative;
    }
    .amount__button:hover {
        background-color: rgb(230, 230, 230)    
    }
    .amount__button:active {
        transform: scale(0.95);
    }
    .amount__button--minus::after,
    .amount__button--plus::after,
    .amount__button--plus::before {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 17px;
        height: 4px;
        background-color: #393939;
    }
    .amount__button--plus::before {
        transform-origin: center;
        transform: translate(-50%, -50%) rotate(-90deg);
    }
    .amount__number {
        font-weight: bold;
        font-size: 24px;
        line-height: 29px;
        color: #E60023;
    }
    .amount__message {
        max-width: 160px;
        font-size: 13px;
        color: #E60023;
    }
</style>