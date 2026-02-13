"use client"

import { useActionState } from "react"
import { createNote } from "../action"
import SubmitButton from "@/component/SubmitButton"

type FormState = {
    success: boolean
    errors: {
        title?: string[]
        content?: string[]
    }
}

const initialState: FormState = {
    success: false,
    errors: {},
}

export default function CreateNotePage() {
    const [state, formAction] = useActionState(
        createNote,
        initialState
    )

    return (
        <div className="p-6 bg-white rounded-lg shadow-md max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-6">Create Note</h1>

            <form action={formAction} className="space-y-4">

                {/* Title */}
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Title
                    </label>
                    <input
                        type="text"
                        name="title"
                        className={`w-full px-4 py-2 border rounded ${state.errors?.title
                                ? "border-red-500 bg-red-50"
                                : "border-gray-300"
                            }`}
                    />
                    {state.errors?.title && (
                        <p className="text-sm text-red-600 mt-1">
                            {state.errors.title[0]}
                        </p>
                    )}
                </div>

                {/* Content */}
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Content
                    </label>
                    <textarea
                        name="content"
                        rows={4}
                        className={`w-full px-4 py-2 border rounded ${state.errors?.content
                                ? "border-red-500 bg-red-50"
                                : "border-gray-300"
                            }`}
                    />
                    {state.errors?.content && (
                        <p className="text-sm text-red-600 mt-1">
                            {state.errors.content[0]}
                        </p>
                    )}
                </div>

                <SubmitButton />

                {/* Success Message */}
                {state.success && (
                    <div className="mt-4 p-3 bg-green-100 text-green-700 rounded text-sm">
                        Note created successfully!
                    </div>
                )}
            </form>
        </div>
    )
}