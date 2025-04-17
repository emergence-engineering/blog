import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import Image, { StaticImageData } from "next/image";

import theme, { screenSizes } from "../../../utils/theme";
import AndrewPhoto from "../../../public/partners/andrew.jpeg";
import BenPhoto from "../../../public/partners/ben.jpeg";
import SandeepPhoto from "../../../public/partners/sandeep.jpeg";
import OlegPhoto from "../../../public/partners/oleg.jpeg";
import AchillesPhoto from "../../../public/partners/achilles.png";
import MarcPhoto from "../../../public/partners/marc.jpeg";
import GregPhoto from "../../../public/partners/greg.jpeg";
import { clickable } from "../../../utils/mixins";
import Prev from "../../../public/arrow-prev.svg";
import Next from "../../../public/arrow-next.svg";
import { openSans, oswald, ptSans } from "../../../utils/fonts";

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 20rem;
  background-color: ${theme.color.gray11};
  width: 100%;
  padding: 4rem;

  @media screen and (max-width: ${screenSizes.medium}px) {
    padding: 1rem;
  }
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
  border: 1px solid ${theme.color.gray6};
  border-radius: 0.2rem 0.2rem;

  @media screen and (max-width: ${screenSizes.medium}px) {
    flex-direction: column;
    width: 85%;
    overflow-scrolling: touch;
  }
`;

const PartnerRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2rem 0;
  row-gap: 1rem;
  border-radius: 5px;

  min-height: 24rem;
  flex-shrink: 0;
  background: ${theme.color.gray11};
  scroll-snap-align: start;
`;

export const FacePictureWrapper = styled.div`
  position: relative;
  display: block;
  width: 5rem;
  height: 5rem;

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

  font-weight: 800;
  font-size: 1.35rem;
  color: ${theme.color.fontWhite};
  text-align: center;
`;

const PartnerJob = styled.div`
  font-size: 1.05rem;
  color: ${theme.color.gray1};
  font-style: italic;
`;

const Description = styled.div`
  color: ${theme.color.gray1};
  text-align: center;
  padding: 0 4rem;
  margin-top: 1rem;
  min-height: 6rem;
`;

/* Prev and Next buttons */
const PrevContainer = styled.div`
  width: 1rem;
  height: 2rem;
  position: absolute;
  justify-self: center;
  cursor: pointer;
  align-self: flex-start;

  @media screen and (max-width: ${screenSizes.medium}px) {
    display: none;
  }
`;

const NextContainer = styled.div`
  width: 1rem;
  height: 2rem;
  position: absolute;
  justify-self: center;
  cursor: pointer;
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

const JumpLink = styled.div<{ active?: boolean }>`
  width: 1rem;
  height: 1rem;
  background-color: ${({ active }) =>
    active ? theme.color.tertiary5 : theme.color.tertiary};
  border-radius: 100%;
  ${clickable};
  :hover {
    background-color: ${theme.color.tertiary2};
    transition: background-color 300ms ease;
  }
`;

interface Partner {
  partnerId: number;
  src: StaticImageData | undefined;
  partnerName: string;
  partnerJob: string;
  saysThat: string;
}

/* Partners, settings and HTML */
const References: FunctionComponent = () => {
  const Partners = [
    {
      partnerId: 0,
      src: GregPhoto,
      partnerName: "Greg Detre",
      partnerJob: "Consultant, Chief Data Scientist & CTO",
      saysThat:
        "I have chosen to work with Emergence Engineering on every one of my last 3 major projects. They are incredibly smart, you can trust them, and they’re great to work with. I cannot recommend them highly enough.",
    },
    {
      partnerId: 1,
      src: MarcPhoto,
      partnerName: "Marc Zao-Sanders",
      partnerJob: "CEO at Filtered",
      saysThat:
        "We've worked with Emergence for three years and it's been wonderful. They helped us build a product from a basic prototype to a full enterprise SaaS offering, with speed, quality and a sense of fun.",
    },
    {
      partnerId: 2,
      src: BenPhoto,
      partnerName: "Ben Whately",
      partnerJob: "Entrepreneur & Startup Investor, Speaker",
      saysThat: `Emergence are exceptional. For any new projects and products they are my go-to dev house. They work fast and to super high quality They have the rare ability to understand the needs of early stage product discovery as well as the ability to build robust, high quality applications that will scale.`,
    },
    {
      partnerId: 3,
      src: AndrewPhoto,
      partnerName: "Andrew Milich",
      partnerJob: "co-founder & CEO at Skiff",
      saysThat: `
      Emergence Engineering was a fantastic partner for us to collaborate with on our collaborative editor and workspace.
      We had a great experience working on tough issues, from code editing to image embedding.
      `,
    },
    {
      partnerId: 4,
      src: OlegPhoto,
      partnerName: "Oleg Zaremba",
      partnerJob: "CTO at Axdraft",
      saysThat: `Emergence Engineering helped our team move faster during a crucial moment of our product development. Their ProseMirror expertise paired with great communication skills resulted in a great working realtionship.`,
    },
    {
      partnerId: 5,
      src: SandeepPhoto,
      partnerName: "Sandeep Kamath",
      partnerJob: "founder at Swaralink",
      saysThat: `The Emergence Engineering Team was very helpful in developing a Node.js script for a manufacturing test system for a Bluetooth product`,
    },
    {
      partnerId: 6,
      src: AchillesPhoto,
      partnerName: "Achilles Schmelzer",
      partnerJob: "CTO at relay.cc",
      saysThat:
        "Working with Emergence was awesome! I was thoroughly impressed with the level of technical skill and communication of their engineers. Aaron and Gergo were able to deliver high-quality work on-time even in the absence of strong specifications and direction and Viktor did a great job of staying in the loop and filling in as a communicator whenever necessary.",
    },
  ];

  const [ourPartners] = useState<Partner[]>(Partners);

  const [currentlyShowedPartnerId, setCurrentlyShowedPartnerId] = useState(
    ourPartners[0].partnerId,
  );

  const [displayedPartner, setDisplayedPartner] = useState(
    ourPartners[currentlyShowedPartnerId],
  );

  const autoplayRef = useRef<any>();

  const settings = {
    maxPartners: 7,
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
    (id: number) => {
      setDisplayedPartner(ourPartners[id]);
      setCurrentlyShowedPartnerId(id);
      setTimeout(() => {}, settings.speed);
    },
    [currentlyShowedPartnerId],
  );

  /* Partner-selection with indicators */
  const goToPartner = useCallback(
    (chosenId: number) => {
      goTo(chosenId);
    },
    [currentlyShowedPartnerId],
  );

  return (
    <Root>
      <PrevContainer onClick={() => goPrev()}>
        <Image
          src={Prev.src}
          alt="prev"
          width={16}
          height={32}
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </PrevContainer>
      <NextContainer onClick={() => goNext()}>
        <Image
          src={Next.src}
          alt="prev"
          width={16}
          height={32}
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </NextContainer>

      {/*<SectionTitle>Clients said about us</SectionTitle>*/}

      <SectionContentRoot>
        <PartnerRoot>
          {displayedPartner.src && (
            <FacePictureWrapper>
              <Image
                src={displayedPartner.src}
                alt="sorry"
                width={80}
                height={80}
                sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
                placeholder="blur"
              />
            </FacePictureWrapper>
          )}
          <PartnerName className={`${ptSans.className}`}>
            {displayedPartner.partnerName}
          </PartnerName>
          <PartnerJob className={`${oswald.className}`}>
            {displayedPartner.partnerJob}
          </PartnerJob>
          <Description className={`${openSans.className}`}>
            {displayedPartner.saysThat}
          </Description>
        </PartnerRoot>
      </SectionContentRoot>

      <JumpLinkCont>
        {Partners.map(({ partnerId }) => (
          <JumpLink
            key={partnerId}
            active={currentlyShowedPartnerId === partnerId}
            onClick={() => goToPartner(partnerId)}
          />
        ))}
      </JumpLinkCont>
    </Root>
  );
};

export default References;
