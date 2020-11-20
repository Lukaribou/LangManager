"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageNotFound = exports.LanguageManager = void 0;
class LanguageManager {
    constructor() {
        this._languages = new Map();
    }
    get languages() {
        return Array.from(this._languages.values());
    }
    /**
     * Adds a language to the manager
     * @param lang The Language Object
     * @param check True to block erase if language is already defined
     */
    registerLanguage(lang, check = true) {
        if (check && this._languages.has(lang.code))
            return;
        this._languages.set(lang.code, lang);
    }
    /**
     * If the language is set or not
     * @param code The code of the country
     */
    hasLanguage(code) {
        return this._languages.has(code);
    }
    /**
     * Returns the language if defined, null instead
     * @param code The code of the country
     */
    getLanguage(code) {
        return this.hasLanguage(code) ? this._languages.get(code) : null;
    }
    /**
     * Removes the language from the manager
     * @param code The code of the country
     */
    deleteLanguage(code) {
        return this._languages.delete(code);
    }
    getLanguagesCodes() {
        return Array.from(this._languages.keys());
    }
    /**
     * Returns a list of the fields that are empty or not set in all the languages
     * @param code The code of the country
     */
    analyze(code) {
        if (!this.hasLanguage(code))
            throw new LanguageNotFound(code);
        let allFields = new Array(), warnings = new Array();
        // Lister champs définis dans tous les langages
        this.languages.forEach((lang) => lang.fields.forEach((field) => {
            if (!allFields.includes(field))
                allFields.push(field);
        }));
        // Analyser et dire quels champs ne sont pas définis chez qui
        this.languages.forEach((lang) => allFields.forEach((field) => {
            if (!lang.hasField(field))
                warnings.push(`${lang.name} (${lang.code}): Field "${field}" is not declared.`);
            else if (lang.getValue(field) === '')
                warnings.push(`${lang.name} (${lang.code}): Field "${field}" is empty.`);
        }));
        return warnings;
    }
}
exports.LanguageManager = LanguageManager;
class LanguageNotFound extends Error {
    constructor(languageCode) {
        super(`Language with code "${languageCode}" not found !`);
    }
}
exports.LanguageNotFound = LanguageNotFound;
//# sourceMappingURL=LanguageManager.js.map