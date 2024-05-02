<template>
  <div>
    <p>Count Value: {{ count }}</p>
  </div>
</template>
<script>
export default {
  props: ["count"],
  setup(props) {
    console.log(props.count);
  },
};
</script>
