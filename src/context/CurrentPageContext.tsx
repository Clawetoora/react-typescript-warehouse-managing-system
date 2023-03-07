import React, { useState, createContext, ReactNode } from "react";

type CurrentPageContextProviderProps = {
  children: ReactNode;
};

export const CurrentPageContext = createContext<[number, (page:number)=>void]>([0, ()=>{}]);

const CurrentPageContextProvider = ({
  children,
}: CurrentPageContextProviderProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const saveCurrentPage = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <div>
      <CurrentPageContext.Provider value={[currentPage, saveCurrentPage]}>
        {children}
      </CurrentPageContext.Provider>
    </div>
  );
};

export default CurrentPageContextProvider;
