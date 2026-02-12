'use client'

interface SubmitButtonProps {
    isPending: boolean
}

export default function SubmitButton({ isPending }: SubmitButtonProps) {
    return (
        <button
            type="submit"
            disabled={isPending}
            className="w-full bg-blue-600 text-black py-3 px-4 rounded-md hover:bg-blue-700 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
                     disabled:bg-blue-300 disabled:cursor-not-allowed 
                     transition-colors duration-200 font-medium
                     flex items-center justify-center gap-2"
        >
            {isPending ? (
                <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending...</span>
                </>
            ) : (
                <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    <span>Send Message</span>
                </>
            )}
        </button>
    )
}