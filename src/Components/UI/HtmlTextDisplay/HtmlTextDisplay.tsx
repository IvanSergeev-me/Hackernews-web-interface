import { useState, type FunctionComponent, useMemo } from "react";

import style from "./HtmlTextDisplay.module.scss";
import type { IHtmlTextDisplayProps } from "./types";
import { parseText } from "./parseText";

const HtmlTextDisplay: FunctionComponent<IHtmlTextDisplayProps> = ({
  htmlText,
  showType = "full",
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(() => {
    return showType !== "can-be-expanded";
  });

  const parsedText = useMemo(() => {
    const symbolsLimit = showType === "short" ? 100 : 0;
    return parseText(htmlText, symbolsLimit);
  }, [htmlText, showType]);

  const shouldShowToggleButton = showType === "can-be-expanded";
  const showExpandButton = shouldShowToggleButton && !isExpanded;
  const showCollapseButton = shouldShowToggleButton && isExpanded;

  const handleToggle = () => setIsExpanded((prev) => !prev);

  const wrapperClassName = isExpanded
    ? style.text_expanded
    : style.text_collapsed;

  return (
    <div className={style.text_display_container}>
      <div className={`${style.text_wrapper} ${wrapperClassName}`}>
        <div className={style.text_wrapper__text}>{parsedText}</div>
      </div>
      {showExpandButton && (
        <button
          className={style.text_display_container__button_expand}
          onClick={handleToggle}
          aria-expanded={false}
        >
          Expand
        </button>
      )}

      {showCollapseButton && (
        <button
          className={style.text_display_container__button_collapse}
          onClick={handleToggle}
          aria-expanded={true}
        >
          Collapse
        </button>
      )}
    </div>
  );
};

export default HtmlTextDisplay;
