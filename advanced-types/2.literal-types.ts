function fetchWithAuthA(url: string, method: 'post' | 'get'): 1 | -1 {
  return 1
}

fetchWithAuthA('url', 'post')

let method = 'get'

fetchWithAuthA('url', method as 'get')
