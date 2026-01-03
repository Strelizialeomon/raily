import { cn } from '@/utils/tools';

const Idea = () => {
  return (
    <div
      className={cn(
        'mt-[12%] px-[8%]',
        `bg-[url('https://resources.taoxiplan.com/raily/idea_bg.png')] bg-cover bg-no-repeat`,
      )}
    >
      <img
        className={''}
        src={'https://resources.taoxiplan.com/raily/idea_title.png'}
      />
      <div className={'mt-[8%] text-[12px] flex flex-col gap-[2px] text-[#452B10] font-[500]'}>
        <p>1.轻薄美学，能少做绝不多做</p>
        <p>2.对应不同部位进行精细化注射，最大特点是注射手法 细致和精准化，且术后极少出现青肿现象。</p>
      </div>
      <div className={'w-[60px] h-[1px] my-[8%] bg-[#11CCD1]'} />
      <img
        className={'w-full h-auto object-contain'}
        src={'https://resources.taoxiplan.com/raily/idea_cover.png'}
      />
    </div>
  );
};

export default Idea;
