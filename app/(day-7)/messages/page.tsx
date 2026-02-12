import { getMessages } from "@/lib/message-store"
import Link from "next/link"

export default async function MessagesPage() {
    const messages = await getMessages()

    return (
        <main className="max-w-7xl mx-auto p-6">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">All Messages</h1>
                    <p className="text-gray-600 mt-2">
                        View all messages sent through the contact form
                    </p>
                </div>
                <Link
                    href="/contact"
                    className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 
                             transition-colors duration-200 font-medium flex items-center gap-2"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Send New Message
                </Link>
            </div>

            {messages.length === 0 ? (
                <div className="bg-white rounded-lg shadow-md p-12 text-center">
                    <svg 
                        className="w-16 h-16 text-gray-400 mx-auto mb-4" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={1.5} 
                            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" 
                        />
                    </svg>
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">No messages yet</h3>
                    <p className="text-gray-500 mb-6">Be the first one to send a message!</p>
                    <Link
                        href="/contact"
                        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
                    >
                        Send a Message
                    </Link>
                </div>
            ) : (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                        <span className="text-blue-600 font-semibold text-lg">
                                            {message.name.charAt(0).toUpperCase()}
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">
                                            {message.name}
                                        </h3>
                                        <a
                                            href={`mailto:${message.email}`}
                                            className="text-sm text-blue-600 hover:underline"
                                        >
                                            {message.email}
                                        </a>
                                    </div>
                                </div>
                                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                    {new Date(message.createdAt).toLocaleDateString('en-US', {
                                        month: 'short',
                                        day: 'numeric',
                                        year: 'numeric'
                                    })}
                                </span>
                            </div>

                            {/* Message content */}
                            <div className="bg-gray-50 rounded-lg p-4">
                                <p className="text-gray-700 whitespace-pre-wrap text-sm leading-relaxed">
                                    {message.message}
                                </p>
                            </div>

                            {/* Time footer */}
                            <div className="mt-4 text-xs text-gray-400 flex justify-end">
                                {new Date(message.createdAt).toLocaleTimeString('en-US', {
                                    hour: '2-digit',
                                    minute: '2-digit'
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Stats footer */}
            {messages.length > 0 && (
                <div className="mt-8 text-center text-sm text-gray-500">
                    Showing {messages.length} message{messages.length !== 1 ? 's' : ''}
                </div>
            )}
        </main>
    )
}