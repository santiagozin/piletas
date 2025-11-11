import { getMenu } from 'lib/shopify';
import FooterMenu from './footer-menu';

const { COMPANY_NAME, SITE_NAME } = process.env;

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = (currentYear > 2023 ? `${currentYear}` : '');
  const skeleton = 'w-full h-6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700';
  const menu = await getMenu('next-js-frontend-footer-menu');
  const copyrightName = COMPANY_NAME || SITE_NAME || '';

  return (
    <footer className="text-sm text-neutral-500 dark:text-neutral-400 mt-30 bg-gradient-to-b from-[#a1c4fd] to-[#c2e9fb]">
     
      <div className="border-t border-white py-6 text-sm dark:border-white">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0 text-white text-sm md:text-lg">
          <p>
            &copy; {copyrightDate} {copyrightName}
            {copyrightName.length && !copyrightName.endsWith('.') ? '.' : ''} Todos los derechos reservados.
          </p>
          <hr className="mx-4 hidden h-4 w-[1px] border-l border-neutral-400 md:inline-block" />
    
        <FooterMenu menu={menu} />
        </div>
      </div>
    </footer>
  );
}
