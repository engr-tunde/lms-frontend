import { useFormikContext } from "formik";

const AppSubmitButton = ({title, disabled = false, full = false}) => {
    const {handleSubmit, isSubmitting} = useFormikContext()

    return (
        <button
        type="button"
        disabled={disabled ? true : isSubmitting ? true : false}
        onClick={handleSubmit}
        className={disabled ? "w-[full] primary-btn p-2 h-full " :"w-full primary-btn p-2 h-full "}>
            {isSubmitting ? "submitting..." : title}
        </button>
    )
}

export default AppSubmitButton;