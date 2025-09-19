import { axiosInstance } from "@/libs/axios";

export interface IPayload {
  fullname: string;
  email: string;
  mobile: string;
  project_code?: string | undefined;
  project_name?: string | undefined;
  cluster_code?: string | undefined;
  lead_source?: string | undefined;
  web: string;
  utm?: string | undefined;
  message:string
}


export async function postContact(payload: IPayload) {
  const {
    fullname,
    email,
    mobile,
    project_code,
    project_name,
    cluster_code,
    message,
    lead_source,
    web,
    utm,
  } = payload;
  try {
    const response = await axiosInstance.post("/messages", {
      data: {
        fullname,
        email,
        phone:mobile,
        project_code,
        project_name,
        cluster_code,
        lead_source,
        web,
        utm,
        message,
      },
    });

    return response.data;
  } catch (error: unknown) {
    console.log(error);
  }
}
