<script setup>

</script>

<template>
  <header>
    <div class="tag">
      EdMachina
    </div>
    <div class="right-side">
      <div>
        <button>WORLD_ICON</button>
        <button>DARKMODE_ICON</button>
        <button>NOTIFICATIONS_ICON</button>
      </div>
      <div class="user">
        <div class="user-info">
          <span>
        Hellen Smith
      </span>
          <span>
        Admin
      </span>
        </div>
        <div class="user-image ">
          <img src="https://placehold.co/200x200/orange/white" alt="">
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  position: fixed;
  top: 0;
  left: 0;
  background-color: blueviolet;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  color: white;
  width: 100%;
  font-weight: 600;
  font-family: sans-serif;
  height: 4rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);

  .right-side {
    display: flex;
    align-items: center;
    gap: 1rem;

    > div {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .user-image {
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>