export function getUTMString() {
  if (typeof window === "undefined") return "";

  const utmParams = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
    "utm_id",
  ];

  const utmString = utmParams
    .map((param) => {
      const value = sessionStorage.getItem(param);
      return value ? `${param}=${value}` : null;
    })
    .filter(Boolean)
    .join("&");

  return utmString;
}
