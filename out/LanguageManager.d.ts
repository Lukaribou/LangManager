import { Language } from "./Language";
export declare class LanguageManager {
    private _languages;
    get languages(): Language[];
    /**
     * Adds a language to the manager
     * @param lang The Language Object
     * @param check True to block erase if language is already defined
     */
    registerLanguage(lang: Language, check?: boolean): LanguageManager;
    /**
     * If the language is set or not
     * @param code The country's code
     */
    hasLanguage(code: string): boolean;
    /**
     * Returns the language if defined, null instead
     * @param code The country's code
     */
    getLang(code: string): Language;
    /**
     * Removes the language from the manager
     * @param code The country's code
     */
    deleteLang(code: string): boolean;
    getLangCodes(): string[];
    /**
     * Gets field's value in the language
     * @param code The country's code
     * @param field
     */
    get(code: string, field: string): string;
    /**
     * Returns a list of the fields that are empty or not set in all the languages
     */
    analyze(): string[];
    /**
     * Prints the analyze in the console (with some informations)
     */
    printAnalyze(): void;
}
export declare class LanguageNotFound extends Error {
    constructor(languageCode: string);
}
