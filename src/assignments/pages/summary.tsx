import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Summary: React.FC = () => {
  const { getValues } = useFormContext();
  const navigate = useNavigate();
  const formData = getValues();

  return (
    <div>
      <h2 className="text-lg font-bold">Summary</h2>
      <pre className="bg-gray-100 p-4">{JSON.stringify(formData, null, 2)}</pre>
      <button onClick={()=>navigate('/2')} className='bg-blue-500 text-white px-4 py-2 rounded'>Ecommerce</button>
    </div>
  );
};

export default Summary;