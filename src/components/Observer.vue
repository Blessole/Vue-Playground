<template>
  <div ref="trigger" class="observer-target" style="text-align: center">
    <img
      v-if="props.isLoading"
      src="../assets/logo.svg"
      style="width: 65px"
      alt="Loading..."
    />
  </div>
</template>
<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';

let observer = null;
let observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1,
};

const props = defineProps({
  isLoading: { type: Boolean, default: true },
});
const emits = defineEmits(['show', 'hidden']);
onMounted(() => {
  createObserver();
});
onBeforeUnmount(() => {
  observer.disconnect();
});

const trigger = ref();
const createObserver = () => {
  observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      emits('show');
    } else {
      emits('hidden');
    }
  }, observerOptions);

  observer.observe(trigger.value);
};
</script>

<style scoped></style>
