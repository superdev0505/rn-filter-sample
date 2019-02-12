/* eslint no-bitwise: 0 */

// Just a helper for generating string based hash
export function hashCode(str: string): number {
  let hash = 15

  for (let i = str.length - 1; i >= 0; i--) {
    hash = (hash << 5) - hash + str.charCodeAt(i)
  }

  return hash
}

export * from './iphoneX'
