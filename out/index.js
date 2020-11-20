"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageNotFound = exports.LangManager = void 0;
class LangManager {
    constructor() {
        this._languages = new Map();
    }
    /**
     * Add a language to the manager
     * @param code The code of the country, to access to the language (See https://en.wikipedia.org/wiki/ISO_3166-1)
     * @param json The object with the sentences
     * @param check True to block erase if language is already defined
     */
    registerLanguage(code, json, check = true) {
        if (check && this._languages.has(code))
            return;
        this._languages.set(code, json);
    }
    /**
     * Same as registerLanguage() but for multiple languages
     * @param o Object with properties names as language name and values as sentences
     * @param check True to block erase if language is already defined
     */
    registerLanguages(o, check = true) {
        for (let lang in o)
            this.registerLanguage(lang, o[lang], check);
    }
    /**
     * If the language is set or not
     * @param code The code of the country
     */
    hasLanguage(code) {
        return this._languages.has(code);
    }
    /**
     * Remove the language from the manager
     * @param code The code of the country
     */
    deleteLanguage(code) {
        return this._languages.delete(code);
    }
    analyse(code) {
        if (!this.hasLanguage(code))
            throw new LanguageNotFound(code);
    }
}
exports.LangManager = LangManager;
class LanguageNotFound extends Error {
    constructor(languageCode) {
        super(`Language with code "${languageCode}" not found !`);
    }
}
exports.LanguageNotFound = LanguageNotFound;
//# sourceMappingURL=index.js.map