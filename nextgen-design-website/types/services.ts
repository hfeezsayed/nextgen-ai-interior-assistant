import { servicesData } from "@/data/services";

export type ServiceCategory = keyof typeof servicesData;

export type ServiceItem = (typeof servicesData)[ServiceCategory][number];
