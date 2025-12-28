<template>
  <div class="d-flex text">
    <custom-image  alt-image="" src-img="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"
      custom-class-image="class-image" :preview-src-list="srcList"
    />
  </div>
</template>

<script setup lang="ts">

import CustomAvatar from "@/components/elementPlus/customAvatar.vue";
import CustomImage from "@/components/elementPlus/customImage.vue";

const srcList = [
  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
  'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
  'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
  'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
  'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
  'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
  'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
]



</script>

<style lang="scss">
.text{
  color: #000000;
}

.class-image{
  width: 700px;
  height: 700px;
  border-radius: 3%;
}
</style>
