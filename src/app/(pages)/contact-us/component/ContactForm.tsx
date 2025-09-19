"use client";
import React, { useEffect, useState } from "react";
import { useGetDevelopmentDropdown } from "@/hooks/developmentDropdown/useDevelopmentDropdown";
import { Input } from "@/components/ui/Input";
import { handleChangeOtp } from "@/libs/handleChangeOtp";
import { postContact } from "@/api/contact/postContactUs";
import { initialValueContactUs } from "@/formiks/initialValues/initials";
import { contactUsSchema } from "@/formiks/schema/schema";
import { Form, Formik } from "formik";
import { useLanguage } from "@/contex/LanguageContext";
import { utmObj } from "@/types/utm";
import { fetchUtm } from "@/libs/fetchUtm";
import { getUTMString } from "@/libs/getUtmString";
import { getUTMObject } from "@/libs/getUtmObject";
import { fetchOtp } from "@/libs/fetchOtp";
import Modal from "@/components/modal/ContactModal";

interface FormData {
  fullname: string;
  email: string;
  mobile: string;
  message: string;
  project_code?: string;
  project_name?: string;
  cluster_code?: string;
  lead_source: string;
  web: string;
  utm: string;
}

type DevelopmentDropdownType = {
    id:string,
    documentId:string,
    title:string,
    project_code:string,
    cluster_code:string;
}


const ContactForm = () => {
  const { language } = useLanguage();
  const { developmentDropdown, isLoading } =
    useGetDevelopmentDropdown(language);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [otp, setOtp] = useState<string[]>(new Array(5).fill(""));
  const [otpCode, setOtpCode] = useState<string>();
  const [formData, setFormData] = useState<FormData | null>(null);
  const [utmData, setUtm] = useState<utmObj>();

  const classNameInput =
    "text-sm placeholder:text-sm border p-2 bg-white w-full ";
  const utm = getUTMString();
  useEffect(() => {
    const utmRaw = getUTMObject();
    setUtm({
      utm_source: utmRaw.utm_source || "",
      utm_medium: utmRaw.utm_medium || "",
      utm_campaign: utmRaw.utm_campaign || "",
      utm_term: utmRaw.utm_term || "",
      utm_content: utmRaw.utm_content || "",
      utm_id: utmRaw.utm_id || "",
      fullname: "",
      email: "",
      mobile: "",
      project_name: "",
      projects_code: "",
      cluster_code: "",
      lead_source_name: "",
      web: "grand-city-balikpapan.com",
    });
    //   setIsClient(true);
  }, []);

  const generateOtpCode = () => {
    return Array.from(
      { length: 5 },
      () => Math.floor(Math.random() * 9) + 1
    ).join("");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setOtp(new Array(5).fill(""));
  };

  const handleSubmitOtp = () => {
    console.log("form",formData)
    const selectedDevelopment:DevelopmentDropdownType | undefined = developmentDropdown?.find(it => it.slug == formData?.project_name)
    console.log("selected development",selectedDevelopment)
    const otpValue = otp.join("");
    if (otpValue.length === 5 && otpValue === otpCode?.toString()) {
      const today = new Date();
      const day = String(today.getDate()).padStart(2, "0");
      const month = String(today.getMonth() + 1).padStart(2, "0"); // bulan dimulai dari 0
      const year = today.getFullYear();
      const formattedDate = `${day}${month}${year}`;
      const formatProject = selectedDevelopment?.title.replace(/\s/g, "").toUpperCase();
      if (formData) {
        const UpdateFormData = {
          ...formData,
          project_name:selectedDevelopment?.title,
          project_code:selectedDevelopment?.project_code,
          cluster_code:selectedDevelopment?.cluster_code,
          lead_source: `RESI-NATIONAL-${formatProject}-${formattedDate}-GrandCityBalikpapan-WEBSITE`,
          web: "grand-city-balikpapan.com",
        };
        console.log("update form data",UpdateFormData)
        postContact(UpdateFormData); // Kirim data form setelah OTP benar
        if (utmData) {
          const formatMobile = formData.mobile.slice(2, -1);
          const dataUtm = {
            ...utmData,
            fullname: formData.fullname,
            email: formData.email,
            mobile: "0" + formatMobile,
            project_name: selectedDevelopment!.title,
            projects_code: selectedDevelopment!.project_code,
            cluster_code: selectedDevelopment!.cluster_code,
            lead_source_name: `RESI-NATIONAL-${formatProject}-${formattedDate}-GrandCityBalikpapan-WEBSITE`,
          };
          console.log("data utm",dataUtm)
          fetchUtm(
            dataUtm.utm_source,
            dataUtm.utm_medium,
            dataUtm.utm_campaign,
            dataUtm.utm_content,
            dataUtm.utm_id,
            dataUtm.utm_term,
            dataUtm.fullname,
            dataUtm.email,
            dataUtm.mobile,
            dataUtm.project_name,
            dataUtm.projects_code,
            dataUtm.cluster_code,
            dataUtm.lead_source_name,
            dataUtm.web
          );
        }
      }
      setOtp(new Array(5).fill("")); // Reset OTP
      setFormData(null); // Reset formData setelah data dikirim
      setIsModalOpen(false); // Tutup modal
    } else if (otpValue.length !== 5) {
    } else {
    }
  };

  if (isLoading) {
    return <div></div>;
  }
  return (
    <div>
      <Formik
        initialValues={initialValueContactUs}
        validationSchema={contactUsSchema}
        onSubmit={async (values, { resetForm }) => {
          console.log(values);
          const payload = {
            ...values,
            utm,
            lead_source: "",
            web: "grand-city-balikpapan.com",
          };
          const newOtpCode = generateOtpCode();
          console.log(newOtpCode)
          setOtpCode(newOtpCode);
          setFormData(payload);
        //   fetchOtp(`${newOtpCode}`, values.mobile);
          setIsModalOpen(true);
          resetForm();
        }}
      >
        {({ isValid, dirty }) => (
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  name="project_name"
                  as="select"
                  className={classNameInput}
                  label="Cluster"
                  options={developmentDropdown?.map((item) => {
                    return {
                      label: item.title,
                      value: item.slug,
                    };
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
            <button
              disabled={!isValid || !dirty}
              type="submit"
              className="disabled:cursor-not-allowed disabled:opacity-50 p-2 border bg-primary text-white w-fit bg-amber-600"
            >
              Send your message
            </button>
          </Form>
        )}
      </Formik>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Masukan Kode OTP"
      >
        <div>
          <p>
            Kami telah mengirimkan kode OTP. Harap masukkan untuk verifikasi
          </p>
          <div className="flex flex-col">
            <div className="flex py-5 items-center justify-center gap-2 mt-5">
              {otp.map((it, index) => {
                return (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    maxLength={1}
                    value={otp[index]}
                    type="text"
                    autoComplete="off"
                    onChange={(e) => handleChangeOtp({ e, index, otp, setOtp })}
                    className=" h-12 w-12 rounded-md border-2 bg-white  border-btn text-center text-lg focus:outline-none"
                  />
                );
              })}
            </div>
            <div className="flex justify-end mt-10">
              <button
                className="rounded-sm bg-primary text-black px-4 py-2"
                onClick={() => {
                  handleSubmitOtp();
                }}
              >
                Submit OTP
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ContactForm;
