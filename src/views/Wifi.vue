<template>
    <div class="width-container">
        <!-- <video width="100%" controls class="video">
            <source src="../assets/wifi.mp4" type="video/mp4">
            Your browser does not support HTML video.
        </video> -->
        <h2>How to Setup Wifi</h2>
        <ul>
            <li><b>Step 1:</b> Drag top bar down and hold wifi icon until settings come up.</li>
            <li><b>Step 2:</b> Turn on wifi and find your network.</li>
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.video{
    max-width: 350px;
    float: left;
    margin-right: 16px;
}
li{
    /* list-style-type: none; */
    margin: 16px 0px;
    line-height: 24px;
}
@media (max-width: 650px) {
  .video {
    float: none;
  }
}
</style>

<style scoped>
#noStyle{
    list-style-type: none;

}
</style>