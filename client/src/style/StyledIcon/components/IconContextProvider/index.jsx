import { IconContext } from 'react-icons';

const IconContextProvider = ({ className, children }) => (
  <IconContext.Provider value={{ className }}>{children}</IconContext.Provider>
);

export default IconContextProvider;
