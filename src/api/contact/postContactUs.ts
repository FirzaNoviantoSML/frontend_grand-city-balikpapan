import { axiosInstance } from "@/libs/axios";

export interface IPayload {
  fullname: string;
  email: string;
  mobile: string;
  project_code: string;
  project_name: string;
  cluster_code: string;
  lead_source: string;
  web: string;
  utm: string;
  message:string
  projectId:string
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
    projectId,
    lead_source,
    web,
    utm,
    
  } = payload;
  try {
    const response = await axiosInstance.post("/message", {
      data: {
        fullname,
        email,
        mobile,
        project_code,
        project_name,
        cluster_code,
        lead_source,
        web,
        utm,
        message,
        projectId,
      },
    });

    return response.data;
  } catch (error: unknown) {
    console.log(error);
  }
}
