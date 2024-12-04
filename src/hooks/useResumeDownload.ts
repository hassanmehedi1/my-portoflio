import { useState } from "react";

export function useResumeDownload() {
  const [isDownloading, setIsDownloading] = useState(false);

  const downloadResume = async () => {
    setIsDownloading(true);
    try {
      // Replace this URL with your actual resume file URL
      const response = await fetch("/resume.pdf");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Mehedi-Hassan-Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading resume:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return { isDownloading, downloadResume };
}
