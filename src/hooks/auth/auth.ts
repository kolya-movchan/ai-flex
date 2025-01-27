import { fetchAuthSession, signOut, signIn, getCurrentUser, AuthUser } from "aws-amplify/auth"
import { NavigateFunction } from "react-router-dom"

export const logIn = async (username: string, password: string) => {
  const signInResult = await signIn({
    username,
    password,
  })

  return signInResult
}

export const checkAuthStatus = async (setIsLoggedIn: (value: boolean | null) => void) => {
  try {
    const session = await fetchAuthSession()
    console.log("session:", session)
    setIsLoggedIn(!!session.tokens)
  } catch {
    setIsLoggedIn(false)
  }
}

export const singOut = async (
  setIsLoggedIn: (value: boolean | null) => void,
  navigate: NavigateFunction
) => {
  try {
    await signOut()
    setIsLoggedIn(false)
    navigate("/")
  } catch (error) {
    console.error("Error signing out:", error)
  }
}

export const navigateLoggedInUser = async (navigate: NavigateFunction) => {
  const user = await getCurrentUser()

  if (user) {
    navigate("/dashboard")
  }
}

export const checkUser = async (
  setAuthUser: (user: AuthUser | null) => void,
  setIsLoading: (loading: boolean) => void
) => {
  try {
    const user = await getCurrentUser()
    setAuthUser(user)
    console.log("Current user:", user)
  } catch {
    console.log("Not signed in")
    setAuthUser(null)
  } finally {
    setIsLoading(false)
  }
}
