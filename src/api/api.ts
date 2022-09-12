import { lyla } from 'lyla'
import type { Picture, Producer, ProducerAdd } from '../types/index'

const baseUrl = import.meta.env.VITE_API_HOSTNAME

function handleFetchError() {
  window.$message.error('不可以色色哟！')
}

export async function getProducers() {
  try {
    const { json } = await lyla.get<Producer[]>(`${baseUrl}/producers`)
    return json
  }
  catch (e) {
    handleFetchError()
  }
}

export async function setProducers(producer: ProducerAdd) {
  try {
    const { json } = await lyla<boolean>({
      method: 'post',
      url: `${baseUrl}/producers`,
      json: { ...producer },
    })
    return json
  }
  catch (e) {
    handleFetchError()
  }
}

export async function getList(uid?: string, limit?: number, offset?: number) {
  try {
    const { json } = await lyla.get<Picture[]>(`${baseUrl}/v2/list`, {
      query: {
        uid: `${uid ?? ''}`,
        limit: `${limit ?? 20}`,
        pffset: `${offset ?? 0}`,
      },
    })
    return json
  }
  catch (e) {
    handleFetchError()
  }
}

export async function getListCount(uid: string) {
  try {
    const { json } = await lyla.get<number>(`${baseUrl}/v2/list/count`, {
      query: {
        uid: `${uid}`,
      },
    })
    return json
  }
  catch (e) {
    handleFetchError()
  }
}
