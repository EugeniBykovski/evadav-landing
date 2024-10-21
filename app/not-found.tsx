import { FC } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const NotFoundPage: FC = () => {
  return (
    <div className="h-full flex flex-col space-y-4 items-center justify-center text-muted-foreground">
      <h1 className="text-4xl">404</h1>
      <p>We couldn&apos;t find the page you were looking for :(</p>
      <Button asChild>
        <Link href="/">Go Home</Link>
      </Button>
    </div>
  );
};

export default NotFoundPage;
