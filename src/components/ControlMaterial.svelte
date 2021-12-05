<script>
    import {material} from '../stores.js';
    let materials = [
        {
            name: 'Винил самоклеящийся 12тг/см',
            value: 'material01'
        },
        {
            name: 'Другой материал №2 12тг/см',
            value: 'material02'
        },
        {
            name: 'Другой материал №3 12тг/см',
            value: 'material03'
        },
    ];
</script>


<div class="material">
    <h3 class="material__title">
        Материал стикера:
    </h3>

    <select bind:value={$material} class="material__select">
        <option value="" selected disabled hidden>Выберите материал</option>
        {#each materials as material}
            <option value={material.value} class="material__option">
                {material.name}
            </option>
        {/each}
    </select>
</div>



<style>
    .material__title {
        margin-bottom: 16px;
        font-weight: bold;
        font-size: 24px;
        line-height: 36px;
    }
    .material__select {
        padding: 13px 47px 13px 9px;
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        background: #FFFFFF url('../img/select-arrow.svg') no-repeat right 8px center;
        box-shadow: inset 0px 0px 7px rgba(0, 0, 0, 0.2);
        border: 0;
        border-radius: 5px;
        cursor: pointer;
        appearance: none;
    }
</style>