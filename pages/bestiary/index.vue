<script setup>
  const { data: creatures, pending, refresh } = await useFetch('/api/creatures');
</script>

<template>
  <div>
    <h1>Creatures</h1>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>HP</th>
          <th>STR</th>
          <th>DEX</th>
          <th>WIL</th>
          <th>Armour</th>
          <th>Attacks</th>
          <th>Notes</th>
          <th>Wants</th>
          <th>Variants</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="creature in creatures" :key="creature.name">
          <td>
            <nuxt-link :to="`/bestiary/${creature.slug}`">
              {{creature.name}}
            </nuxt-link>
          </td>
          <td>{{creature.hp}}</td>
          <td>{{creature.str}}</td>
          <td>{{creature.dex}}</td>
          <td>{{creature.wil}}</td>
          <td>{{creature.armour}}</td>
          <td>
            <div v-for="attack in creature.attacks">
              <strong v-if="attack.die">d{{attack.die}}</strong> <strong>{{attack.name}}</strong>
              <span v-if="attack.stat && attack.stat !== 'str'"> (damages {{attack.stat.toUpperCase()}})</span>
            </div>
          </td>
          <td>{{creature.notes}}</td>
          <td><em>{{creature.wants}}</em></td>
          <td><span v-if="creature.variants">{{creature.variants.name}}</span></td>
        </tr>
      </tbody>
    </table>
    <button :disabled="pending" @click="refresh">refresh</button>
  </div>
</template>
