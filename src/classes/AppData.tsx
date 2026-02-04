import documents from '/assets/taskbar/documents.png'
import msn from '/assets/taskbar/msn.png'
import email from '/assets/taskbar/email.png'
import ie from '/assets/taskbar/internet_explorer.png'
import recycleBin from '/assets/taskbar/recycle_bin.webp'
import calculator from '/assets/taskbar/calculator.png'
import paint from '/assets/taskbar/paint.png'
import notepad from '/assets/taskbar/notepad.png'
import chess from '/assets/taskbar/chess.png'
import minesweeper from '/assets/taskbar/minesweeper.png'
import wmp from '/assets/taskbar/wmp.png'


import { forceUpdateTrigger } from '../App'
import { WindowsMediaPlayer } from '../Views/WindowsMediaPlayer'
import { AboutMe } from '../Views/AboutMe'


export interface TaskbarData {
    id: string;
    displayName: string;
    icon: string;
    subtasks?: TaskbarData[];
    hoverText?: string;
    noHover?: boolean;
    hideName?: boolean;
    hideIcon?: boolean;
    clickable?: boolean;
    showWindowMenu?: boolean;
    minimize?: boolean;
    windowApp?: React.ReactNode;
    windowPos?: {
        top: number;
        left: number;
    }
}

export const homeApp = {id: 'home', displayName: 'Home', icon: msn, clickable: true, showWindowMenu: true, windowApp: <AboutMe/>};
export const portfolioApp = {id: 'portfolio', displayName: 'Portfolio', icon: documents, clickable: true};
export const mailApp = {id: 'mail', displayName: 'Contact', icon: email, clickable: true}
export const recycleApp = {id: 'recycleBin', displayName: 'Recycle Bin', icon: recycleBin, clickable: true};
export const ieApp = {id: 'ie', displayName: 'Internet Explorer', icon: ie};
export const calculatorApp = {id: 'calculator', icon: calculator, displayName: 'Calculator'};
export const paintApp = {id: 'paint', icon: paint, displayName: 'Paint'};
export const msnApp = {id: 'msn', displayName: 'MSN', icon: msn, clickable: false};
export const notepadApp = {id: 'notepad', displayName: 'Notepad', icon: notepad, clickable: false};
export const chessApp = {id: 'chess', displayName: 'Chess', icon: chess, clickable: false};
export const minesweeperApp = {id: 'minesweeper', displayName: 'Minesweeper', icon: minesweeper, clickable: false};
export const windowsMediaPlayer = {id: 'windows-media-player', displayName: 'Windows Media Player', icon: wmp, clickable: true, windowApp: <WindowsMediaPlayer/>};


class AppData {
    private activeAppsStore: Map<string, TaskbarData> = new Map();
    activeAppId = '';

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    constructor(_data?: Partial<AppData>) {
        // activeAppId = 'windows-media-player';
        // [windowsMediaPlayer, portfolioApp, mailApp].forEach(item => {
        //     this.activeAppsStore.set(item.id, item);
        // })
    }

    get activeApps(): TaskbarData[] {
        return [...this.activeAppsStore.values()];
    }

    addActiveApp(app: TaskbarData) {
        if (app.clickable) {
            this.activeAppsStore.set(app.id, app);
            this.activeAppId = app.id;
            app.minimize = false;
            forceUpdateTrigger();
        }
    }

    minimizeApp(app: TaskbarData) {
        appService.activeAppId = '';
        app.minimize = true;
        forceUpdateTrigger();
    }


    removeActiveApp(app: TaskbarData) {
        this.activeAppsStore.delete(app.id);
        app.windowPos = undefined;
        app.minimize = false;
        forceUpdateTrigger();
    }
}

export const appService = new AppData();