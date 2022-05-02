<script setup>
  defineProps(['creature']);
</script>

<template>
  <div>
    <div style="width: 400px" v-if="creature">
      <h1>{{creature.name}}</h1>
      <div style="background: lightgrey; padding: 10px; border-radius: 5px">
        <div><strong v-if="creature.warband">Warband scale</strong></div>
        <div>
          <strong>{{creature.hp}}hp, </strong>
          <strong>{{creature.str}} STR, </strong>
          <strong>{{creature.dex}} DEX, </strong>
          <strong>{{creature.wil}} WIL</strong>
          <strong v-if="creature.armour">, Armour {{creature.armour}}</strong>
        </div>
        <div v-if="creature.attacks">
        </div>
        <div v-if="creature.notes">{{creature.notes}}</div>
      </div>
      <div>
        <em>{{creature.want}}</em>
      </div>
      <div v-if="creature.variants">
        <strong>{{creature.variants.name}}</strong>
        <ol style="margin: 0">
          <li v-for="option in creature.variants.options">
            <template v-if="option.name"><strong>{{option.name}}</strong> -</template>
            <span>{{option.description}}</span>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>
