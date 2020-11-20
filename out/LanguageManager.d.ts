import { Language } from "./Language";
export declare class LanguageManager {
    private _languages;
    get languages(): Language[];
    /**
     * Adds a language to the manager
     * @param lang The Language Object
     * @param check True to block erase if language is already defined
     */
    registerLanguage(lang: Language, check?: boolean): void;
    /**
     * If the language is set or not
     * @param code The code of the country
     */
    hasLanguage(code: string): boolean;
    /**
     * Returns the language if defined, null instead
     * @param code The code of the country
     */
    getLanguage(code: string): Object;
    /**
     * Removes the language from the manager
     * @param code The code of the country
     */
    deleteLanguage(code: string): boolean;
    getLanguagesCodes(): string[];
    /**
     * Returns a list of the fields that are empty or not set in all the languages
     * @param code The code of the country
     */
    analyze(code: string): string[];
}
export declare class LanguageNotFound extends Error {
    constructor(languageCode: string);
}
