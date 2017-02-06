<template lang='pug'>
  #app
    .container
      header Simple Calculator
      calculator.calc
      footer
        | Coded by
        a(href='http://xandeer.me')  Kevin
</template>

<script>
import calculator from './components/calculator/calculator';

export default {
  name: 'app',
  components: {
    calculator,
  },
};
</script>

<style>
.container {
  height: 5rem;
  margin-top: 0.5rem;
}
.calc {
  width: 3rem;
  height: 4.04rem;
  margin: 0.2rem auto;
  border: 2px solid RGBA(142, 142, 142, 1.00);
  border-radius: 5px;
}

header {
  text-align: center;
  height: 0.5rem;
  line-height: 0.5rem;
  font-weight: bold;
  font-size: 0.34rem;
  font-style: italic;
}

footer {
  text-align: center;
}
</style>
