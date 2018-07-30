<template>
  <div class="widget" :class="{'no-header': !headerText}">
    <div class="widget-header" v-if="headerText">{{headerText}}</div>
    <div class="widget-body" v-if="hasSlotData">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'widget',

  props: ['headerText'],
  computed: {
    hasSlotData () {
      return this.$slots.default
    }
  }
}
</script>

<style lang="scss">

$widget-bg: $white;
$widget-padding: 1.5625rem;
$widget-larger-padding: 45px;
$widget-box-shadow: 0px 4px 70px -18px rgba(112, 112, 112, 1);
$widget-danger-shadow: 0px 4px 70px -16px $theme-red;
$widget-info-shadow: 0px 4px 70px -16px $theme-blue;
$widget-header-border: 2px solid #eee;
$widget-header-height: 55px;
$widget-body-no-header-height: 100%;
$widget-body-with-header-height: calc(100% - #{$widget-header-height});
$widget-mb: 1.875rem;
$info-widget-border: 0.5rem solid $vue-green;

  .widget {
    background: $widget-bg;
    box-shadow: $widget-box-shadow;
    margin-bottom: $widget-mb;
    padding: 0;

    &.no-header {
      .widget-body {
        height: $widget-body-no-header-height;
      }
    }

    &.larger-padding {
      .widget-body {
        padding: $widget-larger-padding;
      }
    }

    &.no-h-padding {
      .widget-body {
        padding-left: 0;
        padding-right: 0;
      }
    }

    &.no-v-padding {
      .widget-body {
        padding-top: 0;
        padding-bottom: 0;
      }
    }

    &.brand-info {
      background-color: $brand-info;
      color: $white;
      box-shadow: $widget-info-shadow;
    }

    &.brand-danger {
      background-color: $brand-danger;
      color: $white;
      box-shadow: $widget-danger-shadow;
    }

    &.info-widget {
      border-top: $info-widget-border;

      &.brand-info {
        border-top-color: $brand-info;
      }

      &.brand-danger {
        border-top-color: $brand-danger;
      }
    }

    .widget-body {
      height: $widget-body-with-header-height;
      padding: $widget-padding;
    }

    .widget-header {
      height: $widget-header-height;
      padding: 0 $widget-padding;
      border-bottom: $widget-header-border;
      font-size: $font-size-larger;
      font-weight: 600;
      display: flex;
      align-items: center;
    }
  }
</style>
