import { cn } from '@/utils/tools';

const Choose = () => {
  return (
    <div className={'relative'}>
      <img
        className={'w-full object-contain top-0 left-0 absolute z-0'}
        src={'https://resources.taoxiplan.com/raily/medicien_bg.png'}
      />
      <img
        className={'w-full object-contain absolute bottom-0 left-0'}
        src={'https://resources.taoxiplan.com/raily/flower.png'}
      />
      <div className={'w-full flex justify-center px-[4%] relative mt-[12%] z-10'}>
        <img
          className={'w-full'}
          src={'https://resources.taoxiplan.com/raily/why_chose_title.png'}
        />
      </div>
      <div className={'px-[4%] grid grid-cols-3 gap-[2%] mt-[12%] z-10'}>
        <div className={'relative'}>
          <img
            className={'object-contain'}
            src={'https://resources.taoxiplan.com/raily/first_part.png'}
          />
          <img
            className={'w-[16px] absolute bottom-[8px] left-[8px]'}
            src={'https://resources.taoxiplan.com/raily/1.png'}
          />
          <div
            className={cn(
              'absolute top-0 left-0',
              'w-full h-full',
              'flex flex-col justify-center items-center',
              'text-[12px] text-white/70',
            )}
          >
            <p>针剂均为原厂正货</p>
            <p>支持查验</p>
          </div>
        </div>
        <div className={'relative'}>
          <img
            className={'object-contain'}
            src={'https://resources.taoxiplan.com/raily/second_part.png'}
          />
          <img
            className={'w-[22px] absolute bottom-[8px] left-[8px]'}
            src={'https://resources.taoxiplan.com/raily/2.png'}
          />
          <div
            className={cn(
              'absolute top-0 left-0',
              'w-full h-full',
              'flex flex-col justify-center items-center',
              'text-[12px] text-white/70',
            )}
          >
            <p>导师一级资质</p>
            <p>医生团队</p>
            <p>证书齐全</p>
            <p>审美自然</p>
            <p>技术一流</p>
          </div>
        </div>
        <div className={'relative'}>
          <img
            className={'object-contain'}
            src={'https://resources.taoxiplan.com/raily/third_part.png'}
          />
          <img
            className={'w-[22px] absolute bottom-[8px] left-[8px]'}
            src={'https://resources.taoxiplan.com/raily/3.png'}
          />
          <div
            className={cn(
              'absolute top-0 left-0',
              'w-full h-full',
              'flex flex-col justify-center items-center',
              'text-[12px] text-white/70',
            )}
          >
            <p>专业医护团队</p>
            <p>价格透明</p>
            <p>没有销售顾问</p>
            <p>强制推销</p>
            <p>操作后护理贴心</p>
          </div>
        </div>
      </div>
      <div className={'mt-[12%] px-[8%] relative z-10'}>
        <img
          className={'object-contain'}
          src={'https://resources.taoxiplan.com/raily/medicien_title.png'}
        />
        <p className={'text-[12px] mt-[4%] flex justify-center text-[#3B2A19] relative z-20'}>
          所有药品支持现场查验，全程在顾客面前进行配药。
        </p>
      </div>
      <div className={'w-full px-[8%] relative mt-[8%] flex flex-col gap-[14px]'}>
        <div className={'flex items-center'}>
          <div
            className={cn(
              'w-[20px] h-[20px]',
              'bg-gradient-to-r from-[#11CCD1] to-[#e2ede4]',
              'mr-[12px]',
            )}
          />
          <img
            className={'h-[20px]'}
            src={'https://resources.taoxiplan.com/raily/b_1.png'}
          />
          <div
            className={cn(
              'flex-1',
              'ml-[12px]',
              'py-[4%] px-[8%]',
              'bg-[#FFFCF9]',
              'rounded-[12px]',
              'shadow-[0.5px_2px_0.5px_2px_rgba(123,74,53,0.06)]',
              'text-[12px] text-[#482F15]',
              'flex flex-col justify-center items-center gap-[4px]',
            )}
          >
            <p>我们医院在药品管理及采购政策上不遗余力</p>
            <p>除了有注册药剂师中央统筹,药事管理</p>
            <p>并设立全线配备WHO规格,冷链设备</p>
            <div className={'px-[4px] py-[1px] bg-[#30DBE0]/10'}>
              <p>24小时电子温度监控</p>
            </div>
            <p>杜绝断链风险 确保药效稳定。</p>
          </div>
        </div>
        <div className={'flex items-center'}>
          <div
            className={cn(
              'w-[20px] h-[20px]',
              'bg-gradient-to-r from-[#11CCD1] to-[#e2ede4]',
              'mr-[12px]',
            )}
          />
          <img
            className={'h-[20px]'}
            src={'https://resources.taoxiplan.com/raily/b_2.png'}
          />
          <div
            className={cn(
              'flex-1',
              'ml-[12px]',
              'py-[4%] px-[8%]',
              'bg-[#FFFCF9]',
              'rounded-[12px]',
              'shadow-[0.5px_2px_0.5px_2px_rgba(123,74,53,0.06)]',
              'text-[12px] text-[#482F15]',
              'flex flex-col justify-center items-center gap-[4px]',
            )}
          >
            <p>针对香港市场“水货/欧版”针剂泛滥</p>
            <p>生理盐水稀释，伪造原厂证书等乱象</p>
            <p>只向原厂指定代理商直采</p>
            <div className={'px-[4px] py-[1px] bg-[#30DBE0]/10'}>
              <p>每一支药品确保100%正货</p>
            </div>
            <p>源头直采 拒绝水货！</p>
          </div>
        </div>
        <div className={'flex items-center'}>
          <div
            className={cn(
              'w-[20px] h-[20px]',
              'bg-gradient-to-r from-[#11CCD1] to-[#e2ede4]',
              'mr-[12px]',
            )}
          />
          <img
            className={'h-[20px]'}
            src={'https://resources.taoxiplan.com/raily/b_3.png'}
          />
          <div
            className={cn(
              'flex-1',
              'ml-[12px]',
              'py-[4%] px-[8%]',
              'bg-[#FFFCF9]',
              'rounded-[12px]',
              'shadow-[0.5px_2px_0.5px_2px_rgba(123,74,53,0.06)]',
              'text-[12px] text-[#482F15]',
              'flex flex-col justify-center items-center gap-[4px]',
            )}
          >
            <p>们能承诺操作全程透明</p>
            <div className={'px-[4px] py-[1px] bg-[#30DBE0]/10'}>
              <p>可扫码验证设备真伪</p>
            </div>
            <p>时医生会基于您的实际面部状态</p>
            <p>实评估预期效果，绝不夸大</p>
            <p>对产品 用好产品。</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
