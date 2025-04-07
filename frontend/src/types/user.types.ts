export interface User {
  id: string
  email: string
  createdAt: Date
  updatedAt: Date
}

export interface Session {
  user: User
  token: string
}
