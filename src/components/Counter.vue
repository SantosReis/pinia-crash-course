<template>
  <div>
    <p>Count Value: {{ count }}</p>
  </div>
</template>
<script setup>
const props = defineProps(["count"]);
const count = props.count;
</script>
