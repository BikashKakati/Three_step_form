import { ReactNode } from "react";

export type StepListType = {
  step: number;
  title: string;
  description: string;
};
export type PaginationContainerPropType = {
  children: ReactNode;
  currentPage: number;
};
