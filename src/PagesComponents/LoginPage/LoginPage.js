import React from 'react'

const LoginPage = () => {
    return (
        <div className="flex min-h-screen items-center justify-center p-12">
            <form action="">
                <div className="max-w-sm rounded-3xl bg-gray-100 p-12">
                    <div className="">
                        <div>
                            <h1 className="text-xl font-bold text-center">Login</h1>
                        </div>

                        <div className="mt-8 space-y-8">
                            <div className="space-y-6">
                                <input className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-600 invalid:border-red-500 dark:placeholder-gray-300" placeholder="Your Email" type="email" name="email" id="email" />

                                <input className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-600 invalid:border-red-500 dark:placeholder-gray-300" placeholder="Your Password" type="password" name="password" id="password" />
                            </div>

                            <button className="font-bold h-9 px-3 w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 focus:bg-blue-700 transition duration-500 rounded-md text-white">
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default LoginPage
