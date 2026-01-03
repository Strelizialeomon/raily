import { cn } from '@/utils/tools';
import HeaderInfo from '@/components/header/header-info';
import HeaderPanel from '@/components/header/header-panel';
import HeaderFooter from '@/components/header/header-footer';

const Header = () => {
  return (
    <div>
      <HeaderInfo />
      <HeaderPanel />
      <HeaderFooter />
    </div>
  );
};

export default Header;
