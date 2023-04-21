<template>
  <div>Details for coach</div>
  <router-view></router-view>
  <!-- router-view is used to display components that are part of the children array configured in the routes, without it the child component will not be displayed -->
  <router-link to="/coaches/c1/contact">Contact</router-link>
</template>
