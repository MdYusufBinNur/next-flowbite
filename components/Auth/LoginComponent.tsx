'use client'
import {Button, Card, Checkbox, Label, TextInput, Spinner, Toast} from "flowbite-react";

import {useState} from "react";
import {signIn} from "next-auth/react";
import {useRouter} from "next/router";

const LoginForm = () => {
    const router = useRouter;
    let loading = false
    const [showLoading, setShowLoading] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleEmailChange = e => setEmail(e.target.value)
    const handlePasswordChange = e => setPassword(e.target.value)

    const clearInputs = () => {
        setEmail("")
        setPassword("")
        setError("")
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setShowLoading(true)
        await signIn("credentials", {
            email,
            password,
            redirect: false
        })
            .then(response => {
                if (response.error)
                    setError(JSON.parse(response.error).message)
                else {
                    clearInputs()
                    router.push('/')
                }
                clearInputs()

            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setShowLoading(true)
            })
    }

    return (
        <div className="flex items-center justify-center px-6 sm:h-screen lg:h-screen lg:gap-y-6 bg-secondary-900">
            <Card
                className="w-96"
            >
                <form>
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-5">Sign In</h3>

                    <div className="mb-4 flex flex-col gap-y-3">
                        <Label htmlFor="email">Email</Label>
                        <TextInput
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            name="email"
                            placeholder="name@example.com"
                            type="email"
                        />
                    </div>
                    <div className="mb-6 flex flex-col gap-y-3">
                        <Label htmlFor="password">Your password</Label>
                        <TextInput
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                            name="password"
                            placeholder="••••••••"
                            type="password"
                        />
                    </div>
                    <div className="mb-6 flex items-center justify-between">
                        <div className="flex items-center gap-x-3">
                            <Checkbox id="rememberMe" className='text-primary-600 border-gray-300' name="rememberMe"/>
                            <Label htmlFor="rememberMe">Remember me</Label>
                        </div>
                        <a
                            href="/forgot-password"
                            className="w-1/2 text-right text-sm text-primary-600 dark:text-primary-300 text-sm"
                        >
                            Forgot Password?
                        </a>
                    </div>
                    <div className="flex flex-col items-center pb-10">
                        <Button type={'submit'}
                                className="w-full text-xs font-medium text-center text-white bg-primary-900 rounded-lg hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30">
                            {showLoading && <Spinner aria-label="Spinner button example" size="sm"/>}
                            Sign in
                        </Button>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-300">
                        Don't have account?&nbsp;
                        <a href="/signup" className="text-primary-600 dark:text-primary-300">
                            Sign up here
                        </a>
                    </p>

                </form>
                {showToast && (
                    <Toast>
                        <div className="ml-3 text-sm font-normal">Message</div>
                        <Toast.Toggle onDismiss={() => setShowToast(false)}/>
                    </Toast>
                )}
            </Card>
        </div>
    )
}

export default LoginForm