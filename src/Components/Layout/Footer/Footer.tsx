import React from 'react';
import style from './Footer.module.scss';


const Footer: React.FunctionComponent = () => {
    return (
        <footer className={style.footer_container}>
            <div className={style.footer_container__top_section}>
                <div className={style.top_section__left_part}>
                    <h3>Information</h3>
                    <ul className={style.information_list}>
                        <li className={style.information_list__item}>
                            <a className={style.item_link} href='https://news.ycombinator.com/'>Hackernews site</a>
                        </li>
                        <li className={style.information_list__item}>
                            <a className={style.item_link} href='https://github.com/HackerNews/API?tab=readme-ov-file'>Hackernews GitHub</a>
                        </li>
                    </ul>
                </div>
                <div className={style.top_section__right_part}>
                    <h3>Contacts</h3>
                    <ul className={style.information_list}>
                        <li className={style.information_list__item}>
                            <span className={style.item_label}>Email:</span>
                            <span className={style.item_text}>inovovanya@gmai.com</span>
                        </li>
                        <li className={style.information_list__item}>
                            <span className={style.item_label}>GitHub:</span>
                            <a className={style.item_link} href='https://github.com/IvanSergeev-me'>visit</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={style.footer_container__bottom_section}>
                <p>Made by Ivan Sergeev. 2025</p>
            </div>
        </footer>
    );
}

export default Footer;