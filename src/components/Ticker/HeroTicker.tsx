import {
  bt_icon,
  communityFibre,
  eeLogo,
  hyperopticLogo,
  nowBroadband,
  plusnet,
  sky,
  virginMedia,
  vodafone,
} from "@/static/images";
import Image from "next/image";

export default function HeroTicker() {
  return (
    <div className="ticker-wrap container mx-auto">
      <div className="ticker">
        <div className="ticker__item">
          <Image width={40} height={40} src={bt_icon} alt="bt_icon" />
        </div>
        <div className="ticker__item">
          <Image
            className="bg-blend-lighten"
            width={25}
            height={40}
            src={eeLogo}
            alt="eeLogo"
          />
        </div>
        <div className="ticker__item">
          <Image width={56} height={40} src={plusnet} alt="plusnet" />
        </div>
        <div className="ticker__item">
          <Image width={66} height={40} src={virginMedia} alt="virginMedia" />
        </div>
        <div className="ticker__item">
          <Image width={65} height={40} src={sky} alt="sky" />
        </div>
        <div className="ticker__item">
          <Image width={80} height={40} src={nowBroadband} alt="nowBroadband" />
        </div>
        <div className="ticker__item">
          <Image width={56} height={40} src={vodafone} alt="vodafone" />
        </div>
        <div className="ticker__item">
          <Image
            width={80}
            height={40}
            src={hyperopticLogo}
            alt="hyperopticLogo"
          />
        </div>
        <div className="ticker__item">
          <Image
            width={150}
            height={40}
            src={communityFibre}
            alt="communityFibre"
          />
        </div>
        <div className="ticker__item">
          <Image width={40} height={40} src={bt_icon} alt="bt_icon" />
        </div>
        <div className="ticker__item">
          <Image width={25} height={40} src={eeLogo} alt="eeLogo" />
        </div>
        <div className="ticker__item">
          <Image width={56} height={40} src={plusnet} alt="plusnet" />
        </div>
        <div className="ticker__item">
          <Image width={66} height={40} src={virginMedia} alt="virginMedia" />
        </div>
        <div className="ticker__item">
          <Image width={65} height={40} src={sky} alt="sky" />
        </div>
        <div className="ticker__item">
          <Image width={80} height={40} src={nowBroadband} alt="nowBroadband" />
        </div>
        <div className="ticker__item">
          <Image width={56} height={40} src={vodafone} alt="vodafone" />
        </div>
        <div className="ticker__item">
          <Image
            width={80}
            height={40}
            src={hyperopticLogo}
            alt="hyperopticLogo"
          />
        </div>
        <div className="ticker__item">
          <Image
            width={150}
            height={40}
            src={communityFibre}
            alt="communityFibre"
          />
        </div>
        <div className="ticker__item">
          <Image width={40} height={40} src={bt_icon} alt="bt_icon" />
        </div>
        <div className="ticker__item">
          <Image width={25} height={40} src={eeLogo} alt="eeLogo" />
        </div>
        <div className="ticker__item">
          <Image width={56} height={40} src={plusnet} alt="plusnet" />
        </div>
        <div className="ticker__item">
          <Image width={66} height={40} src={virginMedia} alt="virginMedia" />
        </div>
        <div className="ticker__item">
          <Image width={65} height={40} src={sky} alt="sky" />
        </div>
        <div className="ticker__item">
          <Image width={80} height={40} src={nowBroadband} alt="nowBroadband" />
        </div>
        <div className="ticker__item">
          <Image width={56} height={40} src={vodafone} alt="vodafone" />
        </div>
        <div className="ticker__item">
          <Image
            width={80}
            height={40}
            src={hyperopticLogo}
            alt="hyperopticLogo"
          />
        </div>
        <div className="ticker__item">
          <Image
            width={150}
            height={40}
            src={communityFibre}
            alt="communityFibre"
          />
        </div>
      </div>
    </div>
  );
}
