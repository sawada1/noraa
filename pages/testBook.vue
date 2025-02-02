<template>
    <div class="container" style="min-height: 100vh;">
        <div :style="{ width: '1028px', height: '700px'}">
            <!-- <ClientOnly>
                <VPdfViewer @text-selected="handleTextSelection" src="/books/testBook1.pdf" />
            </ClientOnly> -->
  </div>
    </div>
</template>
<script lang="ts" setup>
import * as pdfjsLib from "pdfjs-dist";
import pdfWorker from 'pdfjs-dist/build/pdf.worker.min.js?worker&url'; // Correct way to import worker with Vite

// Set the worker source
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;
 async function extractTextFromPDF(pdfUrl: string): Promise<string> {
  const pdf = await pdfjsLib.getDocument(pdfUrl).promise;
  let extractedText = "";

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const textContent = await page.getTextContent();

    textContent.items.forEach((item: any) => {
      extractedText += item.str + " ";
    });

    extractedText += "\n\n"; // Separate pages
  }

  return extractedText;
}
const pdfText = ref("ss");

onMounted(async () => {
  pdfText.value = await extractTextFromPDF("/books/testBook1.pdf");
  console.log(pdfText.value);
  
});
</script>
<style lang="">
    
</style>