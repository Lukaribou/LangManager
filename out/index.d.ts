export declare class LangManager {
    private _languages;
    /**
     * Add a language to the manager
     * @param code The code of the country, to access to the language (See https://en.wikipedia.org/wiki/ISO_3166-1)
     * @param json The object with the sentences
     * @param check True to block erase if language is already defined
     */
    registerLanguage(code: string, json: Object, check?: boolean): void;
    /**
     * Same as registerLanguage() but for multiple languages
     * @param o Object with properties names as language name and values as sentences
     * @param check True to block erase if language is already defined
     */
    registerLanguages(o: Object, check?: boolean): void;
    /**
     * If the language is set or not
     * @param code The code of the country
     */
    hasLanguage(code: string): boolean;
    /**
     * Remove the language from the manager
     * @param code The code of the country
     */
    deleteLanguage(code: string): boolean;
    analyze(code: string): string[];
}
export declare class LanguageNotFound extends Error {
    constructor(languageCode: string);
}
