import React from "react";
import { FaFileInvoice, FaCalendarAlt, FaUsers } from "react-icons/fa";

const cards = [
  {
    icon: <FaFileInvoice className="text-white" size={20} />,
    bg: "bg-[#5B4DFF]",
    title: "Online Billing, Invoicing, & Contracts",
    text: "Simple and secure control of your organization's financial and legal transactions. Send customized invoices and contracts",
  },
  {
    icon: <FaCalendarAlt className="text-white" size={20} />,
    bg: "bg-[#2FC79E]",
    title: "Easy Scheduling & Attendance Tracking",
    text: "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance",
  },
  {
    icon: <FaUsers className="text-white" size={20} />,
    bg: "bg-[#38BDF8]",
    title: "Customer Tracking",
    text: "Automate and track emails to individuals or groups. Skiline's built-in system helps organize your organization",
  },
];

const FeaturesTop = () => {
  return (
    <section className="px-6 md:px-32 pb-20 text-center">
      <h3 className="font-bold text-lg mb-2">
        <span className="text-[#252641]">All-In-One</span>{" "}
        <span className="text-[#49BBBD]">Cloud Software.</span>
      </h3>
      <p className="max-w-md mx-auto text-sm text-gray-500 mb-12">
        TOTC is one powerful online software suite that combines all the
        tools needed to run a successful school or office.
      </p>

      <div className="grid md:grid-cols-3 gap-6 relative z-10">
        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-white shadow-lg rounded-xl p-8 text-center"
          >
            <div
              className={`${card.bg} size-12 rounded-full flex items-center justify-center mx-auto mb-4`}
            >
              {card.icon}
            </div>
            <h3 className="font-bold text-[#252641] mb-2">{card.title}</h3>
            <p className="text-sm text-gray-500">{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesTop;