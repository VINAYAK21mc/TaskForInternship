import { Outlet } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  zip: string;
  cardNumber: string;
  cardExpiration: string;
  cardCVV: string;
}
function MutlistepForm(){
    const methods = useForm<FormData>({
        defaultValues: {
          firstName: '',
          lastName: '',
          email: '',
          address: '',
          city: '',
          zip: '',
          cardNumber: '',
          cardExpiration: '',
          cardCVV: ''
        },
        mode:"all"
      });
    
      return (
        
          <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <div className="p-6 bg-white shadow-md rounded-lg">
                
              <FormProvider {...methods}>
                <Outlet/>
              </FormProvider>
            </div>
          </div>
   
      );
}

export default MutlistepForm