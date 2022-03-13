<script setup lang="ts">
import {
  NButton,
  NButtonGroup,
  NGrid,
  NLayout,
  NLayoutContent,
  NLayoutHeader,
  NSpace,
  useMessage,
} from 'naive-ui'
import type { SelectOption } from 'naive-ui'
import {
  AddOutline,
  EnterOutline,
  MoonOutline,
  RocketOutline,
  SearchOutline,
  SunnyOutline,
} from '@vicons/ionicons5'
import { onMounted, ref, watch } from 'vue'
import { isDark, toggleDark } from '../composables'
import { getList, getListCount, getProducers, setProducers } from '../api'
import type { Picture, Producer } from '../types'
import Pic from './Pic.vue'

const message = useMessage()

const producers = ref<Producer[]>([])
const currentProducer = ref<string|null>(null)
const producerOptions = ref<SelectOption[]>([])

const imageList = ref<Picture[]>([])

onMounted(() => {
  getProducers().then((res) => {
    producers.value = res
  })
})

watch(
  () => producers.value.length,
  () => {
    producerOptions.value = producers.value.map(producer => ({
      label: producer.name,
      value: producer.uid,
    }))
  },
)
function handleFetch() {
  getProducers().then((res) => {
    producers.value = res
  })
}
function hanlePickProducer(producer: string) {
  currentProducer.value = producer
  // fetch image list
  handleFetchList()
}
const producer = ref({
  keyword: '',
  uid: '',
})

const showModal = ref<boolean>(false)
function handleAddProducer() {
  setProducers(producer.value).then((res) => {
    if (res === true) {
      message.success('又多了一个瑟瑟生产机')
      handleFetch()
    }
    else { message.error('不可以瑟瑟') }
  })
  showModal.value = false
}
function handleFetchList() {
  getList(currentProducer.value!).then((res) => {
    imageList.value = res
  })
}
</script>

<template>
  <NLayout style="height: 100%" :native-scrollbar="false">
    <n-layout-header>
      <n-space justify="center">
        <n-grid :cols="2">
          <n-gi>
            <n-select
              placeholder="就你辣！"
              :options="producerOptions"
              @update:value="hanlePickProducer"
            />
          </n-gi>
          <n-gi>
            <n-button-group>
              <n-button @click="toggleDark()">
                <template #icon>
                  <n-icon v-if="isDark" :component="SunnyOutline" />
                  <n-icon v-else :component="MoonOutline" />
                </template>
              </n-button>
              <n-button @click="showModal = true">
                <template #icon>
                  <n-icon :component="AddOutline" />
                </template>
              </n-button>
            </n-button-group>
          </n-gi>
        </n-grid>
      </n-space>

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
              <n-input v-model:value="producer.uid" placeholder="输入 UID" />
            </n-form-item>
            <n-form-item label="瑟瑟密码">
              <n-input v-model:value="producer.keyword" placeholder="输入 关键词" />
            </n-form-item>
          </n-form>
        </div>
        <template #action>
          <n-button @click="handleAddProducer">
            <template #icon>
              <n-icon :component="EnterOutline" />
            </template>
          </n-button>
        </template>
      </n-modal>
    </n-layout-header>
    <n-layout-content>
      <n-grid v-if="imageList.length" cols="2 s:3 m:4 l:5 xl:6 2xl:7" x-gap="3" y-gap="4" responsive="screen">
        <n-grid-item v-for="pic in imageList" :key="pic.pic_id">
          <Pic :pic-props="pic" />
        </n-grid-item>
      </n-grid>
      <div v-else>
        <n-empty description="😍瑟即是空呢">
          <template #extra>
            <n-button round>
              <template #icon>
                <n-icon :component="RocketOutline" />
              </template>
              冲鸭
            </n-button>
          </template>
        </n-empty>
      </div>
    </n-layout-content>
  </NLayout>
</template>
