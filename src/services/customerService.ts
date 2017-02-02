import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Customer} from '../models/customer';

@Injectable()
export class CustomerService {

    constructor() {

    }

    public getAllCustomers(): Observable<Array<Customer>> {
        return Observable.of(this._inMemoryStorage)
            .map(rawObjects => rawObjects.map(rawJson => Customer.fromRawJson(rawJson)));
    }

    public addCustomer(customer: Customer): Observable<number> {
        let maxId = Math.max.apply(Math, this._inMemoryStorage.map(customer => customer.id));
        customer.id = maxId + 1;
        customer.customerSince = (new Date()).toLocaleDateString();
        this._inMemoryStorage.push(customer);
        return Observable.of(customer.id);
    }

    public getCustomerById(id: number): Observable<Customer> {
        return Observable.of(this._inMemoryStorage.find(c => c.id === id))
    }

    public updateCustomer(customer: Customer): Observable<boolean> {
        let originalCustomer = this._inMemoryStorage.find(c => c.id === customer.id);
        if (originalCustomer) {
            originalCustomer = customer;
            return Observable.of(true);
        }
        return Observable.of(false);
    }

    public deleteCustomerById(id: number): Observable<void> {
        var index = this._inMemoryStorage.findIndex(c => c.id === id);
        if (index > -1) {
            this._inMemoryStorage.splice(index, 1);
        }
        return Observable.of(void 0);
    }

    private _inMemoryStorage: Array<any> =
        [{
            "id": 1,
            "name": "Hegmann-Mante",
            "city": "Mertani",
            "country": "Indonesia",
            "countryCode": "ID",
            "customerSince": "05/24/2016",
            "satisfaction": 9.01,
            "url": "http://domainmarket.com",
            "phone": "62-(217)997-9866"
        }, {
            "id": 2,
            "name": "Keebler Inc",
            "city": "Fort-de-France",
            "country": "Martinique",
            "countryCode": "MQ",
            "customerSince": "07/17/2015",
            "satisfaction": 5.84,
            "url": "http://imdb.com",
            "phone": "596-(780)166-5283"
        }, {
            "id": 3,
            "name": "Skiles-Legros",
            "city": "Moravský Beroun",
            "country": "Czech Republic",
            "countryCode": "CZ",
            "customerSince": "01/28/2015",
            "satisfaction": 7.28,
            "url": "http://miibeian.gov.cn",
            "phone": "420-(109)455-3744"
        }, {
            "id": 4,
            "name": "Predovic-Hagenes",
            "city": "Mirador",
            "country": "Brazil",
            "countryCode": "BR",
            "customerSince": "11/06/2016",
            "satisfaction": 6.69,
            "url": "http://flavors.me",
            "phone": "55-(626)931-2129"
        }, {
            "id": 5,
            "name": "Cremin, Crist and Cronin",
            "city": "Pedro Miguel",
            "country": "Portugal",
            "countryCode": "PT",
            "customerSince": "06/29/2016",
            "satisfaction": 5.54,
            "url": "http://imdb.com",
            "phone": "351-(795)755-0952"
        }, {
            "id": 6,
            "name": "Maggio, Miller and Hahn",
            "city": "Mauloo",
            "country": "Indonesia",
            "countryCode": "ID",
            "customerSince": "03/23/2016",
            "satisfaction": 1.15,
            "url": "https://cisco.com",
            "phone": "62-(821)894-2578"
        }, {
            "id": 7,
            "name": "Gulgowski, Gerhold and Reilly",
            "city": "Ḑubāh",
            "country": "Yemen",
            "countryCode": "YE",
            "customerSince": "04/26/2016",
            "satisfaction": 9.83,
            "url": "http://wired.com",
            "phone": "967-(208)277-3402"
        }, {
            "id": 8,
            "name": "Kreiger LLC",
            "city": "Kahama",
            "country": "Tanzania",
            "countryCode": "TZ",
            "customerSince": "02/05/2017",
            "satisfaction": 0.39,
            "url": "http://sitemeter.com",
            "phone": "255-(306)480-7735"
        }, {
            "id": 9,
            "name": "Hand Inc",
            "city": "Tomelilla",
            "country": "Sweden",
            "countryCode": "SE",
            "customerSince": "03/16/2015",
            "satisfaction": 2.37,
            "url": "https://unblog.fr",
            "phone": "46-(154)154-0385"
        }, {
            "id": 10,
            "name": "Stehr LLC",
            "city": "Ostashkov",
            "country": "Russia",
            "countryCode": "RU",
            "customerSince": "11/11/2016",
            "satisfaction": 0.22,
            "url": "https://amazonaws.com",
            "phone": "7-(223)413-3206"
        }, {
            "id": 11,
            "name": "Purdy-Hagenes",
            "city": "Mangarine",
            "country": "Philippines",
            "countryCode": "PH",
            "customerSince": "12/10/2016",
            "satisfaction": 4.51,
            "url": "https://yahoo.com",
            "phone": "63-(533)531-2025"
        }, {
            "id": 12,
            "name": "Orn-Hauck",
            "city": "Lanzhong",
            "country": "China",
            "countryCode": "CN",
            "customerSince": "05/25/2016",
            "satisfaction": 0.95,
            "url": "http://cbc.ca",
            "phone": "86-(965)508-8716"
        }, {
            "id": 13,
            "name": "Kub-Doyle",
            "city": "Baishuiyang",
            "country": "China",
            "countryCode": "CN",
            "customerSince": "07/26/2015",
            "satisfaction": 3.07,
            "url": "https://quantcast.com",
            "phone": "86-(395)555-4631"
        }, {
            "id": 14,
            "name": "Bogan, Hodkiewicz and Koepp",
            "city": "Wuhu",
            "country": "China",
            "countryCode": "CN",
            "customerSince": "02/24/2016",
            "satisfaction": 2.91,
            "url": "https://wunderground.com",
            "phone": "86-(517)383-9331"
        }, {
            "id": 15,
            "name": "Orn, Ziemann and Crona",
            "city": "Maunggora",
            "country": "Indonesia",
            "countryCode": "ID",
            "customerSince": "01/12/2017",
            "satisfaction": 4.74,
            "url": "http://comsenz.com",
            "phone": "62-(718)853-2516"
        }, {
            "id": 16,
            "name": "Simonis Inc",
            "city": "San José",
            "country": "Honduras",
            "countryCode": "HN",
            "customerSince": "06/22/2015",
            "satisfaction": 2.54,
            "url": "http://is.gd",
            "phone": "504-(313)364-2365"
        }, {
            "id": 17,
            "name": "Lockman Group",
            "city": "Mosteiro",
            "country": "Portugal",
            "countryCode": "PT",
            "customerSince": "05/27/2015",
            "satisfaction": 3.15,
            "url": "http://a8.net",
            "phone": "351-(549)412-3608"
        }, {
            "id": 18,
            "name": "Marvin and Sons",
            "city": "Sankeyushu",
            "country": "China",
            "countryCode": "CN",
            "customerSince": "04/02/2016",
            "satisfaction": 7.43,
            "url": "https://admin.ch",
            "phone": "86-(758)263-0654"
        }, {
            "id": 19,
            "name": "Yundt, Schoen and Haley",
            "city": "Sveg",
            "country": "Sweden",
            "countryCode": "SE",
            "customerSince": "07/12/2016",
            "satisfaction": 5.47,
            "url": "http://cloudflare.com",
            "phone": "46-(706)314-1778"
        }, {
            "id": 20,
            "name": "Koch Group",
            "city": "Vincennes",
            "country": "France",
            "countryCode": "FR",
            "customerSince": "02/03/2017",
            "satisfaction": 5.0,
            "url": "http://thetimes.co.uk",
            "phone": "33-(970)833-7834"
        }, {
            "id": 21,
            "name": "Erdman Group",
            "city": "Beira",
            "country": "Mozambique",
            "countryCode": "MZ",
            "customerSince": "02/27/2017",
            "satisfaction": 1.88,
            "url": "http://redcross.org",
            "phone": "258-(374)996-1555"
        }, {
            "id": 22,
            "name": "Schneider LLC",
            "city": "Shunling",
            "country": "China",
            "countryCode": "CN",
            "customerSince": "12/28/2015",
            "satisfaction": 7.58,
            "url": "http://behance.net",
            "phone": "86-(592)881-2269"
        }, {
            "id": 23,
            "name": "Anderson, Harvey and Schaefer",
            "city": "Aucallama",
            "country": "Peru",
            "countryCode": "PE",
            "customerSince": "09/16/2016",
            "satisfaction": 1.74,
            "url": "http://sogou.com",
            "phone": "51-(576)622-7480"
        }, {
            "id": 24,
            "name": "Bailey-Leuschke",
            "city": "Ak’ordat",
            "country": "Eritrea",
            "countryCode": "ER",
            "customerSince": "10/21/2015",
            "satisfaction": 6.31,
            "url": "https://guardian.co.uk",
            "phone": "291-(228)460-0341"
        }, {
            "id": 25,
            "name": "Cronin LLC",
            "city": "Ghazni",
            "country": "Afghanistan",
            "countryCode": "AF",
            "customerSince": "04/14/2016",
            "satisfaction": 1.8,
            "url": "https://zdnet.com",
            "phone": "93-(700)894-4292"
        }, {
            "id": 26,
            "name": "Romaguera, Morissette and Hegmann",
            "city": "Mayo Belwa",
            "country": "Nigeria",
            "countryCode": "NG",
            "customerSince": "11/09/2015",
            "satisfaction": 5.03,
            "url": "https://unc.edu",
            "phone": "234-(840)950-6000"
        }, {
            "id": 27,
            "name": "Gulgowski-Collins",
            "city": "Werasari",
            "country": "Indonesia",
            "countryCode": "ID",
            "customerSince": "11/13/2016",
            "satisfaction": 3.31,
            "url": "https://last.fm",
            "phone": "62-(255)880-3519"
        }, {
            "id": 28,
            "name": "Herzog, Pagac and Mertz",
            "city": "Banyubang",
            "country": "Indonesia",
            "countryCode": "ID",
            "customerSince": "02/25/2017",
            "satisfaction": 1.43,
            "url": "http://msu.edu",
            "phone": "62-(224)107-1791"
        }, {
            "id": 29,
            "name": "Huel Inc",
            "city": "Novokhovrino",
            "country": "Russia",
            "countryCode": "RU",
            "customerSince": "12/29/2015",
            "satisfaction": 3.48,
            "url": "https://posterous.com",
            "phone": "7-(205)881-0149"
        }, {
            "id": 30,
            "name": "Hettinger LLC",
            "city": "Āshtīān",
            "country": "Iran",
            "countryCode": "IR",
            "customerSince": "09/14/2015",
            "satisfaction": 8.98,
            "url": "https://nsw.gov.au",
            "phone": "98-(360)770-7731"
        }, {
            "id": 31,
            "name": "Zulauf, Parisian and Larkin",
            "city": "Siliana",
            "country": "Tunisia",
            "countryCode": "TN",
            "customerSince": "06/22/2015",
            "satisfaction": 6.05,
            "url": "https://hao123.com",
            "phone": "216-(306)340-5274"
        }, {
            "id": 32,
            "name": "Reichel and Sons",
            "city": "Petrovice u Karviné",
            "country": "Czech Republic",
            "countryCode": "CZ",
            "customerSince": "06/09/2015",
            "satisfaction": 6.73,
            "url": "https://simplemachines.org",
            "phone": "420-(392)776-3492"
        }, {
            "id": 33,
            "name": "Cremin, Daniel and Boyle",
            "city": "San Antonio",
            "country": "Colombia",
            "countryCode": "CO",
            "customerSince": "07/29/2015",
            "satisfaction": 2.23,
            "url": "http://wsj.com",
            "phone": "57-(923)378-1768"
        }, {
            "id": 34,
            "name": "Bradtke LLC",
            "city": "Água Retorta",
            "country": "Portugal",
            "countryCode": "PT",
            "customerSince": "02/13/2017",
            "satisfaction": 5.61,
            "url": "http://dmoz.org",
            "phone": "351-(271)890-8831"
        }, {
            "id": 35,
            "name": "Rice, Bernier and Braun",
            "city": "Honolulu",
            "country": "United States",
            "countryCode": "US",
            "customerSince": "10/20/2016",
            "satisfaction": 0.01,
            "url": "http://imageshack.us",
            "phone": "1-(808)919-0577"
        }, {
            "id": 36,
            "name": "Green-Jacobson",
            "city": "Břasy",
            "country": "Czech Republic",
            "countryCode": "CZ",
            "customerSince": "02/28/2016",
            "satisfaction": 3.78,
            "url": "https://github.io",
            "phone": "420-(585)993-1551"
        }, {
            "id": 37,
            "name": "Donnelly, Pacocha and Klein",
            "city": "Rymättylä",
            "country": "Finland",
            "countryCode": "FI",
            "customerSince": "12/15/2015",
            "satisfaction": 4.87,
            "url": "http://google.co.jp",
            "phone": "358-(711)144-0485"
        }, {
            "id": 38,
            "name": "Swift-Rempel",
            "city": "Patos de Minas",
            "country": "Brazil",
            "countryCode": "BR",
            "customerSince": "09/18/2015",
            "satisfaction": 6.02,
            "url": "http://rakuten.co.jp",
            "phone": "55-(669)819-1362"
        }, {
            "id": 39,
            "name": "West, Walter and Pacocha",
            "city": "Beipai",
            "country": "China",
            "countryCode": "CN",
            "customerSince": "02/14/2016",
            "satisfaction": 2.2,
            "url": "https://cdbaby.com",
            "phone": "86-(526)602-0865"
        }, {
            "id": 40,
            "name": "Schimmel, Farrell and Reinger",
            "city": "‘Abasān al Kabīrah",
            "country": "Palestinian Territory",
            "countryCode": "PS",
            "customerSince": "12/11/2016",
            "satisfaction": 4.2,
            "url": "http://scientificamerican.com",
            "phone": "970-(880)593-0709"
        }, {
            "id": 41,
            "name": "Davis Inc",
            "city": "Emiliano Zapata",
            "country": "Mexico",
            "countryCode": "MX",
            "customerSince": "08/21/2016",
            "satisfaction": 7.1,
            "url": "http://51.la",
            "phone": "52-(488)155-5608"
        }, {
            "id": 42,
            "name": "Keeling-Leffler",
            "city": "Kayan Hulu",
            "country": "Indonesia",
            "countryCode": "ID",
            "customerSince": "09/17/2015",
            "satisfaction": 7.83,
            "url": "https://google.com.hk",
            "phone": "62-(827)302-5286"
        }, {
            "id": 43,
            "name": "Eichmann and Sons",
            "city": "Ancol",
            "country": "Indonesia",
            "countryCode": "ID",
            "customerSince": "03/26/2015",
            "satisfaction": 7.37,
            "url": "https://xinhuanet.com",
            "phone": "62-(463)343-5328"
        }, {
            "id": 44,
            "name": "Hilpert Inc",
            "city": "Mianhu",
            "country": "China",
            "countryCode": "CN",
            "customerSince": "04/23/2016",
            "satisfaction": 4.17,
            "url": "http://nydailynews.com",
            "phone": "86-(635)478-9729"
        }, {
            "id": 45,
            "name": "Nikolaus-Pfannerstill",
            "city": "Beixin",
            "country": "China",
            "countryCode": "CN",
            "customerSince": "01/02/2015",
            "satisfaction": 2.67,
            "url": "https://angelfire.com",
            "phone": "86-(954)300-3587"
        }, {
            "id": 46,
            "name": "Johns-Hintz",
            "city": "Billdal",
            "country": "Sweden",
            "countryCode": "SE",
            "customerSince": "04/25/2016",
            "satisfaction": 2.77,
            "url": "http://amazon.com",
            "phone": "46-(427)848-7743"
        }, {
            "id": 47,
            "name": "Wilderman Group",
            "city": "Dzaoudzi",
            "country": "Mayotte",
            "countryCode": "YT",
            "customerSince": "09/30/2016",
            "satisfaction": 2.53,
            "url": "https://dion.ne.jp",
            "phone": "269-(809)109-8102"
        }, {
            "id": 48,
            "name": "Haag, Bode and Willms",
            "city": "Wulan Hada",
            "country": "China",
            "countryCode": "CN",
            "customerSince": "12/04/2015",
            "satisfaction": 5.12,
            "url": "https://salon.com",
            "phone": "86-(284)628-4549"
        }, {
            "id": 49,
            "name": "Romaguera Inc",
            "city": "La Rochelle",
            "country": "France",
            "countryCode": "FR",
            "customerSince": "07/30/2015",
            "satisfaction": 6.2,
            "url": "http://aol.com",
            "phone": "33-(404)423-6898"
        }, {
            "id": 50,
            "name": "Crona, Shanahan and Keeling",
            "city": "Berezayka",
            "country": "Russia",
            "countryCode": "RU",
            "customerSince": "04/13/2016",
            "satisfaction": 2.15,
            "url": "http://sciencedirect.com",
            "phone": "7-(315)271-3378"
        }, {
            "id": 51,
            "name": "Collier, Weimann and Russel",
            "city": "‘Attīl",
            "country": "Palestinian Territory",
            "countryCode": "PS",
            "customerSince": "10/04/2015",
            "satisfaction": 7.94,
            "url": "https://netvibes.com",
            "phone": "970-(646)292-3367"
        }, {
            "id": 52,
            "name": "Baumbach-O'Reilly",
            "city": "Saint John",
            "country": "Malta",
            "countryCode": "MT",
            "customerSince": "03/12/2015",
            "satisfaction": 5.11,
            "url": "https://bizjournals.com",
            "phone": "356-(676)915-1677"
        }, {
            "id": 53,
            "name": "Wehner, Shields and Reynolds",
            "city": "Hexi",
            "country": "China",
            "countryCode": "CN",
            "customerSince": "01/14/2016",
            "satisfaction": 2.48,
            "url": "http://google.pl",
            "phone": "86-(397)669-0122"
        }, {
            "id": 54,
            "name": "Runolfsdottir, Crona and Ondricka",
            "city": "Bousso",
            "country": "Chad",
            "countryCode": "TD",
            "customerSince": "01/30/2015",
            "satisfaction": 7.37,
            "url": "http://google.com.hk",
            "phone": "235-(927)862-5445"
        }, {
            "id": 55,
            "name": "Schneider and Sons",
            "city": "Wenshao",
            "country": "China",
            "countryCode": "CN",
            "customerSince": "01/07/2017",
            "satisfaction": 0.52,
            "url": "http://rambler.ru",
            "phone": "86-(850)993-9025"
        }, {
            "id": 56,
            "name": "Mosciski Inc",
            "city": "Yanglinqiao",
            "country": "China",
            "countryCode": "CN",
            "customerSince": "02/24/2016",
            "satisfaction": 3.93,
            "url": "http://a8.net",
            "phone": "86-(576)617-0292"
        }, {
            "id": 57,
            "name": "Aufderhar, VonRueden and Bednar",
            "city": "Yantianhe",
            "country": "China",
            "countryCode": "CN",
            "customerSince": "02/21/2015",
            "satisfaction": 1.8,
            "url": "http://comcast.net",
            "phone": "86-(460)873-6689"
        }, {
            "id": 58,
            "name": "Wisozk, Spencer and Hagenes",
            "city": "Bunawan",
            "country": "Philippines",
            "countryCode": "PH",
            "customerSince": "01/31/2016",
            "satisfaction": 2.57,
            "url": "https://addtoany.com",
            "phone": "63-(799)887-0871"
        }, {
            "id": 59,
            "name": "Volkman Group",
            "city": "Wādī al ‘Uyūn",
            "country": "Syria",
            "countryCode": "SY",
            "customerSince": "01/09/2015",
            "satisfaction": 3.87,
            "url": "https://naver.com",
            "phone": "963-(588)928-3625"
        }, {
            "id": 60,
            "name": "McDermott Inc",
            "city": "Kamina",
            "country": "Democratic Republic of the Congo",
            "countryCode": "CD",
            "customerSince": "11/01/2015",
            "satisfaction": 1.33,
            "url": "https://macromedia.com",
            "phone": "242-(682)387-0859"
        }, {
            "id": 61,
            "name": "Prohaska LLC",
            "city": "Bielsk Podlaski",
            "country": "Poland",
            "countryCode": "PL",
            "customerSince": "06/13/2016",
            "satisfaction": 6.7,
            "url": "https://xinhuanet.com",
            "phone": "48-(264)900-3185"
        }, {
            "id": 62,
            "name": "Schaefer LLC",
            "city": "Kakamega",
            "country": "Kenya",
            "countryCode": "KE",
            "customerSince": "01/29/2016",
            "satisfaction": 5.63,
            "url": "https://qq.com",
            "phone": "254-(324)971-0677"
        }, {
            "id": 63,
            "name": "Green LLC",
            "city": "Chum Phae",
            "country": "Thailand",
            "countryCode": "TH",
            "customerSince": "09/25/2016",
            "satisfaction": 8.08,
            "url": "https://netlog.com",
            "phone": "66-(791)764-3620"
        }, {
            "id": 64,
            "name": "Keeling-Gorczany",
            "city": "Los Palacios",
            "country": "Cuba",
            "countryCode": "CU",
            "customerSince": "12/14/2015",
            "satisfaction": 4.46,
            "url": "https://disqus.com",
            "phone": "53-(200)761-8160"
        }, {
            "id": 65,
            "name": "Murazik, Weimann and Hand",
            "city": "Tomay Kichwa",
            "country": "Peru",
            "countryCode": "PE",
            "customerSince": "06/05/2016",
            "satisfaction": 3.87,
            "url": "https://instagram.com",
            "phone": "51-(398)873-7103"
        }, {
            "id": 66,
            "name": "Huels-Schumm",
            "city": "Sihai",
            "country": "China",
            "countryCode": "CN",
            "customerSince": "08/08/2016",
            "satisfaction": 2.94,
            "url": "https://etsy.com",
            "phone": "86-(579)993-6728"
        }, {
            "id": 67,
            "name": "Bartoletti and Sons",
            "city": "Lý Sơn",
            "country": "Vietnam",
            "countryCode": "VN",
            "customerSince": "03/10/2015",
            "satisfaction": 2.47,
            "url": "https://netscape.com",
            "phone": "84-(472)416-2785"
        }, {
            "id": 68,
            "name": "Muller LLC",
            "city": "Cayungnan",
            "country": "Philippines",
            "countryCode": "PH",
            "customerSince": "12/04/2015",
            "satisfaction": 6.69,
            "url": "http://indiatimes.com",
            "phone": "63-(997)842-2423"
        }, {
            "id": 69,
            "name": "Jakubowski, Jacobs and Lockman",
            "city": "Xincheng",
            "country": "China",
            "countryCode": "CN",
            "customerSince": "07/22/2015",
            "satisfaction": 2.31,
            "url": "https://friendfeed.com",
            "phone": "86-(357)350-2585"
        }, {
            "id": 70,
            "name": "Zulauf Group",
            "city": "Extrema",
            "country": "Brazil",
            "countryCode": "BR",
            "customerSince": "01/17/2016",
            "satisfaction": 7.5,
            "url": "https://so-net.ne.jp",
            "phone": "55-(446)261-9009"
        }, {
            "id": 71,
            "name": "Metz-Bartoletti",
            "city": "El Zapote",
            "country": "Mexico",
            "countryCode": "MX",
            "customerSince": "09/22/2015",
            "satisfaction": 2.08,
            "url": "http://washington.edu",
            "phone": "52-(702)713-2315"
        }, {
            "id": 72,
            "name": "Ruecker, Bartoletti and Davis",
            "city": "Saint Louis",
            "country": "United States",
            "countryCode": "US",
            "customerSince": "06/08/2016",
            "satisfaction": 7.35,
            "url": "http://timesonline.co.uk",
            "phone": "1-(314)453-4089"
        }, {
            "id": 73,
            "name": "Fisher-Spinka",
            "city": "Purranque",
            "country": "Chile",
            "countryCode": "CL",
            "customerSince": "10/07/2015",
            "satisfaction": 7.97,
            "url": "https://dmoz.org",
            "phone": "56-(475)794-0335"
        }, {
            "id": 74,
            "name": "Erdman and Sons",
            "city": "Dazhou",
            "country": "China",
            "countryCode": "CN",
            "customerSince": "05/09/2015",
            "satisfaction": 1.38,
            "url": "http://wp.com",
            "phone": "86-(717)845-5055"
        }, {
            "id": 75,
            "name": "DuBuque, Padberg and Gleichner",
            "city": "Mar’ina Roshcha",
            "country": "Russia",
            "countryCode": "RU",
            "customerSince": "04/11/2016",
            "satisfaction": 4.55,
            "url": "https://yellowpages.com",
            "phone": "7-(490)762-2553"
        }, {
            "id": 76,
            "name": "Predovic Inc",
            "city": "Sobreira",
            "country": "Portugal",
            "countryCode": "PT",
            "customerSince": "04/09/2016",
            "satisfaction": 0.62,
            "url": "http://wiley.com",
            "phone": "351-(844)856-5868"
        }, {
            "id": 77,
            "name": "Cartwright Inc",
            "city": "Fort Beaufort",
            "country": "South Africa",
            "countryCode": "ZA",
            "customerSince": "10/06/2015",
            "satisfaction": 7.87,
            "url": "http://nifty.com",
            "phone": "27-(872)328-0958"
        }, {
            "id": 78,
            "name": "McCullough, Block and Bogisich",
            "city": "Arnhem",
            "country": "Netherlands",
            "countryCode": "NL",
            "customerSince": "01/06/2016",
            "satisfaction": 8.71,
            "url": "https://uiuc.edu",
            "phone": "31-(300)199-7884"
        }, {
            "id": 79,
            "name": "Paucek-Moen",
            "city": "Long Loreh",
            "country": "Indonesia",
            "countryCode": "ID",
            "customerSince": "07/14/2016",
            "satisfaction": 0.11,
            "url": "https://tinypic.com",
            "phone": "62-(668)378-1603"
        }, {
            "id": 80,
            "name": "Hickle-Treutel",
            "city": "Kokubu-matsuki",
            "country": "Japan",
            "countryCode": "JP",
            "customerSince": "04/30/2015",
            "satisfaction": 7.21,
            "url": "http://canalblog.com",
            "phone": "81-(302)411-9885"
        }, {
            "id": 81,
            "name": "Gutkowski Group",
            "city": "Machang",
            "country": "China",
            "countryCode": "CN",
            "customerSince": "04/06/2016",
            "satisfaction": 6.59,
            "url": "https://4shared.com",
            "phone": "86-(194)615-8707"
        }, {
            "id": 82,
            "name": "Goyette, McCullough and Veum",
            "city": "Doushaguan",
            "country": "China",
            "countryCode": "CN",
            "customerSince": "10/05/2015",
            "satisfaction": 6.04,
            "url": "https://sfgate.com",
            "phone": "86-(515)885-4987"
        }, {
            "id": 83,
            "name": "Hahn-McCullough",
            "city": "Hostivice",
            "country": "Czech Republic",
            "countryCode": "CZ",
            "customerSince": "09/24/2015",
            "satisfaction": 5.27,
            "url": "http://addtoany.com",
            "phone": "420-(841)460-7420"
        }, {
            "id": 84,
            "name": "Beier Group",
            "city": "Chalandrítsa",
            "country": "Greece",
            "countryCode": "GR",
            "customerSince": "08/13/2016",
            "satisfaction": 7.29,
            "url": "https://psu.edu",
            "phone": "30-(842)965-9626"
        }, {
            "id": 85,
            "name": "Gutkowski, Wolf and Wintheiser",
            "city": "Barentu",
            "country": "Eritrea",
            "countryCode": "ER",
            "customerSince": "02/08/2015",
            "satisfaction": 5.59,
            "url": "http://ycombinator.com",
            "phone": "291-(466)217-3926"
        }, {
            "id": 86,
            "name": "Jacobson, Smith and Cole",
            "city": "Nowa Sól",
            "country": "Poland",
            "countryCode": "PL",
            "customerSince": "10/10/2016",
            "satisfaction": 5.5,
            "url": "https://xinhuanet.com",
            "phone": "48-(457)874-1925"
        }, {
            "id": 87,
            "name": "Romaguera, Altenwerth and Cartwright",
            "city": "Rosthern",
            "country": "Canada",
            "countryCode": "CA",
            "customerSince": "11/11/2015",
            "satisfaction": 7.35,
            "url": "http://sohu.com",
            "phone": "1-(560)195-6619"
        }, {
            "id": 88,
            "name": "Treutel-Schultz",
            "city": "Eido",
            "country": "Portugal",
            "countryCode": "PT",
            "customerSince": "12/15/2015",
            "satisfaction": 0.44,
            "url": "http://fc2.com",
            "phone": "351-(105)703-1619"
        }, {
            "id": 89,
            "name": "Walker, Reilly and Hudson",
            "city": "Shenwan",
            "country": "China",
            "countryCode": "CN",
            "customerSince": "09/24/2016",
            "satisfaction": 6.98,
            "url": "http://linkedin.com",
            "phone": "86-(731)400-2466"
        }, {
            "id": 90,
            "name": "Hartmann, Rutherford and Hauck",
            "city": "Nol",
            "country": "Sweden",
            "countryCode": "SE",
            "customerSince": "03/11/2015",
            "satisfaction": 9.3,
            "url": "http://imageshack.us",
            "phone": "46-(512)988-8883"
        }, {
            "id": 91,
            "name": "Sipes LLC",
            "city": "Kouango",
            "country": "Central African Republic",
            "countryCode": "CF",
            "customerSince": "08/30/2016",
            "satisfaction": 1.15,
            "url": "https://cnbc.com",
            "phone": "236-(210)277-4184"
        }, {
            "id": 92,
            "name": "Corwin-Roob",
            "city": "Qinglung",
            "country": "China",
            "countryCode": "CN",
            "customerSince": "01/28/2017",
            "satisfaction": 1.66,
            "url": "https://pinterest.com",
            "phone": "86-(502)765-5680"
        }, {
            "id": 93,
            "name": "Lueilwitz, Walker and Feil",
            "city": "Ouro Branco",
            "country": "Brazil",
            "countryCode": "BR",
            "customerSince": "01/05/2016",
            "satisfaction": 6.15,
            "url": "http://amazon.co.jp",
            "phone": "55-(734)800-1149"
        }, {
            "id": 94,
            "name": "Boyle LLC",
            "city": "Hafrsfjord",
            "country": "Norway",
            "countryCode": "NO",
            "customerSince": "08/25/2015",
            "satisfaction": 5.55,
            "url": "https://paypal.com",
            "phone": "47-(505)499-6448"
        }, {
            "id": 95,
            "name": "Schulist-Von",
            "city": "Biting",
            "country": "Indonesia",
            "countryCode": "ID",
            "customerSince": "02/12/2017",
            "satisfaction": 2.84,
            "url": "https://loc.gov",
            "phone": "62-(374)134-1217"
        }, {
            "id": 96,
            "name": "Rolfson, Schinner and Miller",
            "city": "Thị Trấn Mường Khến",
            "country": "Vietnam",
            "countryCode": "VN",
            "customerSince": "01/23/2016",
            "satisfaction": 9.13,
            "url": "http://reddit.com",
            "phone": "84-(687)407-3561"
        }, {
            "id": 97,
            "name": "Parker-Auer",
            "city": "Lékoni",
            "country": "Gabon",
            "countryCode": "GA",
            "customerSince": "04/06/2016",
            "satisfaction": 3.05,
            "url": "http://hibu.com",
            "phone": "241-(421)354-3001"
        }, {
            "id": 98,
            "name": "Hettinger, Howe and Balistreri",
            "city": "Toumodi",
            "country": "Ivory Coast",
            "countryCode": "CI",
            "customerSince": "04/21/2016",
            "satisfaction": 8.43,
            "url": "https://scribd.com",
            "phone": "225-(968)452-2584"
        }, {
            "id": 99,
            "name": "Brakus-Tromp",
            "city": "Arcachon",
            "country": "France",
            "countryCode": "FR",
            "customerSince": "10/20/2015",
            "satisfaction": 4.87,
            "url": "http://oracle.com",
            "phone": "33-(528)450-8053"
        }, {
            "id": 100,
            "name": "Trantow and Sons",
            "city": "Myhiya",
            "country": "Ukraine",
            "countryCode": "UA",
            "customerSince": "03/05/2016",
            "satisfaction": 0.3,
            "url": "https://lycos.com",
            "phone": "380-(937)698-7856"
        }];

}
