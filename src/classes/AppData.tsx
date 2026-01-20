import documents from '/assets/taskbar/documents.png'
import msn from '/assets/taskbar/msn.png'
import email from '/assets/taskbar/email.png'
import ie from '/assets/taskbar/internet_explorer.png'
import recycleBin from '/assets/taskbar/recycle_bin.webp'
import calculator from '/assets/taskbar/calculator.png'
import paint from '/assets/taskbar/paint.png'
import notepad from '/assets/taskbar/notepad.png'
import { forceUpdateTrigger } from '../App'


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
}

export const homeApp = {id: 'home', displayName: 'Home', icon: msn, clickable: true};
export const portfolioApp = {id: 'portfolio', displayName: 'Portfolio', icon: documents, clickable: true};
export const mailApp = {id: 'mail', displayName: 'Contact', icon: email, clickable: true}
export const recycleApp = {id: 'recycleBin', displayName: 'Recycle Bin', icon: recycleBin, clickable: true};
export const ieApp = {id: 'ie', displayName: 'Internet Explorer', icon: ie};
export const calculatorApp = {id: 'calculator', icon: calculator, displayName: 'Calculator'};
export const paintApp = {id: 'paint', icon: paint, displayName: 'Paint'};
export const msnApp = {id: 'msn', displayName: 'MSN', icon: msn, clickable: false};
export const notepadApp = {id: 'notepad', displayName: 'Notepad', icon: notepad, clickable: false};


class AppData {
    private activeAppsStore: Map<string, TaskbarData> = new Map();
    activeAppId = 'home';

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    constructor(_data?: Partial<AppData>) {
        [homeApp, portfolioApp, mailApp].forEach(item => {
            this.activeAppsStore.set(item.id, item);
        })
    }

    get activeApps(): TaskbarData[] {
        return [...this.activeAppsStore.values()];
    }

    addActiveApp(app: TaskbarData) {
        if (app.clickable) {
            this.activeAppsStore.set(app.id, app);
            this.activeAppId = app.id;
            forceUpdateTrigger();
        }
    }

    removeActiveApp(app: TaskbarData) {
        this.activeAppsStore.delete(app.id);
        forceUpdateTrigger();
    }
}

export const appService = new AppData();