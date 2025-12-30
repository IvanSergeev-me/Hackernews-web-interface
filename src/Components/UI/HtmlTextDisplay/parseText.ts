import parse from "html-react-parser";
import type { RawHTMLTextType } from "./types";

export const parseText = (htmlText: RawHTMLTextType, sliceSymbols?: number) => {
  let parsedText =
    typeof htmlText === "string" ? parse(htmlText, { trim: true }) : htmlText;
  if (sliceSymbols && sliceSymbols > 0) {
    switch (typeof parsedText) {
      case "string": {
        parsedText = parsedText.slice(0, sliceSymbols);
        break;
      }
      default: {
        break;
      }
    }
  }

  return parsedText;
};
