window.addEventListener("load", () => {
  let loggedin = localStorage.getItem("loggedin");

  if (loggedin === "false" || loggedin == null) {

    let container = document.getElementById("container");
    container.style.padding = "50px 0"

    let footer = document.getElementById("footer");
    footer.style.display = "block";

    let login_btn_on_header = document.getElementById("login_btn_on_header");

    login_btn_on_header.innerHtml = '"Login " <span class="arrow-down"></span>'

    let frmloginemail = document.querySelector("#frmloginemail");
    let frmloginpassword = document.querySelector("#frmloginpassword");
    let error_msg = document.getElementById("frmsignuperror");
    let logerr_msg = document.getElementById("loginformerror");
    let frmsignupfname = document.querySelector("#frmsignupfname");
    let frmsignuplname = document.querySelector("#frmsignuplname");
    let frmsignupemail = document.querySelector("#frmsignupemail");
    let frmsignupphone = document.querySelector("#frmsignupphone");
    let frmsignuppassword1 = document.querySelector("#frmsignuppassword1");
    let frmsignupcpassword2 = document.querySelector("#frmsignupcpassword2");

    let halfwidth = document.querySelector(".halfwidth");

    let login_arr = [frmloginemail, frmloginpassword];

    let sign_up_arr = [
      frmsignupfname,
      frmsignuplname,
      frmsignupemail,
      frmsignupphone,
      frmsignuppassword1,
      frmsignupcpassword2,
    ];

    let hloop = (arr, k) => {
      // console.log(arr)
      for (var i = 0; i < arr.length; i++) {
        let div = document.querySelector(`#D${i + 1}`);

        if (arr[i].value !== "") {
          div.setAttribute("class", `${k} active`);
        }
      }
    };

    let floop = (arr, h) => {
      // console.log(arr)
      for (var i = 0; i < arr.length; i++) {
        let div = document.querySelector(`#f${i + 1}`);

        if (arr[i].value !== "") {
          div.setAttribute("class", `${h} active`);
        }
      }
    };

    login_arr.map((elem, i) => {
      let div = document.querySelector(`#f${i + 1}`);

      elem.addEventListener("change", (event) => {
        // console.log('event:', event)
        floop(login_arr, "fullwidth");
      });

      elem.addEventListener("click", () => {
        focus_function(elem, i, div, "fullwidth");
      });
    });

    sign_up_arr.forEach((elem, i) => {
      let div = document.querySelector(`#D${i + 1}`);

      elem.addEventListener("change", (event) => {
        // console.log('event:', event)
        hloop(sign_up_arr, "halfwidth");
      });

      elem.addEventListener("click", () => {
        focus_function(elem, i, div, "halfwidth");
      });
    });

    let focus_function = (elem, i, g, n) => {
      g.setAttribute("class", `${n} active`);

      elem.addEventListener("click", (event) => {
        g.setAttribute("class", `${n} active`);
      });

      elem.addEventListener("blur", (event) => {
        if (elem.value === "") {
          g.setAttribute("class", `${n}`);
        }
      });
    };

    //register
    let registerForm = document.getElementById("frmsignup");
    registerForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(registerForm);

      let name = formData.get("frmsignupfname");
      let username = formData.get("frmsignuplname");
      let email = formData.get("frmsignupemail");
      let mobile = formData.get("frmsignupphone");
      let password = formData.get("frmsignuppassword");
      let confirm = formData.get("frmsignupcpassword2");
      let description = "";

      let register_obj = {
        name: name,
        email: username,
        password: password,
        username: email,
        mobile: mobile,
        description: description,
      };

      localStorage.setItem("username_email", email);

      let data = JSON.stringify(register_obj);

      if (name === "") {
        error_msg.innerText = "Please enter first name";
      } else if (username === "") {
        error_msg.innerText = "Please enter last name";
      } else if (email === "") {
        error_msg.innerText = "Please enter email name";
      } else if (mobile === "") {
        error_msg.innerText = "Please enter a valid mobile";
      } else if (password === "") {
        error_msg.innerText = "Please enter password";
      } else if (password !== confirm) {
        error_msg.innerText = "Confirm password and password do no match";
      } else {
        register(data);
      }
    });

    //Login
    let loginForm = document.getElementById("frmlogin");
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();

      let loginForm_data = new FormData(loginForm);

      let username = loginForm_data.get("frmloginemail");

      let password = loginForm_data.get("frmloginpassword");

      let login_obj = {
        password: password,
        username: username,
      };

      let data = JSON.stringify(login_obj);

      localStorage.setItem("username", username);

      // console.log(data);
      if (password === "") {
        logerr_msg.innerText = "Please enter password";
      } else if (username === "") {
        logerr_msg.innerText = "Please enter email";
      } else {
        login(data);
      }
    });

    //register Fetch
    const register = (data) => {
      fetch("https://masai-api-mocker.herokuapp.com/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            // console.log('data:', data)
            error_msg.innerText = data.message;
          } else {
            console.log(data);
            error_msg.innerText = data.message;
          }
        })
        .catch((error) => {
          console.log("error:", error);
        });
    };

    //<!-- yal@gmail.com/devesh26goyail.com  941-->
    ///login Fetch
    const login = (data) => {
      fetch(`https://masai-api-mocker.herokuapp.com/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.error) {
            logerr_msg.innerText = "Could not verify email/password";
          } else {
            localStorage.setItem("token", data.token);
            data_catch(data.token);
          }
        })
        .catch((error) => {
          console.log("error:", error);
        });
    };

    let data_catch = (token) => {
      let username = localStorage.getItem("username") || [];

      fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          localStorage.setItem("normal_login", JSON.stringify(data));
          localStorage.setItem("loggedin", true);
          window.location.reload();
        })
        .catch((error) => {
          console.log("error:", error);
        });
    };
  }
});
