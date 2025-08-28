<script setup> 
    const props = defineProps(['show'])
</script>
<template>
    <div
    v-show="show"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out"
  >
    <div class="bg-white p-6 rounded-lg shadow-lg max-w-lg max-h-[90vh] w-full overflow-y-auto transform transition-transform duration-300 ease-in-out scale-95 opacity-0 animate-modalFadeIn">
      <div class=" mb-4">
        <div>
        <slot name="header"></slot>
      </div>
      </div>
      <div>
        <slot name="body"></slot>
      </div>
      
      <div className="flex gap-2 justify-end mt-4">
                <slot name="footer"></slot>
        </div>
        <!-- <button @click="addFile" type="button" class="btn btn-primary">
          {{ isUploading ? "Uploading..." : "Upload" }}
        </button> -->
    </div>
  </div>
</template>
<style scoped>
@keyframes modalFadeIn {
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}
.animate-modalFadeIn {
    animation: modalFadeIn 0.3s ease-out forwards;
}
</style>