import React from "react";
import TitleDashboard from "@/Components/TitleDashboard";
import ButtonSmall from "@/Components/ButtonSmall";
import ButtonNormal from "@/Components/ButtonNormal";

const Partner = () => {
    const dataPartner = [
        // Pages
        {
            id: 1,
            img: "assets/PP.png",
            name: "Perusahaan 1",
            address: "Alamat Perusahaan",
            join: "21 Sept 2005",
        },
        {
            id: 2,
            img: "assets/Logo.png",
            name: "Perusahaan 2",
            address: "Alamat Perusahaan Lama",
            join: "21 Apr 1999",
        },
    ];

    return (
        <div className="w-full md:mx-8">
            <TitleDashboard
                Title="Dashboard Partner"
                Keterangan="Partner From PT.OSHA Technology"
            />

            <div className="flex justify-center mt-8 mb-2">
                <div className="justify-between items-center md:min-h-1/3 md:flex md:flex-row md:w-full">
                    <div className="">
                        <ButtonNormal bgIcon="bg-green-600 " text="Add" icon="bi:plus" />
                    </div>
                    <div className="flex space-x-2 items-center">
                        <input
                            type="text"
                            placeholder="Search"
                            className="rounded border border-gray-300 h-9 text-center w-72"
                        />
                        <ButtonSmall
                            bgIcon="bg-gray-400"
                            icon="akar-icons:search"
                            colorIcon="text-white"
                        />
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="items-start min-w-screen md:flex md:flex-row md:w-full ">
                    <table className=" w-full text-center overflow-x-scroll">
                        <thead className="bg-gray-100 border-b-2 border-gray-800 text-xs md:text-sm">
                            <tr className="">
                                <th className=" py-2">No</th>
                                <th className="">Picture</th>
                                <th className="">Company Name</th>
                                <th className="">Company's Address</th>
                                <th className="">Start Join</th>
                                <th className="">Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-xs md:text-sm font-medium">
                            {dataPartner.map((row, index) => (
                                <tr key={ row.id}className=" shadow ">
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="text-center flex items-center justify-center md:space-x-4">
                                            <img
                                                src={row.img}
                                                alt=""
                                                className="w-10"
                                            />
                                        </div>
                                    </td>
                                    <td>{row.name}</td>
                                    <td>{row.address}</td>
                                    <td>{row.join}</td>
                                    <td>
                                        <div className="flex justify-center gap-1">
                                            <ButtonSmall
                                                bgIcon="bg-blue-600"
                                                icon="carbon:view"
                                                colorIcon="text-white"
                                            />
                                            <ButtonSmall
                                                bgIcon="bg-yellow-500"
                                                icon="fa6-solid:pen-to-square"
                                                colorIcon="text-white"
                                            />
                                            <ButtonSmall
                                                bgIcon="bg-red-500"
                                                icon="ci:trash-full"
                                                colorIcon="text-white"
                                            />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Partner;
