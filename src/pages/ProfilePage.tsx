import NextPrevButton from "@/components/NextPrevButton";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ID_KEY } from "@/constant";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { profileSchema, ProfileSchemaType } from "@/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const ProfilePage = ({
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
  const PROFILE_INFO_KEY = "Profile_Data";
 
  const {getStoredData, saveDataToStorage} = useLocalStorage();

  const form = useForm<ProfileSchemaType>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: ProfileSchemaType) {
    const existProfileData = getStoredData(PROFILE_INFO_KEY);
    const _id = Date.now().toString();
    saveDataToStorage(ID_KEY, _id);

    if(existProfileData){
      const updatedProfileData = [...existProfileData, {...values, _id}];
      saveDataToStorage(PROFILE_INFO_KEY, updatedProfileData);
    }else{
      saveDataToStorage(PROFILE_INFO_KEY, [{...values, _id}]);
    }

    goToNextPage();
  }
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name*</FormLabel>
                <FormControl>
                  <Input placeholder="Input your first name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name*</FormLabel>
                <FormControl>
                  <Input placeholder="Input your last name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email*</FormLabel>
                <FormControl>
                  <Input placeholder="Input your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number*</FormLabel>
                <FormControl>
                  <Input placeholder="Input your phone number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password*</FormLabel>
                <FormControl>
                  <Input placeholder="Create Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password*</FormLabel>
                <FormControl>
                  <Input placeholder="Confrim Your Password" {...field} />
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
    </>
  );
};

export default ProfilePage;
