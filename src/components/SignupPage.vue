<template>
    <div class="main">  	
		<input type="checkbox" id="chk">

			<div class="signup">
				<form @submit.prevent="signup">
					<label for="chk" class="sign">Sign up</label>
				
    <div class="user-box">
      <input type="text" title="Enter Username" required v-model="username">
      <label>Username</label>
    </div>
    <div class="user-box">
      <input type="email" title="Enter email" required v-model="email">
      <label>Email</label>
    </div>
    <div class="user-box">
      <input type="password" title="Enter password" required v-model="password">
      <label>Password</label>
    </div>
          
					<button>Sign up</button>
				</form>
			</div>

			<div class="login">
				<form>
					<label for="chk" class="log">Login</label>
	
          				

    <div class="user-box">

      <input type="text" title="Enter Username" required>

      <label>Username</label>

    </div>				

    <div class="user-box">

      <input type="password" title="Enter password" required>

      <label>Password</label>

    </div>
					<button>Login</button>
				</form>
			</div>
	</div>  
</template>

<script>
export default {
  name: 'SignupPage',
data(){
    return{
        username:"",
        email:"",
        password:"",
        isAdmin: false,
    }
},
 methods: {
signup() 
 {
  console.log(this.username, this.email, this.password,)
  fetch("http://localhost:5000/users", {
    method: 'POST',
        body: JSON.stringify(
          {
            name: this.username,
          email: this.email,
          password: this.password,
        }
        ),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        // mode: "no-cors"
      })
        .then((response) => response.json())
        .then((json) => {
          if(json.jwt){
            alert('You are now registered')
            localStorage.setItem("jwt", json.jwt);
            this.$router.push({ name: "ProductPage" });
          }
          else{
            alert("Incorrect Credentials try again");
          }
        })
        .catch((err) => {
          alert(err);
        });
    },

          },
          };
// mounted(){
//    fetch('http://localhost:5000/auth/register', {
//   method: 'POST',
//   body: JSON.stringify({
//     username: this.username,
//     email: this.email ,
//     password: this.password,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//  .then((json) => {
//      alert("Successfully signed up");
//      this.$router.push({name:'ProductPage'})
//  })
// }

</script>

<style>
body{
    background-image: url(https://images.unsplash.com/photo-1498736297812-3a08021f206f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1179&q=80);
    height: 100vh;
    background-size: cover;
    color: white;
    text-align: center;  
}

/* Sign Up form */
.main{
    margin-top: 7% !important;
  width: 400px;
  background-color: hsla(217, 45%, 16%, 0.583);
  height: 520px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 5px 20px 50px #000;
  margin: auto
}
#chk{
  display: none;
}
.signup{
  position: relative;
  width:100%;
  height:100%;
}
.user-box {
  position: relative;
  width :60%;
  margin:0px auto;
}
button{
	width: 60%;
	height: 40px;
	margin: 10px auto;
	justify-content: center;
	display: block;
	color: black;
	background: #c4cbff;
	font-size: 1em;
	font-weight: bold;
	margin-top: 10px;
	outline: none;
	border: none;
	border-radius: 5px;
	transition: .2s ease-in;
	cursor: pointer;
}
button:hover{
  background: #6d44b8;
}
.login{
  height: 470px;
  background: rgba(4, 0, 26, 0.958);
  border-radius: 60% / 10%;
  transform: translateY(-180px);
  transition: .8s ease-in-out;
}
#chk:checked ~ .login{
  transform: translateY(-530px);
}
#chk:checked ~ .login label{
  transform: scale(1);
}
#chk:checked ~ .signup .sig{
  transform: scale(.6);
  margin-top:10px;
}
.user-box label {
  position: absolute;
  top:0px;
  left: 0px;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: .5s;
}
.user-box input {
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}
.user-box input:focus ~ label,
.user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #f2363c;
  font-size: 12px;
  font-weight:bold;
}
label[for="chk"] {
	font-size: 2.3em;
	justify-content: center;
	display: flex;
	font-weight: bold;
	cursor: pointer;
	transition: .5s ease-in-out;
} 
.sig{
  color:#fff;
	margin: 40px;
}
.log{
	margin: 80px;
}
.login label , .login input{
  color:#c4cbff;
}
.login input{
  border-color:#c4cbff;
;
}


</style>