import Header from '@/components/header/header';
import { cn } from '@/utils/tools';
import Doctor from '@/components/doctor';
import Choose from '@/components/choose';
import Idea from '@/components/idea';
import Team from '@/components/team';
import Path from '@/components/path';
import Footer from '@/components/footer';

const App = () => {
  return (
    <div className={cn('w-full h-full')}>
      <Header />
      <Doctor />
      <Choose />
      <Idea />
      <Team />
      <Path />
      <Footer />
    </div>
  );
};

export default App;
