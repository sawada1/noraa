<template>
  <div class="flex" style="height: 100vh">
    <div id="viewer" class="flex-1" style="miheight: 100vh"></div>
    <div class="w-96 bg-gray-100 p-4 overflow-y-auto">
      <h2 class="text-lg font-bold mb-2">ملاحظاتك</h2>
      <div v-if="notes.length">
        <div v-for="(note, index) in notes" :key="index" class="mb-3">
          <p class="text-sm text-gray-700"><strong>📍 نص:</strong> {{ note.text }}</p>
          <p class="text-sm text-green-700"><strong>📝 ملاحظة:</strong> {{ note.note }}</p>
        </div>
      </div>
      <div v-else class="text-center text-gray-500 mt-10">
        لا توجد ملاحظات
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const notes = ref([])

if (process.client) {
  const WebViewer = (await import('@pdftron/webviewer')).default

  onMounted(() => {
    const element = document.getElementById('viewer')

    WebViewer(
      {
        path: '/webviewer/lib',
        initialDoc: '/testBook1.pdf',
        licenseKey: 'YOUR_LICENSE_KEY',
        disabledElements: ['ribbons', 'toolsHeader', 'menuButton', 'notesPanelButton']
      },
      element
    ).then((instance) => {
      const { documentViewer } = instance.Core

      documentViewer.addEventListener('annotationChanged', (annotations, action) => {
        if (action === 'add') {
          annotations.forEach(annot => {
            const content = annot.getContents()
            if (content) {
              notes.value.push({
                text: annot.Subject || 'نص مميز',
                note: content
              })
            }
          })
        }
      })
    })
  })
}
</script>
