<script>
	import {formatMessage, amount, material, format, width, height} from './stores.js';
	import ControlAmount from './components/ControlAmount.svelte';
	import ControlMaterial from './components/ControlMaterial.svelte';
	import ControlFormat from './components/ControlFormat.svelte';
	import ControlSize from './components/ControlSize.svelte';
	import Preview from './components/Preview.svelte';

	// Вывод результата в консоль
	let i = 0;
	function submit() {
		i++;
		console.log(`
Заказ № ${i}
Количество стикеров: ${$amount} шт
Материал стикера: ${$material}
Формат бумаги: ${$format}
Размер стикеров: Ширина - ${$width}см, Высота - ${$height}см `
		);
	}

	// Авто изменение формата в зависимости от размера стикеров
	function autoFormating() {
		if ($format === 'A4') {
			if($width > 6 || $height > 6) {
				$format = 'A3'; 
				formatMessage.update(el => el = true);
			}
			if($width > 8 || $height > 8) {
				$format = 'A2';
				formatMessage.update(el => el = true);
			}
		} else if ($format === 'A3') {
			if($width > 8 || $height > 8) {
				$format = 'A2';
				formatMessage.update(el => el = true);
			}
		} 
    }
</script>

<main>
	<div class="container">
		<h1 class="title">Стикеры</h1>
		<div class="wrapper">
			<div class="controls">
				<div class="controls__item">
					<ControlAmount />
				</div>
				<div class="controls__item">
					<ControlMaterial />
				</div>
				<div class="controls__item">
					<ControlFormat on:checkAutoFormat={autoFormating}/>
				</div>
				<div class="controls__item">
					<ControlSize on:checkAutoFormat={autoFormating} />
				</div>
			</div>
			<div class="view">
				<Preview />
			</div>
		</div>
		<button 
			class="button"
			on:click={submit}
		>
			Отправить
		</button>
	</div>
	
	
</main>

<style>
	/* COMMON */
	.container {
		max-width: 1140px;
		margin: 0 auto;
	}
	.title {
		margin: 46px 0 68px;
		font-style: normal;
		font-weight: bold;
		font-size: 36px;
		line-height: 44px;
		text-align: center;
	}
	.wrapper {
		display: flex;
	}
	.controls {
		width: 50%;
	}
	.controls__item {
		margin-bottom: 48px;
	}
	.view {
		width: 50%;
	}
	.button {
		display: block;
		margin: 40px auto 80px;
		padding: 10px 14px;
		background: #fff;
		color: #E60023;
        box-shadow: 0px 1px 12px rgba(101, 31, 9, 0.1);
        border: 0;
        border-radius: 6px;
        font-weight: 800;
        font-size: 24px;
        line-height: 29px;
        text-align: center;
        cursor: pointer;
	}
	.button:hover {
		box-shadow: 0px 1px 22px rgba(101, 31, 9, 0.2);
	}
	.button:active {
		transform: scale(0.98);
	}
</style>