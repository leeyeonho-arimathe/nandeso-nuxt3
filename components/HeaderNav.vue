<template>
  <nav class="navbar fixed-top navbar-expand-md navbar-light bg-light header-container">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Nandeso</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><NuxtLink to="/" class="nav-link active">検索</NuxtLink></li>
          <li class="nav-item"><NuxtLink to="/support/" class="nav-link">Nandesoは</NuxtLink></li>
          <li v-if="userStore" class="nav-item"><NuxtLink to="/favorite-list/" class="nav-link">お気に入り</NuxtLink></li>
        </ul>
        <div>
          <NuxtLink v-if="userStore" to="/write/" class="btn btn-primary">Write</NuxtLink> <NuxtLink v-if="!userStore" to="/sign-up/" class="btn btn-primary">SignUp</NuxtLink> <NuxtLink v-if="!userStore" to="/sign-in/" class="btn btn-primary">Login</NuxtLink> <button v-if="userStore" @click="userSignOut" type="button" class="btn btn-primary">LogOut</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const userStore = useFirebaseUserStore();
</script>

<script lang="ts">
  export default {
    head: {
      script: [
        {
          defer: true,
          type: 'module',
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js'
        },
      ]
    },
    methods: {
      async userSignOut() {
        await signOutUser();
      }
    }
  }
</script>

<style scoped>

</style>

