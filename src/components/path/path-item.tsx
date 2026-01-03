import { cn } from '@/utils/tools';

interface IProps {
  title: string[];
  label?: string;
  url: string;
  index: number;
}

const PathItem = (props: IProps) => {
  const { title, label, url, index } = props;
  return (
    <div className={'w-full mb-[8%]'}>
      <div className={'w-full flex items-center px-[12%]'}>
        <div
          className={cn(
            'mr-[8px]',
            'relative',
          )}
        >
          <p
            className={cn(
              'relative z-10',
              'text-[24px] text-[white]',
              'pr-[6px] pl-[4px]',
            )}
          >
            {index}.
          </p>
          <div
            className={cn(
              'w-full h-full absolute top-0 left-0',
              'bg-[#15D4D9]',
              'z-0',
            )}
          />
          <div
            className={cn(
              'w-[4px] h-full absolute top-0 -left-[2px]',
              'bg-[#3FE1E5]',
              'z-0',
            )}
          />
        </div>
        <div className={'flex flex-col items-start justify-center'}>
          {title.map((t) => {
            return (
              <div className={'px-[4px] py-[0.5px] bg-white text-[#4d341a] mb-[1px] text-[12px]'}>
                {t}
              </div>
            );
          })}
          {label && <p className={'text-[10px] mt-[4px]'}>{label}</p>}
        </div>
      </div>
      <img
        className={'mt-[4%]'}
        src={url}
      />
    </div>
  );
};

export default PathItem;
