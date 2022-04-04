function after_login() {
  return `    <div class="background-primary">
    <div class="newaccount">
        <div class="newaccount__head">
            <p class="title">My Account</p>
            <div class="newaccount__head__links">
                    <a id="orders">Orders</a>
                    <a id="profile" class="newaccount__head__links__active">Profile</a>
                    <a id="wallet">Wallet</a>
            </div>
        </div>
        

        <div id="allcat"></div>

        
    </div>
</div>

<div class="popup-main order-popup editProfile" id="editprofile">
    <div class="popup-main__cont order-popup__main">
        <div class="order-popup__main__head">
            <p>Edit Profile</p>
            <a href="javascript:void(0);" class="order-popup__main__head__close" id="close_profile">CLOSE</a>
        </div>
        <form name="frmprofile" id="frmprofile">
        <div class="order-popup__main__body">
            <div class="address-detail__order-shopping-detail__form">
            <input type="hidden" name="token" value="e9f25fc1fd12b474a3cc69c90524db20b272e0bc4e142f5bafd01ff5af9b18f2">
                <div class="form__row">
                    <div class="double-col">
                        <div class="form__row__input">
                            <label for="">First name</label>
                            <input type="text" name="firstname" placeholder="" id="profilefname" value="">
                        </div>
                        <div class="form__row__input">
                            <label for="">Last name</label>
                            <input type="text" name="lastname" placeholder="" id="profilelname" value="">
                        </div>
                    </div>
                    <div class="form__row__input">
                        <label for="">Email address</label>
                        <input type="text" name="email" placeholder="" id="profileemail" value="" readonly="">
                        <p class="form__row__input__fixed-value">Email id cannot be changed</p>
                    </div>
                </div>
                <div class="form__row">
                    <div class="form__row__input">
                        <label for="">Mobile Number</label>
                        <input readonly="" type="text" name="mobile" placeholder="" id="profilephone" value="">
                    </div>
                </div>
                <div class="form__row">
                    <div class="form__row__input">
                        <label for="">Date of Birth</label>
                        <input type="date" name="dob" id="dob_input" value="">
                    </div>
                </div>
                <div class="form__row">
                    <div class="form__row__input">
                        <label for="">Gender</label>
                        <div class="oldaddress-detail__row">
                            <div class="address-radio">
                                        <input type="radio" name="pgender" id="Male" value="male">
                                <label for="Male" id="label_male">Male</label>
                            </div>
                            <div class="address-radio">
                                        <input type="radio" name="pgender" id="female" value="female">
                                <label for="female" id="label_female">female</label>
                            </div>
                            <div class="address-radio">
                                        <input type="radio" name="pgender" id="other" value="other">
                                <!-- <input type="radio" name="address_id" id="other" value="other"> -->
                                <label for="other" id="label_other">other</label>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <input type="submit" name="btnprofile" id="profilesubmitbtn" class="btn-design" value="Save Changes">
            <!-- <a href="javascript:void(0);" onclick="changeProfile()" id="profilesubmitbtn" class="btn-design">Save Changes</a> -->
        </div>
        </form>
    </div>
</div>





<div class="popup-main order-popup addaddress" id="addaddress">
    <div class="popup-main__cont order-popup__main">
        <div class="order-popup__main__head">
            <p>Add Address</p>
            <a href="javascript:void(0);" class="order-popup__main__head__close" id="close_add">CLOSE</a>
        </div>
        <div class="order-popup__main__body">
            <div class="address-detail__order-shopping-detail__form">
            <form name="frmaddress" id="frmaddress">
                <input type="hidden" id="userid" value="2202069">
                <div class="form__row">
                    <div class="double-col">
                        <div class="form__row__input">
                            <label for="">First name</label>
                            <input type="text" name="firstname" placeholder="" id="fname" value="">
                        </div>
                        <div class="form__row__input">
                            <label for="">Last name</label>
                            <input type="text" name="lastname" placeholder="" id="lname" value="">
                        </div>
                    </div>
                    <div class="form__row__input">
                        <label for="">Email address</label>
                        <input type="text" name="email" placeholder="" id="addressemail" value="" readonly="">
                    </div>
                </div>
                <div class="form__row">
                    <div class="form__row__input">
                        <label for="">Mobile Number</label>
                        <input type="text" name="mobile" placeholder="" id="mobile" value="" readonly="">
                    </div>
                    <div class="double-col">
                        <div class="form__row__input">
                            <label for="">Pincode</label>
                            <input type="text" name="pincode" placeholder="" id="pincode">
                        </div>
                        <div class="form__row__input">
                            <label for="">City</label>
                            <input type="text" name="city" placeholder="" id="city">
                        </div>
                    </div>
                </div>
                <div class="form__row">
                    <div class="form__row__input custom-select">
                        <label for="">State</label>
                        <select name="state" autocomplete="region" id="state">
                            <option value="">Select state</option>
                            <option value="29">Andaman &amp; Nicobar Islands</option>
                            <option value="1">Andhra Pradesh</option>
                            <option value="2">Arunachal Pradesh</option>
                            <option value="3">Assam</option>
                            <option value="4">Bihar</option>
                            <option value="30">Chandigarh</option>
                            <option value="5">Chhattisgarh</option>
                            <option value="31">Dadra &amp; Nagar Haveli and Daman &amp; Diu</option>
                            <option value="33">Delhi</option>
                            <option value="6">Goa</option>
                            <option value="7">Gujarat</option>
                            <option value="8">Haryana</option>
                            <option value="9">Himachal Pradesh</option>
                            <option value="10">Jammu &amp; Kashmir</option>
                            <option value="11">Jharkhand</option>
                            <option value="12">Karnataka</option>
                            <option value="13">Kerala</option>
                            <option value="34">Lakshadweep</option>
                            <option value="14">Madhya Pradesh</option>
                            <option value="15">Maharashtra</option>
                            <option value="16">Manipur</option>
                            <option value="17">Meghalaya</option>
                            <option value="18">Mizoram</option>
                            <option value="19">Nagaland</option>
                            <option value="20">Odisha</option>
                            <option value="35">Puducherry</option>
                            <option value="21">Punjab</option>
                            <option value="22">Rajasthan</option>
                            <option value="23">Sikkim</option>
                            <option value="24">Tamil Nadu</option>
                            <option value="36">Telangana</option>
                            <option value="25">Tripura</option>
                            <option value="27">Uttar Pradesh</option>
                            <option value="26">Uttarakhand</option>
                            <option value="28">West Bengal</option>
                    </select>
                    </div>
                    <div class="form__row__input">
                        <label for="">Flat / House No. / Floor / Building</label>
                        <input type="text" name="address" id="address" placeholder="">
                    </div>
                </div>
                <div class="form__row">
                    <div class="form__row__input">
                        <label for="">Colony / Street / Locality</label>
                        <input type="text" name="address1" placeholder="" id="address1">
                    </div>
                    <div class="form__row__input">
                        <label for="">Landmark (optional)</label>
                        <input type="text" name="landmark" placeholder="" id="landmark">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form__row__input">
                        <label for="">Type of Address</label>
                        <div class="custom-choose">
                            <input type="radio" id="opt-1" value="Home" name="addresstype">
                            <label for="opt-1">
                                Home
                            </label>
                            <input type="radio" id="opt-2" value="Office" name="addresstype">
                            <label for="opt-2">
                                Office
                            </label>
                            <input type="radio" id="opt-3" value="Other" name="addresstype">
                            <label for="opt-3">
                                Other
                            </label>
                        </div>
                    </div>
                </div>
                <input type="submit" name="btnaddress" value="UPDATE" class="btn-design" id="addresssubmitbtn">
            </form></div>
        </div>
    </div>
</div>






<div class="popup-main order-popup addaddress" id="editaddress">
<div class="popup-main__cont order-popup__main">
    <div class="order-popup__main__head">
        <p>Edit Address</p>
        <a id="close_edit_add" href="javascript:void(0);" class="order-popup__main__head__close">CLOSE</a>
    </div>
    <div class="order-popup__main__body">
        <div class="address-detail__order-shopping-detail__form">
        <form name="efrmaddress" id="efrmaddress">
            <input type="hidden" id="editaddid" value="814419">
            <div class="form__row">
                <div class="double-col">
                    <div class="form__row__input">
                        <label for="">First name</label>
                        <input type="text" name="firstname" placeholder="" id="efname" value="">
                    </div>
                    <div class="form__row__input">
                        <label for="">Last name</label>
                        <input type="text" name="lastname" placeholder="" id="elname" value="">
                    </div>
                </div>
            </div>
            <div class="form__row">
                <div class="form__row__input">
                    <label for="">Mobile Number</label>
                    <input type="text" name="mobile" placeholder="" id="emobile" value="" readonly="">
                </div>
                <div class="double-col">
                    <div class="form__row__input">
                        <label for="">Pincode</label>
                        <input type="text" name="pincode" placeholder="" id="epincode" value="">
                    </div>
                    <div class="form__row__input">
                        <label for="">City</label>
                        <input type="text" name="city" placeholder="" id="ecity" value="">
                    </div>
                </div>
            </div>
            <div class="form__row">
                <div class="form__row__input custom-select">
                    <label for="">State</label>
                    <select name="state" autocomplete="region" id="estate">
                        <option id="temstate" value="" placeholder="state">Rajasthan</option>
                        <option value="29">Andaman &amp; Nicobar Islands</option>
                        <option value="1">Andhra Pradesh</option>
                        <option value="2">Arunachal Pradesh</option>
                        <option value="3">Assam</option>
                        <option value="4">Bihar</option>
                        <option value="30">Chandigarh</option>
                        <option value="5">Chhattisgarh</option>
                        <option value="31">Dadra &amp; Nagar Haveli and Daman &amp; Diu</option>
                        <option value="33">Delhi</option>
                        <option value="6">Goa</option>
                        <option value="7">Gujarat</option>
                        <option value="8">Haryana</option>
                        <option value="9">Himachal Pradesh</option>
                        <option value="10">Jammu &amp; Kashmir</option>
                        <option value="11">Jharkhand</option>
                        <option value="12">Karnataka</option>
                        <option value="13">Kerala</option>
                        <option value="34">Lakshadweep</option>
                        <option value="14">Madhya Pradesh</option>
                        <option value="15">Maharashtra</option>
                        <option value="16">Manipur</option>
                        <option value="17">Meghalaya</option>
                        <option value="18">Mizoram</option>
                        <option value="19">Nagaland</option>
                        <option value="20">Odisha</option>
                        <option value="35">Puducherry</option>
                        <option value="21">Punjab</option>
                        <option value="22">Rajasthan</option>
                        <option value="23">Sikkim</option>
                        <option value="24">Tamil Nadu</option>
                        <option value="36">Telangana</option>
                        <option value="25">Tripura</option>
                        <option value="27">Uttar Pradesh</option>
                        <option value="26">Uttarakhand</option>
                        <option value="28">West Bengal</option>
                </select>
                </div>
                <div class="form__row__input">
                    <label for="">Flat / House No. / Floor / Building</label>
                    <input type="text" name="address" placeholder="" id="eaddress">
                </div>
            </div>
            <div class="form__row">
                <div class="form__row__input">
                    <label for="">Colony / Street / Locality</label>
                    <input type="text" name="address1" placeholder="" id="eaddress1">
                </div>
                <div class="form__row__input">
                    <label for="">Landmark (optional)</label>
                    <input type="text" name="landmark" placeholder="" id="elandmark">
                </div>
            </div>
        <input type="submit" name="btnaddress" value="UPDATE" class="btn-design" id="addresseditbtn">
        </form></div>
    </div>
</div>
</div>`;
}

function at_login() {
  return ` <div class="breadcrumbs">
    <a href="index.html">Home</a>  /  <a href="" class="Account">Account</a>
</div>

<div id="account_div">
    <h2>ACCOUNT</h2>
</div>
<div id="register_div" class="login-reg">
    <div class="register" style="border-radius: 15px;">
        <div class="reg-title">BECOME A MEMBER</div>
        <div class="reg-subtitle">Please file below details and become a member.</div>
         <form name="frmsignup" id="frmsignup">
             <div class="halfwidth" id="D1">
                <span>First name</span>
                <label></label>
                <input type="text" id="frmsignupfname" name="frmsignupfname">
            </div>
            <div class="halfwidth" id="D2">
                <span>Last name</span>
                <label></label>
                <input type="text" id="frmsignuplname" name="frmsignuplname">
            </div>	
            <div class="halfwidth" id="D3">
                <span>Email Address</span>
                <label></label>
                <input type="text" id="frmsignupemail" name="frmsignupemail">
            </div>	
            <div class="halfwidth" id="D4">
                <span>Mobile</span>
                <label></label>
                <input type="text" id="frmsignupphone" name="frmsignupphone">
            </div>	
            <div class="halfwidth" id="D5">
                <span>Password</span>
                <label></label>
                <input type="password" id="frmsignuppassword1" name="frmsignuppassword">
            </div>	
            <div class="halfwidth" id="D6">
                <span>Confirm Password</span>
                <label></label>
                <input type="password" id="frmsignupcpassword2" name="frmsignupcpassword2">
            </div>	
            <p class="error-message" id="frmsignuperror"></p>
            <button class="black" type="submit" id="frmsignupsubmitbutton">Become a Member</button>
         </form>
    </div>
    <div class="login" style="border-radius: 15px;">
        <div class="reg-title">ALREADY A MEMBER?</div>
       <div class="reg-subtitle">Please enter your email and password to login</div>
        <form name="frmlogin" id="frmlogin">

            <div class="fullwidth" id="f1">
               <span>Email address</span>
               <label></label>
               <input type="text" name="frmloginemail" id="frmloginemail">
           </div>
           
           <div class="fullwidth" id="f2">
               <span>Password</span>
               <label></label>
               <input type="password" name="frmloginpassword" id="frmloginpassword">
           </div>

           <p class="error" id="loginformerror"></p>
           <button type="submit" id="frmloginsubmitbtn" class="black">LOGIN</button> 
           
           <a href="" class="forgot-pswd">Forgot password?</a>
           <div>
               <p class="orText" style="text-align: center;margin-top:0px;margin-bottom: 6px;color: #ababab;">OR</p>
               <div id="gSignInWrapper" class="social_login_custom">

                <!-- Facebook login or logout button -->

                <a href="#" onclick="my_login();" class="fb-btn-custom"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 140 32" style="enable-background:new 0 0 140 32;" xml:space="preserve"> <rect id="Rectangle" class="st0" fill="#2D46B9" width="140" height="32"></rect> <rect id="Rectangle_2" x="8" y="8" class="st1" fill="#D8D8D8" fill-opacity="0" width="16" height="16"></rect> <path id="Shape" fill="#FFFFFF" d="M18.9,13.8h-2v-1.3c0-0.3,0.2-0.6,0.5-0.6c0,0,0.1,0,0.1,0h1.4V9.8l-1.9,0c-1.3-0.1-2.5,0.9-2.6,2.2 c0,0.1,0,0.3,0,0.4v1.4h-1.2V16h1.2v6.2h2.6V16h1.8L18.9,13.8z"></path> <g class="st3"> <path fill="#FFFFFF" d="M27.8,13h1.4v5.9h2.2V20h-3.6V13z"></path> <path fill="#FFFFFF" d="M32.8,19.3c-0.5-0.5-0.8-1.2-0.8-2.1c0-0.9,0.3-1.5,0.8-2.1c0.5-0.5,1.2-0.8,2-0.8s1.5,0.3,2,0.8 c0.5,0.5,0.8,1.2,0.8,2.1c0,0.9-0.3,1.5-0.8,2.1c-0.5,0.5-1.2,0.8-2,0.8S33.4,19.8,32.8,19.3z M34.9,18.9c0.4,0,0.7-0.1,1-0.4 c0.3-0.3,0.4-0.7,0.4-1.2c0-0.5-0.1-0.9-0.4-1.2c-0.3-0.3-0.6-0.4-1-0.4s-0.7,0.1-1,0.4c-0.3,0.3-0.4,0.7-0.4,1.2 c0,0.5,0.1,0.9,0.4,1.2C34.1,18.7,34.5,18.9,34.9,18.9z"></path> <path fill="#FFFFFF" d="M39.2,19.3c-0.5-0.5-0.7-1.2-0.7-2.1c0-0.8,0.2-1.5,0.7-2c0.5-0.5,1.1-0.8,1.9-0.8c0.8,0,1.3,0.3,1.7,0.9v-0.9 h1.4V20c0,0.8-0.2,1.4-0.7,1.9c-0.5,0.5-1.1,0.8-2,0.8c-0.8,0-1.5-0.2-2-0.5c-0.5-0.3-0.8-0.8-0.8-1.5h1.4c0.1,0.2,0.3,0.4,0.5,0.6 s0.6,0.2,0.9,0.2c0.4,0,0.7-0.1,0.9-0.4c0.3-0.2,0.4-0.6,0.4-1.1v-1c-0.4,0.7-1,1-1.8,1C40.3,20.1,39.7,19.8,39.2,19.3z M42.4,18.4 c0.3-0.3,0.4-0.7,0.4-1.2c0-0.5-0.1-0.9-0.4-1.2s-0.6-0.4-1-0.4c-0.4,0-0.7,0.1-1,0.4c-0.3,0.3-0.4,0.7-0.4,1.2 c0,0.5,0.1,0.9,0.4,1.2c0.3,0.3,0.6,0.4,1,0.4C41.8,18.9,42.1,18.7,42.4,18.4z"></path> <path fill="#FFFFFF" d="M47.3,13c0,0.2-0.1,0.4-0.3,0.6c-0.2,0.2-0.4,0.3-0.6,0.3c-0.2,0-0.4-0.1-0.6-0.3c-0.2-0.2-0.3-0.4-0.3-0.6 s0.1-0.4,0.3-0.6c0.2-0.2,0.4-0.3,0.6-0.3c0.2,0,0.4,0.1,0.6,0.3C47.2,12.6,47.3,12.8,47.3,13z M45.7,20v-5.5h1.4V20H45.7z"></path> <path fill="#FFFFFF" d="M50.1,14.5v0.8c0.4-0.6,0.9-0.9,1.7-0.9c0.6,0,1.1,0.2,1.6,0.6c0.4,0.4,0.6,1,0.6,1.7V20h-1.4v-3.1 c0-0.4-0.1-0.8-0.3-1c-0.2-0.2-0.5-0.3-0.9-0.3s-0.7,0.1-0.9,0.3c-0.2,0.2-0.3,0.6-0.3,1V20h-1.4v-5.5H50.1z"></path> <path fill="#FFFFFF" d="M64.7,14.5H66L64.3,20h-1.5l-1-3.7l-1,3.7h-1.5l-1.7-5.5h1.4l1,4.2l1-4.2h1.5l1,4.2L64.7,14.5z"></path> <path fill="#FFFFFF" d="M68.4,13c0,0.2-0.1,0.4-0.3,0.6c-0.2,0.2-0.4,0.3-0.6,0.3c-0.2,0-0.4-0.1-0.6-0.3c-0.2-0.2-0.3-0.4-0.3-0.6 s0.1-0.4,0.3-0.6c0.2-0.2,0.4-0.3,0.6-0.3c0.2,0,0.4,0.1,0.6,0.3C68.3,12.6,68.4,12.8,68.4,13z M66.8,20v-5.5h1.4V20H66.8z"></path> <path fill="#FFFFFF" d="M71.9,18.8h0.7V20h-0.9c-0.6,0-1-0.1-1.3-0.4c-0.3-0.3-0.5-0.7-0.5-1.3v-2.7h-0.6v-1.2h0.6v-1.4h1.4v1.4h1.2 v1.2h-1.2v2.7c0,0.2,0,0.3,0.1,0.4C71.5,18.8,71.7,18.8,71.9,18.8z"></path> <path fill="#FFFFFF" d="M75.1,12.6v2.7c0.4-0.6,0.9-0.9,1.7-0.9c0.6,0,1.1,0.2,1.5,0.6c0.4,0.4,0.6,1,0.6,1.7V20h-1.4v-3.1 c0-0.4-0.1-0.8-0.3-1c-0.2-0.2-0.5-0.3-0.9-0.3s-0.7,0.1-0.9,0.3c-0.2,0.2-0.3,0.6-0.3,1V20h-1.4v-7.4H75.1z"></path> <path fill="#FFFFFF" d="M83.4,20v-7h4.3v1.1h-2.9v1.8H87V17h-2.2v3H83.4z"></path> <path fill="#FFFFFF" d="M89.2,19.3c-0.5-0.5-0.7-1.2-0.7-2.1c0-0.8,0.2-1.5,0.7-2c0.5-0.5,1.1-0.8,1.9-0.8s1.3,0.3,1.7,0.9v-0.9h1.4 V20h-1.4v-0.9c-0.4,0.7-1,1-1.8,1C90.3,20.1,89.7,19.8,89.2,19.3z M92.3,18.4c0.3-0.3,0.4-0.7,0.4-1.2c0-0.5-0.1-0.9-0.4-1.2 c-0.3-0.3-0.6-0.4-1-0.4s-0.7,0.1-1,0.4c-0.3,0.3-0.4,0.7-0.4,1.2c0,0.5,0.1,0.9,0.4,1.2c0.3,0.3,0.6,0.4,1,0.4 C91.7,18.9,92,18.7,92.3,18.4z"></path> <path fill="#FFFFFF" d="M96,19.3c-0.5-0.5-0.8-1.2-0.8-2.1c0-0.9,0.3-1.6,0.8-2.1c0.5-0.5,1.2-0.8,2-0.8c0.7,0,1.2,0.2,1.7,0.5 c0.5,0.3,0.8,0.8,0.9,1.4h-1.5c-0.2-0.5-0.5-0.7-1.1-0.7c-0.4,0-0.7,0.1-1,0.4c-0.2,0.3-0.3,0.7-0.3,1.2c0,0.5,0.1,0.9,0.3,1.2 c0.2,0.3,0.5,0.4,1,0.4c0.5,0,0.9-0.2,1.1-0.7h1.5c-0.2,0.6-0.5,1-0.9,1.4c-0.5,0.3-1,0.5-1.7,0.5C97.2,20.1,96.6,19.8,96,19.3z"></path> <path fill="#FFFFFF" d="M104,20.1c-0.8,0-1.5-0.3-2-0.8s-0.8-1.2-0.8-2.1c0-0.9,0.3-1.5,0.8-2.1s1.2-0.8,2-0.8c0.8,0,1.5,0.3,2,0.8 c0.5,0.5,0.8,1.2,0.8,2c0,0.2,0,0.4,0,0.5h-4c0,0.4,0.2,0.6,0.4,0.9c0.2,0.2,0.5,0.3,0.9,0.3c0.5,0,0.8-0.2,1.1-0.6h1.5 c-0.2,0.5-0.5,1-0.9,1.3C105.2,19.9,104.7,20.1,104,20.1z M104.9,15.9c-0.3-0.2-0.6-0.3-0.9-0.3s-0.6,0.1-0.9,0.3 c-0.2,0.2-0.4,0.5-0.4,0.9h2.6C105.3,16.4,105.2,16.1,104.9,15.9z"></path> <path fill="#FFFFFF" d="M109.3,15.3c0.4-0.6,1-0.9,1.7-0.9s1.4,0.3,1.9,0.8s0.7,1.2,0.7,2c0,0.8-0.2,1.5-0.7,2.1s-1.1,0.8-1.9,0.8 s-1.3-0.3-1.7-1V20h-1.4v-7.4h1.4V15.3z M111.8,18.4c0.3-0.3,0.4-0.7,0.4-1.2c0-0.5-0.1-0.9-0.4-1.2c-0.3-0.3-0.6-0.4-1-0.4 c-0.4,0-0.7,0.1-1,0.4s-0.4,0.7-0.4,1.2c0,0.5,0.1,0.9,0.4,1.2s0.6,0.4,1,0.4C111.2,18.9,111.5,18.7,111.8,18.4z"></path> <path fill="#FFFFFF" d="M115.2,19.3c-0.5-0.5-0.8-1.2-0.8-2.1c0-0.9,0.3-1.5,0.8-2.1c0.5-0.5,1.2-0.8,2-0.8c0.8,0,1.5,0.3,2,0.8 c0.5,0.5,0.8,1.2,0.8,2.1c0,0.9-0.3,1.5-0.8,2.1s-1.2,0.8-2,0.8S115.8,19.8,115.2,19.3z M117.2,18.9c0.4,0,0.7-0.1,1-0.4 s0.4-0.7,0.4-1.2c0-0.5-0.1-0.9-0.4-1.2c-0.3-0.3-0.6-0.4-1-0.4s-0.7,0.1-1,0.4c-0.3,0.3-0.4,0.7-0.4,1.2c0,0.5,0.1,0.9,0.4,1.2 C116.5,18.7,116.9,18.9,117.2,18.9z"></path> <path fill="#FFFFFF" d="M121.7,19.3c-0.5-0.5-0.8-1.2-0.8-2.1c0-0.9,0.3-1.5,0.8-2.1c0.5-0.5,1.2-0.8,2-0.8c0.8,0,1.5,0.3,2,0.8 c0.5,0.5,0.8,1.2,0.8,2.1c0,0.9-0.3,1.5-0.8,2.1c-0.5,0.5-1.2,0.8-2,0.8S122.2,19.8,121.7,19.3z M123.7,18.9c0.4,0,0.7-0.1,1-0.4 c0.3-0.3,0.4-0.7,0.4-1.2c0-0.5-0.1-0.9-0.4-1.2c-0.3-0.3-0.6-0.4-1-0.4s-0.7,0.1-1,0.4c-0.3,0.3-0.4,0.7-0.4,1.2 c0,0.5,0.1,0.9,0.4,1.2C123,18.7,123.3,18.9,123.7,18.9z"></path> <path fill="#FFFFFF" d="M129.1,20h-1.4v-7.4h1.4v4.2l1.9-2.4h1.9l-2.5,2.8l2.5,2.7H131l-1.9-2.3V20z"></path> </g> </svg></a>
                <a id="customBtn" class="google-btn-custom">
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 132 32" style="enable-background:new 0 0 132 32;" xml:space="preserve"> <rect id="Rectangle" fill="#EFF2FC" width="132" height="32"></rect> <path id="Shape" fill="#FFFFFF" d="M15,10.3c-1.5,0.5-2.7,1.6-3.4,3c-0.2,0.5-0.4,1-0.5,1.5c-0.6,3.1,1.3,6.2,4.3,7 c1,0.3,2.1,0.3,3.1,0c0.9-0.2,1.8-0.6,2.5-1.3c0.7-0.7,1.2-1.5,1.5-2.5c0.3-1,0.3-2.1,0.2-3.2H17v2.3h3.3c-0.1,0.8-0.6,1.4-1.2,1.9 c-0.4,0.3-0.8,0.4-1.3,0.5c-0.5,0.1-1,0.1-1.4,0c-0.5-0.1-0.9-0.3-1.3-0.6c-0.6-0.5-1.1-1.1-1.4-1.8c-0.3-0.8-0.3-1.6,0-2.3 c0.2-0.5,0.5-1,0.9-1.4c0.9-0.9,2.3-1.3,3.6-0.9c0.5,0.1,0.9,0.4,1.3,0.8l1.1-1.1c0.2-0.2,0.4-0.4,0.6-0.6c-0.6-0.5-1.2-0.9-1.9-1.2 C17.8,9.9,16.4,9.9,15,10.3z"></path> <path id="Shape-2" fill="#EA4335" d="M15,10.3c1.3-0.4,2.7-0.4,4,0c0.7,0.3,1.4,0.7,1.9,1.2c-0.2,0.2-0.4,0.4-0.6,0.6l-1.1,1.1 c-0.4-0.4-0.8-0.6-1.3-0.8c-0.6-0.2-1.2-0.2-1.8-0.1c-0.7,0.2-1.3,0.5-1.8,1c-0.4,0.4-0.7,0.9-0.9,1.4c-0.7-0.5-1.3-1-2-1.5 C12.3,11.9,13.6,10.8,15,10.3z"></path> <path id="Shape-3" fill="#FBBC05" d="M11.1,14.8c0.1-0.5,0.3-1,0.5-1.5c0.7,0.5,1.3,1,2,1.5c-0.3,0.8-0.3,1.6,0,2.3 c-0.7,0.5-1.3,1-2,1.5C11,17.5,10.9,16.1,11.1,14.8z"></path> <path id="Shape-4" fill="#4285F4" d="M17,14.9h5.6c0.2,1.1,0.1,2.1-0.1,3.2c-0.3,1-0.8,1.8-1.5,2.5l-1.9-1.5c0.6-0.4,1.1-1.1,1.2-1.9 H17C17,16.4,17,15.7,17,14.9z"></path> <path id="Shape-5" fill="#34A853" d="M11.6,18.7c0.7-0.5,1.3-1,2-1.5c0.3,0.7,0.7,1.4,1.4,1.8c0.4,0.3,0.9,0.5,1.3,0.6 c0.5,0.1,1,0.1,1.4,0c0.5-0.1,0.9-0.3,1.3-0.5l1.9,1.5c-0.7,0.6-1.5,1.1-2.5,1.3c-1,0.2-2.1,0.2-3.1,0c-0.8-0.2-1.5-0.6-2.2-1.1 C12.6,20.1,12,19.5,11.6,18.7z"></path> <g class="st6"> <path d="M29.7,13h1.4v5.9h2.2V20h-3.6V13z"></path> <path d="M34.7,19.3c-0.5-0.5-0.8-1.2-0.8-2.1c0-0.9,0.3-1.5,0.8-2.1c0.5-0.5,1.2-0.8,2-0.8s1.5,0.3,2,0.8c0.5,0.5,0.8,1.2,0.8,2.1 c0,0.9-0.3,1.5-0.8,2.1c-0.5,0.5-1.2,0.8-2,0.8S35.2,19.8,34.7,19.3z M36.7,18.9c0.4,0,0.7-0.1,1-0.4c0.3-0.3,0.4-0.7,0.4-1.2 c0-0.5-0.1-0.9-0.4-1.2c-0.3-0.3-0.6-0.4-1-0.4s-0.7,0.1-1,0.4c-0.3,0.3-0.4,0.7-0.4,1.2c0,0.5,0.1,0.9,0.4,1.2 C36,18.7,36.3,18.9,36.7,18.9z"></path> <path d="M41.1,19.3c-0.5-0.5-0.7-1.2-0.7-2.1c0-0.8,0.2-1.5,0.7-2c0.5-0.5,1.1-0.8,1.9-0.8c0.8,0,1.3,0.3,1.7,0.9v-0.9h1.4V20 c0,0.8-0.2,1.4-0.7,1.9c-0.5,0.5-1.1,0.8-2,0.8c-0.8,0-1.5-0.2-2-0.5c-0.5-0.3-0.8-0.8-0.8-1.5h1.4c0.1,0.2,0.3,0.4,0.5,0.6 s0.6,0.2,0.9,0.2c0.4,0,0.7-0.1,0.9-0.4c0.3-0.2,0.4-0.6,0.4-1.1v-1c-0.4,0.7-1,1-1.8,1C42.2,20.1,41.6,19.8,41.1,19.3z M44.2,18.4 c0.3-0.3,0.4-0.7,0.4-1.2c0-0.5-0.1-0.9-0.4-1.2s-0.6-0.4-1-0.4c-0.4,0-0.7,0.1-1,0.4c-0.3,0.3-0.4,0.7-0.4,1.2 c0,0.5,0.1,0.9,0.4,1.2c0.3,0.3,0.6,0.4,1,0.4C43.6,18.9,44,18.7,44.2,18.4z"></path> <path d="M49.1,13c0,0.2-0.1,0.4-0.3,0.6c-0.2,0.2-0.4,0.3-0.6,0.3c-0.2,0-0.4-0.1-0.6-0.3c-0.2-0.2-0.3-0.4-0.3-0.6 s0.1-0.4,0.3-0.6c0.2-0.2,0.4-0.3,0.6-0.3c0.2,0,0.4,0.1,0.6,0.3C49.1,12.6,49.1,12.8,49.1,13z M47.6,20v-5.5H49V20H47.6z"></path> <path d="M51.9,14.5v0.8c0.4-0.6,0.9-0.9,1.7-0.9c0.6,0,1.1,0.2,1.6,0.6c0.4,0.4,0.6,1,0.6,1.7V20h-1.4v-3.1c0-0.4-0.1-0.8-0.3-1 c-0.2-0.2-0.5-0.3-0.9-0.3s-0.7,0.1-0.9,0.3c-0.2,0.2-0.3,0.6-0.3,1V20h-1.4v-5.5H51.9z"></path> <path d="M66.5,14.5h1.4L66.2,20h-1.5l-1-3.7l-1,3.7h-1.5l-1.7-5.5H61l1,4.2l1-4.2h1.5l1,4.2L66.5,14.5z"></path> <path d="M70.2,13c0,0.2-0.1,0.4-0.3,0.6c-0.2,0.2-0.4,0.3-0.6,0.3s-0.4-0.1-0.6-0.3c-0.2-0.2-0.3-0.4-0.3-0.6s0.1-0.4,0.3-0.6 c0.2-0.2,0.4-0.3,0.6-0.3s0.4,0.1,0.6,0.3C70.1,12.6,70.2,12.8,70.2,13z M68.7,20v-5.5h1.4V20H68.7z"></path> <path d="M73.7,18.8h0.7V20h-0.9c-0.6,0-1-0.1-1.3-0.4c-0.3-0.3-0.5-0.7-0.5-1.3v-2.7h-0.6v-1.2h0.6v-1.4h1.4v1.4h1.2v1.2h-1.2v2.7 c0,0.2,0,0.3,0.1,0.4C73.4,18.8,73.5,18.8,73.7,18.8z"></path> <path d="M76.9,12.6v2.7c0.4-0.6,0.9-0.9,1.7-0.9c0.6,0,1.1,0.2,1.5,0.6c0.4,0.4,0.6,1,0.6,1.7V20h-1.4v-3.1c0-0.4-0.1-0.8-0.3-1 c-0.2-0.2-0.5-0.3-0.9-0.3s-0.7,0.1-0.9,0.3c-0.2,0.2-0.3,0.6-0.3,1V20h-1.4v-7.4H76.9z"></path> <path d="M85.9,19c-0.7-0.7-1-1.5-1-2.6s0.3-1.9,1-2.6c0.7-0.7,1.5-1,2.5-1c0.8,0,1.4,0.2,2,0.6s1,0.9,1.3,1.6H90 c-0.3-0.6-0.8-0.9-1.6-0.9c-0.6,0-1.1,0.2-1.5,0.6c-0.4,0.4-0.6,1-0.6,1.7c0,0.7,0.2,1.2,0.6,1.7c0.4,0.4,0.9,0.6,1.5,0.6 c0.6,0,1-0.1,1.4-0.4c0.3-0.3,0.5-0.7,0.6-1.1H88v-1.1h3.8v1.1c-0.1,0.8-0.5,1.4-1.1,2c-0.6,0.6-1.4,0.9-2.4,0.9 C87.4,20.1,86.6,19.7,85.9,19z"></path> <path d="M93.3,19.3c-0.5-0.5-0.8-1.2-0.8-2.1c0-0.9,0.3-1.5,0.8-2.1c0.5-0.5,1.2-0.8,2-0.8c0.8,0,1.5,0.3,2,0.8 c0.5,0.5,0.8,1.2,0.8,2.1c0,0.9-0.3,1.5-0.8,2.1s-1.2,0.8-2,0.8S93.9,19.8,93.3,19.3z M95.4,18.9c0.4,0,0.7-0.1,1-0.4 s0.4-0.7,0.4-1.2c0-0.5-0.1-0.9-0.4-1.2c-0.3-0.3-0.6-0.4-1-0.4s-0.7,0.1-1,0.4c-0.3,0.3-0.4,0.7-0.4,1.2c0,0.5,0.1,0.9,0.4,1.2 C94.6,18.7,95,18.9,95.4,18.9z"></path> <path d="M99.8,19.3c-0.5-0.5-0.8-1.2-0.8-2.1c0-0.9,0.3-1.5,0.8-2.1c0.5-0.5,1.2-0.8,2-0.8c0.8,0,1.5,0.3,2,0.8 c0.5,0.5,0.8,1.2,0.8,2.1c0,0.9-0.3,1.5-0.8,2.1c-0.5,0.5-1.2,0.8-2,0.8S100.3,19.8,99.8,19.3z M101.8,18.9c0.4,0,0.7-0.1,1-0.4 c0.3-0.3,0.4-0.7,0.4-1.2c0-0.5-0.1-0.9-0.4-1.2c-0.3-0.3-0.6-0.4-1-0.4s-0.7,0.1-1,0.4c-0.3,0.3-0.4,0.7-0.4,1.2 c0,0.5,0.1,0.9,0.4,1.2C101.1,18.7,101.4,18.9,101.8,18.9z"></path> <path d="M106.2,19.3c-0.5-0.5-0.7-1.2-0.7-2.1c0-0.8,0.2-1.5,0.7-2s1.1-0.8,1.9-0.8c0.8,0,1.3,0.3,1.7,0.9v-0.9h1.4V20 c0,0.8-0.2,1.4-0.7,1.9c-0.5,0.5-1.1,0.8-2,0.8c-0.8,0-1.5-0.2-2-0.5c-0.5-0.3-0.8-0.8-0.8-1.5h1.4c0.1,0.2,0.3,0.4,0.5,0.6 c0.2,0.1,0.6,0.2,0.9,0.2c0.4,0,0.7-0.1,0.9-0.4c0.3-0.2,0.4-0.6,0.4-1.1v-1c-0.4,0.7-1,1-1.8,1S106.7,19.8,106.2,19.3z M109.3,18.4c0.3-0.3,0.4-0.7,0.4-1.2c0-0.5-0.1-0.9-0.4-1.2c-0.3-0.3-0.6-0.4-1-0.4c-0.4,0-0.7,0.1-1,0.4 c-0.3,0.3-0.4,0.7-0.4,1.2c0,0.5,0.1,0.9,0.4,1.2c0.3,0.3,0.6,0.4,1,0.4S109,18.7,109.3,18.4z"></path> <path d="M112.7,20v-7.4h1.4V20H112.7z"></path> <path d="M117.9,20.1c-0.8,0-1.5-0.3-2-0.8c-0.5-0.5-0.8-1.2-0.8-2.1c0-0.9,0.3-1.5,0.8-2.1s1.2-0.8,2-0.8c0.8,0,1.5,0.3,2,0.8 c0.5,0.5,0.8,1.2,0.8,2c0,0.2,0,0.4,0,0.5h-4c0,0.4,0.2,0.6,0.4,0.9c0.2,0.2,0.5,0.3,0.9,0.3c0.5,0,0.8-0.2,1.1-0.6h1.5 c-0.2,0.5-0.5,1-0.9,1.3S118.6,20.1,117.9,20.1z M118.9,15.9c-0.3-0.2-0.6-0.3-0.9-0.3s-0.6,0.1-0.9,0.3c-0.2,0.2-0.4,0.5-0.4,0.9 h2.6C119.2,16.4,119.1,16.1,118.9,15.9z"></path> </g> </svg>
                </a>
                </div>
           </div>
        </form>    
   </div>
</div>`;
}

let header = () => {
  return `
    <div class="inner-header">
    <div class="inner-header__left">
        <a href="/" class="inner-header__left__logo">
        <img src="https://www.beardo.in/images/logo-white.png" alt="" class="logo lazy loading" data-was-processed="true">
        </a>
        <nav>
            <li class="">
                <!-- add class show to show category -->
                <a href="javascript:void(0);">Products<span class="arrow-down"></span></a>
                <div class="categories-new-body__cat-header">
                    <div class="categories-new-body__cat-header__main-cat category">
                        <a href="javascript:void(0);" class="active" id="cat-18">Combos</a>
                        <a href="javascript:void(0);" class="" id="cat-1">Beard</a>
                        <a href="javascript:void(0);" class="" id="cat-5">Face</a>
                        <a href="javascript:void(0);" class="" id="cat-4">Hair</a>
                        <a href="javascript:void(0);" class="" id="cat-12">Body</a>
                        <a href="javascript:void(0);" class="" id="cat-2">Fragrance</a>
                        <a href="javascript:void(0);" class="" id="cat-15">Beardo Fashion</a>
                        <a href="javascript:void(0);" class="" id="cat-10">Trimmers</a>
                    <!-- <a href="javascript:void(0);">Fragrance</a> -->
                    </div>

                                <div class="categories-new-body__cat-header__sub-cat  sub-category sub-cat-1 hide" id="sub-cat-1">
            <div class="tns-outer" id="tns1-ow"><div class="tns-controls" aria-label="Carousel Navigation" tabindex="0" style="display: none;"><button data-controls="prev" tabindex="-1" aria-controls="tns1">prev</button><button data-controls="next" tabindex="-1" aria-controls="tns1">next</button></div><div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">1 to 4</span>  of 4</div><div id="tns1-mw" class="tns-ovh"><div class="tns-inner" id="tns1-iw"><div class="categories-new-body__cat-header__sub-cat__slider  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal" id="tns1" style="transition-duration: 0s; transform: translate3d(0%, 0px, 0px);">
                                                                <div class="tns-item tns-slide-active" id="tns1-item0">
                            <a href="product.html" class="">
                                <img class="lazy" src="https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy9ncm93dGgtb2lsLTEwMjR4MTAyNC04MzY0LnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODAsImhlaWdodCI6MSwiZml0Ijoib3V0c2lkZSJ9fX0=" alt="">
                                <p>Beard Growth</p>
                            </a>
                        </div>
                                                                <div class="tns-item tns-slide-active" id="tns1-item1">
                            <a href="product.html" class="">
                                <img class="lazy" src="https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy9iZWFyZC1zZXJ1bS0xMDI0eDEwMjQtODM3NS5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgwLCJoZWlnaHQiOjEsImZpdCI6Im91dHNpZGUifX19" alt="">
                                <p>Beard Styling</p>
                            </a>
                        </div>
                                                                <div class="tns-item tns-slide-active" id="tns1-item2">
                            <a href="product.html" class="">
                                <img class="lazy" src="https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy9iZWFyZC1jb2xvci0xMDI0eDEwMjQtODM3NC5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgwLCJoZWlnaHQiOjEsImZpdCI6Im91dHNpZGUifX19" alt="">
                                <p>Beard Color</p>
                            </a>
                        </div>
                                                                <div class="tns-item tns-slide-active" id="tns1-item3">
                            <a href="product.html" class="">
                                <img class="lazy" src="https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy9zaGVlc2hhbS1iZWFyZC1jb21iLTEtODY1Ny5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgwLCJoZWlnaHQiOjEsImZpdCI6Im91dHNpZGUifX19" alt="">
                                <p>Beard Tools</p>
                            </a>
                        </div>
                                                    </div></div></div></div>
        </div>
                                <div class="categories-new-body__cat-header__sub-cat  sub-category sub-cat-12 hide" id="sub-cat-12">
            <div class="tns-outer" id="tns2-ow"><div class="tns-controls" aria-label="Carousel Navigation" tabindex="0" style="display: none;"><button data-controls="prev" tabindex="-1" aria-controls="tns2">prev</button><button data-controls="next" tabindex="-1" aria-controls="tns2">next</button></div><div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">1 to 5</span>  of 5</div><div id="tns2-mw" class="tns-ovh"><div class="tns-inner" id="tns2-iw"><div class="categories-new-body__cat-header__sub-cat__slider  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal" id="tns2" style="transition-duration: 0s; transform: translate3d(0%, 0px, 0px);">
                                                                <div class="tns-item tns-slide-active" id="tns2-item0">
                            <a href="product.html" class="">
                                <img class="lazy" src="https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy9hY3RpdmF0ZWQtY2hhcmNvYWwtYm9keXdhc2gtNTEyeDUxMi0xMjI0NS0xMzExNS5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgwLCJoZWlnaHQiOjEsImZpdCI6Im91dHNpZGUifX19" alt="">
                                <p>Bodywash</p>
                            </a>
                        </div>
                                                                <div class="tns-item tns-slide-active" id="tns2-item1">
                            <a href="product.html" class="">
                                <img class="lazy" src="https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy9kZWVwLXNlYS1icmljay1zb2FwLTUxMng1MTItMTMxMTQtMS0zNjk1NS5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgwLCJoZWlnaHQiOjEsImZpdCI6Im91dHNpZGUifX19" alt="">
                                <p>Soaps</p>
                            </a>
                        </div>
                                                                <div class="tns-item tns-slide-active" id="tns2-item2">
                            <a href="product.html" class="">
                                <img class="lazy" src="https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy92aXRhbWluLWMteW9ndXJ0LTUxMng1MTItMS0xMTA2MS0xMzE1NC5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgwLCJoZWlnaHQiOjEsImZpdCI6Im91dHNpZGUifX19" alt="">
                                <p>Body Nourishment</p>
                            </a>
                        </div>
                                                                <div class="tns-item tns-slide-active" id="tns2-item3">
                            <a href="product.html" class="">
                                <img class="lazy" src="https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy90YXR0b28tc2hpbmVyLTEwMjR4MTAyNC04MzY4LnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODAsImhlaWdodCI6MSwiZml0Ijoib3V0c2lkZSJ9fX0=" alt="">
                                <p>Tattoo Care</p>
                            </a>
                        </div>
                                                                <div class="tns-item tns-slide-active" id="tns2-item4">
                            <a href="product.html" class="">
                                <img class="lazy" src="https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy9pbnRpbWF0ZS13YXNoLTEwMjR4MTAyNC0yLTgzNjkucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4MCwiaGVpZ2h0IjoxLCJmaXQiOiJvdXRzaWRlIn19fQ==" alt="">
                                <p>Intimate care</p>
                            </a>
                        </div>
                                                    </div></div></div></div>
        </div>
                                <div class="categories-new-body__cat-header__sub-cat  sub-category sub-cat-5 hide" id="sub-cat-5">
            <div class="tns-outer" id="tns3-ow"><div class="tns-controls" aria-label="Carousel Navigation" tabindex="0" style="display: none;"><button data-controls="prev" tabindex="-1" aria-controls="tns3">prev</button><button data-controls="next" tabindex="-1" aria-controls="tns3">next</button></div><div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">1 to 6</span>  of 6</div><div id="tns3-mw" class="tns-ovh"><div class="tns-inner" id="tns3-iw"><div class="categories-new-body__cat-header__sub-cat__slider  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal" id="tns3" style="transition-duration: 0s; transform: translate3d(0%, 0px, 0px);">
                                                                <div class="tns-item tns-slide-active" id="tns3-item0">
                            <a href="product.html" class="">
                                <img class="lazy" src="https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy92aXRhbWluLWMtY29tcGxldGUtY2FyZS1jb21iby01MTJ4NTEyLTExNzE1LTEyMDY2LnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODAsImhlaWdodCI6MSwiZml0Ijoib3V0c2lkZSJ9fX0=" alt="">
                                <p>Vitamin C Range</p>
                            </a>
                        </div>
                                                                <div class="tns-item tns-slide-active" id="tns3-item1">
                            <a href="product.html" class="">
                                <img class="lazy" src="https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy9hY3RpdmF0ZWQtY2hhcmNvYWwtZmFjZXdhc2gtMTAyNHgxMDI0LTg0MDEucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4MCwiaGVpZ2h0IjoxLCJmaXQiOiJvdXRzaWRlIn19fQ==" alt="">
                                <p>Facewash</p>
                            </a>
                        </div>
                                                                <div class="tns-item tns-slide-active" id="tns3-item2">
                            <a href="product.html" class="">
                                <img class="lazy" src="https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy9uZWVtLWZhY2Utc2NydWItMTAyNHgxMDI0LTgzNzkucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4MCwiaGVpZ2h0IjoxLCJmaXQiOiJvdXRzaWRlIn19fQ==" alt="">
                                <p>Scrubs &amp; Masks</p>
                            </a>
                        </div>
                                                                <div class="tns-item tns-slide-active" id="tns3-item3">
                            <a href="product.html" class="">
                                <img class="lazy" src="https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy91bmRlci1leWUtZ2VsLTEwMjR4MTAyNC04MzcyLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODAsImhlaWdodCI6MSwiZml0Ijoib3V0c2lkZSJ9fX0=" alt="">
                                <p>Eye Care</p>
                            </a>
                        </div>
                                                                <div class="tns-item tns-slide-active" id="tns3-item4">
                            <a href="product.html" class="">
                                <img class="lazy" src="https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy91bHRyYWdsb3ctbG90aW9uLTEwMjR4MTAyNC04MzgwLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODAsImhlaWdodCI6MSwiZml0Ijoib3V0c2lkZSJ9fX0=" alt="">
                                <p>Face Moisturizers and Serums</p>
                            </a>
                        </div>
                                                                <div class="tns-item tns-slide-active" id="tns3-item5">
                            <a href="product.html" class="">
                                <img class="lazy" src="https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy9saXAtbGlnaHRlbmVyLTEwMjR4MTAyNC04MzgyLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODAsImhlaWdodCI6MSwiZml0Ijoib3V0c2lkZSJ9fX0=" alt="">
                                <p>Lip Care</p>
                            </a>
                        </div>
                                                    </div></div></div></div>
        </div>
                                <div class="categories-new-body__cat-header__sub-cat  sub-category sub-cat-18 " id="sub-cat-18">
            <div class="tns-outer" id="tns4-ow"><div class="tns-controls" aria-label="Carousel Navigation" tabindex="0" style="display: none;"><button data-controls="prev" tabindex="-1" aria-controls="tns4">prev</button><button data-controls="next" tabindex="-1" aria-controls="tns4">next</button></div><div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">1 to 3</span>  of 3</div><div id="tns4-mw" class="tns-ovh"><div class="tns-inner" id="tns4-iw"><div class="categories-new-body__cat-header__sub-cat__slider  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal" id="tns4" style="transition-duration: 0s; transform: translate3d(0%, 0px, 0px);">
                                                                <div class="tns-item tns-slide-active" id="tns4-item0">
                            <a href="product.html" class="">
                                <img class="lazy loading" src="https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy91bHRpbWF0ZS1mdy10cmlvLTUxMng1MTItMTE5NDAucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4MCwiaGVpZ2h0IjoxLCJmaXQiOiJvdXRzaWRlIn19fQ==" alt="" data-was-processed="true">
                                <p>Top Sellers</p>
                            </a>
                        </div>
                                                                <div class="tns-item tns-slide-active" id="tns4-item1">
                            <a href="product.html" class="">
                                <img class="lazy loading" src="https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy9iZWFyZC1ncm93dGgtY29tYm8tNTEyeDUxMi01MjI3LTExOTQxLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODAsImhlaWdodCI6MSwiZml0Ijoib3V0c2lkZSJ9fX0=" alt="" data-was-processed="true">
                                <p>Below 999 Combos</p>
                            </a>
                        </div>
                                                                <div class="tns-item tns-slide-active" id="tns4-item2">
                            <a href="product.html" class="">
                                <img class="lazy loading" src="https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy9jaGFyY29hbC1id2Z3LTUxMng1MTItNzI3OC0xMTk0OS5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgwLCJoZWlnaHQiOjEsImZpdCI6Im91dHNpZGUifX19" alt="" data-was-processed="true">
                                <p>Below 499 Combos</p>
                            </a>
                        </div>
                                                    </div></div></div></div>
        </div>
                                <div class="categories-new-body__cat-header__sub-cat  sub-category sub-cat-15 hide" id="sub-cat-15">
            <div class="tns-outer" id="tns5-ow"><div class="tns-controls" aria-label="Carousel Navigation" tabindex="0" style="display: none;"><button data-controls="prev" tabindex="-1" aria-controls="tns5">prev</button><button data-controls="next" tabindex="-1" aria-controls="tns5">next</button></div><div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">1 to 3</span>  of 3</div><div id="tns5-mw" class="tns-ovh"><div class="tns-inner" id="tns5-iw"><div class="categories-new-body__cat-header__sub-cat__slider  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal" id="tns5" style="transition-duration: 0s; transform: translate3d(0%, 0px, 0px);">
                                                                <div class="tns-item tns-slide-active" id="tns5-item0">
                            <a href="product.html" class="">
                                <img class="lazy" src="https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy9yc3otMXJzei1zaGVlc2hhbS1iZWFyZC1jb21iLTEtMS0xLTgzNjIucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4MCwiaGVpZ2h0IjoxLCJmaXQiOiJvdXRzaWRlIn19fQ==" alt="">
                                <p>Accessories</p>
                            </a>
                        </div>
                                                                <div class="tns-item tns-slide-active" id="tns5-item1">
                            <a href="product.html" class="">
                                <img class="lazy" src="https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy90LXNoaXJ0LTEwMjR4MTAyNC04MzcwLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODAsImhlaWdodCI6MSwiZml0Ijoib3V0c2lkZSJ9fX0=" alt="">
                                <p>T-shirts</p>
                            </a>
                        </div>
                                                                <div class="tns-item tns-slide-active" id="tns5-item2">
                            <a href="product.html" class="">
                                <img class="lazy" src="https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy9sZWF0aGVyLWphY2tldC0xMDI0eDEwMjQtMS0xLTk0MjIucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4MCwiaGVpZ2h0IjoxLCJmaXQiOiJvdXRzaWRlIn19fQ==" alt="">
                                <p>Jackets</p>
                            </a>
                        </div>
                                                    </div></div></div></div>
        </div>
                                <div class="categories-new-body__cat-header__sub-cat  sub-category sub-cat-10 hide" id="sub-cat-10">
            <div class="tns-outer" id="tns6-ow"><div class="tns-controls" aria-label="Carousel Navigation" tabindex="0" style="display: none;"><button data-controls="prev" tabindex="-1" aria-controls="tns6">prev</button><button data-controls="next" tabindex="-1" aria-controls="tns6">next</button></div><div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">1</span>  of 1</div><div id="tns6-mw" class="tns-ovh"><div class="tns-inner" id="tns6-iw"><div class="categories-new-body__cat-header__sub-cat__slider  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal" id="tns6" style="transition-duration: 0s; transform: translate3d(0%, 0px, 0px);">
                                                                <div class="tns-item tns-slide-active" id="tns6-item0">
                            <a href="product.html" class="">
                                <img class="lazy" src="https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy9ncm9vbWluZy1raXQtMDEtODM3My5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgwLCJoZWlnaHQiOjEsImZpdCI6Im91dHNpZGUifX19" alt="">
                                <p>Trimmers</p>
                            </a>
                        </div>
                                                    </div></div></div></div>
        </div>
                                <div class="categories-new-body__cat-header__sub-cat  sub-category sub-cat-2 hide" id="sub-cat-2">
            <div class="tns-outer" id="tns7-ow"><div class="tns-controls" aria-label="Carousel Navigation" tabindex="0" style="display: none;"><button data-controls="prev" tabindex="-1" aria-controls="tns7">prev</button><button data-controls="next" tabindex="-1" aria-controls="tns7">next</button></div><div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">1 to 2</span>  of 2</div><div id="tns7-mw" class="tns-ovh"><div class="tns-inner" id="tns7-iw"><div class="categories-new-body__cat-header__sub-cat__slider  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal" id="tns7" style="transition-duration: 0s; transform: translate3d(0%, 0px, 0px);">
                                                                <div class="tns-item tns-slide-active" id="tns7-item0">
                            <a href="product.html" class="">
                                <img class="lazy" src="https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy9kYXJrLXNpZGUtcGVyZnVtZS0xMDI0eDEwMjQtODM3Ny5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgwLCJoZWlnaHQiOjEsImZpdCI6Im91dHNpZGUifX19" alt="">
                                <p>EDP (Strong perfumes)</p>
                            </a>
                        </div>
                                                                <div class="tns-item tns-slide-active" id="tns7-item1">
                            <a href="product.html" class="">
                                <img class="lazy" src="https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy9yc3otc3B5LWRpby01MTJ4NTEyLTg0MDQucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4MCwiaGVpZ2h0IjoxLCJmaXQiOiJvdXRzaWRlIn19fQ==" alt="">
                                <p>Perfume Body Spray</p>
                            </a>
                        </div>
                                                    </div></div></div></div>
        </div>
                                <div class="categories-new-body__cat-header__sub-cat  sub-category sub-cat-4 hide" id="sub-cat-4">
            <div class="tns-outer" id="tns8-ow"><div class="tns-controls" aria-label="Carousel Navigation" tabindex="0" style="display: none;"><button data-controls="prev" tabindex="-1" aria-controls="tns8">prev</button><button data-controls="next" tabindex="-1" aria-controls="tns8">next</button></div><div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">1 to 3</span>  of 3</div><div id="tns8-mw" class="tns-ovh"><div class="tns-inner" id="tns8-iw"><div class="categories-new-body__cat-header__sub-cat__slider  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal" id="tns8" style="transition-duration: 0s; transform: translate3d(0%, 0px, 0px);">
                                                                <div class="tns-item tns-slide-active" id="tns8-item0">
                            <a href="product.html" class="">
                                <img class="lazy" src="https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy9oYWlyLXNlcnVtLTEwMjR4MTAyNC04MzMyLTg2NTgucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4MCwiaGVpZ2h0IjoxLCJmaXQiOiJvdXRzaWRlIn19fQ==" alt="">
                                <p>Oils and Serums</p>
                            </a>
                        </div>
                                                                <div class="tns-item tns-slide-active" id="tns8-item1">
                            <a href="product.html" class="">
                                <img class="lazy" src="https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy9zdHJvbmctaG9sZC13YXgtbmV3LTUxMng1MTItMTI0MTgucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4MCwiaGVpZ2h0IjoxLCJmaXQiOiJvdXRzaWRlIn19fQ==" alt="">
                                <p>Hair Styling and Grooming</p>
                            </a>
                        </div>
                                                                <div class="tns-item tns-slide-active" id="tns8-item2">
                            <a href="product.html" class="">
                                <img class="lazy" src="https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy9oYWlyLWZhbGwtY29udHJvbC1zaGFtcG9vLTEwMjR4MTAyNC04Mzc4LnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODAsImhlaWdodCI6MSwiZml0Ijoib3V0c2lkZSJ9fX0=" alt="">
                                <p>Shampoos &amp; Conditioners</p>
                            </a>
                        </div>
                                                    </div></div></div></div>
        </div>
                    </div>
    </li>
    <li class="">
    <a href="javascript:void(0);">Concerns<span class="arrow-down"></span></a>
    <div class="categories-new-body__cat-header">
    <div class="categories-new-body__cat-header__main-cat concern">
                                    <a href="javascript:void(0);" class="active" id="con-1">Beard</a>
                                    <a href="javascript:void(0);" class="" id="con-3">Face</a>
                                    <a href="javascript:void(0);" class="" id="con-4">Hair</a>
                                    <a href="javascript:void(0);" class="" id="con-5">Body</a>
                            </div>
                                <div class="categories-new-body__cat-header__sub-cat sub-concern sub-con-1  " id="sub-con-1">
            <div class="tns-outer" id="tns9-ow"><div class="tns-controls" aria-label="Carousel Navigation" tabindex="0" style="display: none;"><button data-controls="prev" tabindex="-1" aria-controls="tns9">prev</button><button data-controls="next" tabindex="-1" aria-controls="tns9">next</button></div><div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">1 to 4</span>  of 4</div><div id="tns9-mw" class="tns-ovh"><div class="tns-inner" id="tns9-iw"><div class="categories-new-body__cat-header__sub-cat__slider  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal" id="tns9" style="transition-duration: 0s; transform: translate3d(0%, 0px, 0px);">
                                                                <div class="tns-item tns-slide-active" id="tns9-item0">
                            <a href="product.html" class="">
                                <img class="lazy loading" src="https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy9ncm93dGgtb2lsLTEwMjR4MTAyNC04Mzg0LnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODAsImhlaWdodCI6MSwiZml0Ijoib3V0c2lkZSJ9fX0=" alt="" data-was-processed="true">
                                <p>Beard Growth</p>
                            </a>
                        </div>
                                                                <div class="tns-item tns-slide-active" id="tns9-item1">
                            <a href="product.html" class="">
                                <img class="lazy loading" src="https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy9iZWFyZC1zb2Z0bmVyLTEwMjR4MTAyNC04NDAyLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODAsImhlaWdodCI6MSwiZml0Ijoib3V0c2lkZSJ9fX0=" alt="" data-was-processed="true">
                                <p>Rough &amp; Itchy</p>
                            </a>
                        </div>
                                                                <div class="tns-item tns-slide-active" id="tns9-item2">
                            <a href="product.html" class="">
                                <img class="lazy loading" src="https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy9iZWFyZC1zZXJ1bS0xMDI0eDEwMjQtODM5OS5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgwLCJoZWlnaHQiOjEsImZpdCI6Im91dHNpZGUifX19" alt="" data-was-processed="true">
                                <p>Long Beard Grooming</p>
                            </a>
                        </div>
                                                                <div class="tns-item tns-slide-active" id="tns9-item3">
                            <a href="product.html" class="">
                                <img class="lazy loading" src="https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy9iZWFyZC1tdXN0YWNoZS13YXgtZXh0cmEtc3Ryb25nLTEwMjR4MTAyNC04NDAwLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODAsImhlaWdodCI6MSwiZml0Ijoib3V0c2lkZSJ9fX0=" alt="" data-was-processed="true">
                                <p>Short Beard Grooming</p>
                            </a>
                        </div>
                                                    </div></div></div></div>
        </div>
                                <div class="categories-new-body__cat-header__sub-cat sub-concern sub-con-3  hide" id="sub-con-3">
            <div class="tns-outer" id="tns10-ow"><div class="tns-controls" aria-label="Carousel Navigation" tabindex="0" style="display: none;"><button data-controls="prev" tabindex="-1" aria-controls="tns10">prev</button><button data-controls="next" tabindex="-1" aria-controls="tns10">next</button></div><div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">1 to 7</span>  of 7</div><div id="tns10-mw" class="tns-ovh"><div class="tns-inner" id="tns10-iw"><div class="categories-new-body__cat-header__sub-cat__slider  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal" id="tns10" style="transition-duration: 0s; transform: translate3d(0%, 0px, 0px);">
                                                                <div class="tns-item tns-slide-active" id="tns10-item0">
                            <a href="product.html" class="">
                                <img class="lazy" src="https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy91bHRyYWdsb3ctZmFjZXdhc2gtMTAyNHgxMDI0LTg2NTkucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4MCwiaGVpZ2h0IjoxLCJmaXQiOiJvdXRzaWRlIn19fQ==" alt="">
                                <p>Skin Glow</p>
                            </a>
                        </div>
                                                                <div class="tns-item tns-slide-active" id="tns10-item1">
                            <a href="product.html" class="">
                                <img class="lazy" src="https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy9saXAtbGlnaHRlbmVyLTEwMjR4MTAyNC04Mzg1LnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODAsImhlaWdodCI6MSwiZml0Ijoib3V0c2lkZSJ9fX0=" alt="">
                                <p>Dark &amp; Chapped Lips</p>
                            </a>
                        </div>
                                                                <div class="tns-item tns-slide-active" id="tns10-item2">
                            <a href="product.html" class="">
                                <img class="lazy" src="https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy9hY3RpdmF0ZWQtY2hhcmNvYWwtZmFjZXdhc2gtMTAyNHgxMDI0LTgzOTMucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4MCwiaGVpZ2h0IjoxLCJmaXQiOiJvdXRzaWRlIn19fQ==" alt="">
                                <p>Dirt and Pollution control</p>
                            </a>
                        </div>
                                                                <div class="tns-item tns-slide-active" id="tns10-item3">
                            <a href="product.html" class="">
                                <img class="lazy" src="https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy91bmRlci1leWUtZ2VsLTEwMjR4MTAyNC04Mzk0LnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODAsImhlaWdodCI6MSwiZml0Ijoib3V0c2lkZSJ9fX0=" alt="">
                                <p>Dark Circles</p>
                            </a>
                        </div>
                                                                <div class="tns-item tns-slide-active" id="tns10-item4">
                            <a href="product.html" class="">
                                <img class="lazy" src="https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy9hbnRpLWFjbmUtZmFjZS13YXNoLXR1cm1lcmljLTEwMjR4MTAyNC04Mzk1LnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODAsImhlaWdodCI6MSwiZml0Ijoib3V0c2lkZSJ9fX0=" alt="">
                                <p>Oily Skin</p>
                            </a>
                        </div>
                                                                <div class="tns-item tns-slide-active" id="tns10-item5">
                            <a href="product.html" class="">
                                <img class="lazy" src="https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy9iZWFyZG8tdHVybWVyaWMtZmFjZS1nZWwtMTAyNHgxMDI0LTgzNTYucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4MCwiaGVpZ2h0IjoxLCJmaXQiOiJvdXRzaWRlIn19fQ==" alt="">
                                <p>Acne/ Pimples</p>
                            </a>
                        </div>
                                                                <div class="tns-item tns-slide-active" id="tns10-item6">
                            <a href="product.html" class="">
                                <img class="lazy" src="https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy9kZS10YW4tZmFjZXdhc2gtMTAyNHgxMDI0LTgzOTgucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4MCwiaGVpZ2h0IjoxLCJmaXQiOiJvdXRzaWRlIn19fQ==" alt="">
                                <p>Tanned Skin</p>
                            </a>
                        </div>
                                                    </div></div></div></div>
        </div>
                                <div class="categories-new-body__cat-header__sub-cat sub-concern sub-con-4  hide" id="sub-con-4">
            <div class="tns-outer" id="tns11-ow"><div class="tns-controls" aria-label="Carousel Navigation" tabindex="0" style="display: none;"><button data-controls="prev" tabindex="-1" aria-controls="tns11">prev</button><button data-controls="next" tabindex="-1" aria-controls="tns11">next</button></div><div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">1 to 4</span>  of 4</div><div id="tns11-mw" class="tns-ovh"><div class="tns-inner" id="tns11-iw"><div class="categories-new-body__cat-header__sub-cat__slider  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal" id="tns11" style="transition-duration: 0s; transform: translate3d(0%, 0px, 0px);">
                                                                <div class="tns-item tns-slide-active" id="tns11-item0">
                            <a href="product.html" class="">
                                <img class="lazy" src="https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy9oYWlyLXRoaWNoZW5pbmctc2VydW0tc3ByYXktMTAyNHgxMDI0LTg2NjAucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4MCwiaGVpZ2h0IjoxLCJmaXQiOiJvdXRzaWRlIn19fQ==" alt="">
                                <p>Hair Thinning</p>
                            </a>
                        </div>
                                                                <div class="tns-item tns-slide-active" id="tns11-item1">
                            <a href="product.html" class="">
                                <img class="lazy" src="https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy9oYWlyLXRoaWNoZW5pbmctc2VydW0tc3ByYXktMTAyNHgxMDI0LTgzNDEucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4MCwiaGVpZ2h0IjoxLCJmaXQiOiJvdXRzaWRlIn19fQ==" alt="">
                                <p>Hairfall and Balding</p>
                            </a>
                        </div>
                                                                <div class="tns-item tns-slide-active" id="tns11-item2">
                            <a href="product.html" class="">
                                <img class="lazy" src="https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy9kYW5kcnVmZi1jb250cm9sLXNoYW1wb28td2l0aC1hcHBsZS1jaWRlci12aW5lZ2FyLTEwMjR4MTAyNC04Mzg3LnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODAsImhlaWdodCI6MSwiZml0Ijoib3V0c2lkZSJ9fX0=" alt="">
                                <p>Dandruff</p>
                            </a>
                        </div>
                                                                <div class="tns-item tns-slide-active" id="tns11-item3">
                            <a href="" class="">
                                <img class="lazy" src="https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy9oYWlyLXNlcnVtLTEwMjR4MTAyNC04Mzg4LnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODAsImhlaWdodCI6MSwiZml0Ijoib3V0c2lkZSJ9fX0=" alt="">
                                <p>Rough &amp; Damaged Hair</p>
                            </a>
                        </div>
                                                    </div></div></div></div>
        </div>
                                <div class="categories-new-body__cat-header__sub-cat sub-concern sub-con-5  hide" id="sub-con-5">
            <div class="tns-outer" id="tns12-ow"><div class="tns-controls" aria-label="Carousel Navigation" tabindex="0" style="display: none;"><button data-controls="prev" tabindex="-1" aria-controls="tns12">prev</button><button data-controls="next" tabindex="-1" aria-controls="tns12">next</button></div><div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">1 to 4</span>  of 4</div><div id="tns12-mw" class="tns-ovh"><div class="tns-inner" id="tns12-iw"><div class="categories-new-body__cat-header__sub-cat__slider  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal" id="tns12" style="transition-duration: 0s; transform: translate3d(0%, 0px, 0px);">
                                                                <div class="tns-item tns-slide-active" id="tns12-item0">
                            <a href="" class="">
                                <img class="lazy" src="https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy93aXBlb3V0LWhhbmR3YXNoLTEwMjR4MTAyNC04Mzg5LnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODAsImhlaWdodCI6MSwiZml0Ijoib3V0c2lkZSJ9fX0=" alt="">
                                <p>Germ Control</p>
                            </a>
                        </div>
                                                                <div class="tns-item tns-slide-active" id="tns12-item1">
                            <a href="" class="">
                                <img class="lazy" src="https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy90YXR0b28tc2hpbmVyLTEwMjR4MTAyNC04MzkwLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODAsImhlaWdodCI6MSwiZml0Ijoib3V0c2lkZSJ9fX0=" alt="">
                                <p>Tattoo Care</p>
                            </a>
                        </div>
                                                                <div class="tns-item tns-slide-active" id="tns12-item2">
                            <a href="" class="">
                                <img class="lazy" src="https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy9kYXJrLXNpZGUtcGVyZnVtZS0xMDI0eDEwMjQtODM5Mi5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgwLCJoZWlnaHQiOjEsImZpdCI6Im91dHNpZGUifX19" alt="">
                                <p>Body odour</p>
                            </a>
                        </div>
                                                                <div class="tns-item tns-slide-active" id="tns12-item3">
                            <a href="" class="">
                                <img class="lazy" src="https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy9ib2R5LWxvdGlvbi13aXRoLWFsb2UtdmVyYS10ZWEtdHJlZS1vaWwtMTAyNHgxMDI0LTgzOTcucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4MCwiaGVpZ2h0IjoxLCJmaXQiOiJvdXRzaWRlIn19fQ==" alt="">
                                <p>Dry Skin</p>
                            </a>
                        </div>
                                                    </div></div></div></div>
        </div>
                    </div>
    </li>
    </nav>
    </div>
    <div class="inner-header__center">
    <form onsubmit="window.location = './search.html' + encodeURIComponent($('product page/beardo project/product.htmlheaderSearch').val()); return false;">
    <input type="text" name="search" class="inner-header__center__search" id="headerSearch" autocomplete="off" autocorrect="off" value="" autocapitalize="off" spellcheck="false" placeholder="Search">
    </form>
    </div>
    <div class="inner-header__right">
    <div class="inner-header__right__left">
    <a href="">
    <img class="lazy loading" src="https://www.beardo.in/images/vip-text.svg" alt="" data-was-processed="true">
    </a>
    <a href="wallet.html">
    <img class="lazy loading" src="https://www.beardo.in/images/wallet-text.svg" alt="" data-was-processed="true">
    </a>
    <a href="cart.html" class="cart-img">
    <img class="lazy loading" src="https://www.beardo.in/images/home-2018-05-cart.png" alt="" data-was-processed="true">
    <div class="badge">0</div>
    </a>
    </div>
    <div class="inner-header__right__right">
            <a id="login_btn_on_header" href="login.html">Login <span class="arrow-down"></span></a>
        
    </div>
    </div>
    </div>
    <div class="thunder-ads">
  <a href="index.html" id="add_img"><img id="skybanner" src="https://images.beardo.in/eyJidWNrZXQiOiJiZWFyZG9jIiwia2V5IjoidXBsb2Fkcy9iZWFyZG8tc2t5LWJhbm5lci0xNjAwLXgtMTIwLTA0LTM1MzEzLTEtMzg3MDguanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxNjAwLCJoZWlnaHQiOjEsImZpdCI6Im91dHNpZGUifX19" class="lazy thunder-ads-desktop loaded" data-was-processed="true"></a>
  </div>`;
};

let footer = () => {
  return `    <footer class="footervisible">
  <div class="container">
      <div class="footer">
          <div class="first-col">
              <h1>products</h1>
              <ul>
                  <div class="firstdiv">
                        <a href="#"><li>Combos </li></a>
                            <a href="#"><li>Beard </li></a>
                            <a href="#"><li>Face </li></a>
                            <a href="#"><li>Hair </li></a>
                            <a href="#"><li>Body </li></a>
                            </div>
                          <div class="secdiv">
                            <a href="#"><li>Fragrance </li></a>
                            <a href="#"><li>Beardo Fashion </li></a>
                            <a href="#"><li>Trimmers </li></a>
                        </div>	
                      <div class="thirddiv">
                          <a href="#"><li> Who we are </li></a>
                          <a href="#"><li>Community </li></a>
                          <a href="#"><li>Blog </li></a>
                          <a href="#"><li>Beardothon</li></a>
                          <a href="#"><li>Contact us</li></a>
                      </div>	
                      <div class="fourthdiv">
                          <a href="#"><li> Careers</li></a>
                      </div>	

                  </ul>

              </div>
              <div class="sec-col">
                  <h1>order</h1>
                  <ul>

                      <div>
                          <a href="login.html"><li>Account </li></a>
                          <a href="cart.html"><li>Cart </li></a>
                          <a href="#"><li>Wishlist </li></a>
                          <a href="#"><li>Track Order </li></a>
                          <a href="wallet/wallet.html"><li>Beardo Wallet</li></a>
                      </div>	
                      <div>
                          <a href="#"><li>FAQ's</li></a>
                          <a href="#"><li>Terms &amp; Conditions</li></a>
                          <a href="#"><li> Privacy Policy </li></a>
                          <a href="#"><li>Return &amp; Refund Policy </li></a>
                          <a href="#"><li>Return &amp; Refund Policy </li></a>
                                                                                                                                                                                                      <a href="/vip-club-terms"><li>VIP CLUB T&amp;C</li></a>
                        <a class="" href="#"><li>Terms &amp; Conditions - 2020 Stock Clearance Sale </li></a>
                        <!-- <a href="/spin2win-terms"><li>Spin 2 Win Terms </li></a> -->
                      </div>	
                  </ul>
              </div>
              <div class="third-col">
                  <h1>community</h1>
                  <div class="socialimg">
                      <a href="#" target="_blank"><img src="https://www.beardo.in/images/fb.png"></a>
                      <a href="#" target="_blank"><img src="https://www.beardo.in/images/instag.png"></a>	
                      <a href="#" target="_blank"><img src="https://www.beardo.in/images/twitter.png"></a>
                      <a href="#" target="_blank"><img src="https://www.beardo.in/images/youtube.png"></a>
                  </div>
                  <div class="social-cont">
                      <p> SIGN UP FOR EMAIL </p>
                      <h5>Deals, News and Stealth products releases. </h5>
                      <p id="fnewsformloading" style="display: none;">signing up..</p>
                      <form name="fnewsform" id="fnewsform" onsubmit="return submitFNewsForm();">			
                          <input placeholder="Email" type="text" id="fnewsformemail">
                          <input value="Sign Up" type="submit" class="signup">
                      </form>
                  </div>
              </div>
          </div>			
      </div>	
  </footer>

  <a href="" class="covid-delivery-tool-message-recheck">
	<div class="copyright-div">
		<div class="container">
			<div class="copyright">
				<h2>copyright 2022 </h2>
				<h1>zed lifestyle pvt. ltd.  </h1>
				<h2>all rights reserved</h2>
			</div>
		</div>	
	</div>
		</a>`;
};

let profile_data = () => {
  return `<div class="newaccount__profile">
    <div class="title-row">
        <p>Your Profile</p>
        <a href="javascript:void(0);" class="btn-design border-btn" id="openprofile">Edit Profile</a>
    </div>
    <div class="newaccount__profile__detail">
        <div class="newaccount__profile__detail__row">
            <p class="newaccount__profile__detail__row__label">First Name -</p>
            <p id="first_name" class="newaccount__profile__detail__row__detail"></p>
        </div>
        <div class="newaccount__profile__detail__row">
            <p class="newaccount__profile__detail__row__label">Last Name -</p>
            <p id="last_name" class="newaccount__profile__detail__row__detail"></p>
        </div>
        <div class="newaccount__profile__detail__row">
            <p class="newaccount__profile__detail__row__label">Email Address -</p>
            <p id="email" class="newaccount__profile__detail__row__detail"></p>
        </div>
        <div class="newaccount__profile__detail__row">
            <p class="newaccount__profile__detail__row__label">Phone number -</p>
            <p id="phone" class="newaccount__profile__detail__row__detail"></p>
        </div>
        <div class="newaccount__profile__detail__row">
            <p class="newaccount__profile__detail__row__label">DOB -</p>
                                    <p id="dob" class="newaccount__profile__detail__row__detail"></p>
                                </div>
        <div class="newaccount__profile__detail__row">
            <p class="newaccount__profile__detail__row__label">Gender -</p>
            <p id="gender" class="newaccount__profile__detail__row__detail"></p>
        </div>
    </div>
</div>
<div class="newaccount__address">
    <div class="title-row">
        <p>Your Addresses</p>
        <a href="javascript:void(0);" class=" btn-design border-btn" id="openadd">+ Add Address</a>
    </div>
    <div class="address_container">
    <div class="oldaddress-detail__row">
                    <div class="address-radio">
                        <input type="hidden" class="address_id" name="address_id" id="814419" value="212598">
                        <label for="address212598">
                            <div class="address-radio__name">Devesh Goyal</div>
                            <p>Indra Colony Vistar House No.-595 behied last gali Pali                             Rajasthan 306401                            </p>
                            <p class="address-radio__contact"><span>Mobile:</span></p>
                        </label>
                    </div>
                    <a id="edit_btn" href="javascript:void(0);" class="oldaddress-detail__row__edit" data-id="212598">Edit</a>
                </div>
                </div>
                </div>
            <div class="newaccount__foot">
            <a onclick="signOut();facebooklogout();normalsignout()" class="tablinks" id="fbLink">Logout</a>
            </div>`;
};

let order_data = () => {
  return `<div class="newaccount__order__status">
    <a id="ongoing" href="javascript:void(0);" class="newaccount__order__status__link show">Ongoing</a>
    <a id="completed" href="javascript:void(0);" class="newaccount__order__status__link">Completed</a>
    <a id="returned" href="javascript:void(0);" class="newaccount__order__status__link">Cancelled / Returned</a>
</div>`;
};

let wallet_data = () => {
  return `<div class="newaccount__wallet">
    <div class="newaccount__wallet__head">
        <img src="https://beardoc.s3.ap-south-1.amazonaws.com/checkout/beardo-wallet-black.svg" alt="">
        <div class="newaccount__wallet__head__right">
            <div class="newaccount__wallet__head__right__amount">₹0</div>
            <p>Wallet amount</p>
        </div>
    </div>
    <div class="newaccount__wallet__detail">
        <ul class="heading">
            <li>Event</li>
            <li>Date</li>
            <li>Cashback</li>
        </ul>
                            
    </div>
</div>`;
};

export { after_login, at_login, header, footer };

export { profile_data, order_data, wallet_data };
