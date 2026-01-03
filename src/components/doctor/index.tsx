import { cn } from '@/utils/tools';

const Doctor = () => {
  return (
    <div
      className={cn(
        'w-full',
        'relative',
      )}
    >
      <img
        className={cn(
          'absolute z-0',
          'w-full object-contain',
        )}
        src={'https://resources.taoxiplan.com/raily/doctor_bg.png'}
      />
      <div className={'relative z-10 pt-[12%] px-[4%]'}>
        <div className={'flex justify-center relative z-10'}>
          <img
            className={'w-[200px]'}
            src={'https://resources.taoxiplan.com/raily/doctor_title.png'}
          />
        </div>
        <div className={'relative'}>
          <img
            className={cn(
              'absolute z-0',
              'w-full object-contain',
              '-mt-[36px]',
            )}
            src={'https://resources.taoxiplan.com/raily/doctor_panel_bg.png'}
          />
          <div className={'text-[10px] px-[4%] relative z-10 pt-[12%] text-[#442A0E]'}>
            <p className={'flex items-center'}>
              ·莱麗醫美医生团队是
              <p className={'text-[12px] mx-[2px] px-[2px] bg-[#3FE1E5]/10'}>
                香港持牌注册的名校科班医师团
              </p>
            </p>
            <p className={'flex items-center mt-[4px]'}>
              ·<p className={'text-[12px] mx-[2px] px-[2px] bg-[#3FE1E5]/10'}>
                国际原厂认证
              </p>
              的全品类技术资质，以及
              <p className={'text-[12px] mx-[2px] px-[2px] bg-[#3FE1E5]/10'}>
                覆盖医美全场景
              </p>
              的实操能力
            </p>
            <p className={'flex items-center mt-[4px]'}>
              ·兼具专业
              <p className={'text-[12px] mx-[2px] px-[2px] bg-[#3FE1E5]/10'}>
                安全性与技术全面性
              </p>
              的优质医美服务团队
            </p>
            <p className={'flex items-center mt-[4px]'}>
              ·为求美者提供
              <p className={'text-[12px] mx-[2px] px-[2px] bg-[#3FE1E5]/10'}>有资质、有技术、有保障</p>
              的医美体验
            </p>
          </div>
          <div className={'mt-[32px] relative px-[4%]'}>
            <img
              className={'w-full object-contain'}
              src={'https://resources.taoxiplan.com/raily/doctor_panel_cover.png'}
            />
            <img
              className={'w-[60%] absolute object-contain top-[25%] left-[20%]'}
              src={'https://resources.taoxiplan.com/raily/doctor_panel_slogan.png'}
            />
          </div>
        </div>
      </div>
      <div className={'w-full mt-[32px] z-10 relative px-[4%]'}>
        <div
          className={cn(
            'w-full bg-white rounded-[22px]',
            'shadow-[1px_2px_1px_2px_rgba(77,64,39,0.06)]',
            'py-[12%] px-[4%]',
          )}
        >
          <div className={'flex justify-center'}>
            <img
              className={'w-[200px]'}
              src={'https://resources.taoxiplan.com/raily/doctor_wang.png'}
            />
          </div>
          <div className={'w-full h-[1px] bg-[#4D4027]/10 my-[4%]'} />
          <div className={'flex justify-around items-start text-[#442A0E] text-[12px]'}>
            <div className={'text-[16px] font-bold text-[#442A0E] relative'}>
              <img
                className={'h-[16px] w-[16px] object-contain absolute -left-[6px] -top-[6px]'}
                src={'https://resources.taoxiplan.com/raily/header_promise_icon.png'}
              />
              擅长项目
            </div>
            <div>
              <p className={'mb-[4px]'}>·各类针剂微调</p>
              <p className={'mb-[4px]'}>·内外轮廓重塑</p>
              <p className={'mb-[4px]'}>·鼻部综合微调</p>
            </div>
            <div>
              <p className={'mb-[4px]'}>·埋线提升</p>
              <p className={'mb-[4px]'}>·皮肤年轻态管理</p>
              <p className={'mb-[4px]'}>·高能量医学仪器治疗</p>
            </div>
          </div>
          <div className={'w-full bg-[#f9f7f3] rounded-[24px] mt-[4%] relative'}>
            <img
              className={cn(
                'w-full object-contain',
              )}
              src={'https://resources.taoxiplan.com/raily/doctor_certificate.png'}
            />
            <div
              className={cn(
                'w-full h-full flex justify-around items-center top-0 left-0',
                'text-[#442A0E] text-[8px]',
                'absolute z-10',
              )}
            >
              <div>
                <p className={'mb-[2px]'}>HArmonyCa美神针培训证书</p>
                <p className={'mb-[2px]'}>Belotero透明质酸彩虹针培训证书</p>
                <p className={'mb-[2px]'}>NEODERM结业证书</p>
                <p className={'mb-[2px]'}>LFL埋线品牌成绩证书</p>
                <p className={'mb-[2px]'}>珀洛丽肽培训结业证书</p>
                <p className={'mb-[2px]'}>CoS疗法-结业证书</p>
                <p className={'mb-[2px]'}>Belkyra碎脂针-培训证书</p>
                <p className={'mb-[2px]'}>肉毒素-培训证书</p>
                <p className={'mb-[2px]'}>TEOXANE泰奥赛恩成绩证书</p>
                <p>Ulthera极线音波拉提(超声刀)结业证书</p>
              </div>
              <div>
                <p className={'mb-[2px]'}>家庭医生皮肤镜检查-护理培训证书</p>
                <p className={'mb-[2px]'}>MD代码培训证书</p>
                <p className={'mb-[2px]'}>中鼻甲中膜结业证书</p>
                <p className={'mb-[2px]'}>香港卓越奖学金-合格证书</p>
                <p className={'mb-[2px]'}>4D回龄线成绩证书</p>
                <p className={'mb-[2px]'}>Thermage FLX热玛吉培训证书</p>
                <p className={'mb-[2px]'}>Ultherapy美版超声刀培训证书</p>
                <p className={'mb-[2px]'}>Ellanse伊妍仕(少女针)培训证书</p>
                <p className={'mb-[2px]'}>Sculptra塑然雅/舒颜萃(第一代童颜针)培训证书</p>
                <p className={'mb-[2px]'}>JULAINE致丽颜培训证书</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={'relative z-10 mt-[12px] flex justify-center text-[12px] text-[#442A0E]'}
      >
        *实际坐诊医生以具体排班为准
      </div>
    </div>
  );
};

export default Doctor;
