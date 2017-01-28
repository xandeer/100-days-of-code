<template lang='pug'>
.twitch-lists
  .twitch-item(v-for='item in items' v-bind:class='item.status')
    a.twitch-link(v-bind:href='item.link' target='_blank')
      img.twitch-img(v-bind:src='item.src' v-bind:alt='item.alt')
      .twitch-title {{item.title}}
    .twitch-desc {{item.description}}
</template>

<script src='../scripts/item.js'></script>
