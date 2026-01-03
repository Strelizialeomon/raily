const Footer = () => {
  return (
    <div className={'w-full bg-[#faf7f3] pt-[12%] pb-[8%] px-[4%]'}>
      <div className={'flex justify-center items-center w-full'}>
        <div className={'flex-1 h-[0.5px] bg-[#B49F8A]/60'} />
        <div className={'mx-[14px]'}>
          <img
            className={'w-[80px] h-auto object-cover'}
            src={'https://resources.taoxiplan.com/raily/footer_logo.png'}
          />
        </div>
        <div className={'flex-1 h-[1px] bg-[#B49F8A]/60'} />
      </div>
    </div>
  );
};

export default Footer;
