import clsx from 'clsx';

const Price = ({
  amount,
  className,
  currencyCode = 'ARS',
  currencyCodeClassName
}: {
  amount: string;
  className?: string;
  currencyCode: string;
  currencyCodeClassName?: string;
} & React.ComponentProps<'p'>) => {
  console.log('Price rendering with props:', { amount, className, currencyCode, currencyCodeClassName });
  
  return (
    <p suppressHydrationWarning={true} className={className}>
      {`${new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: currencyCode,
        currencyDisplay: 'narrowSymbol'
      }).format(parseFloat(amount))}`}
      <span className={clsx('ml-1 inline', currencyCodeClassName)}></span>
    </p>
  );
};

export default Price;
