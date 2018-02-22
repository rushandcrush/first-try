<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <app-portfolio-car></app-portfolio-car>
        <app-design-line></app-design-line>
        <app-waxom-idea></app-waxom-idea>
      </div>      
    </div>
  </div>
</template>


<script>
import PortfolioCar from './PortfolioComp/PortfolioCar/PortfolioCar.vue';
import DesignLine from './PortfolioComp/DesignBlock/DesignLine.vue';
import WaxomIdea from './PortfolioComp/WaxomIdeas/WaxomIdea';
export default {
    data() {
      return {

      }
    },
    components: {
      appPortfolioCar: PortfolioCar,
      appDesignLine: DesignLine,
      appWaxomIdea: WaxomIdea
    }
}
</script>


<style scoped>

</style>

