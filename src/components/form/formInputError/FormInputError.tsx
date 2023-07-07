import "./FormInputErrorStyles.scss";

interface FormInputErrorProps {
  id: string;
  error: string | null;
}

const FormInputError = (props: FormInputErrorProps) => {
  const { id, error } = props;
  return (
    <span
      className={`form-input__error ${
        !error ? "form-input__error-hidden" : undefined
      } animate__animated animate__fadeIn`}
    >{`${id} ${error}`}</span>
  );
};

export default FormInputError;
