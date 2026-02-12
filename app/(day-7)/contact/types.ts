export type ContactMessage = {
  id: string
  name: string
  email: string
  message: string
  createdAt: string
}

export type FormErrors = {
  name?: string[]
  email?: string[]
  message?: string[]
}

export type FormState = {
  success: boolean
  errors?: FormErrors
  message?: string
}