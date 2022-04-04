function header(){
    return `
    <div id="header_fixed">
    <div id="header1">
      <img
      onclick="window.location.href='index.html'"
        id="header1_img1"
        src="https://www.beardo.in/images/logo-white.png"
      />
      <div id="header1_product"  class="hover_top" onclick="window.location.href='./product.html'">Products</div>
      
      <div id="header1_concerns"  class="hover_top" onclick="window.location.href='./product.html'">Concerns</div>
      <div id="search_input_div" onclick="window.location.href='search.html'">
        <svg
          id="svg1"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="50"
          fill="currentColor"
          class="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path
            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
          />
        </svg>
        <input id="header1_input" placeholder="search" />
      </div>
      <img  id="header1_img2" src="https://www.beardo.in/images/vip-text.svg" alt="" />
      <img  id="header1_img3" src="https://www.beardo.in/images/wallet-text.svg" alt="" onclick="window.location.href='wallet.html'" />
      <img id="header1_img3" src="https://www.beardo.in/images/home-2018-05-cart.png" alt="" onclick="window.location.href='./cart.html'"/>
      </svg>
      <div id="cart_count">0</div>
      <div id="login_inner" class="hover_top" onclick="window.location.href='./login.html'">Login</div>
    </div>
  </div>
  <style>
        *{
            font-family: "Montserrat", sans-serif;
        }
      
      #header1 {
        
        background-color: rgb(15, 14, 14);
        height: 140px;
        display: flex;
        width: 100%;
        color: aliceblue;
        position: fixed;
        margin-top: -1%;
      }
      #header1_img1 {
        height: 50px;
        margin-left: 6%;
        margin-top: 2.9%;
      }
      #header1_product, #header1_concerns{
         margin-top: .8%; 
         padding: 3%;
      }
      #header1_img2 {
        height:35px;
        margin-left: 3%;
        margin-top: 3.7%;
      }
      #header1_img3 {
        height:35px;
        margin-left: 3%;
        margin-top: 3.7%;
      }
      #svg1 {
        color: rgb(66, 62, 62);
        padding-bottom: 1%;
       
       
      }
      #svg2 {
        color: white;
       margin: 3% ;
       margin-right:0;
        width: 2%;
      }
      #header1_input{
           width: 80%;
           border: None;
           outline:None;
           margin-top: 2.2%;
           height: 35px;
           margin-left: 2%;
          
      }
      #search_input_div {
        width: 20%;
        height: 3px;
        background-color:white;
        display: flex;
        padding-bottom: 3%;
        padding-left: 1%;
        margin-top: 3%;
        border-radius: 20px;
      }
      #login_inner {
        border-left: 5px solid white;
        height: 15px;
        padding: 1%;
        margin-top: 3%;
      }
      .hover_top:hover{
        color: rgb(233, 8, 8);
        border-bottom: 3px solid rgb(219, 11, 11);
    }
    #cart_count{
        color:white;
         width:20px;
        height:20px;
         margin-top:4.2%;
        margin-right:1%;
        margin-left:.5%;
    
    }
    </style>
    `
  }
  
  export default header