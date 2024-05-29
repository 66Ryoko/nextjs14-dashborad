import clsx from 'clsx';
import Image from 'next/image';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  src: string;
  size: number;
  alt: string;
}

export function OauthButton({
  children,
  className,
  src,
  size,
  alt,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'flex h-10 items-center justify-center gap-2 rounded-lg border border-gray-100 bg-white px-4 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-200 active:bg-gray-100 aria-disabled:cursor-not-allowed aria-disabled:opacity-50',
        className,
      )}
    >
      <>
        <Image
          src={src}
          width={size}
          height={size}
          className="h-8 w-8"
          alt={alt}
        />
        {children}
      </>
    </button>
  );
}
