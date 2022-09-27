import type { RequestEvent } from './$types'
export const load = (event: RequestEvent) => {
  return {
    bar: 9
  }
}