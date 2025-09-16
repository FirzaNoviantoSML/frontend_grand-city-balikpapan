"use client";
import React, { useEffect, useState } from "react";
import {useGetDevelopmentDropdown} from "@/hooks/developmentDropdown/useDevelopmentDropdown"
import {Input} from "@/components/ui/Input"
import { postContact } from "@/api/contact/postContactUs";
import { initialValueContactUs } from "@/formiks/initialValues/initials";
import { contactUsSchema } from "@/formiks/schema/schema";
import { Form, Formik } from "formik";
import {useLanguage} from "@/contex/LanguageContext"

interface FormData {
  fullname: string;
  email: string;
  phone: string;
  mobile: string;
  message: string;
  development: string;
  project_code: string;
  cluster_code: string;
}

const ContactForm = () => {
    const {language} = useLanguage()
    const {developmentDropdown,isLoading} = useGetDevelopmentDropdown(language)
    const [otpCode, setOtpCode] = useState<string>();
    const [formData, setFormData] = useState<FormData | null>(null);
    const classNameInput ="text-sm placeholder:text-sm border p-2 bg-white w-full ";
    const generateOtpCode = () => {
    return Array.from(
      { length: 5 },
      () => Math.floor(Math.random() * 9) + 1
    ).join("");
  };

  if(isLoading){
    return <div></div>
  }
  return (
    <div>
      <Formik
        initialValues={initialValueContactUs}
        validationSchema={contactUsSchema}
        onSubmit={async (values, { resetForm }) => {
            const newOtpCode = generateOtpCode();
            setOtpCode(newOtpCode);
            resetForm()
        }}
      >
        {({isValid,dirty}) => (
            <Form className="w-full flex flex-col gap-4">
                <label>
                    Full Name
                    <Input
                    name="fullname"
                    type="text"
                    placeholder="Enter your name here"
                    className={classNameInput}
                    />
                </label>
                <div className="grid grid-cols-2 gap-6">
                <label>
                    Email
                    <Input
                    name="email"
                    type="text"
                    placeholder="Enter your email here"
                    className={classNameInput}
                    />
                </label>
                <label>
                    Phone
                    <Input
                    name="mobile"
                    type="tel"
                    placeholder="Enter your phone number here"
                    className={classNameInput}
                    />
                </label>
                <label>
                <Input
                  name="development"
                  as="select"
                  className={classNameInput}
                  label="Cluster"
                  options={developmentDropdown?.map((item) => {
                    return(
                        {
                            label:item.title,
                            value:item.id
                        
                        }
                    )
                  })}
                />
                </label>
                </div>
                <label>
                <Input
                  name="message"
                  as="textarea"
                  placeholder="Enter Your Message Here"
                  className="text-sm placeholder:text-sm border p-2 bg-white w-full h-32"
                  label="Message"
                />
                </label>
            </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
