import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
    return (
        <div className='header'>
            <div className="header__left">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACUCAMAAAAj+tKkAAAAbFBMVEUKZsL///8AXr94oNgAYcAAWL6KrdxnlNMlbMTP3vHz+PwAYcK2y+gFZMHT4fLq8fpYjdDf6vaXtN9+pdoAW78AVb0AT7uFqdvK2O6auOBViM4ATLpAfsu/zulQhM2mweQzdcdJdsdkic670+xWDsOPAAADsklEQVR4nO3b23aiMBQGYAhBEIic4gEHwRnf/x3H1mnrIX/QlZUts9b+L3oF7ddgTjsYRCKYdxjoGga6hoGuYaBrGOgaBrqGga6ZAkqh4zjWQtFwHmMFKv2rj7rD4dAk6SZ/j9ECVCLd1uFXlkmQE7q+YwGK5If3SRxiQthXIFCtx/AuZaTpHzMCquB07ztnQS9EQN0YfGGYaFoeBIrE6AvLXs4CqILaDAxH6iY0A8UW+MLwSNyERqAKdhDYEDehGfg7g8Al8axnBOagi7yjmxiBlo9gmO1pZzwjMO4swGQOwIdZbmZAMI1cgNUMgCKyAOfQSdSAgXU6g2FGpSsILOYwUAc57iUV8S4LAAc0lawk8YoQLLfgSJhQb1MBUKXm9dZI3YBwRZ33JuGKfn8MN01iKB98p5R6PW3bdop+eefrAnqfbV8sN8nypzNnh379jtqCtfQhgmo81VmW1admr99SWJgqHkkh03OCXLyH90z5TX2EgmLOf18ffHsY6BoGfkZJKYTQ+vwjl6+NCQRAJUTaJ23TFWPXbJPhKMUL9W4EFLE5t7Ox0sZc/04Zy2pclt9z5nlaKha9froSiuqDUWNMt7/+xerYGhN9/xu57DvT4nzVpuK5lQdaUZsKwB9Z3LQOqOFk/6rtKj4WaO9Qd+lT2y8ELJ4Dmv98eQHmsntcU14Rn6rJewTqAW9eLynS6S7qD7iJbM13yaqffMy+gEouJnkfGaba0BfQVn+6uXSqEOAJGLfP+c5dZaIq7we4sdSQ77OyT31+gGKq/16ns3YUL8DaUkJ+jL0k6gWIDzGMWa2pga/G1pNnAdxZ+sksgNkf/CmcBTAc8TOeB7DGz3gewHCA0wkFMJu+qoMvlPgGlkWb7Ktke7JfiQ95vQKzXbXZCHnedOrNeoHeMvi8Eh4P+QSWrbi6Oj7eV2yvgXvUjz0C6/72ueWpRbhFKwZ/wPph15Yf8SagIW/B0vDQND7JH9Fc4g3YGgYOlcOOckBDtS9gbdzzCrhT2QXEwMj4oZcVumGJxhlPQHDsrY7oGVMDC/CZF+iVJmpgBIAanZQTA7M9WJ1oVG8gBpZoN67R+yTEwBoNGhrt6ImB8M0GUc0EiKrkDGQgAxnIQAYykIEMZCADGchABjKQgQxkIAMZyEAGMpCBDHQE6rE2pmyvjzFlVZfGnNABv9ibbyhPLwIDDb4NcXfMKnNjLF9RRXeg612/T6KMefmGl99+m08Y6BoGuoaBrmGgaxjoGga6hoGO+Qsgi2Bf/amooAAAAABJRU5ErkJggg==" alt="linkedin-img" />

                <div className="header__search">
                    <SearchIcon />
                    <input type="text" placeholder='Search' />
                </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title='Home' />
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
                <HeaderOption Icon={ChatIcon} title='Messaging' />
                <HeaderOption Icon={NotificationsIcon} title='Notification' />
                <HeaderOption avatar="https://media.licdn.com/dms/image/D4D35AQHjmtJbwNX_dQ/profile-framedphoto-shrink_400_400/0/1696251946147?e=1706533200&v=beta&t=p-LMjKGrM5LD-lGbrBrOkbg4DAM1l-UMUeW12KHGc38" title='Me' />
            </div>
        </div>
    )
};
export default Header