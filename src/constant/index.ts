import { StepListType } from "@/types";

export  const ID_KEY = "Unique_ID";
export const stepsList:StepListType[] = [
    {
      step: 1,
      title: "Your Profile",
      description: "Enter the login information for your account. You will be able to create additional users after registering."
    },
    {
      step: 2,
      title: "Business Information",
      description: "Please, enter information about your company."
    },
    {
      step: 3,
      title: "Other Users",
      description:"Additional users you want to create"
    },
  ];

export const documentsList = [
  {
    id: 1,
    content: "Electronically sign the agreement(s)",
    uploaded: true,
  },
  {
    id: 2,
    content: "Non adult beverage Kroger market supplier waiver and release",
    uploaded: false,
  },
];

export  const brandTypeList = [
    {
      id: 1,
      brandType: "Local",
    },
    {
      id: 2,
      brandType: "National",
    },
  ];