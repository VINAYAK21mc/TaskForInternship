import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const PaymentDetails: React.FC = () => {
  const { register, handleSubmit, formState: { errors, isValid } } = useFormContext();
  const navigate = useNavigate();

  const onSubmit = () => {
    navigate('/summary');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-lg font-bold">Payment Details</h2>

      <div className="mb-4">
        <label htmlFor="cardNumber" className="block">Card Number</label>
        <input {...register('cardNumber', { required: 'Card number is required' })} className="border p-2 w-full" />
        {errors.cardNumber && <span className="text-red-500">{errors.cardNumber.message as string}</span>}
      </div>

      <div className="mb-4">
        <label htmlFor="cardExpiration" className="block">Expiration Date</label>
        <input {...register('cardExpiration', { required: 'Expiration date is required' })} className="border p-2 w-full" />
        {errors.cardExpiration && <span className="text-red-500">{errors.cardExpiration.message as string}</span>}
      </div>

      <div className="mb-4">
        <label htmlFor="cardCVV" className="block">CVV</label>
        <input {...register('cardCVV', { required: 'CVV is required' })} className="border p-2 w-full" />
        {errors.cardCVV && <span className="text-red-500">{errors.cardCVV.message as string}</span>}
      </div>

      <button disabled={!isValid} type='submit' className='bg-blue-500 text-white px-4 py-2 rounded'>Summary</button>
    </form>
  );
};

export default PaymentDetails;