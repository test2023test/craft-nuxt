<template>
	<header class="header">
		<div class="header__container container">
			<button class="header__menu-btn" aria-label="Menu">
				<svg class="header__menu-btn-icon header__menu-btn-icon--burger">
					<use xlink:href="#burger"></use>
				</svg>
				<svg class="header__menu-btn-icon header__menu-btn-icon--close">
					<use xlink:href="#close"></use>
				</svg>
			</button><a class="header__logo-link" href="./index.html"><img class="header__logo" src="images/logo.svg" alt="alt"/></a>
			<nav class="header__nav">
				<ul class="header__nav-list">
					<li class="header__nav-elem"><a class="header__nav-link" href="./rules-and-prizes.html">Правила и призы</a></li>
					<li class="header__nav-elem"><a class="header__nav-link" href="./winners.html">Победители</a></li>
					<li class="header__nav-elem"><a class="header__nav-link" href="./where-to-buy.html">Где купить</a></li>
					<li class="header__nav-elem"><a class="header__nav-link" href="#">Обратная связь</a></li>
				</ul>
				<div class="header__user-nav header__user-nav--active header__user-nav--mobile">
					<svg class="header__user-icon">
						<use xlink:href="#user-icon"></use>
					</svg>
					<div class="header__user-nav-box">
						<p class="header__user-name">Светлана Голубева</p>
						<button class="header__user-logout">Выйти</button>
					</div>
				</div>
			</nav>
			<div class="header__user-nav header__user-nav--active">
				<div class="header__user-nav-box">
					<p class="header__user-name">Светлана Голубева</p>
					<button class="header__user-logout">Выйти</button>
				</div>
				<svg class="header__user-icon">
					<use xlink:href="#user-icon"></use>
				</svg>
			</div>
		</div>
	</header>
</template>
<script setup>
</script>
<style lang="scss">
</style>