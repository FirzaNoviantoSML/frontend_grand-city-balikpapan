

export const fetchUtm = async (
    utm_source: string,
    utm_medium: string,
    utm_campaign: string,
    utm_content: string,
    utm_id: string,
    utm_term: string,
    fullname: string,
    email: string,
    mobile: string,
    project_name: string,
    projects_code: string,
    cluster_code: string,
    lead_source_name: string,
    web: string,
) => {
  try {
    const res = await fetch("/api/send_utm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
         "Accept": "application/json",
            "Origin": "https://grandcitybalikpapan.com" // ganti sesuai domain kamu
      },
      body: JSON.stringify({
        utm_source,
        utm_medium,
        utm_campaign,
        utm_content,
        utm_id,
        utm_term,
        fullname,
        email,
        mobile,
        project_name,
        projects_code,
        cluster_code,
        lead_source_name,
        web
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data?.error || "Gagal mengirim data");
    }

    return data;
  } catch (error) {
    console.error("Failed to send message", error);
    return null; // atau return { success: false, error: error.message }
  }
};
