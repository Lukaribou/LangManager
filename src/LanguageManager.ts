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
    public registerLanguage(lang: Language, check = true): LanguageManager {
        if (check && this._languages.has(lang.code))
            return;
        this._languages.set(lang.code, lang);
        return this;
    }

    /**
     * If the language is set or not
     * @param code The country's code
     */
    public hasLanguage(code: string): boolean {
        return this._languages.has(code);
    }

    /**
     * Returns the language if defined, null instead
     * @param code The country's code
     */
    public getLang(code: string): Language {
        if (!this.hasLanguage(code)) throw new LanguageNotFound(code);
        return this._languages.get(code);
    }

    /**
     * Removes the language from the manager
     * @param code The country's code
     */
    public deleteLang(code: string): boolean {
        return this._languages.delete(code);
    }

    public getLangCodes(): string[] {
        return Array.from(this._languages.keys());
    }

    /**
     * Gets field's value in the language
     * @param code The country's code
     * @param field
     */
    public get(code: string, field: string): string {
        return this.getLang(code).getValue(field);
    }

    /**
     * Returns a list of the fields that are empty or not set in all the languages
     */
    public analyze(): string[] {
        // Lister champs définis dans tous les langages
        let allFields = new Set(this.languages.map((lang) => lang.fields).flat()), warnings: string[] = [];
        // Analyser et dire quels champs ne sont pas définis chez qui
        this.languages.forEach((lang) => {
            allFields.forEach((field) => {
                if (!lang.hasField(field))
                    warnings.push(`${lang.name}: Field "${field}" is not declared.`);
                else if (lang.getValue(field) === '')
                    warnings.push(`${lang.name}: Field "${field}" is empty.`);
            });
        })
        return warnings;
    };

    /**
     * Prints the analyze in the console (with some informations)
     */
    public printAnalyze(): void {
        /*this.languages.forEach((lang) => {
            let langWarns = [];
            allFields.forEach((field) => {
                if (!lang.hasField(field))
                    langWarns.push(`Field "${field}" is not declared.`);
                else if (lang.getValue(field) === '')
                    langWarns.push(`Field "${field}" is empty.`);
            });
            if (langWarns.length !== 0)
                warnings.push(`${lang.name} (${lang.code}): (${langWarns.length} warnings)\n` + langWarns.join("\n\t"));
        });*/
    }
}

export class LanguageNotFound extends Error {
    constructor(languageCode: string) {
        super(`Language with code "${languageCode}" not found !`);
    }
}
