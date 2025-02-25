"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Language = void 0;
class Language {
    constructor(name, code, data, fileName = undefined) {
        this._code = code;
        this._name = name;
        this._data = data;
        this._fileName = fileName;
    }
    get code() {
        return this._code;
    }
    get name() {
        return this._name;
    }
    get data() {
        return this._data;
    }
    get fileName() {
        return this._fileName;
    }
    get fields() {
        return Array.from(Object.keys(this._data));
    }
    /**
     * Returns a Language object from an Object that matches the ILanguage interface
     * @param o
     */
    static fromObject(o) {
        return new Language(o.name, o.code, o.data, o.fileName);
    }
    has(fieldName) {
        return this.fields.includes(fieldName);
    }
    /**
     * Gets the value (so the traduction)
     * @param fieldName
     */
    get(fieldName) {
        return this.has(fieldName) ? this._data[fieldName] : "Not provided";
    }
    /**
     * Lists the fields where the value is empty
     */
    getEmptyFields() {
        return this.fields.filter((field) => this._data[field] === '');
    }
}
exports.Language = Language;
//# sourceMappingURL=Language.js.map