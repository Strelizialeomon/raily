import { cn } from '@/utils/tools';

const HeaderPanel = () => {
  return (
    <div
      className={cn(
        'absolute z-10',
        'w-full px-[4%]',
        'top-[60%]',
      )}
    >
      <div
        className={cn(
          'w-full',
          'bg-[#f7f4ef]',
          'rounded-[28px]',
          'relative',
        )}
      >
        <div className={'relative'}>
          <img
            src={'https://resources.taoxiplan.com/raily/about_us.png'}
            className={'px-[10%] pt-[10%]'}
          />
          <img
            className={'px-[24%] -mt-[4%]'}
            src={'https://resources.taoxiplan.com/raily/about_us_chinese.png'}
          />
        </div>
        <div
          className={cn(
            'px-[10%]',
            'mt-[10%]',
            'relative',
            'h-[150]',
          )}
        >
          <img
            className={cn(
              'w-[60px] h-[60px]',
              'absolute top-0 left-[38%]',
            )}
            src={'https://resources.taoxiplan.com/raily/header_panel_top.png'}
          />
          <img
            className={cn(
              'h-[88px]',
              'absolute left-[10%] bottom-0',
            )}
            src={'https://resources.taoxiplan.com/raily/header_panel_left.png'}
          />
          <img
            className={cn(
              'h-[120px]',
              'absolute right-[10%] bottom-0',
            )}
            src={'https://resources.taoxiplan.com/raily/header_panel_right.png'}
          />
        </div>
        <div className={'pt-[8%] pb-[10%] flex items-center justify-center'}>
          <div className={'font-medium'}>
            <div className={'flex justify-center  text-[16px] mb-[12px]'}>
              <div className={'relative'}>
                <img
                  className={'h-[18px] w-[18px] absolute -top-[4px] -left-[6px]'}
                  src={'https://resources.taoxiplan.com/raily/header_promise_icon.png'}
                />
                <p className={'text-[#442A0D] text-[18px]'}>特别承诺:</p>
              </div>
            </div>
            <div className={'text-[#26BABD] flex flex-col justify-center items-center gap-[8px]'}>
              <div className={'relative'}>
                <div
                  className={cn(
                    'absolute z-0',
                    'h-[8px] w-[calc(100%+8px)] bg-white bottom-0 -left-[4px]',
                  )}
                />
                <p className={'relative z-10'}>只用正品行货 不用水货!</p>
              </div>
              <div className={'relative'}>
                <div
                  className={cn(
                    'absolute z-0',
                    'h-[8px] w-[calc(100%+8px)] bg-white bottom-0 -left-[4px]',
                  )}
                />
                <p className={'relative z-10'}>原厂正货 支持查验</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={cn(
            'absolute z-10 top-0',
            'w-full h-full',
            'flex justify-center items-center flex-col',
            'text-[16px] text-[#442a0d]',
          )}
        >
          <p
            className={cn(
              'flex justify-center items-center',
              'bg-white px-[14px] py-[2px]',
            )}
          >
            <p>
              塑颜萃厂家导师级别医生团队(全港不超过
            </p>
            <img
              className={'h-[14px] mx-[4px] object-contain'}
              src={'https://resources.taoxiplan.com/raily/10%20.png'}
            />
            <p>位</p>)
          </p>
          <p
            className={cn(
              'mt-[8px]',
              'flex justify-center items-center',
              'bg-white px-[14px] py-[2px]',
            )}
          >
            <p>
              多位TVB明星 港姐的香港医美机构选择
            </p>
          </p>
          <p
            className={cn(
              'mt-[8px]',
              'flex justify-center items-center',
              'bg-white px-[14px] py-[2px]',
            )}
          >
            <p>
              面积
            </p>
            <img
              className={'h-[14px] mx-[4px]'}
              src={'https://resources.taoxiplan.com/raily/2500.png'}
            />
            <p>
              呎
            </p>
            <p>
              拥有
            </p>
            <img
              className={cn('h-[14px] mx-[4px]')}
              src={'https://resources.taoxiplan.com/raily/6.png'}
            />
            <p>
              间治疗病房
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderPanel;
