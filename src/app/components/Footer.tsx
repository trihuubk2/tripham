export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm sm:text-base text-center sm:text-left">
            © 2026 Alex Johnson. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm sm:text-base text-center sm:text-right">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
