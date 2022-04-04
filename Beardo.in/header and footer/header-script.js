window.addEventListener( "load", () => {
    let loggedin = localStorage.getItem("loggedin");

    if(loggedin==="true") {
  
      let login_btn_on_header = document.getElementById("login_btn_on_header");
      
  
      login_btn_on_header.innerHTML = 'My account <span class="arrow-down"></span>'
    }
  
  
    let header_Products_arr = [1,2,4,5,10,12,15,18];
  
      let ignore = (g) => {
          for(let i = 0; i < header_Products_arr.length; i++){
              if(header_Products_arr[i]!==g){
                  // console.log(g)
                  let category_div = document.getElementById(`cat-${header_Products_arr[i]}`);
                  let category_product = document.getElementById(`sub-cat-${header_Products_arr[i]}`);
                  category_div.setAttribute("class","");
                  category_product.setAttribute("class",`categories-new-body__cat-header__sub-cat  sub-category sub-cat-${header_Products_arr[i]} hide`);
              }
          }
      }
  
      header_Products_arr.map((el,index) => {
          let category_div = document.getElementById(`cat-${el}`);
          let category_product = document.getElementById(`sub-cat-${el}`);
          category_div.addEventListener("click", () => {
              category_div.setAttribute("class","active");
              // console.log(el);
              ignore(el);
              category_product.setAttribute("class",`categories-new-body__cat-header__sub-cat  sub-category sub-cat-${el}`);
          })
      })
  
      let header_Concerns_arr = [1,3,4,5];
  
      let ignore_elem = (l) => {
          for(var i=0; i<header_Concerns_arr.length; i++){
              if(header_Concerns_arr[i]!==l){
                  let concern_cat = document.getElementById(`con-${header_Concerns_arr[i]}`);
                  let concern_product = document.getElementById(`sub-con-${header_Concerns_arr[i]}`);
                  concern_cat.setAttribute("class","");
                  concern_product.setAttribute("class",`categories-new-body__cat-header__sub-cat sub-concern sub-con-${header_Concerns_arr[i]} hide`);
              }
          }
      }
  
  
      header_Concerns_arr.map( (el, index) => {
          let concern_cat = document.getElementById(`con-${el}`);
          let concern_product = document.getElementById(`sub-con-${el}`);
          concern_cat.addEventListener("click", () => {
              concern_cat.setAttribute("class","active");
              ignore_elem(el)
              concern_product.setAttribute("class",`categories-new-body__cat-header__sub-cat sub-concern sub-con-${el}`);
          })
  
      })

      let cartdata = JSON.parse(localStorage.getItem("cartdata"))||[];

      let badge = document.querySelector(".badge");
      badge.innerText = cartdata.length;
  
  })