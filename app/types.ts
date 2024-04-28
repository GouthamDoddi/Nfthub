import { ReactNode } from "react";

export interface TransprentCardData {
    icon: ReactNode,
    header: string,
    description: string
}

export interface WorkFlowData {
    image: string, index: number, header: string, description: string 
}

export interface RoadmapCardData {
    header: string,
    headerMain: string,
    description: string,
    percentage: number
}

export interface ProfileCardData {
    image: string,
    name: string,
    role: string
}

export interface AccordionItemProps {
    title: string;
    description: string;
  }
