'use client'
import {Button, Card, Checkbox, Label, TextInput} from "flowbite-react";

export default function VerifyPage() {
    return (
        <div className="flex items-center justify-center px-6 sm:h-screen lg:h-screen lg:gap-y-6 bg-secondary-900">
            <Card
                className="w-96"
            >
                <form>
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-5">Confirm OTP</h3>
                    <p className={'text-sm'}>
                        A one time password has been sent to you email.
                    </p>

                    <div className="mb-4 flex flex-col gap-y-3 mt-4">
                        <TextInput
                            id="otp"
                            name="otp"
                            placeholder="One Time Password"
                            type="text"
                        />
                    </div>
                    <div className="flex flex-col items-center pb-10">
                        <Button href="/change-password"
                                className="w-full text-xs font-medium text-center text-white bg-primary-900 rounded-lg hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30">
                            Confirm
                        </Button>
                    </div>
                </form>

            </Card>
        </div>
    )
}
