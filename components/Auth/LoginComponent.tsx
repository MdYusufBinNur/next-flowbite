'use client'
import {Button, Card, Checkbox, Label, TextInput, Spinner, Toast} from "flowbite-react";


import {SyntheticEvent, useState} from "react";
import {signIn} from "next-auth/react";

import {login} from "@/components/api/http/login";
import {TokenUser} from "@/common/types/login.type";
import Link from "next/link";
import {redirect} from "next/navigation";

import {useRouter} from "next/navigation";
import Toaster from "@/components/common/Toast";

const LoginForm = () => {
    const router = useRouter();
    const [showLoading, setShowLoading] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)

    const handleEmailChange = e => setEmail(e.target.value)
    const handlePasswordChange = e => setPassword(e.target.value)
    setTimeout(() => {
        setError(false);
    }, 3000);
    const clearInputs = () => {
        setEmail("")
        setPassword("")
        setError(false)
    }

    const onSubmit = async (e: SyntheticEvent) => {
        try {
            e.preventDefault()
            // console.log(email)
            // console.log(password)
            // return;

            setShowLoading(true)
            const result = await login(email, password);
            const tokenUser = result.data as TokenUser;
            localStorage.setItem("session", JSON.stringify(tokenUser));
            setShowLoading(false);
            router.push('/dashboard')
        } catch (error) {
            setShowLoading(false);
            setError(error.response.data.message ? error.response.data.message : 'An error occurred.')
        }
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     setShowLoading(true)
    //
    //     await signIn("credentials", {
    //         email,
    //         password,
    //         redirect: false
    //     })
    //         .then(response => {
    //             if (response.error)
    //                 setError(JSON.parse(response.error).message)
    //             else {
    //                 clearInputs()
    //                 router.push('/')
    //             }
    //             clearInputs()
    //
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    //         .finally(() => {
    //             setShowLoading(true)
    //         })
    // }

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
                        <Button onClick={(e) => onSubmit(e)}
                                className="w-full text-xs font-medium text-center text-white bg-primary-900 rounded-lg hover:bg-[#050708]/90  focus:outline-none font-medium rounded-lg text-sm text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30">
                            {showLoading ? <Spinner aria-label="Spinner button" color="success" size="md"/> : ' Sign in'}

                        </Button>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-300">
                        Don't have account?&nbsp;
                        <a href="/signup" className="text-primary-600 dark:text-primary-300">
                            Sign up here
                        </a>
                    </p>

                </form>

            </Card>
            {error && <Toaster duration={2000} children={error}/>}
        </div>
    )
}

export default LoginForm