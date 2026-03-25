import cricketBatImages from '../../../../../../public/assets/banner-main.png';
const HeroHeader = () => {
  return (
    <div className="containers cricketBanner py-10">
      {/* image */}
      <div className="flex flex-col items-center gap-5">
        <img src={cricketBatImages} alt="logo" />
        <h1>Assemble Your Ultimate Dream 11 Cricket Team</h1>
        <p>Beyond Boundaries Beyond Limits</p>
        <button className="dream11-btn">Claim Free Credit</button>
      </div>
    </div>
  );
};

export default HeroHeader;
