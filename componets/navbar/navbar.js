function navbar(){
  return(`<div class="navbarst">
    <nav>
            <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRQoTQl8M0bKP2tCUV25IvWBN9Q7Hp8V_rQy3xctCip0NB-f_B0" alt="img" id="logo">

        <div id="how">
            <div id="imghow"><img
                    src="https://i5.walmartimages.com/dfw/4ff9c6c9-ad46/k2-_0a671c38-d307-447c-835e-7904ab143c26.v1.png"
                    alt=""></div>
            <div id="howfont">
                <h3>How do you want your items? <p id="sc">Scramento,95829.Scramento Su</p>
                </h3>
            </div>
        </div>
        <div id="inp"> <input type="text" name="" id="" placeholder="Search everything at Walmart online and in store">
            <i class="fa-solid fa-magnifying-glass" id="search"></i>
        </div>
        <div id="tools">
            <div>
                <p>Reorder</p>
                <h3>My Items</h3>
            </div>
            <div id="signup">
                <a href="/pages/loginsignup.html">Sign up</a>
                <h3>Account</h3>
            </div>


            <div id="card"><i class="fa-solid fa-cart-shopping"></i>
                <p>$0.00</p>
            </div>
        </div>
    </nav>
    <div class="bottom">
        <div id="service">

            <h3 id="ser">Department</h3>
            <h3 id="ser">Services</h3>

        </div>
        <div class="pages">
            <a href="">Saving</a><a href="">Grocery & Essentials</a><a href="">Holloween</a><a href="">New &
                Trending</a>
            <a href="/pages/fashion.html">Fashion</a>
            <a href="/index.html">Home</a><a href="/pages/electronics.html">Electronics</a><a href="">Toy Shop</a><a href="">Auto</a><a
                href="">Registry</a> <a href="">ONE Cash</a><a href="">Walmant+</a>
        </div>

    </div>


</div>`)
}

export default navbar;