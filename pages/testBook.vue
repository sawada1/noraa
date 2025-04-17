<template>
    <div class="container" style="min-height: 100vh;">
  <ClientOnly>
    <div class="pdf-container">
  <vue-pdf-embed
    ref="pdfRef"
    :source="pdfUrl"
    :page="currentPage"
    @loaded="onPdfLoaded"
  />

  <!-- Zoom & Pagination Controls -->
  <div class="controls">
    <button @click="zoomOut">-</button>
    <span>{{ zoomLevel * 100 }}%</span>
    <button @click="zoomIn">+</button>

    <button @click="prevPage" :disabled="currentPage <= 1">Prev</button>
    <span>Page {{ currentPage }} of {{ pageCount }}</span>
    <button @click="nextPage" :disabled="currentPage >= pageCount">Next</button>
  </div>
</div>
  </ClientOnly>
    </div>
</template>
<script  setup>
import VuePdfEmbed from 'vue-pdf-embed'

const pdfUrl = '/books/testBook1.pdf'
const pdfRef = ref(null)
const currentPage = ref(1)
const pageCount = ref(0)
const zoomLevel = ref(1)

const onPdfLoaded = async () => {
  const doc = await pdfRef.value?.getPdfDocument()
  pageCount.value = doc?.numPages || 0
}

const nextPage = () => {
  if (currentPage.value < pageCount.value) currentPage.value++
}

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--
}

const zoomIn = () => {
  zoomLevel.value += 0.1
  pdfRef.value.setScale(zoomLevel.value)
}

const zoomOut = () => {
  if (zoomLevel.value > 0.2) {
    zoomLevel.value -= 0.1
    pdfRef.value.setScale(zoomLevel.value)
  }
}
</script>
<style lang="scss">
.pdf-container {
  position: relative;
  max-width: 800px;
  margin: auto;
}
.controls {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  gap: 10px;
}
</style>