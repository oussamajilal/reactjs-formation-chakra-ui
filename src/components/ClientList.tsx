import * as React from "react";
import ClientTable from "./ClientTable";

const ClientList = () => {
  const clients = [
    {
      id: "1",
      firstName: "Ahmed",
      lastName: "Ali",
      email: "ahmed.ali@email.com",
      phoneNumber: "0666778899",
      height: 72.5,
      isActive: true,
    },
    {
      id: "2",
      firstName: "Salim",
      lastName: "Karam",
      email: "salim.karam@email.com",
      phoneNumber: "0666778898",
      height: 65.0,
      isActive: false,
    },
    {
      id: "3",
      firstName: "Soukaina",
      lastName: "Latif",
      email: "soukaina.latif@email.com",
      phoneNumber: "0666778897",
      height: 69.3,
      isActive: true,
    },
  ];

  return <ClientTable clients={clients} />;
};

export default ClientList;
