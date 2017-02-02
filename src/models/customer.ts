export class Customer {

    constructor(){
        this.customerSince = Date.now().toString();
    }
    public id: number;
    public name: string;
    public city: string;
    public country: string;
    public countryCode: string;
    public customerSince: string;
    public satisfaction: number;
    public phone: string;

    static fromRawJson(rawJson: any): Customer {
        if (!rawJson) {
            return null;
        }
        let instance = new Customer();
        instance.id = rawJson['id'] || 0;
        instance.name = rawJson['name'] || null;
        instance.city = rawJson['city'] || null;
        instance.country = rawJson['country'] || null;
        instance.countryCode = rawJson['countryCode'] || null;
        instance.customerSince = rawJson['customerSince'] || null;
        instance.satisfaction = rawJson['satisfaction'] || 0;
        instance.phone = rawJson['phone'] || null;
        return instance;
    }
}
