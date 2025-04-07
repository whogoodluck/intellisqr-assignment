import { createContext, Dispatch, JSX, ReactNode, SetStateAction, useState } from 'react'

import { Session } from '../src/types/user.types'

interface AuthContextType {
  session: Session | null
  setSession: Dispatch<SetStateAction<Session | null>>
}

export const AuthContext = createContext<AuthContextType>({
  session: null,
  setSession: () => {}
})

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps): JSX.Element {
  const [session, setSession] = useState<Session | null>(null)

  return <AuthContext.Provider value={{ session, setSession }}>{children}</AuthContext.Provider>
}
