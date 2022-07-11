<template>
  <h2 class="title">Proposed books</h2>
  <p class="info">Proposed books for this month</p>
  <div class="carousel">
    <div class="test">This is where the bookcards will go</div>
    <div class="test">This is where the bookcards will go</div>
    <div class="test">This is where the bookcards will go</div>
    <div class="test">This is where the bookcards will go</div>
    <div class="test">This is where the bookcards will go</div>
  </div>
  <div class="btns-container">
    <!--Will be the button component-->
    <button>Show all</button>
    <!--Will be the button component-->
    <button>Propose a book</button>
  </div>
</template>

<style>
.carousel {
  display: flex;
  gap: 1.3rem;
  width: 100%;
  height: 18.3rem;
  margin: 1.7rem 0 2rem;
  overflow-x: scroll;
  scrollbar-width: none;
}

.carousel::-webkit-scrollbar {
  display: none;
}

.test {
  flex-shrink: 0;
  width: 24.7rem;
  height: 18.3rem;
  background-color: aquamarine;
}
</style>
