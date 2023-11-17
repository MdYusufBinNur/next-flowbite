/* eslint-disable jsx-a11y/anchor-is-valid */
'use client'
import {Button, Card, Checkbox, Label, Spinner, TextInput} from "flowbite-react";
import {useState, SyntheticEvent} from "react";
import type {FC} from "react";
import {signIn} from "next-auth/react";

type props = {
    searchParams?: Record<"callbackUrl" | "error", string>
}

const SignInPage: FC = function (props: props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showLoading, setShowLoading] = useState(false);
    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        setShowLoading(true)
        await signIn("credentials", {
            email,
            password,
            redirect: true,
            callbackUrl: '/dashboard',
        })
    }

    return (
        <div className="flex flex-col items-center justify-center px-6 lg:h-screen lg:gap-y-12">
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
                            onChange={(e) => setEmail(e.target.value)}
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
                            onChange={(e) => setPassword(e.target.value)}
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
                        <Button onClick={(e) => submit(e)}
                                className="w-full text-xs font-medium text-center text-white bg-primary-900 rounded-lg hover:bg-[#050708]/90  focus:outline-none font-medium rounded-lg text-sm text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30">
                            {showLoading ?
                                <Spinner aria-label="Spinner button" color="success" size="md"/> : ' Sign in'}

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

        </div>
    );
};

export default SignInPage;
