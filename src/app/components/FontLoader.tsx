import { useEffect } from "react";
import { siteConfig } from "../config/siteConfig";

export function FontLoader() {
  useEffect(() => {
    if (siteConfig.fontFamily) {
      // Áp dụng font family vào CSS variable
      document.documentElement.style.setProperty(
        "--font-family",
        `"${siteConfig.fontFamily}", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`
      );
    }
  }, []);

  return null;
}
