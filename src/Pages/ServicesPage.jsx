// Animation
import { useEffect, useState } from "react";
import ServicesPageCard from "../Components/ServicesPageCard/ServicesPageCard";

export default function ServicesPage() {
  const services = [
    {
      title: "General Construction Services",
      subSections: [
        {
          subTitle: "Residential Building Construction",
          bgImg: `url('./src/assets/servicesPage/General-Construction-Services/residential-building-construction.webp')`,
          descriptions: ["Apartments", "Villas", "Multi-family Houses"],
        },
        {
          subTitle: "Commercial Building Construction",
          bgImg: `url('./src/assets/servicesPage/General-Construction-Services/commercial-building-construction.webp')`,
          descriptions: ["Shopping Centers", "Hotels", "Offices"],
        },
        {
          subTitle: "Industrial Building Construction",
          bgImg: `url('./src/assets/servicesPage/General-Construction-Services/industrial-building-construction.webp')`,
          descriptions: [
            "Factories",
            "Processing Plants",
            "Warehouses",
            "Distribution Centers",
          ],
        },
        {
          subTitle: "Interior and Exterior Finishing",
          bgImg: `url('./src/assets/servicesPage/General-Construction-Services/interior-and-exterior-finishing.webp')`,
          descriptions: [
            "Includes all finishing works, from flooring, walls, and ceilings to painting, gypsum, and tiling",
          ],
        },
        {
          subTitle: "Infrastructure Works",
          bgImg: `url('./src/assets/servicesPage/General-Construction-Services/infrastructure-works.webp')`,
          descriptions: [
            "Sewage Networks",
            "Water Supply",
            "Electricity",
            "Roads and Pavements",
          ],
        },
      ],
    },
    {
      title: "Specialized Services",
      subSections: [
        {
          subTitle: "Electrical Installations",
          bgImg: `url('src/assets/servicesSec/electrical.webp')`,
          descriptions: ["Control Panels", "Wiring", "Sockets"],
        },
        {
          subTitle: "Mechanical Installations",
          bgImg: `url('src/assets/servicesSec/mechanical.webp')`,
          descriptions: [
            "Heating Systems",
            "Ventilation",
            "Air Conditioning",
            "Plumbing",
            "Firefighting Systems",
          ],
        },
        {
          subTitle: "Interior Decoration Works",
          bgImg: `url('src/assets/servicesSec/interior-decoration.webp')`,
          descriptions: [
            "Comprehensive interior finishes, including flooring",
            "Walls",
            "Ceilings",
            "Lighting",
          ],
        },
        {
          subTitle: "Landscaping Works",
          bgImg: `url('src/assets/servicesSec/landscaping.webp')`,
          descriptions: ["Garden Design and Construction", "Playgrounds", "Fountains"],
        },
        {
          subTitle: "Site Preparation and Demolition",
          bgImg: `url('src/assets/servicesSec/site-prep.webp')`,
          descriptions: [
            "Site Preparation for Construction",
            "Demolition of Old Buildings",
          ],
        },
      ],
    },
    {
      title: "More Services",
      subSections: [
        {
          subTitle: "Project Management",
          bgImg: `url('src/assets/servicesSec/project-management.webp')`,
          descriptions: [
            "Planning and executing all construction projects, starting from the feasibility study phase to final delivery",
          ],
        },
        {
          subTitle: "Engineering Design",
          bgImg: `url('src/assets/servicesSec/engineering-design.webp')`,
          descriptions: [
            "Designing all construction projects and supervising their execution from a technical perspective",
          ],
        },
        {
          subTitle: "Procurement",
          bgImg: `url('src/assets/servicesSec/procurement.webp')`,
          descriptions: [
            "Purchasing all necessary materials and equipment required for the execution of construction projects",
          ],
        },
        {
          subTitle: "Maintenance",
          bgImg: `url('src/assets/servicesSec/maintenance.webp')`,
          descriptions: [
            "Providing regular maintenance services for the company’s buildings and its clients",
          ],
        },
      ],
    },
  ];
  

  return (
    <section className="pt-40 pb-16 bg-[#111] text-white min-h-screen overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-(--main-color) mb-16">
          Services
        </h2>

        {services.map((service, index) => (
          <ServicesPageCard service={service} key={index} />
        ))}
      </div>
    </section>
  );
}
