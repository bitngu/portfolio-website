import { getRandomId } from '../helpers'
import type { TaskbarData } from '../Components/TaskbarItem'
import '../styles/Desktop.scss'

import { Home } from "./Home"
import { Taskbar } from "./Taskbar"
import { useEffect, useState } from 'react'
import documents from '/assets/taskbar/documents.png'
import ie from '/assets/taskbar/internet_explorer.png'

export const Desktop = () => {

    const initialTasks: Map<string, TaskbarData> = new Map();
    initialTasks.set(getRandomId(), {content: 'Home', icon: documents, active: true, open: true})
    initialTasks.set(getRandomId(), {content: 'Portfolio', icon: documents, active: false, open: true})
    initialTasks.set(getRandomId(), {content: 'Contact', icon: documents, active: false, open: true})

    const [activeTasks, setActiveTasks] = useState<Map<string, TaskbarData>>(new Map(initialTasks));

    return (
        <section id='desktop'>
            <Home />
            <Taskbar />
        </section>
    )
}

