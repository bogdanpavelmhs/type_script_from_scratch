type HttpMethod = 'post' | 'get'

function fetchWithAuth(url: string, method: HttpMethod): 1 | -1 {
  return 1
}

type User = {
  name: string;
  age: number;
  skills: string[]
}

type Role = {
  name: string
  id: number
}

// intersection(пересечение)

// type UserWithRole = User & Role

type UserWithRole = {
  user: User,
  role: Role
}

let user: UserWithRole = {
  user: {
    name: 'A',
    age: 33,
    skills: ['1', '2', '3'],
  },
  role: {
    name: 'B',
    id: 1
  }
}
