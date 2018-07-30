<template>
  <v-container grid-list-md text-xs-center class="dashboard">
    <v-layout row wrap>
      <v-flex xs-2>
      </v-flex>
      <v-flex xs-2 class="wid">
        <widget class="info-widget">
          <div class="info-widget-inner">
            <div class="stats">
              <div class="stats-number">
                <i class="fas fa-arrow-up stats-icon"></i>
                120
              </div>
              <div class="stats-title">Topics</div>
            </div>
          </div>
        </widget>
      </v-flex>
      <v-flex xs-2 class="widg">
        <widget class="info-widget">
          <div class="info-widget-inner">
            <div class="stats">
              <div class="stats-number">
                <i class="fas fa-arrow-down stats-icon"></i>
                12
              </div>
              <div class="stats-title">nouveaux events par minutes</div>
            </div>
          </div>
        </widget>
      </v-flex>
      <v-flex xs-2 class="wid">
        <widget class="info-widget brand-danger">
          <div class="info-widget-inner">
              <div class="info-widget-inner has-chart">
                <div class="stats">
                  <div class="stats-number">
                    425
                  </div>
                  <div class="stats-title">Events</div>
                </div>
                <div class="chart-container">
                  <v-progress-circular :rotate="90" :size="50" :width="10" :value=70 color="white">
                    70
                  </v-progress-circular>
                </div>
              </div>
            </div>
        </widget>
      </v-flex>
      <v-flex xs-2 class="wid">
        <widget class="info-widget brand-info">
          <div class="info-widget-inner">
            <div class="stats">
              <div class="stats-number">
                <i class="fas fa-users stats-icon"></i>
                5
              </div>
              <div class="stats-title">lama</div>
            </div>
          </div>
        </widget>
      </v-flex>
      <v-flex xs-2>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs-4>
        <canvas id="planet-chart"></canvas>
      </v-flex>
      <v-flex xs-6>
        <canvas id="planet-chart2"></canvas>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import widget from './widgets.vue'
import Chart from 'chart.js'
import planetChartData from '../utils/planetChartData.js'

export default {
  name: 'dashboard',
  components: {
    widget
  },
  data () {
    return {
      planetChartData: planetChartData
    }
  },
  methods: {
    createChart (chartId, chartData) {
      /* eslint-disable no-new */
      const ctx = document.getElementById(chartId)
      new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options
      })
    }
  },
  mounted () {
    this.createChart('planet-chart', this.planetChartData)
    this.createChart('planet-chart2', this.planetChartData)
  }
}
</script>

<style lang="scss" scoped>
  .dashboard
  {
    margin-top: 10%;
  }

  .wid{
    padding-left: 15px;
    padding-right: 15px;
  }

  .stats-number, .stats-title {
    line-height: 1;
  }

  .info-widget-inner {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;

    &.has-chart {
      justify-content: space-between;
    }

    .stats {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
  }

  .stats-number {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 2.625rem;
    margin-bottom: 0.5rem;

    .stats-icon {
      font-size: 1.5625rem;
      position: absolute;
      top: 0.625rem;
      left: -2.25rem;

      &.icon-wide {
        left: -1.875rem;
      }
    }
  }

</style>
