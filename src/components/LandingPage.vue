<template>
<section class="landing">
    <div>
        <h1 class="heading">Welcome to 
            <img src="https://imgkub.com/images/2022/03/18/logo-1a0addbe1ac5abf96.png"
            height="55"
            loading="lazy"
            />
        </h1>
        <p>The place to make your dream PC a REALITY!</p>
    </div>

    <!-- Login -->
    <div class="full-screen-container">
      <div class="login-container">
        <form @submit.prevent="login">
          <div class="input-group">
            <label>Email</label>
            <input type="email" v-model="email" />
          </div>
          <div class="input-group">
            <label>Password</label>
            <input type="password" v-model="password" />
          </div>
          <button type="submit"  class="login-button">Log In</button>
        </form>
      </div>
    </div>

</section>
</template>

<script>
export default {
    data(){
        return{
            email:"",
            password:"",
        }
    },
    methods:{
        login(){
 alert("Login successful")
  this.$router.push({ name: "ProductPage" });

//             fetch('https://capstone-final-lc-project.herokuapp.com/auth/login', {
//                 method: 'POST',
//   body: JSON.stringify({
//     email: this.email ,
//     password: this.password,
//   }),
//   headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//   },
// })
// .then((response) => response.json())
//         .then((json) => {
//           if (json.jwt) {
//             localStorage.setItem("jwt", json.jwt);
//           localStorage.setItem("id", json.user._id);
//           localStorage.setItem("name", json.user.name);
//           localStorage.setItem("avatar", json.user.avatar);
//           localStorage.setItem("email", json.user.email);
//           localStorage.setItem("contact", json.user.contact);
//             alert("user logged in");
//             console.log("JSON", json);
//             this.$router.push({name:'ProductPage'})
//             localStorage.setItem("jwt", json.jwt);
//             localStorage.setItem("user", JSON.stringify(json.user));
//             localStorage.setItem("isAdmin", JSON.stringify(json.user.isAdmin));
//             // console.log(json.user)
//             this.$emit("login");
//           }
//           if (localStorage.getItem("jwt")) {
//             this.$router.push({ name: "Home" });
//           } else {
//             alert("Incorrect credentials");
//           }
//         })
//         }
    }
}

//   .then((response) => response.json())
//  .then((json) => {
//      alert("user logged in");
//      this.$router.push({name:'ProductPage'})
//  })
//  .catch((err) =>{
//      alert('wrong creditials');
// this.$router.push({name:login})
//  })
//      }
// }
}
</script>

<style>

.landing{
     background-image: url(https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80);
     height: 100vh;
     overflow: hidden;
     background-size: cover;
     color: white;
     text-align: center;
}
.heading{
    font-size: 50px;
    padding-top: 50px;
    color: white;    
}
p{
    font-size:25px;
}

/* Login */
* {
  box-sizing: border-box;
  font-family: 'Quicksand', sans-serif;
}

html,
body {
  margin: 0;
}

.full-screen-container {
    padding-top: 50px;
    width: 100vw;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
}

.login-container {
  background-color: hsla(215, 34%, 23%, 0.548);
  padding: 50px 30px;
  min-width: 400px;
  width: 50%;
  max-width: 600px;
}

.login-title {
  color: #fff;
  text-align: center;
  margin: 0;
  margin-bottom: 40px;
  font-size: 2.5em;
  font-weight: normal;
}

.input-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.input-group label {
  color: #fff;
  font-weight: lighter;
  font-size: 1.5em;
  margin-bottom: 7px;
}

.input-group input {
  font-size: 1.5em;
  padding: 0.1em 0.25em;
  background-color: hsla(201, 100%, 91%, 0.486);
  border: 1px solid hsl(201, 100%, 6%);
  outline: none;
  border-radius: 5px;
  color: #fff;
  font-weight: lighter;
}

.input-group input:focus {
  border: 1px solid hsl(201, 100%, 50%);
}

.login-button {
  padding: 10px 30px;
  width: 100%;
  border-radius: 5px;
  background: hsla(201, 100%, 50%, 0.1);
  border: 1px solid hsl(201, 100%, 50%);
  outline: none;
  font-size: 1.5em;
  color: #fff;
  font-weight: lighter;
  margin-top: 20px;
  cursor: pointer;
}

.login-button:hover {
  background-color: hsla(201, 100%, 50%, 0.3);
}

.login-button:focus {
  background-color: hsla(201, 100%, 50%, 0.5);
}



</style>