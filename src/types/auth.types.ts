export interface Children {
  children: React.ReactNode
}

export interface AuthContextType {
  isAuthenticated: boolean,
  handleAuthentication: (value: boolean) => void
}