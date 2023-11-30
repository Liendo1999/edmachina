<script setup>
import IconContainer from "../IconContainer.vue"</script>

<template>
    <header>
        <div class="tag">
            <IconContainer icon-name="machina" />
        </div>
        <div class="right-side">
            <div>
                <button>
                    <IconContainer icon-name="world" />
                </button>
                <button>
                    <IconContainer icon-name="darkMode" />
                </button>
                <button>
                    <IconContainer icon-name="notification" />
                </button>
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
button, input[type="submit"], input[type="reset"] {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
}

header {
    background-color: #4436FD;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    color: white;
    width: 100%;
    font-weight: 600;
    font-family: sans-serif;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);

    .tag {
        width: 2rem;
        height: 2rem;
    }

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