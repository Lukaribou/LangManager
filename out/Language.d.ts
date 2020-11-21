export interface ILanguage {
    code: string;
    name: string;
    data: Object;
}
export declare class Language {
    private readonly _code;
    private readonly _data;
    private readonly _name;
    get code(): string;
    get name(): string;
    get data(): Object;
    get fields(): string[];
    constructor(name: string, code: string, data: Object);
    /**
     * Returns a Language object from an Object that matches the ILanguage interface
     * @param o
     */
    static fromObject(o: ILanguage): Language;
    hasField(fieldName: string): boolean;
    /**
     * Gets the value (so the traduction)
     * @param fieldName
     */
    getValue(fieldName: string): string;
    /**
     * Lists the fields where the value is empty
     */
    getEmptyFields(): string[];
}
