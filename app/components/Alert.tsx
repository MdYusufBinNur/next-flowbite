import {Alert} from "flowbite-react";
import React from "react";
import {HiEye} from "react-icons/hi";

export function AlertFunction() {
    return (
        <Alert
            color="success"
            rounded={false}
            withBorderAccent
            onDismiss={console.log}
            additionalContent={
                <React.Fragment>
                    <div className="mt-2 mb-4 text-sm text-green-700 dark:text-green-800">
                        More info about this info alert goes here. This example text is
                        going to run a bit longer so that you can see how spacing within an
                        alert works with this kind of content.
                    </div>
                    <div className="flex">
                        <button
                            type="button"
                            className="mr-2 inline-flex items-center rounded-lg bg-green-700 px-3 py-1.5 text-center text-xs font-medium text-white hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-800 dark:hover:bg-green-900"
                        >
                            <HiEye className="-ml-0.5 mr-2 h-4 w-4"/>
                            View more
                        </button>
                        <button
                            type="button"
                            className="rounded-lg border border-green-700 bg-transparent px-3 py-1.5 text-center text-xs font-medium text-green-700 hover:bg-green-800 hover:text-white focus:ring-4 focus:ring-green-300 dark:border-green-800 dark:text-green-800 dark:hover:text-white"
                        >
                            Dismiss
                        </button>
                    </div>
                </React.Fragment>}>
            <h3 className="text-lg font-medium text-green-700 dark:text-green-800">
                This is a info alert
            </h3>
        </Alert>
    )
}