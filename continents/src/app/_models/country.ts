    export class Country{


    constructor(public name:string,
                public topLevelDomain:string[],
                public alpha2Code:string,
                public alpha3Code:string,
                public callingCodes:string[],
                public capital:string,
                public altSpellings:string[],
                public region:string,
                public subregion:string,
                public population:number,
                public latlng:number[],
                public demonym:string,
                public area:number,
                public gini:number,
                public timezones:string,
                public borders:string[],
                public nativeName:string,
                public numericCode:string,
                public currencies:Object[],
                public languages:Object[],
                public translations:Object,
                public flag:string,
                public regionalBlocs:Object[]){}

    }