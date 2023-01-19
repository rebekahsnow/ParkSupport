<template>
    <div class="width-container">
        <!-- FIRST SECTION -->
        <div class="flex-title">
            <img class="title-img" src="../assets/lightbulb.svg">
            <div class="title-wrapper">
                <h1>Getting Started</h1>
                <p>Watch this simple tutorial to learn how to take payments and scan passes.</p>
            </div>
        </div>
        <iframe  src="https://www.youtube.com/embed/QlK58tgDFq4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <!-- <div class="flex-btns">
            <div class="home-btn" @click="ButtonClick('Scan')">
                <h2>How to Scan Passes</h2>
                <img class="arrow" src="../assets/arrow.png">
            </div>
            <div class="home-btn" @click="ButtonClick('Activate')">
                <h2>How to Activate Scanner</h2>
                <img class="arrow" src="../assets/arrow.png">
            </div>
            <div class="home-btn" @click="ButtonClick('Wifi')">
                <h2>How to Setup Wifi</h2>
                <img class="arrow" src="../assets/arrow.png">
            </div>
            <div class="home-btn" @click="ButtonClick('OpenEvey')">
                <h2>How to Open Evey App</h2>
                <img class="arrow" src="../assets/arrow.png">
            </div>
            <div class="home-btn" @click="ButtonClick('UseEvey')">
                <h2>How to Use Evey App</h2>
                <img class="arrow" src="../assets/arrow.png">
            </div>
        </div> -->
            <details>
                <summary>
                <ul>
                    <h2 class="titleName">Step by Step Instructions</h2>
                </ul>
                </summary>
                <div class="content">
                    <div class="titleHowTo">How to Scan Passes</div>
                    <div class="steps">Steps</div>
                    <ol>
                        <li>Click on the black QR code icon on the bottom of the screen.</li>
                        <li>Press scan on the bottom of the app.</li>
                        <li>Hold the phone over the visitor's QR code. You should have a green check-in button show up. Tap it to admit the visitor into the park. If the ticket has already been checked in then a red button will appear. If you see this, check the driver’s ID to make sure it matches the name on the pass. This is to make sure that people are not transferring their passes.</li>
                    </ol>
                    <div class="grayLine"></div>
                    <div class="titleHowTo">How to Take Payments</div>
                    <div class="steps">Steps</div>
                    <ol>
                        <li>Click on the green card icon on the bottom of the screen.</li>
                        <li>Enter your pin.</li>
                        <li>Open the pass options and select the type of pass for your visitor.</li>
                        <li>Click the blue button at the bottom.</li>
                        <li>Verify that you have the right item and select check-out.</li>
                        <li>Insert or tap your card on the reader device.</li>
                        <li>Click print receipt.</li>
                    </ol>
                </div>
            </details>
            <div class="flex-btns">
                <div class="home-btn" @click="ButtonClick('Card')">
                    <h2>Connect Card Reader</h2>
                    <img class="arrow" src="../assets/arrow.png">
                </div>
                <div class="home-btn" @click="ButtonClick('PPrinter')">
                    <h2>Connect Portable Printer</h2>
                    <img class="arrow" src="../assets/arrow.png">
                </div>
                <div class="home-btn" @click="ButtonClick('SPrinter')">
                    <h2>Connect Stationary Printer</h2>
                    <img class="arrow" src="../assets/arrow.png">
                </div>
            </div>
        <!-- SECOND SECTION -->
        <!-- <div class="grayLine"></div> -->
        <br>
        <div class="flex-title">
            <img class="title-img" src="../assets/ticket.svg">
            <div class="title-wrapper">
                <h1>Pass Examples</h1>
                <p>Learn where to find confirmation numbers, dates, and pass types.</p>
            </div>
        </div>
        <div class="flex-btns">
            <div class="home-btn" @click="ButtonClick('Online')">
                <h2>Online</h2>
                <img class="arrow" src="../assets/arrow.png">
            </div>
            <div class="home-btn" @click="ButtonClick('Pdf')">
                <h2>PDF</h2>
                <img class="arrow" src="../assets/arrow.png">
            </div>
            <div class="home-btn" @click="ButtonClick('AppleWallet')">
                <h2>Apple Wallet</h2>
                <img class="arrow" src="../assets/arrow.png">
            </div>
            <div class="home-btn" @click="ButtonClick('Receipt')">
                <h2>Order Receipt</h2>
                <img class="arrow" src="../assets/arrow.png">
            </div>
        </div>

        <!-- THIRD SECTION -->
        <div class="flex-title">
            <img class="title-img" src="../assets/phone.svg">
            <div class="title-wrapper">
                <h1>Contact Us</h1>
                <p>We are here to help you.</p>
            </div>
        </div>
        <div class="flex-btns">
            <div class="home-btn" @click="ButtonClick('Contact')">
                <h2>Contact Support</h2>
                <img class="arrow" src="../assets/arrow.png">
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Home',
    data(){
        return{

        }
    },
    methods: {
        ButtonClick: function(page){
            this.$router.push({name: page});
        }
    }
}
</script>

<style>
*{
    font-family:Roboto;
}
.width-container{
    max-width: 800px;
    margin: 0 auto;
    padding: 24px;
}
p{
    font-size: 14px;
}
h3{
    font-size: 22px;
    padding: 20px 0px 8px 0px;
}
ol{
    padding-left: 24px;
}
li {
  display: list-item;
}
</style>

<style scoped>
.flex-title{
    display: flex;
    margin: 10px 0px;
}
.title-img{
    height: 42px;
    width: auto;
}
.title-wrapper{
    margin-left: 16px;
}
h1{
    font-size: 28px;
    color: #96A145;
    font-weight: bold;
    text-align: left;
}
.flex-btns{
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: 10px;
    margin-bottom: 32px;
}
.flex-btns > div {
  margin: 6px 0px;
}
.home-btn{
    border: 1px solid #C4C4C4;
    padding: 4px;
    height: 44px;
    padding-left: 10px;
    cursor: pointer;
}
.home-btn:hover{
    background-color: rgba(179, 179, 179, 0.301);
}
h2{
    display: inline-block;
    text-align: left;
    padding-top: 2px;
    font-size: 16px;
    color: #424242;
    line-height: 30px;
}
.arrow{
    display: inline;
    float: right;
    margin: 10px;
}
iframe{
    width: 100%;
    height: 422px;
}

details{
    background:#fff;
    font-size:16px;
    border-bottom:1px solid #e0e0e0;
        /* box-shadow:0 0 2px rgba(0,0,0,0.12),0 2px 4px rgba(0,0,0,0.24); */
    display:flex; 
    border: 1px solid #C4C4C4;
    margin-bottom: 6px;
    margin-top:6px;
}
details div.content{
    padding:0px 24px 24px 24px; 
}

details[open] summary:after {
    color:#9e9e9e;
    content: "expand_less";
    font-family: 'Material Icons';
}
details[open]{
    /* margin-top:16px;
    margin-bottom:16px; */
    border: 1px solid C4C4C4;

}
details[open]:first-child{
    margin-top:0;
    margin-bottom:16px;
    border:none;
}
details[open]:last-child{
    margin-top:16px;
    margin-bottom:0px;
    border:none;
}

summary{
    outline:none;
    cursor: pointer;
    padding: 7px;
    padding-left: 10px;
    color:#212121;
    position: relative;
    list-style: none;
    
}
summary:hover{
    background:#eeeeee;
}

details[open] summary:hover{
    background:none;
    
}

summary ul {
    padding-left: 0;
    list-style: none;
    display: -webkit-flex;
    display: flex;
    align-items: center;
}
summary ul li{
        flex: 1 100%;
        flex-flow: row wrap;
}
summary ul li span{
        display: block;
        font-size: 12px;
        margin-top: 6px;
        opacity: .75;
}
summary::-webkit-details-marker {
    display: none;
}
summary::after {
    content: "expand_more";
    font-family: 'Material Icons';
    color: #9e9e9e;
    font-size: 1.5em;
    padding: 0;
    text-align: center;
    margin-top: 0;
    position: absolute;
    top: calc(50% - 12px);
    bottom: 0;
    right: 0px;
    width: 6%;
}  
.titleHowTo{
    font-size: 24px;
    line-height: 37px;
    font-weight: 700;

}
.steps{
    font-size: 18px;
    font-weight: 700;
    margin-top: 12px;
    line-height: 37px;
}
.grayLine{
    border: 1px solid #C4C4C4;
    margin: 45px 0px;
}

@media (max-width: 650px) {
  .flex-btns {
    grid-template-columns: 100%;
  }
  iframe{
    width: 100%;
    height: 200px;
  }
  summary::after{
    right: 10px;
  }
}
</style>
