<template>
    <div class="base-view">
        <header class="header">
            <header-machina />
        </header>
        <aside class="menu">
            <menu-machina />
        </aside>
        <section class="main">
            <slot></slot>
        </section>
    </div>
</template>

<script setup>
import HeaderMachina from "../components/Header/HeaderMachina.vue"
import MenuMachina from "../components/MenuMachina.vue"</script>

<style scoped>
.base-view {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: auto 1.7fr;
    grid-template-rows:auto 1.3fr;
    gap: 0px 0px;
    grid-template-areas:
    "Header Header"
    "Menu Content";
}

.main {
    grid-area: Content;
}

.header {
    grid-area: Header;
}

.menu {
    grid-area: Menu;
}
</style>