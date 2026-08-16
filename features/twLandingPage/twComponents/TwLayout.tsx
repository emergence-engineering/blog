import { PropsWithChildren } from "react";

import { EnFooter } from "../../ge/components/EnFooter";
import { EnHeader } from "../../ge/components/EnHeader";
import { useGeSite } from "../../ge/hooks/useGeSite";

/**
 * Layout of the English (software) side: blog, team, references, opensource
 * and friends. Uses the same header, footer and page background as the
 * startup landing pages, so both halves of the site read as one.
 *
 * The header and footer markup is styled by the GE stylesheet, which is
 * scoped to .ge, hence the wrappers; the page content in between keeps its
 * own styling.
 */
export const TwLayout = ({ children }: PropsWithChildren) => {
  useGeSite();
  return (
    <div className="flex w-full flex-col items-center bg-paper">
      {/* not a flex item: the header must stretch full width so its inner
          .wrap lines up with the startup pages, not shrink to its content */}
      <div className="ge w-full">
        <EnHeader />
      </div>
      <div className="flex w-full flex-grow flex-col items-center justify-center bg-paper">
        {children}
      </div>
      <div className="ge w-full">
        <EnFooter />
      </div>
    </div>
  );
};
