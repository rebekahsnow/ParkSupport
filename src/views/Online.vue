<template>
    <div class="width-container">
        <h2>Online Pass Example</h2>
        <ul>
            <li id="noStyle">The online pass can be found in an email or text upon purchasing.</li>
        </ul>
        <img class="pass-example" src="../assets/onlinePass.svg">
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.pass-example{
    width: 100%;
    max-width: 350px;
    display: block;
    margin-left: auto;
    margin-right: auto;
}
#noStyle{
    list-style-type: none;
}
@media (max-width: 650px) {
  .pass-example {
    float: none;
  }

}
</style>