<template>
<div>
  <div class="lazy-loading-container">
    <div class="lazy-loading-data" v-for="(imageSrc, index) in rData.imageList" :key="index">
      <img :src="imageSrc" alt="" />
    </div>
    <Observer @show="loadMore" />
  </div>
</div>
</template>
<script setup>
import Observer from "@/components/Observer.vue";
import {reactive} from "vue";

const rData = reactive({imageList: [], page: 1});
const loadMore = async () => {
 const fetchData = await getAllImageList(rData.page + 1);
 if (fetchData) {
   rData.imageList = [...rData.imageList, ...fetchData];
   rData.page += 1;
 }
};
</script>