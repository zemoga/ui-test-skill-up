<template>
  <button
    :class="{
      btn: true,
      primary: isPrimary,
      secondary: isSecondary,
      tertiary: isTertiary,
    }"
  >
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
        return ["primary", "secondary", "tertiary"].includes(propValue);
      },
    },
  },
  data() {
    return {};
  },
  computed: {
    isPrimary() {
      return this.variant === "primary";
    },
    isSecondary() {
      return this.variant === "secondary";
    },
    isTertiary() {
      return this.variant === "tertiary";
    },
  },
};
</script>

<style scoped>
.btn {
  width: 11.2rem;
  height: 4rem;
  border-radius: 0.8rem;
  border: none;
  box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.1);
  font-family: var(--secondary-font);
  font-size: 1.6rem;
  color: var(--white);
}

.primary {
  background: var(--blue-interactive);
}
.secondary {
  background: var(--orange-active-book);
}

.tertiary {
  width: 19.2rem;
  background: var(--gray);
  box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.25);
}
</style>
