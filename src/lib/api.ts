const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL ||
  "https://asan-driverapp.onrender.com/api"
).replace(/\/+$/, "");

type ErrorPayload = {
  message?: string;
  error?: string;
};

export async function submitEnquiry(
  kind: "parent" | "driver",
  values: Record<string, FormDataEntryValue>,
) {
  const response = await fetch(`${API_BASE_URL}/enquiries/${kind}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });

  const payload = (await response.json().catch(() => ({}))) as ErrorPayload;

  if (!response.ok) {
    throw new Error(
      payload.message ||
        payload.error ||
        "Unable to submit your enquiry right now.",
    );
  }

  return payload;
}
