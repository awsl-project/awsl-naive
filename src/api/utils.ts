import { camelCase } from 'lodash-es'

export function deepCamelCaseKeys(obj: any): any {
  if (Array.isArray(obj)) {
    return obj.map(deepCamelCaseKeys)
  }
  else if (obj !== null && obj.constructor === Object) {
    return Object.keys(obj).reduce(
      (result, key) => {
        const camelCaseKey = camelCase(key)
        result[camelCaseKey] = deepCamelCaseKeys(obj[key])
        return result
      },
      {} as Record<string, any>,
    )
  }
  return obj
}
