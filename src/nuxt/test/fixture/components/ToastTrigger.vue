<template>
  <div />
</template>

<script setup lang="ts">
// Calling `useFwbToast()` here (not in app.vue) matters: it must run in a
// component that is a *descendant* of <FwbToastProvider> in the render
// tree for Vue's provide/inject to resolve the injection.
useFwbToast().add({ type: 'success', text: 'toast from useFwbToast', time: 0 })
</script>
