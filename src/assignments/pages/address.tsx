import React from 'react';
import { FieldValues, SubmitHandler, useFormContext } from 'react-hook-form';
import FormNavigation from './components/FromNav';

const AddressDetails: React.FC = () => {
  const { register, handleSubmit, formState: { errors,isValid } } = useFormContext();


  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-lg font-bold">Address Details</h2>

      <div className="mb-4">
        <label htmlFor="address" className="block">Address</label>
        <input {...register('address', { required: 'Address is required' })} className="border p-2 w-full" />
        {errors.address && <span className="text-red-500">{errors.address.message as string}</span>}
      </div>

      <div className="mb-4">
        <label htmlFor="city" className="block">City</label>
        <input {...register('city', { required: 'City is required' })} className="border p-2 w-full" />
        {errors.city && <span className="text-red-500">{errors.city.message as string}</span>}
      </div>

      <div className="mb-4">
        <label htmlFor="zip" className="block">ZIP Code</label>
        <input {...register('zip', { required: 'ZIP code is required' })} className="border p-2 w-full" />
        {errors.zip && <span className="text-red-500">{errors.zip.message as string}</span>}
      </div>

      <FormNavigation isValid={isValid} prevPath="/" nextPath="/payment-details" onStepSubmit={handleSubmit(onSubmit)}/>
    </form>
  );
};

export default AddressDetails;