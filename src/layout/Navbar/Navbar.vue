<template>
  <nav class="navbar navbar-expand-lg ">
    <div class="container-fluid d-flex">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <SidebarItems 
            class="d-lg-none d-block"
          />
          <Btn class="classic">
            Balance is: $999.0
            <template #rightIcon>
              <InfoIcon />
            </template>
          </Btn>
          <Btn class="filled"> Add Credit </Btn>
          <div class="dropdown">
            <Btn
            
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <template #le ftIcon>
                <div class="avatar">
                  <img src="https://picsum.photos/200" alt="" />
                </div>
              </template>
              Dropdown link
              <template #rightIcon>
                <ChevronDownIcon />
              </template>
            </Btn>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup>
import InfoIcon from "@/components/Icons/InfoIcon.vue";
import Btn from "@/components/Btn.vue";
import ChevronDownIcon from "@/components/Icons/ChevronDownIcon.vue";
import SidebarItems from '@/layout/Sidebar/SidebarItems.vue'
</script>
<style lang="scss">
.dropdown-menu {
  transform: translate(-30%, 10px);
}
.avatar {
  img {
    height: 20px;
    border-radius: 100%;
  }
}

/* .nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 1rem 0;
  .nav-logo {
    height: 50px;
    flex: 1;
    img {
      height: 100%;
      object-fit: contain;
    }
  }
  .nav-buttons {
    display: flex;
    width: 100%;
    align-items: end;
    gap: 1rem;
    justify-content: end;
    .avatar {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 20px;
      border-radius: 50%;
      background-color: var(--main);
      img {
        height: 100%;
        object-fit: contain;
      }
    }
  }
} */
</style>
