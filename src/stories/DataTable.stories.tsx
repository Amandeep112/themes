import React from "react";
import { ArrowLeftCircle, ArrowRightCircle } from "react-feather";
import { DataTable, Flex } from "../components/index";

export default {
    title: "DataTable",
    component: DataTable,
    parameters: {
        docs: {
            description: {
                component:
                    "A table component with sortng and pagination functionality.",
            },
        },
    },
};
const caseInsensitiveSort = (rowA, rowB) => {
    const a = rowA.first_name.toLowerCase();
    const b = rowB.first_name.toLowerCase();
    if (a < b) {

        return -1;
    }
    if (a > b) {

        return 1;
    }
    return 0;
};
const columnsData = [
    {
        id: "1",
        name: "Id",
        sort: true,
    },
    {
        id: "2",
        name: "first name",
        sort: true,
        sortFunction: caseInsensitiveSort,
    },
    { id: "3", name: "Last Name" },
    {
        id: "4",
        name: "email",
        sort: true,
    },
    {
        id: "5",
        name: "contact",
    },
];

const dataContent = [
    {
        id: 1,
        first_name: "Jessamyn",
        last_name: "Espinazo",
        email: "jespinazo0@chicagotribune.com",
        phone: "162-166-0977",
    },
    {
        id: 2,
        first_name: "Isac",
        last_name: "Tooher",
        email: "itooher1@psu.edu",
        phone: "655-567-3619",
    },
    {
        id: 3,
        first_name: "Tabbatha",
        last_name: "Proschke",
        email: "tproschke2@weibo.com",
        phone: "327-612-4850",
    },
    {
        id: 4,
        first_name: "Ninetta",
        last_name: "Mabb",
        email: "nmabb3@canalblog.com",
        phone: "971-296-0911",
    },
    {
        id: 5,
        first_name: "Danni",
        last_name: "Wallentin",
        email: "dwallentin4@comcast.net",
        phone: "983-297-0506",
    },
    {
        id: 6,
        first_name: "Neely",
        last_name: "Purkins",
        email: "npurkins5@mediafire.com",
        phone: "379-119-4237",
    },
    {
        id: 7,
        first_name: "Jessika",
        last_name: "Kinkaid",
        email: "jkinkaid6@eventbrite.com",
        phone: "771-888-6284",
    },
    {
        id: 8,
        first_name: "Julianna",
        last_name: "Swindall",
        email: "jswindall7@aol.com",
        phone: "252-614-0486",
    },
    {
        id: 9,
        first_name: "Corrinne",
        last_name: "Geeve",
        email: "cgeeve8@wisc.edu",
        phone: "450-872-8646",
    },
    {
        id: 10,
        first_name: "Trumann",
        last_name: "Flux",
        email: "tflux9@census.gov",
        phone: "249-892-1585",
    },
    {
        id: 11,
        first_name: "Annalise",
        last_name: "Keinrat",
        email: "akeinrata@i2i.jp",
        phone: "659-283-4601",
    },
    {
        id: 12,
        first_name: "Cal",
        last_name: "Haverson",
        email: "chaversonb@multiply.com",
        phone: "689-567-9516",
    },
    {
        id: 13,
        first_name: "Erik",
        last_name: "McGillivrie",
        email: "emcgillivriec@theglobeandmail.com",
        phone: "334-579-0995",
    },
    {
        id: 14,
        first_name: "Cherilyn",
        last_name: "Tuddenham",
        email: "ctuddenhamd@indiegogo.com",
        phone: "408-721-4575",
    },
    {
        id: 15,
        first_name: "Merola",
        last_name: "MacDowal",
        email: "mmacdowale@omniture.com",
        phone: "863-234-5628",
    },
    {
        id: 16,
        first_name: "Olenolin",
        last_name: "O'Shiels",
        email: "ooshielsf@smh.com.au",
        phone: "646-127-1652",
    },
    {
        id: 17,
        first_name: "Donnie",
        last_name: "Oliphant",
        email: "doliphantg@i2i.jp",
        phone: "975-457-5826",
    },
    {
        id: 18,
        first_name: "Carly",
        last_name: "Bulleyn",
        email: "cbulleynh@fc2.com",
        phone: "938-211-6682",
    },
    {
        id: 19,
        first_name: "Walt",
        last_name: "Meace",
        email: "wmeacei@printfriendly.com",
        phone: "688-775-4039",
    },
    {
        id: 20,
        first_name: "Debbie",
        last_name: "Rockhall",
        email: "drockhallj@weebly.com",
        phone: "120-270-4052",
    },
    {
        id: 21,
        first_name: "Devonna",
        last_name: "Oylett",
        email: "doylettk@jalbum.net",
        phone: "364-921-6359",
    },
    {
        id: 22,
        first_name: "Jourdan",
        last_name: "Grahamslaw",
        email: "jgrahamslawl@irs.gov",
        phone: "939-973-9940",
    },
    {
        id: 23,
        first_name: "Brana",
        last_name: "Haste",
        email: "bhastem@typepad.com",
        phone: "142-349-6034",
    },
    {
        id: 24,
        first_name: "Wilmer",
        last_name: "Trenouth",
        email: "wtrenouthn@netvibes.com",
        phone: "346-897-1305",
    },
    {
        id: 25,
        first_name: "Brandtr",
        last_name: "Esler",
        email: "beslero@wikispaces.com",
        phone: "638-763-4382",
    },
    {
        id: 26,
        first_name: "Andonis",
        last_name: "Durbin",
        email: "adurbinp@newyorker.com",
        phone: "531-854-8916",
    },
    {
        id: 27,
        first_name: "Cynthia",
        last_name: "How to preserve",
        email: "chowtopreserveq@de.vu",
        phone: "119-342-9726",
    },
    {
        id: 28,
        first_name: "Jennee",
        last_name: "Cowdroy",
        email: "jcowdroyr@marketwatch.com",
        phone: "804-307-6112",
    },
    {
        id: 29,
        first_name: "Lorin",
        last_name: "D'Hooghe",
        email: "ldhooghes@wix.com",
        phone: "374-113-9906",
    },
    {
        id: 30,
        first_name: "Letti",
        last_name: "Acreman",
        email: "lacremant@ted.com",
        phone: "157-463-7705",
    },
    {
        id: 31,
        first_name: "Drucie",
        last_name: "Watkins",
        email: "dwatkinsu@japanpost.jp",
        phone: "778-273-9630",
    },
    {
        id: 32,
        first_name: "Ev",
        last_name: "Christy",
        email: "echristyv@addthis.com",
        phone: "575-366-6055",
    },
    {
        id: 33,
        first_name: "Nick",
        last_name: "Moores",
        email: "nmooresw@privacy.gov.au",
        phone: "905-406-0567",
    },
    {
        id: 34,
        first_name: "Mollie",
        last_name: "Strut",
        email: "mstrutx@ftc.gov",
        phone: "838-952-4289",
    },
    {
        id: 35,
        first_name: "Dasha",
        last_name: "Gerring",
        email: "dgerringy@histats.com",
        phone: "147-553-3272",
    },
    {
        id: 36,
        first_name: "Hazel",
        last_name: "Barber",
        email: "hbarberz@walmart.com",
        phone: "830-229-8318",
    },
    {
        id: 37,
        first_name: "Danila",
        last_name: "Gidman",
        email: "dgidman10@networkadvertising.org",
        phone: "474-241-8816",
    },
    {
        id: 38,
        first_name: "Gladi",
        last_name: "Torry",
        email: "gtorry11@usgs.gov",
        phone: "865-594-2480",
    },
    {
        id: 39,
        first_name: "Mair",
        last_name: "Garnam",
        email: "mgarnam12@miitbeian.gov.cn",
        phone: "890-209-7033",
    },
    {
        id: 40,
        first_name: "Wilie",
        last_name: "Sebire",
        email: "wsebire13@pen.io",
        phone: "303-945-1363",
    },
    {
        id: 41,
        first_name: "Corrie",
        last_name: "Terrett",
        email: "cterrett14@comcast.net",
        phone: "410-942-4578",
    },
    {
        id: 42,
        first_name: "Dene",
        last_name: "Mullender",
        email: "dmullender15@sun.com",
        phone: "901-439-2803",
    },
    {
        id: 43,
        first_name: "Prue",
        last_name: "Digginson",
        email: "pdigginson16@discuz.net",
        phone: "149-648-9075",
    },
    {
        id: 44,
        first_name: "Blithe",
        last_name: "Huriche",
        email: "bhuriche17@dion.ne.jp",
        phone: "572-905-5251",
    },
    {
        id: 45,
        first_name: "Martyn",
        last_name: "Rickell",
        email: "mrickell18@google.com.hk",
        phone: "471-332-7226",
    },
    {
        id: 46,
        first_name: "Marlene",
        last_name: "Sokill",
        email: "msokill19@samsung.com",
        phone: "654-701-1938",
    },
    {
        id: 47,
        first_name: "Neda",
        last_name: "Muat",
        email: "nmuat1a@opera.com",
        phone: "505-173-1555",
    },
    {
        id: 48,
        first_name: "Darcy",
        last_name: "Tal",
        email: "dtal1b@gravatar.com",
        phone: "381-614-2085",
    },
    {
        id: 49,
        first_name: "Lynette",
        last_name: "Bottrill",
        email: "lbottrill1c@etsy.com",
        phone: "959-766-2123",
    },
    {
        id: 50,
        first_name: "Court",
        last_name: "Melonby",
        email: "cmelonby1d@irs.gov",
        phone: "688-175-2186",
    },
    {
        id: 51,
        first_name: "Ansel",
        last_name: "Krolman",
        email: "akrolman1e@noaa.gov",
        phone: "358-653-3696",
    },
    {
        id: 52,
        first_name: "Birch",
        last_name: "Axelbey",
        email: "baxelbey1f@go.com",
        phone: "839-501-4343",
    },
];
const Template = (args) => (
    <Flex className="flex-wrapper">
        <DataTable
            nextIcon={<ArrowRightCircle height={18} width={18} />}
            prevIcon={<ArrowLeftCircle height={18} width={18} />}
            columns={columnsData}
            data={dataContent}
            columnWidth="17%"
            style={{
                '[data-row="content"]': {
                    width: "100%",
                    justifyContent: "center",
                },
            }}
        />
    </Flex>
);
export const DefDatatable = Template.bind({});
DefDatatable.args = {
    header: true,
    pageSize: 5,
    columnWidth: {
        xs: "20%",
        sm: "20%",
        md: "20%",
        lg: "20%",
        xl: "20%",
        xxl: "20%",
    },
    type: "bordered",
    colorScheme: "primary",
    variant: "solid",
};
