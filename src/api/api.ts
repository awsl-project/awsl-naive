import { useFetch } from '@vueuse/core'
import type { PicInfo, Producer, ProducerAdd } from '../types/index'

const baseUrl = import.meta.env.VITE_API_HOSTNAME || 'http://awsl-py.dev.jcstaff.club'

function handleFetchError() {
  window.$message.error('不可以色色哟！')
}

export async function getProducers() {
  const { data, onFetchError } = await useFetch<Producer[] | null>(
    `${baseUrl}/producers`,
  ).get().json()
  onFetchError(handleFetchError)
  if (data !== null)
    return data.value
}

export async function setProducers(producer: ProducerAdd) {
  const { data } = await useFetch<boolean>(
    `${baseUrl}/producers`,
  ).post(
    producer,
  ).json()
  if (data !== null)
    return data.value
}

export async function getList(uid?: string, limit?: number, offset?: number) {
  const { data, onFetchError } = await useFetch<PicInfo[]>(
    `${baseUrl}/v2/list?uid=${uid ?? ''}&limit=${limit ?? 10}&offset=${offset ?? 0}`,
  ).get().json()
  onFetchError(handleFetchError)
  if (data !== null)
    return data.value
}

export async function getListCount(uid: string) {
  const { data, onFetchError } = await useFetch<number>(
    `${baseUrl}/v2/list/count?uid=${uid}`,
  ).get().json()
  onFetchError(handleFetchError)
  if (data !== null)
    return data.value
}
