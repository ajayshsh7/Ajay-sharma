'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function RouteChangeLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 400); // You can adjust this based on your transition time

    return () => clearTimeout(timer);
  }, [pathname]);

  return loading ? (
    <div className="page-loader">
      <p>Loading...</p>
    </div>
  ) : null;
}
