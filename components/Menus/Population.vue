<template>
  <div class="population bg-light border-dark">
    <div class="citizens">
      <p class="text-center text-700 text-b3 flex-row flex-a-center flex-j-center">
        {{player.population}}
        <img src="~/assets/icons/mustache.png" alt="Population Icon" class="icon-basic-mini only-left">
      </p>
      <p class="text-center text-500 text-b2">CITIZENS</p>
    </div>

    <div v-if="player.inventory.map_1 === false">
      <p class="text-center text-500 initial-text">
        The alchemist observes a flat land ahead.<br>
        It seems empty and large.<br>
        He sees small mountains behind.<br>
        There is an unexplored coal mine nearby.<br>
      </p>
    </div>

    <div v-else-if="player.inventory.map_1 === true && player.stages.savage === true">
      <p class="text-center text-500 initial-text">
        The alchemist learns about the savages in the surroundings.<br>
        They accept doing work for gold.
      </p>
    </div>

  </div>
</template>

<script>
import Player from "~/scripts/playerData"

export default {
  name: "Population",

  data () {
    return {
      player: Player,
    }
  }
}
</script>

<style scoped>

.population {
  height: 100%;
  padding: 0.5em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.citizens p {
  line-height: 1.3;
}

.initial-text {
  padding: 1em;
}

</style>