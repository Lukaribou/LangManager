import {Language} from "./Language";

export class LanguageManager {
    private _languages = new Map<string, Language>();

    get languages(): Language[] {
        return Array.from(this._languages.values());
    }

    /**
     * Adds a language to the manager
     * @param lang The Language Object
     * @param check True to block erase if language is already defined
     */
    public registerLanguage(lang: Language, check = true): void {
        if (check && this._languages.has(lang.code)) return;
        this._languages.set(lang.code, lang);
    }

    /**
     * If the language is set or not
     * @param code The code of the country
     */
    public hasLanguage(code: string): boolean {
        return this._languages.has(code);
    }

    /**
     * Returns the language if defined, null instead
     * @param code The code of the country
     */
    public getLanguage(code: string): Object {
        return this.hasLanguage(code) ? this._languages.get(code) : null;
    }

    /**
     * Removes the language from the manager
     * @param code The code of the country
     */
    public deleteLanguage(code: string): boolean {
        return this._languages.delete(code);
    }

    public getLanguagesCodes(): string[] {
        return Array.from(this._languages.keys());
    }

    /**
     * Returns a list of the fields that aren't set in all the languages
     * @param code The code of the country
     */
    public analyze(code: string): string[] {
        if (!this.hasLanguage(code)) throw new LanguageNotFound(code);
        let fields = new Array<string>(), warnings = new Array<string>();
        this.languages.forEach((lang) => lang.fields.forEach((field) => {
            if (!fields.includes(field)) fields.push(field); // Lister champs définis dans tous
        }));

        return warnings;
    }
}

export class LanguageNotFound extends Error {
    constructor(languageCode: string) {
        super(`Language with code "${languageCode}" not found !`);
    }
}
