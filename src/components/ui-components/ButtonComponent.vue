<template>
  <button class="btn" :class="variant">
    <slot>Show all</slot>
  </button>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: "primary",
      validator: (propValue) => {
        return ["primary", "secondary", "outline"].includes(propValue);
      },
    },
  },
};
</script>

<style scoped>
.btn {
  height: 4rem;
  border-radius: 0.8rem;
  border: none;
  font-size: 1.6rem;
}

.primary {
  width: 11.8rem;
  background: #000;
  color: #fff;
}

.secondary {
  width: 17.3rem;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.72),
      rgba(255, 255, 255, 0.72)
    ),
    #000000;
  color: #fff;
}

.outline {
  width: 9.9rem;
  background: #fff;
  border: 0.2rem solid #000;
  color: #000;
}
</style>
