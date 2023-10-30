declare module "@qualweb/locale" {
  interface TranslationValues {
    [key: string]: string | number | boolean;
  }

  interface ModuleTranslation {
    [test: string]: {
      name?: string;
      description?: string;
      results?: {
        [rc: string]: string;
      };
    };
  }

  interface Locale {
    "act-rules"?: ModuleTranslation;
    "wcag-techniques"?: ModuleTranslation;
    "best-practices"?: ModuleTranslation;
  }

  interface TranslationObject {
    translate: Locale | string;
    fallback: Locale | string;
  }

  interface Translate {
    translate: Locale;
    fallback: Locale;
  }

  type Lang = "en" | "fi" | "sv" | "nb" | "nn";

  interface Langs {
    en: Locale;
    fi: Locale;
    sv: Locale;
  }

  const locales: Langs;

  export {
    TranslationValues,
    ModuleTranslation,
    Locale,
    TranslationObject,
    Translate,
    Lang,
    Langs,
  };

  export default locales;
}
