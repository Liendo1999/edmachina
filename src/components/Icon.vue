<template>
  <div>
    <div class="icon" v-html="this.getSVG" />
  </div>
</template>

<script setup>
import world from "../assets/world.svg";
import vue from "../assets/vue.svg";

let icons = {
  world,
  vue
}
export default {
  name: "Icon",
  props: {
    iconName: {
      type: String,
      required: true
    }
  },

  get getSVG() {
    return icons[this.iconName];
  }
}



</script>

<style scoped>
.icon {
  width: 35px;
  height: 35px;
}
</style>