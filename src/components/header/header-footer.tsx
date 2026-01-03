import { cn } from '@/utils/tools';

const HeaderFooter = () => {
  return (
    <div className={'relative'}>
      <img
        className={cn(
          'w-full h-full object-cover',
          'absolute top-0 left-0 z-0',
        )}
        src={'https://resources.taoxiplan.com/raily/header_footer.png'}
      />
      <div
        className={cn(
          'relative z-10 text-[10px] text-white ',
          'pt-[30%] pb-[8%] px-[2%]',
          'flex items-center justify-between',
        )}
      >
        <div className={'flex items-center'}>
          <div className={'border-l border-dashed border-white pl-[4px] w-[1px] self-stretch'} />
          <div>
            <p className={'mb-[4px]'}>Sculptra 塑然雅 原廠正貨認可中心</p>
            <p className={'mb-[4px]'}>JULÄINE™️緻麗顏 原廠正貨認可中心</p>
            <p className={'mb-[4px]'}>AestheFill 精靈針原廠正貨認可中心</p>
            <p className={'mb-[4px]'}>Derma Veil 童顏針 原廠正貨認可中心</p>
            <p className={'mb-[4px]'}>Juvederm 喬雅登原廠正貨認可中心</p>
            <p>Belotero 保柔緹 原廠正貨認可中心</p>
          </div>
        </div>
        <div className={'flex items-center'}>
          <div className={'border-l border-dashed border-white pl-[4px] w-[1px] self-stretch'} />
          <div>
            <p className={'mb-[4px]'}>Ellanse 少女針 原廠正貨認可中心</p>
            <p className={'mb-[4px]'}>HArmonyCA 美神針 原廠正貨認可中心</p>
            <p className={'mb-[4px]'}>Teosyal Redensity II 熊貓針原廠正貨認可中心</p>
            <p className={'mb-[4px]'}>TEOSYAL RHA3 原廠正貨認可中心</p>
            <p className={'mb-[4px]'}>Xeomin 原廠正貨認可中心</p>
            <p>Botox 保妥適 原廠正貨認可中心</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderFooter;
