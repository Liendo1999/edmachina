<script setup>
import { useStudents } from "./composables/useStudents.js"
import BaseView from "./views/BaseView.vue"

const students = useStudents.getStudents()

</script>

<template>
    <base-view>
        <div v-for="(student,index) in students" :key="index">
            {{ student.getMaterias }}
        </div>
    </base-view>
</template>

<style scoped>
</style>
