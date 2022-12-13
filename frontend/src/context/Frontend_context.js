import { createContext } from "react";

export const FrontendContext = createContext()

const Main_menu_array_navbar = [{
    "id": 1,
    "title": "MOBILES & TABLETS"
}, {
    "id": 2,
    "title": "TELEVISIONS",
}, {
    "id": 3,
    "title": "AUDIO",
}, {
    "id": 4,
    "title": "HOME APPLIANCES",
}, {
    "id": 5,
    "title": "COMPUTERS",
}, {
    "id": 6,
    "title": "CAMERAS",
}, {
    "id": 7,
    "title": "KITCHEN APPLIANCES",
}, {
    "id": 8,
    "title": "PERSONAL CARE",
}, {
    "id": 9,
    "title": "ACCESSORIES",
}]
const Main_menu_dropdown_array_navbar = [{
    "id": 1,
    "title": "Smartphones"
}, {
    "id": 2,
    "title": "Wearable Technology",
    "options": [{ "optionsID": 1, "title": "Top Selling Smartwatches" }, { "optionsID": 2, "title": "Apple Price Drop" }]
}, {
    "id": 3,
    "title": "Accessories",
    "options": [{ "optionsID": 1, "title": "Tablet Accessories" }, { "optionsID": 2, "title": "Mobile Accessories" }, { "optionsID": 3, "title": "Mobile Grips & Stands" }, { "optionsID": 4, "title": "Car Mobile Holders" }, { "optionsID": 5, "title": "Memory Cards" }, { "optionsID": 6, "title": "Cables & Cords" }, { "optionsID": 7, "title": "Chargers & Adapters" }]
}, {
    "id": 4,
    "title": "Headphones & Headsets",
}, {
    "id": 5,
    "title": "Tablets & eReaders",
    "options": [{ "optionsID": 1, "title": "Premium Tablets, Above 15001" }, { "optionsID": 2, "title": "Every Day use Tablets below 15000" }]
}, {
    "id": 6,
    "title": "Power Banks",
}, {
    "id": 7,
    "title": "eSlates",
}, {
    "id": 8,
    "title": "AI Learning Robots",
}]


export const FrontendContextProvider = ({ children }) => {
    const main_red_color = "rgb(228,37,41)"
    const main_blue_color = "rgb(0,51,128)"
    const main_menu_dropdown_blue_color = "rgb(38,48,101)"
    return (
        <FrontendContext.Provider value={{ main_red_color, main_blue_color, Main_menu_array_navbar,Main_menu_dropdown_array_navbar,main_menu_dropdown_blue_color }} >
            {children}
        </FrontendContext.Provider>
    )
}