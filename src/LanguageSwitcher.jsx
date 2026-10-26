import { useState } from "react";

export default function LanguageSwitcher({ activeLang, setActiveLang }) {
  const [open, setOpen] = useState(false);

  const handleSelect = (lang) => {
    setActiveLang(lang.code);
    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = lang.code;
      select.dispatchEvent(new Event("change"));
    }
    setOpen(false);
  };
  // ...rest unchanged
}