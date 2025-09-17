import { useState } from "react";

export function UseContactForm() {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const SubmitContact = async (formData) => {
    setLoading(true);
    setSuccessMessage(null); // reset old success
    setErrorMessage(null);   // reset old error

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Something went wrong");

      setSuccessMessage(data.success || "Message sent!");
    } catch (error) {
      setErrorMessage(error.message || "Request failed");
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    successMessage,
    errorMessage,
    SubmitContact,
  };
}
