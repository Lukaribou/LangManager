export interface ILanguage {
    code: string;
    data: Object;
}

export class Language {
    private _code: string;
    private readonly _data: Object;

    get code(): string {
        return this._code;
    }

    set code(code: string): void {
        this._code = code;
    }

    get data(): Object {
        return this._data;
    }

    get length(): number {
        return Object.keys(this._data).length;
    }

    get fields(): string[] {
        return Array.from(Object.keys(this._data));
    }

    constructor(code: string, data: Object) {
        this._code = code;
        this._data = data;
    }

    public static fromObject(o: ILanguage): Language {
        return new Language(o.code, o.data);
    }
}
