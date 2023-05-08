<template>
  <div>Details for coach</div>
  <router-view></router-view>
  <!-- router-view is used to render components that are part of the children array configured in the routes, without it the child component will not be displayed, router-link alone will work for components that are not part of the children array -->
  <router-link to="/coaches/c1/contact">Contact</router-link>
</template>
