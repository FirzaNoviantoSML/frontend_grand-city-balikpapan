export function getUTMObject() {
  if (typeof window === "undefined") return {};

  const utmParams = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
    "utm_id",
  ];

  const utmObject: { [key: string]: string } = {};

  utmParams.forEach((param) => {
    const value = sessionStorage.getItem(param);
    if (value) {
      utmObject[param] = value;
    }
  });

  return utmObject;
}
