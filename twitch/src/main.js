import Vue from 'vue';
import './sass/style.scss';
import item from './components/item.vue';

$().ready(() => {
  $('.twitch-status').click(function filterItem() {
    const $this = $(this);
    const filter = $this.attr('data-filter');
    $('.twitch-status_active').removeClass('twitch-status_active');
    $this.addClass('twitch-status_active');

    switch (filter) {
      case 'all':
        $('.twitch-item').show();
        break;
      case 'online':
        $('.twitch-item_online').show();
        $('.twitch-item_offline').hide();
        break;
      case 'offline':
        $('.twitch-item_offline').show();
        $('.twitch-item_online').hide();
        break;
      default:
    }
  });

  function render() {
    /* eslint no-unused-vars: ["error", { "varsIgnorePattern": "vm" }] */
    const vm = new Vue({
      el: '#items',
      components: {
        item,
      },
      render: h => h('item'),
    });
  }

  render();
});
