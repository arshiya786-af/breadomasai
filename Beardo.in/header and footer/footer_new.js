let footer_new = () => {
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

  export { footer_new }