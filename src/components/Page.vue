<script setup lang="ts">
import {
  NBackTop,
  NButton,
  NButtonGroup,
  NGrid,
  NLayout,
  NLayoutContent,
  NLayoutHeader,
  NSpace,
  NThing,
  useMessage,
} from 'naive-ui'
import type { SelectOption } from 'naive-ui'
import {
  AddOutline,
  ArrowDownCircleOutline,
  EnterOutline,
} from '@vicons/ionicons5'
import { onMounted, ref, watch } from 'vue'
import { getList, getProducers, setProducers } from '../api'
import type { Picture, Producer } from '../types'
import Pic from './Pic.vue'

const limit = 20

const message = useMessage()

const producers = ref<Producer[] | undefined>([])
const currentProducer = ref<string | undefined>(undefined)
const producerOptions = ref<SelectOption[] | undefined>([])
const imageList = ref<Picture[] | undefined>([])
const producer = ref({
  keyword: '',
  uid: '',
})
const showModal = ref<boolean>(false)

function hanlePickProducer(producer: string) {
  currentProducer.value = producer
  // fetch image list
  handleFetchList()
}
async function handleFetch() {
  producers.value = await getProducers()
}
async function handleAddProducer() {
  const res = await setProducers(producer.value)
  if (res === true) {
    message.success('又多了一个瑟瑟生产机')
    handleFetch()
  }
  else { message.error('不可以瑟瑟') }
  showModal.value = false
}
async function handleFetchList() {
  imageList.value = await getList(currentProducer.value, limit)
}
async function handleLoadMore() {
  const res = await getList(currentProducer.value, limit, imageList.value?.length)
  imageList.value = imageList.value?.concat(res!)
}

onMounted(async () => {
  producers.value = await getProducers()
  handleFetchList()
})

watch(
  () => producers.value?.length,
  () => {
    producerOptions.value = producers.value?.map(producer => ({
      label: producer.name,
      value: producer.uid,
    }))
  },
)
</script>

<template>
  <NLayout style="height: 100%" :native-scrollbar="false">
    <NLayoutHeader>
      <NSpace justify="center">
        <div style="width: 240px">
          <n-select
            placeholder="就你辣"
            :options="producerOptions"
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
          <div>瑟瑟生产机</div>
        </template>
        <div>
          <n-form
            ref="formRef"
            :label-width="80"
            :model="producer"
            size="medium"
          >
            <n-form-item label="Weibo UID">
              <n-input v-model:value="producer.uid" placeholder="UID" />
            </n-form-item>
            <n-form-item label="瑟瑟密码">
              <n-input v-model:value="producer.keyword" placeholder="关键词" />
            </n-form-item>
          </n-form>
        </div>
        <template #action>
          <NButton @click="handleAddProducer">
            <template #icon>
              <n-icon :component="EnterOutline" />
            </template>
          </NButton>
        </template>
      </n-modal>
    </NLayoutHeader>
    <NLayoutContent>
      <NGrid v-if="imageList?.length !== 0" cols="2 s:3 m:4 l:5 xl:6 2xl:7" x-gap="3" y-gap="4" responsive="screen">
        <n-grid-item v-for="pic in imageList" :key="pic.pic_id">
          <Pic :pic-props="pic" />
        </n-grid-item>
      </NGrid>
      <div v-else>
        <n-empty description="😍瑟即是空呢" />
      </div>
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
  </NLayout>
</template>

<style>
.loadmore{
  margin: 5px;
  display: flex;
  justify-content: center;
}
</style>
