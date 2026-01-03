import { cn } from '@/utils/tools';
import PathItem from '@/components/path/path-item';

const Path = () => {
  return (
    <div>
      <div
        className={cn(
          'relative',
        )}
      >
        <img
          className={cn(
            'w-full object-contain h-auto',
          )}
          src={'https://resources.taoxiplan.com/raily/path_title_bg.png'}
        />
        <div
          className={cn(
            'absolute w-full h-full top-0 left-0',
            'flex justify-center items-center flex-col',
          )}
        >
          <img
            className={'w-[140px] h-auto object-contain'}
            src={'https://resources.taoxiplan.com/raily/path_logo.png'}
          />
          <div
            className={cn(
              'bg-[#3FD3D5] mt-[4%] ',
              'px-[16px] py-[4px]',
              'text-white text-[18px] font-[500] tracking-[4px]',
            )}
          >
            路线指引图
          </div>
        </div>
      </div>
      <div
        className={cn(
          'py-[8%] px-[4%]',
          `bg-[url('https://resources.taoxiplan.com/raily/path_bg.png')]`,
          'bg-cover bg-no-repeat',
        )}
      >
        <PathItem
          index={1}
          title={['地铁铜锣湾站--A出口出站']}
          label={'(坐B2图标电梯右侧,喜茶旁扶手梯上楼)'}
          url={'https://resources.taoxiplan.com/raily/path_1.png'}
        />
        <PathItem
          index={2}
          title={['看见bhc左转→看见现金兑换店右转', '→然后直行400米']}
          url={'https://resources.taoxiplan.com/raily/path_2.png'}
        />
        <PathItem
          index={3}
          title={[
            '看见FITNESS旁边扶梯上楼→上两节扶梯后',
            '→看见HAIRONE→左后方抵达RAILY',
          ]}
          url={'https://resources.taoxiplan.com/raily/path_3.png'}
        />
        <PathItem
          index={4}
          title={['抵达RAILY']}
          url={'https://resources.taoxiplan.com/raily/path_4.png'}
        />
      </div>
    </div>
  );
};

export default Path;
