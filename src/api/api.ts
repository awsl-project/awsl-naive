import { lyla } from '@lylajs/web'
import type { Blogger, BloggerAdd, Picture } from '../types/index'
import { deepCamelCaseKeys } from './utils'

const baseUrl = import.meta.env.VITE_API_HOSTNAME

function handleFetchError() {
  window.$message.error('不可以色色哟！')
}

export async function getBloggers() {
  try {
    const { json } = await lyla.get<Blogger[]>(`${baseUrl}/producers`)
    return deepCamelCaseKeys(json) satisfies Blogger[]
  }
  catch (e) {
    handleFetchError()
  }
}

export async function setBloggers(blogger: BloggerAdd) {
  try {
    const { json } = await lyla<boolean>({
      method: 'post',
      url: `${baseUrl}/producers`,
      json: { ...blogger },
    })
    return deepCamelCaseKeys(json) satisfies boolean
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
        offset: `${offset ?? 0}`,
      },
    })
    return deepCamelCaseKeys(json) satisfies Picture[]
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
    return deepCamelCaseKeys(json) satisfies number
  }
  catch (e) {
    handleFetchError()
  }
}
