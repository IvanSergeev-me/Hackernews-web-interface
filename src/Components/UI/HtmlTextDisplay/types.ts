export type TextShowType = "full" | "short" | "can-be-expanded";

export type RawHTMLTextType = string | undefined;

export interface IHtmlTextDisplayProps {
  htmlText: string | undefined;
  showType?: TextShowType;
}
