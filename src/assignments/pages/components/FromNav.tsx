import { useNavigate } from "react-router-dom";

interface FormNavigationProps {
  nextPath?: string;
  prevPath?: string;
  isValid: boolean;
  onStepSubmit:()=>void
}

const FormNavigation: React.FC<FormNavigationProps> = ({
  isValid,
  nextPath,
  prevPath,
  onStepSubmit
}) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between mt-4">
      {prevPath && (
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded"
          onClick={() => navigate(prevPath)}
        >
          Previous
        </button>
      )}
      {nextPath && (
        <button
          disabled={!isValid}
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => {
            onStepSubmit()
            navigate(nextPath)
          }
          }
        >
          Next
        </button>
      )}
    </div>
  );
};

export default FormNavigation;
