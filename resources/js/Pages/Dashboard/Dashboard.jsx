import React from "react";
import SimpleCard from "@/Components/SimpleCard";
import TitleDashboard from "@/Components/TitleDashboard";
import PropertyMitra from "@/Components/PropertyMitra";

const Dashboard = () => {
    return (
        <div className="md:ml-8">
            <TitleDashboard
                Title="Property Dashboard"
                Keterangan="Welcome, Admin!"
            />

            <div className=" mt-8 space-y-4 md:space-y-0 md:flex gap-16">
                <SimpleCard
                    bgColor="bg-amber-100"
                    Title="Role Perusahaan"
                    Icon="fa-solid:user-cog"
                    Count="5"
                />
                <SimpleCard
                    bgColor="bg-red-100"
                    Title="Jumlah Karyawan"
                    Icon="fa-solid:user"
                    Count="24"
                />
                <SimpleCard
                    bgColor="bg-green-100"
                    Title="Jumlah Mitra"
                    Icon="fa-solid:users"
                    Count="8"
                />
            </div>

            <TitleDashboard Title="Property Mitra" Keterangan="" />
            <div className=" mt-4 space-y-4 md:flex-col">

            <PropertyMitra
                Img="assets/PP.png"
                Title="Nama Mitra 1 PT.OSHA Technology"
                Waktu="Selasa, 20 Sept 2021"
                Alamat="Sekeloa Tengah Dipatiukur Coblong Kota Bandung"
            />
            <PropertyMitra
                Img="assets/Logo.png"
                Title="Nama Mitra 2 PT.OSHA Technology "
                Waktu="Senin, 20 Apr 2021"
                Alamat="Gang SDN Cipanas 04 Kp. Pasekon Cipanas Cianjur"
            />
            </div>
            <TitleDashboard Title="Performa Absensi" Keterangan="" />

            
        </div>
    );
};

export default Dashboard;
