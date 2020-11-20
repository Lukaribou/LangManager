export class LangManager {
    private _languages = new Map<string, Object>();

    get languages() {
        return this._languages;
    }

    /**
     * Add a language to the manager
     * @param code The token to access the language ("en" for english, "fr" for french... See https://en.wikipedia.org/wiki/ISO_3166-1)
     * @param json The object with the sentences
     * @param check True to block erase if language is already defined
     */
    public registerLanguage(code: string, json: Object, check = true): void {
        if (check && this._languages.has(code)) return;
        this._languages.set(code, json);
    }

    /**
     * Same as registerLanguage() but for multiple languages
     * @param o Object with properties names as language name and values as sentences
     * @param check True to block erase if language is already defined
     */
    public registerLanguages(o: Object, check = true): void {
        for (let lang in o) this.registerLanguage(lang, o[lang], check);
    }

    /**
     * If the language is set or not
     * @param code The language code
     */
    public hasLanguage(code: string): boolean {
        return this._languages.has(code);
    }
}
