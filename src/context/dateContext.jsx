import { createContext, useState } from "react";

export const DateContext = createContext(null);

export const DateProvider = ({children}) => {
    const [dateCalendar, setDateCalendar] = useState(new Date());

    return <DateContext.Provider value={{dateCalendar, setDateCalendar}}>{children}</DateContext.Provider>
}