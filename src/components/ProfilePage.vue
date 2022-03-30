<template>
  <h1>Profile page</h1>
  <h1>Name :{{name}}</h1>
  <h1>email:{{email}}</h1>
  <h1>contact:{{contact}}</h1>
</template>

<script>
export default {
data(){
    return{
 id: localStorage.getItem("id"),
        name: localStorage.getItem("name"),
        email: localStorage.getItem("email"),
        avatar: localStorage.getItem("avatar"),
        contact: localStorage.getItem("contact"),
    }
}
}
</script>

<style>

</style>