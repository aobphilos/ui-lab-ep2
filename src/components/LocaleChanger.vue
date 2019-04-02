<template>
  <div class="locale-changer">
    <div class="switcher">
      <span @click.prevent="setLocale('en')" :class="{ active: isActive('en') }">EN</span> |
      <span @click.prevent="setLocale('th')" :class="{ active: isActive('th') }">TH</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class LocaleChanger extends Vue {
  private setLocale(locale: string) {
    this.$i18n.locale = locale;
  }
  private isActive(locale: string) {
    return this.$i18n.locale === locale;
  }
}
</script>

<style scoped lang="less">
  .locale-changer {
    margin: 0;
    min-width: 70px;
    color: #fff;
    font-size: 12px;
    letter-spacing: 2px;
    font-weight: 700;
    font-family: "Gothic", sans-serif;
    cursor: pointer;

    .switcher {
      position: relative;
      padding-top: 32px;
      text-align: right;
      .active {
        border-bottom: solid #dea700 thin;
        color: #dea700;
      }
    }
    @media (max-width: 991px) {
      & {
        position: absolute;
        top: 2px;
      }
    }
  }
</style>

