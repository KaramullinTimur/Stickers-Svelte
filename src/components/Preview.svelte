<script>
    import {amount, material, format, width, height} from '../stores.js';

    // Watch amount and add stickers to grid
    let oldAmount = 0;
    let arr = [];
    $: if ($amount !== oldAmount) {
        arr.length = $amount;
        arr = arr.fill('');
        oldAmount = $amount;
    }

    // Изменение размера стикеров
    let size;
    $: if($format == 'A4') {
        size = `width: ${$width * 22.7}px; height: ${$height * 21.4}px;`
    } else if ($format == 'A3') {
        size = `width: ${$width * 16}px; height: ${$height * 15.2}px;`
    } else if ($format == 'A2') {
        size = `width: ${$width * 11.3}px; height: ${$height * 10.7}px;`
    }

    // Работа с input type file
    let fileName = 'Файл не выбран';
    function getFileName() {
        fileName = this.files[0].name; 
    }
    function deleteFile() {
        fileName = 'Файл не выбран';
    }
    
</script>



<div class="preview">
    <div class="preview__grid">
        {#each arr as el}
            <div class="preview__item">
                <div class="preview__sticker {$material}" style={size}>
                    {el}
                </div> 
            </div>
        {/each}
        <div class="preview__grid-vr--1"></div>
        <div class="preview__grid-vr--2"></div>
        <div class="preview__grid-hr--1"></div>
        <div class="preview__grid-hr--2"></div>
        <div class="preview__grid-hr--3"></div>
    </div>
    <div class="preview__file">
        <input 
            type="file" id="file" 
            class="preview__file-input"
            accept="application/pdf" 
            on:change={getFileName}
        >
        <label for="file" class="preview__file-pic"></label>
        <div class="preview__file-name">{fileName}</div>
    </div>
    <button class="preview__delete" on:click={deleteFile}></button>
    <div class="preview__format">{$format}</div>
</div>



<style>
    .preview {
        margin-left: auto;
        width: 477px;
        height: 637px;
        background: #FFFFFF;
        border-radius: 10px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
        position: relative;
    }
    .preview__grid {
        padding: 34px 31px 33px;
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(4, 1fr);
    }
    .preview__grid-vr--1,
    .preview__grid-vr--2 {
        position: absolute;
        top: 34px;
        width: 1px;
        height: 570px;
        background: url('../img/vr-line.png') repeat;
        z-index: 2;
    }
    .preview__grid-vr--1 {
        left: 168px;
    }
    .preview__grid-vr--2 {
        left: 306px;
    }
    .preview__grid-hr--1,
    .preview__grid-hr--2,
    .preview__grid-hr--3 {
        position: absolute;
        left: 31px;
        width: 415px;
        height: 1px;
        background: url('../img/hr-line.png') repeat;
        z-index: 2;
    }
    .preview__grid-hr--1 {
        top: 176px;
    }
    .preview__grid-hr--2 {
        top: 318px;
    }
    .preview__grid-hr--3 {
        top: 461px;
    }
    .preview__item {
        justify-self: stretch;
        align-self: stretch;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .preview__sticker {
        background: url('../img/sticker-bg.svg') no-repeat center / contain;
    }
    .preview__file {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 3;
    }
    .preview__file-input {
        display: none;
    }
    .preview__file-pic {
        display: block;
        margin: 0 auto 11px;
        width: 97px;
        height: 127px;
        background: transparent url('../img/file.png') no-repeat center;
        cursor: pointer;
    }
    .preview__file-pic:hover {
        filter: brightness(0.98);
    }
    .preview__file-name {
        font-weight: 600;
        font-size: 18px;
        line-height: 25px;
        text-align: center;
        position: relative;
        text-decoration: underline;
    }
    /* .preview__file-name::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 4px;
        height: 1px;
        width: 100%;
        background-color: #393939;
        opacity: 1;
    } */
    .preview__delete {
        position: absolute;
        left: 50%;
        bottom: 42px;
        transform: translateX(-50%);
        width: 78px;
        height: 78px;
        background: #FFE3DE url('../img/bin.png') no-repeat center;
        border-radius: 16px;
        border: 0;
        cursor: pointer;
        z-index: 3;
    }
    .preview__delete:hover {
        background-color: #ffd6ce
    }
    .preview__delete:active {
        transform: translateX(-50%) scale(0.97); 
    }
    .preview__format {
        position: absolute;
        left: 10px;
        top: 10px;
        font-size: 20px;
        font-weight: 600;
        color: #afafaf;
    }

    /* Sticker materials */
    .preview__sticker.material01 {
        filter: hue-rotate(90deg);
    }
    .preview__sticker.material02 {
        filter: hue-rotate(180deg);
    }
    .preview__sticker.material03 {
        filter: hue-rotate(270deg);
    }
</style>