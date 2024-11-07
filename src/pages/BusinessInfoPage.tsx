import NextPrevButton from "@/components/NextPrevButton";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { brandTypeList, documentsList, ID_KEY } from "@/constant";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { businessSchema, BusinessSchemaType } from "@/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronRight, HelpCircle, X } from "lucide-react";
import { useForm } from "react-hook-form";

const BusinessInfoPage = ({
  goToNextPage,
  goToPreviousPage,
  currentPage,
  totalPage,
}: {
  goToNextPage: () => void;
  goToPreviousPage: () => void;
  currentPage: number;
  totalPage: number;
}) => {
  const BUSINESS_INFO_KEY = "Business_Data";
  const {saveDataToStorage, getStoredData} = useLocalStorage();

  const form = useForm<BusinessSchemaType>({
    resolver: zodResolver(businessSchema),
    defaultValues: {
      brandName: "",
      brandType: "",
      streetAddress: "",
      city: "",
      zipCode: "",
      taxIdNumber: "",
    },
  });

 


  function onSubmit(values: BusinessSchemaType) {
    const existBusinessData = getStoredData(BUSINESS_INFO_KEY);
    const _id = getStoredData(ID_KEY);

    if(existBusinessData){
      const updatedBusinessData = [...existBusinessData, {...values, _id}];
      saveDataToStorage(BUSINESS_INFO_KEY, updatedBusinessData);
    }else{
      saveDataToStorage(BUSINESS_INFO_KEY, [{...values, _id}]);
    }

    goToNextPage();
  }
  return (
    <>
      <div>
        <h4 className="uppercase mb-3 font-medium text-blue-500">
          general information
        </h4>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            <FormField
              control={form.control}
              name="brandName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Brand Name*</FormLabel>
                  <FormControl>
                    <Input placeholder="Input your first name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="brandType"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center gap-2 py-1">
                    <FormLabel>Brand Type*</FormLabel>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <HelpCircle className="h-4 w-4 text-gray-400" />
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs bg-foreground/80 text-background">
                          <p className="mb-4">
                            Local: Brands with distribution in 3 divisions or
                            less OR multiple divisions but a total of 150 stores
                            or less.
                          </p>
                          <p>
                            National: Brands with distribution in 4 or more
                            divisions or in more than 150 stores.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger className="flex-1">
                        <SelectValue placeholder="Select a client" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {brandTypeList.map((item) => (
                        <SelectItem value={item.brandType} key={item.id}>
                          {item.brandType}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="streetAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Street Address*</FormLabel>
                  <FormControl>
                    <Input placeholder="Input your street address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City*</FormLabel>
                  <FormControl>
                    <Input placeholder="Input your city" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="zipCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Zip Code*</FormLabel>
                  <FormControl>
                    <Input placeholder="Input Zip code" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="taxIdNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tax ID Number*</FormLabel>
                  <FormControl>
                    <Input placeholder="Input Tax ID Number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <NextPrevButton
              goToPreviousPage={goToPreviousPage}
              totalPage={totalPage}
              currentPage={currentPage}
            />
          </form>
        </Form>
      </div>
      <div className="mt-12">
        <div className="space-y-4">
          <h4 className="uppercase mb-3 font-medium text-blue-500">
            Documents
          </h4>
          <p className="text-sm text-gray-600">
            Once the following documents are signed, you&apos;ll be ready to get
            started
          </p>
          {documentsList.map((document) => (
            <InputPreText
              key={document.id}
              signed={document.uploaded}
              content={document.content}
            />
          ))}
        </div>
      </div>
      <div className="mt-12">
        <div className="space-y-4">
          <h4 className="uppercase mb-3 font-medium text-blue-500">
            coi pdf upload
          </h4>
          <p className="text-sm text-gray-600">
            Once the following documents are signed, you&apos;ll be ready to get
            started
          </p>

          <InputPreText
            signed={documentsList[0].uploaded}
            content={documentsList[0].content}
          />
        </div>
      </div>
    </>
  );
};

const InputPreText = ({
  signed,
  content,
}: {
  signed: boolean;
  content: string;
}) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-start gap-4">
        <div className="flex-1 flex items-center justify-between rounded-lg border border-zinc-400 py-2 px-4">
          <span>{content}</span>
          {signed ? (
            <Check className="h-5 w-5 text-green-500" />
          ) : (
            <X className="h-5 w-5 text-red-500" />
          )}
        </div>
        <Button
          variant="default"
          className="bg-gradient-violet p-3 h-auto w-auto"
          size="icon"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
export default BusinessInfoPage;
