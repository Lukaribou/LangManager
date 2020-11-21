export interface ILanguage {
    code: string;
    name: string;
    data: Object;
    fileName?: string;
}
export declare class Language {
    private readonly _code;
    private readonly _data;
    private readonly _name;
    private readonly _fileName;
    get code(): string;
    get name(): string;
    get data(): Object;
    get fileName(): string;
    get fields(): string[];
    constructor(name: string, code: string, data: Object, fileName?: string);
    /**
     * Returns a Language object from an Object that matches the ILanguage interface
     * @param o
     */
    static fromObject(o: ILanguage): Language;
    has(fieldName: string): boolean;
    /**
     * Gets the value (so the traduction)
     * @param fieldName
     */
    get(fieldName: string): string;
    /**
     * Lists the fields where the value is empty
     */
    getEmptyFields(): string[];
}
