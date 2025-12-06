import { useState } from "react";
import styles from "./App.module.css";

export function App() {
	const [newTask, setNewTask] = useState<string>("");
	const [tasks, setTasks] = useState<string[]>([]);

	function handleAddTask() {
		const taskExists = tasks.includes(newTask);

		if (taskExists || newTask === "") {
			alert("Task already exists or is empty.");
			return;
		}

		setTasks([...tasks, newTask]);
	}

	function handleDeleteTask(deleteTask: string) {
		setTasks(tasks.filter((task) => task !== deleteTask));
	}

	return (
		<div className={styles.container}>
			<header>To do list</header>
			<section className={styles.newTask}>
				<input
					type="text"
					placeholder="Add a new task"
					value={newTask}
					onChange={(e) => setNewTask(e.target.value)}
				/>
				<button type="button" onClick={handleAddTask}>
					Add
				</button>
			</section>
			<main>
				{tasks.map((task) => (
					<div key={task}>
						{task}
						<button
							type="button"
							className={styles.deleteButton}
							onClick={() => handleDeleteTask(task)}
						>
							Delete
						</button>
					</div>
				))}
			</main>
			<footer>Footer</footer>
		</div>
	);
}
