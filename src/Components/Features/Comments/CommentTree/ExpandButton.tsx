import type { FunctionComponent } from "react";
import style from "./CommentTree.module.scss";

interface ExpandButtonProps {
  onButtonClick: () => void;
  text: string;
}

const ExpandButton: FunctionComponent<ExpandButtonProps> = ({
  onButtonClick,
  text,
}) => {
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();
    onButtonClick();
  };
  return (
    <button className={style.button_expand} onClick={handleClick}>
      {text}
    </button>
  );
};

export default ExpandButton;
