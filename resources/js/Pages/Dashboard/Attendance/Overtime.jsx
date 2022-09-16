import React from 'react'
import ButtonSmall from "@/Components/ButtonSmall";
import SimpleCard from "@/Components/SimpleCard";
import { Icon } from "@iconify/react";

const Overtime = () => {
    const dataOvertime = [
      {
        id: "1",
        img: "assets/PP.png",
        name: "Tatang Suherman",
        hour: "2",
        acc: "Tatang Suherman"
      },
      {
        id: "2",
        img: "assets/Logo.png",
        name: "Arunika",
        hour: "Work",
        acc: "Lead"
      }
     ]
  
      return (
          <div className="w-full space-y-4">
              <div className="flex gap-8">
                  <SimpleCard
                      bgColor="bg-orange-100"
                      Title="Overtime"
                      Icon="material-symbols:work-history"
                      Count="7"
                  />
              </div>
              <div className="md:flex justify-between space-y-4 md:space-y-0">
                  <div>
                      <p>Sunday, 28 August 2022 | Overtime</p>
                  </div>
                  <div className="flex gap-2 justify-end">
                      <input
                          type="text"
                          placeholder="Search"
                          className="rounded h-9 border border-gray-300"
                      />
                      <ButtonSmall icon="akar-icons:search" />
                      <ButtonSmall icon="ant-design:filter-outlined" />
                  </div>
              </div>
              <div>
                  <table className="w-full text-center overflow-x-scroll">
                      <thead className='bg-gray-200 h-10 border-b border-gray-500'>
                          <tr>
                              <th>No</th>
                              <th>Nama</th>
                              <th>Hour</th>
                              <th>Assigned By</th>
                              <th>Action</th>
                          </tr>
                      </thead>
                      <tbody className='text-xs font-medium text-gray-700 md:text-sm'>
                        {dataOvertime.map((row,index) => (
                          
                          <tr>
                              <td>{index + 1}</td>
                              <td>
                                  <div className="flex items-center justify-center">
                                      <img
                                          src={row.img}
                                          alt=""
                                          className="w-8"
                                      />
                                      <span>{row.name}</span>
                                  </div>
                              </td>
                              <td>

                                      <span>{row.hour}</span>

                              </td>
                              <td>{row.acc}</td>
                              <td>
                                
                                  <ButtonSmall bgIcon="bg-blue-500" icon="carbon:view"/>
                              </td>
                          </tr>
                        ))}
                      </tbody>
                  </table>
              </div>
          </div>
  )
}

export default Overtime