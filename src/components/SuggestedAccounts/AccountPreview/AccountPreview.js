import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/031e861b377f05c9f3c19a67d7f53df9~c5_100x100.jpeg?x-expires=1661821200&x-signature=zmmVNLP0hI7fCCBBrJvD4m26tuo%3D"
                    alt=""
                />
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </header>
            <span className={cx('info')}>
                <h4 className={cx('nickname')}>
                    <strong>vietphuongthoa98</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <p className={cx('name')}>Việt Phương Thoa</p>
            </span>
            <span className={cx('submit')}>
                <span className={cx('follower')}>
                    <p className={cx('follower-number')}>7M</p>
                    Follower
                </span>
                <span className={cx('likely')}>
                    <p className={cx('like-number')}>455.5M</p>
                    Thích
                </span>
            </span>
        </div>
    );
}

export default AccountPreview;
