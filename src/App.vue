<template>
  <div id="app">
    <section-header/>
    <router-view/>
    <section-footer/>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import SectionHeader from "@/components/SectionHeader.vue";
import SectionFooter from "@/components/SectionFooter.vue";

@Component({
  components: {
    SectionHeader,
    SectionFooter,
  },
})
export default class MainApp extends Vue {}
</script>

<style scoped lang="less">
 
</style>
