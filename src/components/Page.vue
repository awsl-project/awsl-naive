<script setup lang="ts">
import {
  NBackTop,
  NButton,
  NLayoutContent,
  NLayoutHeader,
  NSpace,
  useMessage,
} from 'naive-ui'
import type { SelectOption } from 'naive-ui'
import {
  AddOutline,
  ArrowDownCircleOutline,
  CloudUpload,
} from '@vicons/ionicons5'
import { onMounted, ref, watch } from 'vue'
import { getBloggers, getList, setBloggers } from '../api'
import type { Blogger, Picture } from '../types'
import Pic from './Pic.vue'

const limit = 20

const message = useMessage()

const bloggers = ref<Blogger[] | undefined>([])
const currentBlogger = ref<string | undefined>(undefined)
const bloggerOptions = ref<SelectOption[] | undefined>([])
const imageList = ref<Picture[] | undefined>([])
const blogger = ref({
  keyword: '',
  uid: '',
})
const showModal = ref<boolean>(false)

const loading = ref<boolean>(false)

function hanlePickProducer(producer: string) {
  currentBlogger.value = producer
  // fetch image list
  handleFetchList()
}
async function handleFetch() {
  bloggers.value = await getBloggers()
}
async function handleAddProducer() {
  const res = await setBloggers(blogger.value)
  if (res === true) {
    message.success('添加成功')
    handleFetch()
  }
  else {
    message.error('失败，请重试')
  }
  showModal.value = false
}
async function handleFetchList() {
  loading.value = true
  imageList.value = await getList(currentBlogger.value, limit)
  loading.value = false
}
async function handleLoadMore() {
  const res = await getList(
    currentBlogger.value,
    limit,
    imageList.value?.length,
  )
  if (!res)
    return []
  // merge list
  imageList.value?.push(...res)
}

onMounted(async () => {
  bloggers.value = await getBloggers()
  handleFetchList()
})

watch(
  () => bloggers.value?.length,
  () => {
    bloggerOptions.value = bloggers.value?.map(producer => ({
      label: producer.name,
      value: producer.uid,
    }))
  },
)
</script>

<template>
  <NLayoutHeader mb-3>
    <NSpace justify="center">
      <div w-80>
        <n-select
          placeholder="就你辣"
          :options="bloggerOptions"
          @update:value="hanlePickProducer"
        />
      </div>
      <NButton @click="showModal = true">
        <template #icon>
          <n-icon :component="AddOutline" />
        </template>
      </NButton>
    </NSpace>
    <n-modal v-model:show="showModal" preset="dialog" title="Dialog">
      <template #header>
        添加你喜欢的博主
      </template>
      <div>
        <n-form :label-width="80" :model="blogger" size="medium">
          <n-form-item label="Weibo UID">
            <n-input v-model:value="blogger.uid" placeholder="UID" />
          </n-form-item>
          <n-form-item label="关键词">
            <n-input v-model:value="blogger.keyword" placeholder="关键词" />
          </n-form-item>
        </n-form>
      </div>
      <template #action>
        <NButton @click="handleAddProducer">
          提交
          <template #icon>
            <n-icon :component="CloudUpload" />
          </template>
        </NButton>
      </template>
    </n-modal>
  </NLayoutHeader>
  <NLayoutContent>
    <n-empty v-if="imageList?.length === 0" description="暂无数据" />
    <div v-if="!loading" class="waterfall-container">
      <div v-for="pic in imageList" :key="pic.picId">
        <Pic :props="pic" class="waterfall-item" />
      </div>
    </div>
    <n-spin v-else size="large" flex justify-center aligin-center />
  </NLayoutContent>
  <n-layout-footer v-if="imageList?.length !== 0">
    <div class="loadmore">
      <NButton @click="handleLoadMore">
        <template #icon>
          <n-icon :component="ArrowDownCircleOutline" />
        </template>
        还要更多
      </NButton>
    </div>
  </n-layout-footer>
  <NBackTop :right="50" />
</template>

<style>
.waterfall-container {
  column-gap: 10px;
  column-count: 2;
}

.waterfall-item {
  margin-bottom: 10px;
}

@media (min-width: 768px) {
  .waterfall-container {
    column-count: 4;
  }
}

@media (min-width: 1024px) {
  .waterfall-container {
    column-count: 6;
  }
}

.loadmore {
  margin: 5px;
  display: flex;
  justify-content: center;
}
</style>
