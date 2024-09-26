import { createContext, useContext, useEffect, useState } from "react";
import {
  IPaginationProvider,
  IPaginationContext,
} from "../types/paginationContext";

export const PaginationContext = createContext({} as IPaginationContext);

export const usePaginationContext = () => {
  return useContext(PaginationContext);
};

export function PaginationProvider({ children }: IPaginationProvider) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(8);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;

  useEffect(() => {}, []);

  return (
    <PaginationContext.Provider
      value={{
        currentPage,
        postPerPage,
        firstPostIndex,
        lastPostIndex,
        setCurrentPage,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
}
