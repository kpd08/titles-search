import * as React from 'react';

export const Layout = ({
  children,
}: React.PropsWithChildren<React.ReactNode>) => {
  return (
    <div className="w-full min-h-screen" data-testid="layout">
      <main className="mx-auto max-w-screen-lg p-4">{children}</main>
    </div>
  );
};
