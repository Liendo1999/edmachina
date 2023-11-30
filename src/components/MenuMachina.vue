<template>
    <div class="menu">
        <div class="main">
            <div class="title">
                <span>{{ MenuOptions.main.name }}</span>
            </div>
        </div>
        <div class="reports">
            <div class="title">
                <span>Reports:</span>
            </div>
            <div class="reports-list">
                <div v-for="(report,index) in MenuOptions.reports" :key="index" class="report">
                    <div class="report-name">
                        <span>{{ report.name }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const MenuOptions = {
    main: {
        name: "Dashboard",
        icon: "dashboard"
    },
    reports: [
        {
            name: "Smart Enroller",
            icon: "smartEnroller"
        },
        { name: "Dropout Shield" },
        { name: "Retention Partner" },
        { name: "Risk Detector", subMenu: ["Risk Detector", "Risk Detector 2"] },
        { name: "Academic Offer", subMenu: ["Academic Offer", "Academic Offer 2"] },
        { name: "My Reports" },
        { name: "Custom Reports" },
        { name: "Workflows" }
    ]
}
</script>

<style scoped>
.main {
    width: 100%;
    background-color: #f5f5f5;
}

.menu {
    height: 100%;
    background-color: #dcdcdc;
}

.report {
    width: 80%;
    height: 2em;
    background-color: #FFFFFF;
    margin: 0.5em 0;
    border-radius: 4px;
}
</style>
