<template>
<section class="products">

<!-- Carousel -->
<div class="row">
  <div class="col">
    <div class="caro">
    <!-- Carousel wrapper -->
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block" src="https://www.wootware.co.za/media/easyslide/amd-r5000-dt-2022-woot.jpg" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block" src="https://www.wootware.co.za/media/easyslide/nvgf-rtx3050-desktop-woot.jpg" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block" src="https://www.wootware.co.za/media/easyslide/amd-radeon-rx6500xt-gpu-woot.jpg" alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<!-- Carousel wrapper -->
  </div>
  </div>
</div>


<!-- Products/Cards -->
<div class="container-fluid">
  <div class="row">
  <div class="card col-lg-4" v-for="product in products" :key="product.desc">
    <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
      <img src="https://www.wootware.co.za/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/z/o/zotac-zt-a30600h-10m-01-v1.jpg" class="img-fluid">
      <a href="#!">
        <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
      </a>
  </div>
  <div class="card-body">
    <h5 class="card-title">{{product.title}}</h5>
    <p class="card-text">{{product.price}}</p>
    <a href="/cart" class="btn btn-primary"> {{AddCart}} Add to cart</a>
    <a class="btn btn-danger" v-on:click="delete(product.id)">Delete</a>
  </div>
</div>

  </div>
</div>

<!-- <a class="nav-link" style="cursor:pointer;" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Add a product
</a> -->

<!-- Modal for add  product -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add Nike</h5>
        
        <button type="button" class="btn-close btn-danger" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       <form @submit.prevent="createProduct">
        <ul>
          <li>NAME</li>
          <li> <input v-model="name" required type="text"></li>
          <li>PRICE</li>
          <li> <input v-model="price" required type="number"></li>
          <li>IMAGE URL</li>
          <li> <input v-model="img" required  type="text"></li>
<label for="genre">CATEGORY:</label>
<select id="genre" v-model="category" name="genre">
  <option value="Shoes">Shoes</option>
  <option value="Accessories">Accessories</option>
  <option value="Clothing">Clothing</option>

</select>        </ul>

       
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="submit" class="btn btn-success">Save changes</button>
        </div>
       </form>
      </div>
     
    </div>
  </div>
</div>

  </section>
</template>

<script>
export default {
  data(){
    return{
      products:null
    }
  },
      async created () {
  
    try {
      const res = await fetch('https://capstone-final-lc-project.herokuapp.com/products')
      this.products = await res.json()
   
    } catch (error) {
      console.log(error)
    
    }
  },
  methods: {
    //  create
    createProduct() {
    
      fetch("https://capstone-final-lc-project.herokuapp.com/products", {
        method: "POST",
        body: JSON.stringify({
          name: this.name,
          category: this.category,
          price: this.price,
          img: this.img,
        })
      })
        .then((response) => response.json())
        .then((json) => {
          alert("Product Created (REFRESH TO SEE ITEM)");
          this.$router.push({ name: "Products" });
        })
        .catch((err) => {
          alert(err);
        });
    },
    // update
    updateProduct() {
    
      fetch("https://nike-store-api.herokuapp.com/products/" + products._id, {
        method: "PUT",
        body: JSON.stringify({
          name: this.name,
          category: this.category,
          price: this.price,
          img: this.img,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
        .then((response) => response.json())
        .then((json) => {
          alert("Product Edited");
          this.$router.push({ name: "Products" });
        })
        .catch((err) => {
          alert(err);
        });
    },
    // delete product
    deleteProduct(id){
      const config = {

};
                let apiURL = `https://capstone-final-lc-project.herokuapp.com/products/${id}`;
                
                let indexOfArrayItem = this.products.findIndex(i => i._id === id);
                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL, config).then(() => {
                        this.products.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }
  },
    // search
      computed: {
    filteredProducts: function() {
      return this.products.filter((product) => {
        return product.name.match(this.hello)
      })
    },
    filteredProductsByName() {
    let tempproducts = this.products
  
    // Sort by alphabetical order
        tempproducts = tempproducts.sort((a, b) => {
            if (this.sortBy == 'alphabetically') {
                let fa = a.name.toLowerCase(), fb = b.name.toLowerCase()
          
              if (fa < fb) {
                return -1
              }
              if (fa > fb) {
                return 1 
              }
              return 0
              
            } 
        })
    
       
        
        return tempproducts
  },
  // find
    filterProductsByCategory: function(){
                return this.products.filter(product => !product.category.indexOf(this.category))
            }
}

}



</script>

<style>

.products{
  scroll-behavior: smooth;
  /* background-image: url(https://images.unsplash.com/photo-1619455052599-4cded9ae462a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80); */
  background: cover;
  height: 150vh;
  width: 100%;
  background-color: rgba(4, 0, 26, 0.958);
}

.col{
  padding-top: 5%;
  margin-left:20px; 
  align-items: center;
}
.card{
  background-color: #010312;
  width: 350px;
  margin-left: 50px;
  margin-top: 50px;
  padding-top: 20px;
  padding-left: 10px;
  padding-right: 10px;
  
}
.card-title{
  text-align: center;
}
.caro{
  width: 80%;
  height:20%;
  padding-left: 20%;
  object-fit: cover;
}
.card-title{
  color: #c4cbff;
}
.card-text{
  color:#c4cbff;
  text-align: center;
}
.img-fluid {
  height: 250px;
  width: 350px;
}

</style>