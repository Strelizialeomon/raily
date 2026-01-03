import { cn } from '@/utils/tools';

const Team = () => {
  return (
    <div
      className={cn(
        'mt-[12%] px-[8%]',
        `bg-[url('https://resources.taoxiplan.com/raily/team_bg.png')] bg-no-repeat bg-cover`,
      )}
    >
      <img
        className={'w-full object-contain'}
        src={'https://resources.taoxiplan.com/raily/team_title.png'}
      />
      <div className={'mt-[4%] text-[12px] text-[#482F15] font-[500] mb-[8%]'}>
        <p>主打自然妈生感美学，专业医护团队，合规医疗耗材，</p>
        <p>标准化治疗室，结合面部黄金比例与个人气质的美学定</p>
        <p>制以及操作前操作中、操作后的全周期服务。</p>
      </div>
      <div className={'w-full bg-[#e2dbd7] py-[12%] px-[8%]'}>
        <img
          className={'w-full h-auto object-contain mb-[8%]'}
          src={'https://resources.taoxiplan.com/raily/team_cover_1.png'}
        />
        <img
          className={'w-full h-auto object-contain mb-[8%]'}
          src={'https://resources.taoxiplan.com/raily/team_cover_2.png'}
        />
        <img
          className={'w-full h-auto object-contain'}
          src={'https://resources.taoxiplan.com/raily/team_cover_3.png'}
        />
      </div>
      <div
        className={cn(
          'py-[8%]',
          'flex justify-center',
        )}
      >
        <div>
          <div className={'flex justify-center'}>
            <img
              className={'w-[100px] object-contain'}
              src={'https://resources.taoxiplan.com/raily/promise_title.png'}
            />
          </div>
          <div
            className={cn(
              'text-[12px] font-[500] text-[#452B10] mt-[8%]',
              'flex flex-col justify-center items-center',
              'underline',
            )}
          >
            <p className={'mb-[4px]'}>如果疗程结束后您觉得效果没达预期</p>
            <p className={'mb-[4px]'}>团队会第一时间为您处理售后反馈</p>
            <p className={'mb-[4px]'}>安排专业医生为您详细检查和评估</p>
            <p className={'mb-[4px]'}>根据您的实际情况制定个性化解决方案</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
