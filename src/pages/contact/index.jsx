import AppSubmitButton from "../../components/form/AppSubmitButton"
import AppInputField from "../../components/form/AppInputField"
import CustomFormik from "../../components/form/CustomFormik"
import { validateContactDetails } from "../../utils/validationSchema"
import { contactValues } from "../../utils/InitialValues"
import * as FaIcons from "react-icons/md";
// import { MdWhatsapp, MdOutlineMarkEmailRead, MdOutlineMessage } from "react-icons/md";
import { contacts } from "../../utils/dataArr"
import Contact from "../../components/contact/Contact"


const ContactPage = () => {
    const initialValues = contactValues();
    const validationSchema = validateContactDetails();
    
    return (
        <div className="w-screen mt-20">
            <div className="w-full bg-[rgb(247,249,250)] p-2 h-[200px] text-center">
                <p className="text-center w-max m-auto mt-16 text-3xl font-semibold">Get in Touch With Us</p>
            </div>
            <div className="w-full p-10">
                <p className="text-center mb-1">For Business & Partnership Inquiries, Kindly Fill the Form Below to Reach Out to Us</p>
                <div className="w-full p-3 flex flex-col gap-8 justify-center items-center">
                    <div className="w-[50%] p-7 h-[400px] rounded-md border border-[rgb(209,213,219)] bg-[rgb(249,250,251)]">
                        <CustomFormik
                            // onSubmit={handleSubmit}
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                        >
                            <div className="w-full p-2.5 flex justify-center items-center px-4 flex-col gap-8 ">
                                <div className="w-full grid grid-cols-2 gap-5">
                                    <div className="flex flex-col gap-px text-xs   h-[35px]">
                                        <label htmlFor="">Full Name</label>
                                        <div className="border-[rgb(209,213,219)] border rounded-md">
                                            <AppInputField name="name" placeholder="Enter your Full Name*" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-px text-xs  h-[35px]">
                                        <label htmlFor="">Email Address</label>
                                        <div className="border-[rgb(209,213,219)] border rounded-md">
                                            <AppInputField name="name" placeholder="Enter your email address*" />
                                        </div>
                                    </div>   
                                </div>
                                 <div className="w-full grid grid-cols-2 gap-5">
                                    <div className="flex flex-col gap-px text-xs   h-[35px]">
                                        <label htmlFor="">Phone Number</label>
                                        <div className="border-[rgb(209,213,219)] border rounded-md">
                                            <AppInputField name="name" placeholder="Enter your phon number*" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-px text-xs  h-[35px]">
                                        <label htmlFor="">Country</label>
                                        <div className="border-[rgb(209,213,219)] border rounded-md">
                                            <AppInputField name="name" placeholder="Enter your current location*" />
                                        </div>
                                    </div>   
                                </div>
                                <div className="w-full h-[35px]">
                                    <label htmlFor="">Subject</label>
                                    <div className="border-[rgb(209,213,219)] border rounded-md">
                                        <AppInputField name="name" placeholder="Email subject*" />
                                    </div>
                                </div>
                                <div className="w-full">
                                    <label htmlFor="">Your Message</label>
                                    <div className="border-[rgb(209,213,219)] border rounded-md">
                                        <AppInputField name="name" placeholder="enter your message here*" />
                                    </div>
                                </div>
                                <div className="w-[40%]">
                                    <AppSubmitButton title="Send Message" />
                                </div>
                            </div>
                        </CustomFormik>
                    </div>
                    <div className="w-[50%] p-10 h-[200px] rounded-md border border-[rgb(209,213,219)] bg-[rgb(249,250,251)] flex justify-center items-center">
                        <div className="w-[50%] flex flex-col gap-8 items-center">
                            <div>
                                {
                                    contacts.map((item, index) => {
                                        const IconComponent = FaIcons[item.icon];
                                        return (
                                           <div key={index}>
                                                <Contact detail={item.mail} IconComponent={IconComponent ? <IconComponent /> : null} />
                                           </div> 
                                        )
                                    })
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactPage