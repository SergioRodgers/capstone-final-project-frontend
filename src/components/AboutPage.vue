<template>
<section class="about">
    <h1>About Us:</h1>
    <div class="p-text">
        <p>
        Surge is an IT enterprise that’s enthusiastic about providing cutting-edge IT-related products and services at low prices.
    <br>
        Our prices will beat any stores prices guarenteed!
    </p> 
    </div>
    <div class="contact-us">
        <h1>Contact Us:</h1>
        <form>
  <div class="form-group" style="color:white;">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1" style="color:white;">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div class="sub" style="padding-top:10px">
    <button type="submit" class="btn btn-dark">Submit</button>
  </div>
</form>
    </div>
    


</section>
</template>

<script>
export default {

}
</script>

<style>
.about {
    scroll-behavior: smooth;
    background: cover;
    height: 100vh;
    background-color: rgba(4, 0, 26, 0.958);
}
h1{ 
    padding-top: 40px;
    text-align: center;
    color: #c4cbff;
;
}
.p-text{
    text-align: center;
    color:#9f9f9f;

}
.contact-us{
    width: 40%;
    margin: auto;
    text-align: center;
}

</style>