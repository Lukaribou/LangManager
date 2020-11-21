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
        return this;
    }
    /**
     * If the language is set or not
     * @param code The country's code
     */
    hasLanguage(code) {
        return this._languages.has(code);
    }
    /**
     * Returns the language if defined, null instead
     * @param code The country's code
     */
    getLang(code) {
        if (!this.hasLanguage(code))
            throw new LanguageNotFound(code);
        return this._languages.get(code);
    }
    /**
     * Removes the language from the manager
     * @param code The country's code
     */
    deleteLang(code) {
        return this._languages.delete(code);
    }
    getLangCodes() {
        return Array.from(this._languages.keys());
    }
    /**
     * Gets field's value in the language
     * @param code The country's code
     * @param field
     */
    get(code, field) {
        return this.getLang(code).getValue(field);
    }
    /**
     * Returns a list of the fields that are empty or not set in all the languages
     */
    analyze() {
        // Lister champs définis dans tous les langages
        let allFields = new Set(this.languages.map((lang) => lang.fields).flat()), warnings = [];
        // Analyser et dire quels champs ne sont pas définis chez qui
        this.languages.forEach((lang) => {
            allFields.forEach((field) => {
                if (!lang.hasField(field))
                    warnings.push(`${lang.name}: Field "${field}" is not declared.`);
                else if (lang.getValue(field) === '')
                    warnings.push(`${lang.name}: Field "${field}" is empty.`);
            });
        });
        return warnings;
    }
    ;
    /**
     * Prints the analyze in the console (with some informations)
     */
    printAnalyze() {
        let allFields = new Set(this.languages.map((lang) => lang.fields).flat()), warnings = [];
        this.languages.forEach((lang) => {
            let langWarns = [];
            allFields.forEach((field) => {
                if (!lang.hasField(field))
                    langWarns.push(`Field "${field}" is not declared.`);
                else if (lang.getValue(field) === '')
                    langWarns.push(`Field "${field}" is empty.`);
            });
            if (langWarns.length !== 0)
                warnings.push(`${lang.name} (${lang.code}): (${langWarns.length} warnings)\n\t` + langWarns.join("\n\t"));
        });
        if (warnings.length === 0)
            return console.log("No warnings ! You're a boss !");
        console.log(`${warnings.length} problems found:\n\n`);
        console.log(warnings.join("\n\n"));
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