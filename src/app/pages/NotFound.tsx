import { Link } from "react-router";
import { Home } from "lucide-react";
import { siteConfig } from "../config/siteConfig";

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-zinc-800">404</h1>
        <h2 className="text-3xl font-bold text-white mt-4 mb-2">
          Không tìm thấy trang
        </h2>
        <p className="text-zinc-400 mb-8">
          Trang bạn đang tìm kiếm không tồn tại
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold transition-all hover:opacity-90"
          style={{ backgroundColor: siteConfig.primaryColor }}
        >
          <Home className="size-5" />
          Về Trang Chủ
        </Link>
      </div>
    </div>
  );
}
