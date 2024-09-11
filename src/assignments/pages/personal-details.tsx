import { FieldValues, SubmitHandler, useFormContext } from "react-hook-form";
import FormNavigation from "./components/FromNav";


const PersonalDetails: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors,isValid },
  } = useFormContext();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-lg font-bold">Personal Details</h2>

      <div className="mb-4">
        <label htmlFor="firstName" className="block">
          First Name
        </label>
        <input
          {...register("firstName", { required: "First name is required" })}
          className="border p-2 w-full"
        />
        {errors.firstName && (
          <span className="text-red-500">
            {errors.firstName.message as string}
          </span>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="lastName" className="block">
          Last Name
        </label>
        <input
          {...register("lastName", { required: "Last name is required" })}
          className="border p-2 w-full"
        />
        {errors.lastName && (
          <span className="text-red-500">
            {errors.lastName.message as string}
          </span>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block">
          Email
        </label>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: /^\S+@\S+$/i,
          })}
          className="border p-2 w-full"
        />
        {errors.email && (
          <span className="text-red-500">Please enter a valid email</span>
        )}
      </div>
        
      <FormNavigation isValid={isValid} nextPath={errors?"/address-details":""} onStepSubmit={handleSubmit(onSubmit)}/>
    </form>
  );
};

export default PersonalDetails;
