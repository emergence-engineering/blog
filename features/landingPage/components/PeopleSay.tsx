import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import Image from "next/image";

import theme, { screenSizes } from "../../../utils/theme";
import RossGellerImage from "../../../public/partners/rossgeller.png";
import RachelGreenImage from "../../../public/partners/rachelgreen.png";
import PhoebeBuffayImage from "../../../public/partners/phoebebuffay.png";
import { clickable } from "../../../utils/mixins";

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 20rem;
  background-color: #ecd2d20d;
  width: 100%;
  padding: 4rem;

  @media screen and (max-width: ${screenSizes.medium}px) {
    padding: 1rem;
  }
`;

const SectionTitle = styled.h1`
  color: ${theme.color.gray1};
`;

const SectionContentRoot = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  width: 100%;

  max-width: ${screenSizes.medium}px;
  overflow-x: hidden;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;

  @media screen and (max-width: ${screenSizes.medium}px) {
    flex-direction: column;
    width: 85%;
    overflow-scrolling: touch;
  }
`;

const PartnerRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2rem 0;
  row-gap: 1rem;
  border-radius: 5px;

  min-height: 22rem;
  flex-shrink: 0;
  background: ${theme.color.white};
  scroll-snap-align: start;
`;

export const FacePictureWrapper = styled.div`
  position: relative;
  height: 5rem;
  width: 5rem;

  img {
    border-radius: 50%;
  }
`;

/* Partner details */
const PartnerName = styled.div`
  background-color: ${theme.color.tertiary};
  min-width: 10rem;
  padding: 0 1rem;
  border-radius: 0.3rem;

  font-family: ${theme.fontFamily.title};
  font-weight: 800;
  font-size: 1.35rem;
  color: ${theme.color.fontWhite};
  text-align: center;
`;

const PartnerJob = styled.div`
  font-family: ${theme.fontFamily.title};
  font-size: 1.05rem;
  color: ${theme.color.gray1};
  font-style: italic;
`;

const Description = styled.div`
  font-family: ${theme.fontFamily.general};
  color: ${theme.color.gray1};
  text-align: center;
  padding: 0 4rem;
  margin-top: 1rem;
  min-height: 6rem;
`;

/* Prev and Next buttons */
const Prev = styled.img.attrs({ src: "/arrow-prev.svg" })`
  width: 1rem;
  height: 2rem;
  position: absolute;
  justify-self: center;
  align-self: flex-start;

  @media screen and (max-width: ${screenSizes.medium}px) {
    display: none;
  }
`;

const Next = styled.img.attrs({ src: "/arrow-next.svg" })`
  width: 1rem;
  height: 2rem;
  position: absolute;
  justify-self: center;
  align-self: flex-end;

  @media screen and (max-width: ${screenSizes.medium}px) {
    display: none;
  }
`;

/* Indicator */
const JumpLinkCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  column-gap: 0.5rem;
  margin-top: 1rem;

  @media screen and (max-width: ${screenSizes.medium}px) {
    display: none;
  }
`;

const JumpLink = styled.div`
  width: 3rem;
  height: 0.3rem;
  background-color: ${theme.color.tertiary};
  border: none;
  border-radius: 5px;
  ${clickable};
`;

interface EachPartnerHas {
  partnerId: number;
  src: StaticImageData;
  partnerName: string;
  partnerJob: string;
  saysThat: string;
}

type ListOfWhatTheyHave = EachPartnerHas[];

/* Partners, settings and HTML */
const PeopleSay: FunctionComponent = () => {
  const Partners = [
    {
      partnerId: 0,
      src: RossGellerImage,
      partnerName: "Ross Geller",
      partnerJob: "paleontologist, professor",
      saysThat:
        "Absolutely. I'm fine! Totally fine. I don't know why it's coming out all loud and squeaky, " +
        "'cause really... I'm fine. I'm not saying I wasn't a little surprised to see you guys kissing. " +
        "I mean, at first I was like... But now that I've had time to absorb it; Lovin' this.",
    },
    {
      partnerId: 1,
      src: RachelGreenImage,
      partnerName: "Rachel Green",
      partnerJob: "executive at Ralph Lauren's",
      saysThat:
        "Daddy! Daddy listen to me! It's like all my life everyone's told me, " +
        "'You're a shoe! You're a shoe! You're a shoe!' Well, what if I don't want to be a shoe? " +
        "What if I wanna be a purse or a hat? No I don't want you to buy me a hat, " +
        "I'm saying I am a hat. It's a metaphor Daddy!",
    },
    {
      partnerId: 2,
      src: PhoebeBuffayImage,
      partnerName: "Phoebe Buffay",
      partnerJob: "massage therapist, singer, songwriter",
      saysThat:
        "When I was growing up, I didn't have a normal mom and dad, or a regular family like everybody else, " +
        "and I always knew that something was missing. But now I'm standing here today, " +
        "knowing that I have everything I'm ever gonna need... You are my family.",
    },
  ];

  const [ourPartners] = useState<ListOfWhatTheyHave>(Partners);

  const [currentlyShowedPartnerId, setCurrentlyShowedPartnerId] = useState(
    ourPartners[0].partnerId,
  );

  const [displayedPartner, setDisplayedPartner] = useState(
    ourPartners[currentlyShowedPartnerId],
  );

  const autoplayRef = useRef<any>();

  const settings = {
    maxPartners: 3,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 10000,
  };

  /* Timer */
  useEffect(() => {
    if (settings.autoplay) {
      clearTimeout(autoplayRef.current);
      autoplayRef.current = setTimeout(() => {
        goNext();
      }, settings.autoplaySpeed);
    }
  }, [currentlyShowedPartnerId]);

  /* Next, Previous */
  const goNext = useCallback(() => {
    goTo(
      currentlyShowedPartnerId >= settings.maxPartners - 1
        ? 0
        : currentlyShowedPartnerId + 1,
    );
  }, [currentlyShowedPartnerId]);

  const goPrev = useCallback(() => {
    goTo(
      currentlyShowedPartnerId <= 0
        ? settings.maxPartners - 1
        : currentlyShowedPartnerId - 1,
    );
  }, [currentlyShowedPartnerId]);

  const goTo = useCallback(
    (id) => {
      setDisplayedPartner(ourPartners[id]);
      setCurrentlyShowedPartnerId(id);
      setTimeout(() => {}, settings.speed);
    },
    [currentlyShowedPartnerId],
  );

  /* Partner-selection with indicators */
  const goToPartner = useCallback(
    (chosenId) => {
      goTo(chosenId);
    },
    [currentlyShowedPartnerId],
  );

  return (
    <Root>
      <Prev onClick={() => goPrev()} />
      <Next onClick={() => goNext()} />

      <SectionTitle>What our partners say</SectionTitle>

      <SectionContentRoot>
        <PartnerRoot>
          <FacePictureWrapper>
            <Image src={displayedPartner.src} layout="fill" alt="sorry" />
          </FacePictureWrapper>
          <PartnerName>{displayedPartner.partnerName}</PartnerName>
          <PartnerJob>{displayedPartner.partnerJob}</PartnerJob>
          <Description>{displayedPartner.saysThat}</Description>
        </PartnerRoot>
      </SectionContentRoot>

      <JumpLinkCont>
        <JumpLink onClick={() => goToPartner(0)} />
        <JumpLink onClick={() => goToPartner(1)} />
        <JumpLink onClick={() => goToPartner(2)} />
      </JumpLinkCont>
    </Root>
  );
};

export default PeopleSay;
