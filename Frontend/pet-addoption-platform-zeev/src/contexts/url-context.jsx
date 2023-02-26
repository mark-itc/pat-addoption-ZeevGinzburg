import { createContext } from 'react';

const serverURL = "http://localhost:4000";
const serverURLContext = createContext(serverURL);

export default serverURLContext;
