<template>
  <el-upload :action="actionChooseFile" :list-type="listTypeChooseFile" :auto-upload="autoUploadChooseFile" :multiple="multipleChooseFile"
             :drag="dragChooseFile" :name="nameChooseFile" :with-credentials="withCredentialsChooseFile" :show-file-list="showFileList">
    <el-icon><Plus /></el-icon>
    <template #file="{ file }">
      <div v-if="file.url" id="idPreviewImage" :class="customClassPreviewImage">
        <custom-image :src-img="file.url" :alt-image="file.name" custom-class-image="el-upload-list__item-thumbnail" />
        <span class="el-upload-list__item-actions">
          <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
            <el-icon><zoom-in /></el-icon>
          </span>
          <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleDownload(file)">
            <el-icon><Download /></el-icon>
          </span>
        </span>
      </div>
    </template>
  </el-upload>
  <custom-modal label="show modal" type-btn="button" :model-value="dialogVisible" :show-visible-modal="false" :show-footer-modal="false">
    <template #customBodyModal>
      <custom-image w-full :src-img="dialogImageUrl" :custom-class-image="customClassImage" alt-image="Preview Image" />
    </template>
  </custom-modal>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { customChooseFileProps } from "@/props/elementPlus/customChooseFile";
import CustomImage from "@/components/elementPlus/customImage.vue";
import { customImageProps } from "@/props/elementPlus/customImage";
import { Delete, Download, Plus, ZoomIn } from '@element-plus/icons-vue'
import type { UploadFile } from 'element-plus'
import CustomModal from "@/components/elementPlus/customModal.vue";
const previewImage = ref(true)
const props = defineProps({
  ...customChooseFileProps,
  ...customImageProps
})


const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const disabled = ref(false)


const handlePictureCardPreview = (file: UploadFile) => {
  dialogImageUrl.value = file.url!
  dialogVisible.value = true
}

const handleDownload = (file: UploadFile) => {
  const link = document.createElement('a')
  if(!file.url)  {
    return console.log('file url is empty')
  } else {
    link.href = file.url
    link.download = file.name
    link.click();
  }
}
</script>