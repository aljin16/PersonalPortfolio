const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm text-gray-400 dark:text-gray-500 tracking-wide">
          © {currentYear} Aljean Sinohin
        </p>
      </div>
    </footer>
  );
};

export default Footer;
