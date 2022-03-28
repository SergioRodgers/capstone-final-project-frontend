<template>
  <!-- Navbar -->
<nav class="navbar navbar-expand-lg navbar-light bg-black">
  <!-- Container wrapper -->
  <div class="container-fluid">
    <!-- Toggle button -->
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    <!-- Collapsible wrapper -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <!-- Navbar brand -->
      <a class="navbar-brand mt-2 mt-lg-0" href="/">
        <img
          src="https://imgkub.com/images/2022/03/18/logo-1a0addbe1ac5abf96.png"
          height="15"
          loading="lazy"
        />
      </a>
      <!-- Left links -->
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/" style="color:rgb(209, 209, 209);">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" style="color:rgb(209, 209, 209);padding-left:10px">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/products" style="color:rgb(209, 209, 209);padding-left:10px">Products</router-link>
        </li>
        
        
      </ul>
      <!-- Left links -->
    </div>
    <!-- Collapsible wrapper -->

    <!-- Right elements -->
    
    <div class="d-flex align-items-center">
      <!-- Icon -->
      <router-link to="/signup" style="color:rgb(209, 209, 209);">Sign up</router-link>
      <router-link to="/cart" style="color:rgb(209, 209, 209);padding-left:10px">Cart</router-link>
      

      <!-- Notifications -->
      <!-- Avatar -->
      <div class="dropdown">
        <a
          style="padding-left:10px"
          class="dropdown-toggle d-flex align-items-center hidden-arrow"
          href="/profile"
          id="navbarDropdownMenuAvatar"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            class="rounded-circle"
            height="25"
            alt="Profile picture"
            loading="lazy"
          />
        </a>
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuAvatar"
        >
          <li>
            <a class="dropdown-item" href="#">My profile</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Settings</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Logout</a>
          </li>
        </ul>
      </div>
    </div>
    <!-- Right elements -->
  </div>
  <!-- Container wrapper -->
</nav>
<!-- Navbar -->
</template>

<script>
export default {

}
</script>

<style>
.nav-link {
  color: rgb(209, 209, 209);
}

</style>