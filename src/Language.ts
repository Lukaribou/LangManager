export interface ILanguage {
    code: string;
    name: string;
    data: Object;
}

export class Language {
    private readonly _code: string;
    private readonly _data: Object;
    private readonly _name: string;

    get code(): string {
        return this._code;
    }

    get name(): string {
        return this._name;
    }

    get data(): Object {
        return this._data;
    }

    get fields(): string[] {
        return Array.from(Object.keys(this._data));
    }

    constructor(code: string, data: Object) {
        this._code = code;
        this._data = data;
    }

    /**
     * Returns a Language object from an Object that matches the ILanguage interface
     * @param o
     */
    public static fromObject(o: ILanguage): Language {
        return new Language(o.code, o.data);
    }

    public hasField(fieldName: string): boolean {
        return this.fields.includes(fieldName);
    }

    /**
     * Gets the value (so the traduction)
     * @param fieldName
     */
    public getValue(fieldName: string): string {
        return this.fields.includes(fieldName) ? this._data[fieldName] : "Not provided";
    }

    /**
     * Lists the fields where the value is empty
     */
    public getEmptyFields(): string[] {
        return this.fields.filter((field) => this._data[field] === '');
    }
}
