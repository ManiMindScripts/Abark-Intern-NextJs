'use client'

import { useActionState, useEffect, useState } from 'react'
import { submitContactForm } from '../action'
import { FormState } from '../types'
import SubmitButton from './SubmitButton'

const initialState: FormState = {
    success: false,
    message: '',
    errors: undefined
}

export default function ContactForm() {
    const [state, formAction, isPending] = useActionState(submitContactForm, initialState)
    const [showSuccess, setShowSuccess] = useState(false)

    useEffect(() => {
        if (state.success) {
            setShowSuccess(true)
           
            const form = document.querySelector('form') as HTMLFormElement
            form?.reset()
            
            const timer = setTimeout(() => setShowSuccess(false), 5000)
            return () => clearTimeout(timer)
        }
    }, [state.success])

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
           
            {showSuccess && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-md flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">{state.message}</span>
                </div>
            )}

           
            {!state.success && state.message && !state.errors && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-md flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">{state.message}</span>
                </div>
            )}

            <form action={formAction} className="space-y-6">
              
                <div>
                    <label 
                        htmlFor="name" 
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                            state.errors?.name 
                                ? 'border-red-500 bg-red-50' 
                                : 'border-gray-300'
                        }`}
                        placeholder="John Doe"
                        disabled={isPending}
                        aria-describedby="name-error"
                    />
                    {state.errors?.name && (
                        <p id="name-error" className="mt-1 text-sm text-red-600">
                            {state.errors.name[0]}
                        </p>
                    )}
                </div>
                <div>
                    <label 
                        htmlFor="email" 
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Email <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                            state.errors?.email 
                                ? 'border-red-500 bg-red-50' 
                                : 'border-gray-300'
                        }`}
                        placeholder="john@example.com"
                        disabled={isPending}
                        aria-describedby="email-error"
                    />
                    {state.errors?.email && (
                        <p id="email-error" className="mt-1 text-sm text-red-600">
                            {state.errors.email[0]}
                        </p>
                    )}
                </div>

               
                <div>
                    <label 
                        htmlFor="message" 
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                        className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none ${
                            state.errors?.message 
                                ? 'border-red-500 bg-red-50' 
                                : 'border-gray-300'
                        }`}
                        placeholder="Your message..."
                        disabled={isPending}
                        aria-describedby="message-error"
                    />
                    {state.errors?.message && (
                        <p id="message-error" className="mt-1 text-sm text-red-600">
                            {state.errors.message[0]}
                        </p>
                    )}
                </div>

                
                <SubmitButton isPending={isPending} />
            </form>

            
            {isPending && (
                <div className="mt-4 text-sm text-gray-600 flex items-center gap-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                    Processing your message...
                </div>
            )}
        </div>
    )
}