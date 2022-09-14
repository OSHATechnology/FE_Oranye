import React from "react";

import { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const FurloughCard = () => {
    return (
        <div className="flex">
            <div className="flex flex-row w-full">
                <div className="flex basis-1/4 items-center justify-center">
                    <img src="assets/Logo.png" alt="" />
                </div>
                <div className="basis-3/4 m-4">
                    <form action="">
                        <table className="w-full">
                            <tr>
                                <td>
                                    <p className="mr-2 text-md">ID</p>
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name=""
                                        id=""
                                        placeholder="Id Employee"
                                        className="rounded w-full border border-gray-300"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className="mr-2 text-md">Name</p>
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name=""
                                        id=""
                                        placeholder="Name Employee"
                                        className="rounded w-full border border-gray-300"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className="mr-2 text-md">Type</p>
                                </td>
                                <td>
                                    <select
                                        name=""
                                        id=""
                                        className="rounded w-full border border-gray-300"
                                    >
                                        <option value="">Cuti Hamil</option>
                                        <option value="">Cuti Nikah</option>
                                        <option value="">Cuti We</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className="mr-2 text-md">Start Date</p>
                                </td>
                                <td>
                                    <input
                                        type="date"
                                        name=""
                                        id=""
                                        placeholder="Start Date"
                                        className="rounded w-full border border-gray-300"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className="mr-2 text-md">End Date</p>
                                </td>
                                <td>
                                    <input
                                        type="date"
                                        name=""
                                        id=""
                                        placeholder="End Date"
                                        className="rounded w-full border border-gray-300"
                                    />
                                </td>
                            </tr>
                        </table>
                        <div className="flex justify-end">
                            <button class="rounded-lg px-4 py-2 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300 mt-2">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

const WorkPermitCard = () => {
    return (
        <div className="flex">
            <div className="flex flex-row w-full">
                <div className="flex basis-1/4 items-center justify-center">
                    <img src="assets/Logo.png" alt="" />
                </div>
                <div className="basis-3/4 m-4">
                    <form action="">
                        <table className="w-full">
                            <tr>
                                <td>
                                    <p className="mr-2 text-md">ID</p>
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name=""
                                        id=""
                                        placeholder="Id Employee"
                                        className="rounded w-full border border-gray-300"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className="mr-2 text-md">Name</p>
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name=""
                                        id=""
                                        placeholder="Name Employee"
                                        className="rounded w-full border border-gray-300"
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <p className="mr-2 text-md">Start Date</p>
                                </td>
                                <td>
                                    <input
                                        type="date"
                                        name=""
                                        id=""
                                        placeholder="Start Date"
                                        className="rounded w-full border border-gray-300"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className="mr-2 text-md">End Date</p>
                                </td>
                                <td>
                                    <input
                                        type="date"
                                        name=""
                                        id=""
                                        placeholder="End Date"
                                        className="rounded w-full border border-gray-300"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <input
                                        type="file"
                                        name=""
                                        id=""
                                        placeholder="End Date"
                                        className="rounded w-full border border-gray-300"
                                    />
                                </td>
                            </tr>
                        </table>
                        <div className="flex justify-end">
                            <button class="rounded-lg px-4 py-2 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300 mt-2">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default function KaryawanKehadiran() {
    const actionType = [
        {
            id: 1,
            name: "Furlough",
            component: <FurloughCard />,
        },
        {
            id: 2,
            name: "Work Permit",
            component: <WorkPermitCard />,
        },
    ];

    return (
        <div className="md:flex md:flex-col justify-center items-center">
            <div className="md:flex md:flex-row md:w-4/5 items-start justify-center m-3">
                <div className="flex basis-1/2 shadow-xl items-center justify-center rounded-xl mx-3 ">
                    <div className="w-full py-4 sm:px-0 ml-4">
                        <Tab.Group>
                            <Tab.List className="flex space-x-1 rounded-xl p-1">
                                {actionType.map((type) => (
                                    <Tab
                                        key={type.id}
                                        className={({ selected }) =>
                                            classNames(
                                                "focus:outline-none hover:text-orange-500 mr-2",
                                                selected
                                                    ? "border-b-2 border-orange-500"
                                                    : " "
                                            )
                                        }
                                    >
                                        {type.name}
                                    </Tab>
                                ))}
                            </Tab.List>
                            <Tab.Panels className="mt-2">
                                {actionType.map((type) => (
                                    <Tab.Panel
                                        key={type.id}
                                        className={classNames(
                                            "rounded-xl bg-white",
                                            "ring-white ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-2"
                                        )}
                                    >
                                        {type.component}
                                    </Tab.Panel>
                                ))}
                            </Tab.Panels>
                        </Tab.Group>
                    </div>
                </div>
                <div className="flex basis-1/2 shadow-xl items-start justify-center rounded-xl mx-3 pr-5">
                    <div class="w-full py-4 sm:px-0 ml-4">
                        <div className="flex space-x-1 rounded-xl p-1 mt-1">
                            Overtime
                        </div>
                        <div className="mt-6">
                            <form action="">
                                <table className="w-full">
                                    <tr>
                                        <td>
                                            <p className="mr-2 text-md">ID</p>
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                name=""
                                                id=""
                                                placeholder="Id Employee"
                                                className="rounded w-full border border-gray-300"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p className="mr-2 text-md">
                                                ID Assigned
                                            </p>
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                name=""
                                                id=""
                                                placeholder="ID Assigned"
                                                className="rounded w-full border border-gray-300"
                                            />
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <p className="mr-2 text-md">
                                                Start
                                            </p>
                                        </td>
                                        <td>
                                            <input
                                                type="date"
                                                name=""
                                                id=""
                                                placeholder="Start Date"
                                                className="rounded w-full border border-gray-300"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p className="mr-2 text-md">End</p>
                                        </td>
                                        <td>
                                            <input
                                                type="date"
                                                name=""
                                                id=""
                                                placeholder="End Date"
                                                className="rounded w-full border border-gray-300"
                                            />
                                        </td>
                                    </tr>
                                </table>
                                <div className="flex justify-end">
                                    <button class="rounded-lg px-4 py-2 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300 mt-2">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:flex md:flex-row md:w-4/5 items-start justify-center m-3">
                <div class="w-full h-80 shadow-md rounded-md">
                    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div class="flex flex-col">
                            <div class="mb-4">
                                <h1 class="text-3xl font-bolder leading-tight text-gray-900">
                                    History
                                </h1>
                            </div>

                            <div class="-my-2 py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                                <div class="align-middle  inline-block w-full shadow overflow-x-auto sm:rounded-lg border-b border-gray-200">
                                    <table class="min-w-full justify-center text-center">
                                        {/* <!-- HEAD start --> */}
                                        <thead className="text-center">
                                            
                                            <tr class="bg-gray-50 border-b border-gray-200 text-xs leading-4  text-gray-500 uppercase" >

                                                <th class="px-6 py-3 font-medium">
                                                    No
                                                </th>
                                                <th class="px-6 py-3 font-medium">
                                                    Name
                                                </th>
                                                <th class="px-6 py-3 font-medium">
                                                    Date
                                                </th>
                                                <th class="px-6 py-3 font-medium">
                                                    Type
                                                </th>
                                                <th class="px-6 py-3 font-medium">
                                                    Status
                                                </th>
                                                <th class="px-6 py-3 font-medium">
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        {/* <!-- HEAD end -->
            <!-- BODY start --> */}
                                        <tbody class="bg-white">
                                            <tr>
                                               
                                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                    <div class="text-sm leading-5 text-gray-900">
                                                        1
                                                    </div>
                                                </td>
                                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                    <div class="text-sm leading-5 text-gray-900">
                                                        Tatang Suherman
                                                    </div>
                                                </td>
                                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                    <div class="text-sm leading-5 text-gray-900">
                                                        06 Sept 2022
                                                    </div>
                                                </td>
                                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                    <div class="text-sm leading-5 text-gray-900">
                                                        Work Permit
                                                    </div>
                                                </td>
                                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                                                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                        Approved
                                                    </span>
                                                </td>
                                                <td class="px-6 py-4 whitespace-no-wrap  border-b border-gray-200 text-sm leading-5 font-medium">
                                                    <a
                                                        href="#"
                                                        class="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline"
                                                    >
                                                        Show
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                               
                                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                    <div class="text-sm leading-5 text-gray-900">
                                                        2
                                                    </div>
                                                </td>
                                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                    <div class="text-sm leading-5 text-gray-900">
                                                        Tatang Suherman
                                                    </div>
                                                </td>
                                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                    <div class="text-sm leading-5 text-gray-900">
                                                        06 Sept 2022
                                                    </div>
                                                </td>
                                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                    <div class="text-sm leading-5 text-gray-900">
                                                        Furlaugh
                                                    </div>
                                                </td>
                                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                                                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-green-800">
                                                        Declined
                                                    </span>
                                                </td>
                                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium">
                                                    <a
                                                        href="#"
                                                        class="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline"
                                                    >
                                                        Show
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                               
                                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                    <div class="text-sm leading-5 text-gray-900">
                                                        3
                                                    </div>
                                                </td>
                                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                    <div class="text-sm leading-5 text-gray-900">
                                                        Tatang Suherman
                                                    </div>
                                                </td>
                                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                    <div class="text-sm leading-5 text-gray-900">
                                                        06 Sept 2022
                                                    </div>
                                                </td>
                                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                    <div class="text-sm leading-5 text-gray-900">
                                                        Furlaugh
                                                    </div>
                                                </td>
                                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                                                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-green-800">
                                                        Pending
                                                    </span>
                                                </td>
                                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium">
                                                    <a
                                                        href="#"
                                                        class="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline"
                                                    >
                                                        Show
                                                    </a>
                                                </td>
                                            </tr>

                                            
                                        </tbody>
                                        {/* <!-- BODY end --> */}
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
