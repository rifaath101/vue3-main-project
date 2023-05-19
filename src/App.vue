<template>
  <TheHeader />
  <!-- How to add route transitions. Also make sure that the components that will be viewed have only one root component. For this project all the components that will be viewed are in the pages folder. 
  So all those components should look like - 
  <template>
  <div>
    ....
  </div>
   </template>

   not like this - 
   <template>
    <div>
      ...
    </div>
    <div>
      ...
    </div>
  -->
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
import TheHeader from './components/layout/TheHeader';
export default {
  components: { TheHeader },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
