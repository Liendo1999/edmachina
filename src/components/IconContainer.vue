<template>
    <div class="icon">
        <img :src="selectedIcon">
    </div>
</template>

<script setup>
import vue from "../assets/vue.svg"
import darkMode from "../assets/icons/dark-mode.svg"
import world from "../assets/icons/world.svg"
import notification from "../assets/icons/notifications.svg"
import machina from "../assets/icons/machina-log.svg"
import { onMounted, ref } from "vue"

const props = defineProps({
    iconName: {
        type: String,
        required: true
    }
})

let icons = {
    vue,
    darkMode,
    world,
    notification,
    machina
}

let selectedIcon = ref("")

onMounted(() => {
    selectedIcon.value = getSVG()
})

function getSVG() {
    return icons[props.iconName]
}


</script>

<style scoped>
.icon {
    display: grid;
    place-items: center;
    width: 35px;
    height: 35px;
    color: #FFFFFF;
}
</style>
