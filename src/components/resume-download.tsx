"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download } from "lucide-react";
import { useResumeDownload } from "@/hooks/useResumeDownload";
import { Button } from "@/components/ui/button";

export default function ResumeDownload() {
  const [isHovered, setIsHovered] = useState(false);
  const { isDownloading, downloadResume } = useResumeDownload();

  return (
    <div className="flex items-center justify-center bg-white">
      <Button
        variant="ghost"
        type="button"
        size="icon"
        className="px-2"
        onClick={downloadResume}
        disabled={isDownloading}
      >
        <Download className="h-[1.2rem] w-[1.2rem] text-neutral-800 dark:hidden dark:text-neutral-200" />
      </Button>
    </div>
  );
}
