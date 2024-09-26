export interface IPaginationProvider {
  children: React.ReactNode;
}

export interface IPaginationContext {
  currentPage: number;
  postPerPage: number;
  lastPostIndex: number;
  firstPostIndex: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}
