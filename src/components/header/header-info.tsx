import { cn } from '@/utils/tools';

const HeaderInfo = () => {
  return (
    <div
      className={cn(
        'w-full',
        'relative',
      )}
    >
      <img
        src={'https://resources.taoxiplan.com/raily/raily_header.png'}
        className={cn(
          // 'absolute',
          'z-0',
          'w-auto h-full top-0 left-0',
        )}
      />
      <div
        className={cn(
          'z-10',
          'absolute top-[20%]',
          'w-full',
          'flex justify-center',
        )}
      >
        <div
          className={cn(
            'relative',
          )}
        >
          <img
            className={cn(
              'w-[270px] h-auto',
              'absolute -top-[70%] -left-[30%]',
              'z-10',
            )}
            src={'https://resources.taoxiplan.com/raily/header_logo_icon.png'}
          />
          <img
            className={'w-[200px] h-auto z-20 relative'}
            src={'https://resources.taoxiplan.com/raily/header_logo.png'}
          />
          <img
            className={cn(
              'w-[26px] h-[26px]',
              'absolute bottom-0 right-[0%]',
            )}
            src={'https://resources.taoxiplan.com/raily/header_small_icon.png'}
          />
        </div>
      </div>
      <div className={'z-20 absolute top-[48%] w-full'}>
        <div className={'flex justify-center'}>
          <div className={'text-[12px]'}>
            <div className={'flex gap-[6px] items-center'}>
              <div
                className={cn(
                  'w-[70px] text-justify bg-[#6B451E]',
                  'text-white',
                  'px-[8px] py-[2px]',
                  'rounded-[6px]',
                  'flex justify-between',
                )}
              >
                <p>地</p>
                <p>址:</p>
              </div>
              <p className={'text-[#452e00] font-bold'}>
                銅鑼灣燈籠街 V-piont 2樓201
              </p>
            </div>
            <div className={'flex gap-[6px] items-center mt-[8px]'}>
              <div
                className={cn(
                  'w-[70px] text-justify bg-[#6B451E]',
                  'text-white',
                  'px-[8px] py-[2px]',
                  'rounded-[6px]',
                  'flex justify-between',
                )}
              >
                <p>
                  营
                </p>
                <p>
                  业
                </p>
                <p>
                  时
                </p>
                <p>
                  间:
                </p>
              </div>
              <p className={'text-[#452e00] font-bold'}>
                星期一至星期日(10:00-21:00)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderInfo;
