<template>
  <div class="row">
    <div class="col-4">DASHBOARD</div>
    <router-link to="/">
      <div class="col-4" @click="logout">LOGOUT</div>
    </router-link>
    <div class="col-4"></div>
  </div>
</template>

<script>
export default {
  methods: {
    logout: function() {
      axios.post("api/logout").then();
    }
  }
};
</script>