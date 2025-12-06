import { useFormikContext } from "formik";

const AppSubmitButton = ({title, disabled = false, full = false}) => {
    const {handleSubmit, isSubmitting} = useFormikContext()

    return (
        <button
        type="button"
        disabled={disabled ? true : isSubmitting ? true : false}
        onClick={handleSubmit}
        className={disabled ? "w-[full] primary-btn p-2 " :"w-full primary-btn p-2 "}>
            {isSubmitting ? "submitting..." : title}
        </button>
    )
}

export default AppSubmitButton;