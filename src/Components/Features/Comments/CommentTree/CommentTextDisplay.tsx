import type { FunctionComponent } from "react";
import parse from 'html-react-parser';
import style from './CommentTree.module.scss'


interface ICommentTextProps {
    htmlText:string|undefined;
}
 
const CommentTextDisplay: FunctionComponent<ICommentTextProps> = ({htmlText}) => {
    return ( 
        <div className={style.text_wrapper__text}>
            {typeof htmlText === 'string'?parse(htmlText, { trim: true }): htmlText}
        </div>
     );
}
 
export default CommentTextDisplay;