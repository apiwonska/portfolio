import { useEffect } from 'react';

const useDocumentTitle = (titleText: string): void => {
  useEffect(() => {
    document.title = titleText;
  }, []);
};

export default useDocumentTitle;
