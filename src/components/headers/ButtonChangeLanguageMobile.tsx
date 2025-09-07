import { useLanguage } from "@/contex/LanguageContext";
import clsx from "clsx";

const ButtonChangeLanguageMobile = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-4 items-center">
      <button
        onClick={() => setLanguage("en")}
        className={clsx(
          "min-w-11 p-1 cursor-pointer rounded-sm text-white px-3 hover:opacity-55",
          language === "en" ? "bg-amber-800" : "bg-gray-600"
        )}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage("id")}
        className={clsx(
          "min-w-11 p-1 cursor-pointer rounded-sm text-white px-3 hover:opacity-55",
          language === "id" ? "bg-amber-800" : "bg-gray-600"
        )}
      >
        ID
      </button>
    </div>
  );
};

export default ButtonChangeLanguageMobile;