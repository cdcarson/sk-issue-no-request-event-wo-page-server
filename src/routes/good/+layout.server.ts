import type { RequestEvent } from './$types'
export const load = (event: RequestEvent) => {
  return {
    foo: 8
  }
}