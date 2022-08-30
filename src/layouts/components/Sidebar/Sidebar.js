import classNames from 'classnames/bind';
import configs from '~/configs';
import Menu, { MenuItem } from './Menu';
import styles from './Sidebar.module.scss';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserActiveGroupIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For You"
                    to={configs.routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                />
                <MenuItem
                    title="Following"
                    to={configs.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserActiveGroupIcon />}
                />
                <MenuItem title="Live" to={configs.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>
            <SuggestedAccounts label="Tài khoản được đề xuất" />
            <SuggestedAccounts label="Tài khoản đang follow" />
        </aside>
    );
}

export default Sidebar;
