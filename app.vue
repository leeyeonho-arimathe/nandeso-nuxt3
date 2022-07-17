<template>
  <div class="container">
    <HeaderNav />
  </div>
  <div class="container">
    <Search />
  </div>
</template>

<script>
export default {
  head: {
    script: [
      {
        type: 'module',
        src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js'
      }
    ]
  }
}
</script>