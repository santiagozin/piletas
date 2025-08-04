import clsx from 'clsx';
import Price from './price';

const Label = ({
  title,
  amount,
  currencyCode,
  position = 'bottom'
}: {
  title: string;
  amount: string;
  currencyCode: string;
  position?: 'bottom' | 'center';
}) => {

  
  return (
    <>
    <div
      className={clsx('absolute top-0 left-0 flex w-full px-4 pb-4 @container/label', {
        'lg:px-20 lg:pb-[35%]': position === 'center'
      })}
    >
      <div className="absolute top-1 left-0 right-0 mx-1 flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white py-1">
        <h3 className="mr-4 line-clamp-4 flex-grow pl-2 tracking-tight text-lg font-poppins font-medium leading-6 text-center capitalize">{title}</h3>

      </div>

    </div>
    <Price
          className="flex-none rounded-full bg-primary p-2 text-white text-[15px] absolute bottom-2 left-2 font-medium"
          amount={amount}
          currencyCode={currencyCode}
          currencyCodeClassName="hidden @[275px]/label:inline"
        />
    </>
  );
};

export default Label;
