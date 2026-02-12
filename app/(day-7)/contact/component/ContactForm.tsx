'use client'

import { useActionState, useState } from 'react'
import { submitContactForm } from '../action'
import { FormState } from '../types'
import SubmitButton from './SubmitButton'

const initialState: FormState = {
    success: false,
    message: '',
    errors: undefined,
}

export default function ContactForm() {
    const [state, formAction, isPending] = useActionState(
        submitContactForm,
        initialState
    )
    const [formKey, setFormKey] = useState(0)

    if (state.success && formKey === 0) {
        setFormKey(1)
    }

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            {!state.success && state.message && !state.errors && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-md">
                    {state.message}
                </div>
            )}

            <form key={formKey} action={formAction} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Name *
                    </label>
                    <input
                        type="text"
                        name="name"
                        disabled={isPending}
                        className={`w-full px-4 py-2 border rounded-md ${state.errors?.name ? 'border-red-500 bg-red-50' : 'border-gray-300'
                            }`}
                    />
                    {state.errors?.name && (
                        <p className="mt-1 text-sm text-red-600">
                            {state.errors.name[0]}
                        </p>
                    )}
                </div>


                <div>
                    <label className="block text-sm font-medium mb-1">
                        Email *
                    </label>
                    <input
                        type="email"
                        name="email"
                        disabled={isPending}
                        className={`w-full px-4 py-2 border rounded-md ${state.errors?.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
                            }`}
                    />
                    {state.errors?.email && (
                        <p className="mt-1 text-sm text-red-600">
                            {state.errors.email[0]}
                        </p>
                    )}
                </div>


                <div>
                    <label className="block text-sm font-medium mb-1">
                        Message *
                    </label>
                    <textarea
                        name="message"
                        rows={5}
                        disabled={isPending}
                        className={`w-full px-4 py-2 border rounded-md ${state.errors?.message
                                ? 'border-red-500 bg-red-50'
                                : 'border-gray-300'
                            }`}
                    />
                    {state.errors?.message && (
                        <p className="mt-1 text-sm text-red-600">
                            {state.errors.message[0]}
                        </p>
                    )}
                </div>

                <SubmitButton isPending={isPending} />
                {state.success && (
                    <div className="mt-4 p-3 bg-green-100 border border-green-300 text-green-800 rounded-md text-sm font-medium">
                        {state.message}
                    </div>
                )}
            </form>
            {isPending && (
                <p className="mt-4 text-sm text-gray-600">
                    Processing...
                </p>
            )}
        </div>
    )
}