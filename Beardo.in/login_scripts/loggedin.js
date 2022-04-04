import { profile_data, order_data, wallet_data } from "./login_components.js";

window.addEventListener("load", () => {
    let loggedin = localStorage.getItem("loggedin");

    if(loggedin==="true") {

        let footer = document.getElementById("footer");
        footer.style.display = "none";

    let login_btn_on_header = document.getElementById("login_btn_on_header");
    

    login_btn_on_header.innerHTML = 'My account <span class="arrow-down"></span>'

    let all_cat_div = document.getElementById("allcat");
    let orders = document.getElementById("orders");
    let profile = document.getElementById("profile");
    let wallet = document.getElementById("wallet");
    
    
    
    all_cat_div.innerHTML = profile_data();
    
    profile.addEventListener("click",() => {
        all_cat_div.innerHTML = null;
        orders.removeAttribute("class",);
        wallet.removeAttribute("class",);
        profile.setAttribute("class","newaccount__head__links__active");
        all_cat_div.innerHTML = profile_data();
        window.location.reload()
        let ep = document.getElementById("editprofile");
    let add = document.getElementById("addaddress");
    
    
    let openprofile = document.getElementById("openprofile");
    let openaddress = document.getElementById("openadd");
    
    openprofile.addEventListener("click", () => {
        // ep.style.display = "flex";
        ep.setAttribute("class","popup-main order-popup editProfile popup-main--show");
    });
    
    openaddress.addEventListener("click", () => {
        // add.style.display = "flex";
        add.setAttribute("class","popup-main order-popup addaddress popup-main--show");
    })
    
    
    let closeprofile = document.getElementById("close_profile");
    let closeaddress = document.getElementById("close_add");
    
    closeprofile.addEventListener("click", () => {
        ep.setAttribute("class","popup-main order-popup editProfile");
    })
    
    closeaddress.addEventListener("click", () => {
        add.setAttribute("class","popup-main order-popup addaddress");
    })
    })
    
    orders.addEventListener("click",() => {
        all_cat_div.innerHTML = null;
        profile.removeAttribute("class",);
        wallet.removeAttribute("class",);
        orders.setAttribute("class","newaccount__head__links__active");
        all_cat_div.innerHTML = order_data();
    
        //oders btn//
    
    let ongoing = document.getElementById("ongoing");
    let completed = document.getElementById("completed");
    let returned = document.getElementById("returned");
    
    
    let btn_arr = [
        ongoing,completed,returned
    ];
    
    btn_arr.map( (el) => {
        
        el.addEventListener("click", () => {
            ongoing.setAttribute("class","newaccount__order__status__link");
            completed.setAttribute("class","newaccount__order__status__link");
            returned.setAttribute("class","newaccount__order__status__link");
    
            el.setAttribute("class","newaccount__order__status__link show");
        })
        
    })
    })
    
    wallet.addEventListener("click",() => {
        all_cat_div.innerHTML = null;
        profile.removeAttribute("class",);
        orders.removeAttribute("class",);
        wallet.setAttribute("class","newaccount__head__links__active");
        all_cat_div.innerHTML = wallet_data();
        let wallet_amount = localStorage.getItem("wallet_balance")||0;
        let wallet_number = document.querySelector(".newaccount__wallet__head__right__amount");
        wallet_number.innerText = `₹${wallet_amount}`
    })
    
    
    
    
    ////pop up ////

    let first_name = document.getElementById("first_name");
    let last_name = document.getElementById("last_name");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let DOB_p = document.getElementById("dob");
    let gender = document.getElementById("gender");

    let profile_form = document.getElementById("frmprofile");

    let profilefname = document.getElementById("profilefname");
    let profilelname = document.getElementById("profilelname");
    let profileemail = document.getElementById("profileemail");
    let profilephone = document.getElementById("profilephone");
    let dob = document.getElementById("dob_input");
    let male = document.getElementById("Male");
    let female = document.getElementById("female");
    let other = document.getElementById("other");
    let arr = [male,female,other]

    profile_form.addEventListener("submit",() => {
        let gender = [];

        for(var i = 0; i < arr.length; i++) {
            if(arr[i].checked===true){
                gender = arr[i].value;
            }
        }

        let updateted_profile = {
            "first_name": profilefname.value,
            "last_name": profilelname.value,
            "email": profileemail.value,
            "mobile": profilephone.value,
            "dob": dob.value,
            "gender": gender
        }

        localStorage.setItem("updateted_profile",JSON.stringify(updateted_profile))

    })

    
    let ep = document.getElementById("editprofile");
    let add = document.getElementById("addaddress");
    
    
    let openprofile = document.getElementById("openprofile");
    let openaddress = document.getElementById("openadd");

    let check_data = () => {
        if(first_name.innerText!==""){
            profilefname.setAttribute("value",first_name.innerText);
        }
        if(last_name.innerText!==""){
            profilelname.setAttribute("value",last_name.innerText);
        }
        if(email.innerText!==""){
            profileemail.setAttribute("value",email.innerText);
        }
        if(phone.innerText!==""){
            profilephone.setAttribute("value",phone.innerText);
        }
        if(DOB_p.innerText!==""){
            dob.setAttribute("value",DOB_p.innerText);
        }
    }
    
    openprofile.addEventListener("click", () => {
        check_data();
        ep.setAttribute("class","popup-main order-popup editProfile popup-main--show");
    });
    
    
    let closeprofile = document.getElementById("close_profile");
    let closeaddress = document.getElementById("close_add");
    
    closeprofile.addEventListener("click", () => {
        ep.setAttribute("class","popup-main order-popup editProfile");
    })
    
    closeaddress.addEventListener("click", () => {
        add.setAttribute("class","popup-main order-popup addaddress");
    })
    
    
    ///////////



    let update_data_fun = (data) => {
        first_name.innerText = data.first_name;
        last_name.innerText = data.last_name;
        email.innerText = data.email;
        phone.innerText = data.mobile;
        DOB_p.innerText = data.dob;
        gender.innerText = data.gender;
    }


    let normal_fun = (data) => {
        // console.log(data)
        first_name.innerText = data.name;
        last_name.innerText = data.email;
        email.innerText = data.username;
        phone.innerText = data.mobile;
    }


    let google_fun = (data) => {
        // console.log(data)
        first_name.innerText = data.first_name;
        last_name.innerText = data.last_name;
        email.innerText = data.Email;
    }

    
    let facebook_fun = (data) => {
        // console.log(data)
        first_name.innerText = data.first_name;
        last_name.innerText = data.last_name;
        email.innerText = data.email;
    }



    let updateted_profile = JSON.parse(localStorage.getItem("updateted_profile"));
    let normal_login = JSON.parse(localStorage.getItem("normal_login"));
    let google_data = JSON.parse(localStorage.getItem("google_data"));
    let fb_data = JSON.parse(localStorage.getItem("fb_data"));

    if(updateted_profile!==null){
        update_data_fun(updateted_profile);
    }
    else if(normal_login!==null){
        normal_fun(normal_login);
    }
    else if(google_data!==null){
        google_fun(google_data);
    }
    else if (fb_data!==null){
        facebook_fun(fb_data);
    }


    ///////////addaddress////////////

    let frmaddress = document.getElementById("frmaddress");

    let fname = document.getElementById("fname");
    let lname  = document.getElementById("lname");
    let email_of_address = document.getElementById("addressemail");
    let mobile = document.getElementById("mobile");
    let pincode = document.getElementById("pincode");
    let city = document.getElementById("city");
    let state = document.getElementById("state");
    let address = document.getElementById("address");
    let street = document.getElementById("address1");
    let landmark = document.getElementById("landmark");
    let home = document.getElementById("opt-1");
    let office = document.getElementById("opt-2");
    let other_add = document.getElementById("opt-3");

    let address_arr = [home, office, other_add]

    let address_data_arr = JSON.parse(localStorage.getItem("address_data")) || [];

    let address_container = document.querySelector(".address_container");

    if(address_data_arr.length===0){
        address_container.style.display = "none";
    }

    let editform = document.getElementById("efrmaddress");

    let efname = document.getElementById("efname");
    let elname = document.getElementById("elname");
    let emobile = document.getElementById("emobile");
    let epincode = document.getElementById("epincode");
    let ecity = document.getElementById("ecity");
    let estate = document.getElementById("estate");
    let eaddress = document.getElementById("eaddress");
    let eaddress1 = document.getElementById("eaddress1");
    let elandmark = document.getElementById("elandmark");



    let editaddress = document.getElementById("editaddress");
    let close_edit_add = document.getElementById("close_edit_add");

    close_edit_add.addEventListener("click", () => {
        editaddress.setAttribute("class","popup-main order-popup addaddress");
    })

    let address_append = (data) => {
        address_container.innerText = null;
        data.map( (el,i) => {
            let div = document.createElement("div");
            div.setAttribute("class", "oldaddress-detail__row");

            let address_radio = document.createElement("div");
            address_radio.setAttribute("class","address-radio")

            let label_div = document.createElement("label");

            let label_inner_div = document.createElement("div");
            label_inner_div.setAttribute("class","address-radio__name");

            label_inner_div.innerText = `${el.fname} ${el.lname}`

            let state = document.querySelector(`option[value="${el.state}"]`)

            let address_p = document.createElement("p");
            address_p.innerText = `${el.address} ${el.street} ${el.landmark} ${el.city} ${state.innerText} ${el.pincode}`

            let mobile_p = document.createElement("p");
            mobile_p.setAttribute("class","address-radio__contact");

            mobile_p.innerText = `Mobile: ${el.mobile}`


            let a = document.createElement("a");
            a.innerText = "EDIT"
            a.setAttribute("class","oldaddress-detail__row__edit");
            a.addEventListener("click", () => {
                console.log(el,i);
                editaddress.setAttribute("class","popup-main order-popup addaddress popup-main--show");

                editform.addEventListener("submit", (event) => {
                    // event.preventDefault();
                    el.fname = efname.value;
                    el.lname = elname.value;
                    el.mobile = emobile.value;
                    el.pincode = epincode.value;
                    el.city = ecity.value;
                    el.state = estate.value;
                    el.address = eaddress.value;
                    el.street = eaddress1.value;
                    el.landmark = elandmark.value;

                    address_data_arr[i] = el;

                    console.log(address_data_arr)

                    localStorage.setItem("address_data",JSON.stringify(address_data_arr));

                })
            })

            label_div.append(label_inner_div,address_p,mobile_p);

            address_radio.append(label_div);

            div.append(address_radio,a);

            address_container.append(div);
        })
    }

    address_append(address_data_arr);


    frmaddress.addEventListener("submit", (event) => {
        let address_of = [];

        for(var i = 0; i < address_arr.length; i++) {
            if(address_arr[i].checked===true){
                address_of = address_arr[i].value;
            }
        }

        let address_data = {
            "fname" : fname.value,
            "lname" : lname.value,
            "email" : email_of_address.value,
            "mobile" : mobile.value,
            "pincode" : pincode.value,
            "city" : city.value,
            "state" : state.value,
            "address" : address.value,
            "street" : street.value,
            "landmark" : landmark.value,
            "add_of" : address_of,
        }

        address_data_arr.push(address_data);

        address_append(address_data_arr);

        localStorage.setItem("address_data",JSON.stringify(address_data_arr));



    })

    let checkinput = () => {
        if(first_name.innerText!==""){
            fname.setAttribute("value",first_name.innerText);
        }
        if(last_name.innerText!==""){
            lname.setAttribute("value",last_name.innerText);
        }
        if(email.innerText!==""){
            email_of_address.setAttribute("value",email.innerText);
        }
        if(phone.innerText!==""){
            mobile.setAttribute("value",phone.innerText);
        }
    };


    openaddress.addEventListener("click", () => {
        checkinput();
        add.setAttribute("class","popup-main order-popup addaddress popup-main--show");
    });






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




}
})


