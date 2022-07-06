<template>
  <button class="btn">
    <slot>Show all</slot>
  </button>
</template>

<script></script>

<style>
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

.cta {
  width: 9.9rem;
  background: #fff;
  border: 0.2rem solid #000;
  color: #000;
}

.forward {
  width: 4rem;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.96),
      rgba(255, 255, 255, 0.96)
    ),
    #000000;
  border-radius: 4rem;
}

.back {
  width: 4rem;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.72),
      rgba(255, 255, 255, 0.72)
    ),
    #000000;
  border-radius: 4rem;
}

.login {
  width: 7.9rem;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.72),
      rgba(255, 255, 255, 0.72)
    ),
    #000000;
  color: #fff;
}
</style>
