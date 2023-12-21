import { useEffect } from 'react';
import type { PropsWithChildren } from 'react';

import { useCatalog } from 'context';

/**
 * A component that securely fetches catalog data from the server
 */
const LazyCatalog: React.FC<PropsWithChildren> = ({ children }) => {
  const { onFetch } = useCatalog()

  useEffect(() => {
    onFetch()
  }, [onFetch])

  return <>{children}</>
};

export default LazyCatalog;
