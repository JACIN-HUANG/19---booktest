<template>
  <div class="scrollPic">
    <img src="/ad01.jpg" id="lunbo_img">
  </div>
</template>
 
<script>

export default {
};
var index = 1;
function lunbo() {
  index++;
  if (index > 2) {
    index = 1
  }
  var img = document.getElementById("lunbo_img");
  img.src = "/ad0" + index + ".jpg";
}
setInterval(lunbo, 2000);
</script>

<style scoped>
.scrollPic {
  width: 610px;
  height: 220px;
  float: left;
  margin: 10px 50px auto 50px;
}

.scrollPic img {
  width: 610px;
  height: 220px;
}
</style>