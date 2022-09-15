import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "@/Components/Sidebar";
import Dashboard from "@/Pages/Dashboard/Dashboard";
import Role from "@/Pages/Dashboard/RolePermissions";
import Hadir from "@/Pages/Dashboard/Attendance";
import Emp from "@/Pages/Dashboard/Employee";
import Mitra from "@/Pages/Dashboard/Partner";


export default function Blank() {
    return (
        <div className="flex">
            
            <BrowserRouter>
                <Sidebar />

                <Routes>
                    <Route path="Dashboard" element={<Dashboard />} />
                    <Route path="Role" element={<Role />} />
                    <Route path="Hadir" element={<Hadir />} />
                    <Route path="Emp" element={<Emp />} />
                    <Route path="Mitra" element={<Mitra />} />
                </Routes>

            </BrowserRouter>
        </div>
       
    );
}
