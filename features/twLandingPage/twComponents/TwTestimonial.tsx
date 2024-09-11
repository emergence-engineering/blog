import { FC } from "react";
import Image from "next/image";
import { montserrat } from "../../../utils/fonts";

export interface ITwTestimonialProps {
  avatarURL: string;
  name: string;
  title: string;
  quote: string;
}

export const TwTestimonial: FC<ITwTestimonialProps> = ({
  avatarURL,
  name,
  title,
  quote,
}) => {
  return (
    <div className="flex h-auto max-w-[15rem] flex-shrink-0 items-start justify-center rounded bg-neutral-800 pb-4 text-white md:max-w-xl">
      <div className="flex flex-col items-center justify-center md:items-start">
        <div className="flex min-h-[84px] flex-col items-center px-4 py-4 md:flex-row md:gap-3">
          <Image
            className="rounded-full"
            src={avatarURL}
            alt={"Avatar"}
            width={60}
            height={60}
            priority
          />
          <div className="flex flex-col items-center md:items-start">
            <div
              className={`text-center ${montserrat.className} text-lg font-bold`}
            >
              {name}
            </div>
            <div
              className={`text-center ${montserrat.className} text-sm font-light`}
            >
              {title}
            </div>
          </div>
        </div>
        <div className="w-full border-t border-neutral-700 pt-2">
          <p
            className={`text-s max-h-[250px] overflow-y-scroll px-4 ${montserrat.className} font-light md:max-h-[120px] md:overflow-y-scroll`}
          >
            {quote}
          </p>
        </div>
      </div>
    </div>
  );
};

export const StripeTestimonial = () => {
  return (
    <div className="flex h-auto max-w-[15rem] flex-shrink-0 items-start justify-center rounded bg-neutral-800 text-white md:max-w-xl">
      <div className="flex flex-col items-center justify-center md:items-start">
        <div className="flex min-h-[160px] items-center justify-start md:min-h-[92px] md:px-4">
          <a
            href="https://stripe.com"
            className="relative aspect-stripe-tag h-[32px]"
          >
            <Image
              src="/stripe-colored-tag.png"
              alt="Stripe Verified Partner"
              fill
              priority
            />
          </a>
        </div>
        <div className="w-full border-t border-neutral-700 pt-2">
          <p className={`text-s px-4 font-light ${montserrat.className}`}>
            We are proud to be a Stripe Verified Partner, a distinction that
            ensures our clients benefit from the highest standards of security,
            reliability, and compliance in payment processing.
          </p>
        </div>
      </div>
    </div>
  );
};
