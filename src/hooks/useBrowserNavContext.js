import { createContext, useContext } from "react";

// Lets anything inside the browser frame (e.g. a "Get in touch" button) use the
// same navigation as the tabs: scroll, history and address bar all stay in sync.
export const BrowserNavContext = createContext(null);

export const useBrowserNavContext = () => useContext(BrowserNavContext);
