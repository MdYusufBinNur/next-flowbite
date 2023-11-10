'use client'
import {Button, Card, Checkbox, Label, TextInput} from "flowbite-react";
import Link from "next/link";

export default function SignUpPage() {
    return (
        <div className="flex items-center justify-center px-6 sm:h-screen lg:h-screen lg:gap-y-6 bg-secondary-900">
            <Card
                className="w-96"
            >
                <form>
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-5">Sign Up</h3>

                    <div className="mb-4 flex flex-col gap-y-3">
                        <Label htmlFor="email">Email</Label>
                        <TextInput
                            id="email"
                            name="email"
                            placeholder="name@example.com"
                            type="email"
                        />
                    </div>
                    <div className="mb-6 flex flex-col gap-y-3">
                        <Label htmlFor="password">Password</Label>
                        <TextInput
                            id="password"
                            name="password"
                            placeholder="••••••••"
                            type="password"
                        />
                    </div>
                    <div className="mb-6 flex flex-col gap-y-3">
                        <Label htmlFor="password">Repeat Password</Label>
                        <TextInput
                            id="password"
                            name="password"
                            placeholder="••••••••"
                            type="password"
                        />
                    </div>
                    <div className="mb-6 flex items-center justify-between">
                        <div className="flex items-center gap-x-3">
                            <Checkbox id="rememberMe" className='text-primary-600 border-gray-300' name="rememberMe"/>
                            <Label htmlFor="rememberMe" >
                                <span className='text-sm font-thin'>
                                    I accept the
                                </span>

                                <a href='#' className='text-sm text-black-900 ml-1'>Terms and Conditions</a>
                            </Label>
                        </div>
                    </div>
                    <div className="flex flex-col items-center pb-10">
                        <Button href="#"
                                className="w-full text-xs font-medium text-center text-white bg-primary-900 rounded-lg hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30">
                            Sign Up
                        </Button>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-300">
                        Already have account?&nbsp;
                        <Link href={'/login'} className="text-primary-600 dark:text-primary-300">
                            Sign in here
                        </Link>
                    </p>
                </form>

            </Card>
        </div>
    )
}
