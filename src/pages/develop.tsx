import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import ButtonLg from "../components/units/Buttons/ButtonLg";
import { themeSliceActions } from "../store/theme/slice";
import axios from "axios";
import wrapper from "../store";
import { todosSliceActions } from "../store/todos/slice";

let count = 1;
export const getServerSideProps = wrapper.getServerSideProps(
	store => async () => {
		// debugger;
		const { data } = await axios.get(`https://jsonplaceholder.typicode.com/todos/${count++}`);

		// const hashedArray = data.reduce((hash, curr) => {
		// 	hash[curr.id] = curr;
		// 	return hash;
		// }, {});

		// console.log(hashedArray);

		store.dispatch(
			todosSliceActions.addTodo(data)
		);
	}
);


export default function Develop() {
	const { dark } = useSelector(state => state.theme);
	const { todos } = useSelector(state => state.todos);

	const dispatch = useDispatch();

	return (
		<>
			{Object.values(todos).slice(0, 10).map(todo => <div key={todo.id}>
				<p>{todo.title}</p>
			</div>)}
			<ButtonLg
				dark={dark}
				onClick={() => dispatch(themeSliceActions.toggleTheme())}
			>TOGGLE</ButtonLg>
			<Link href={"/develop"}>here</Link>
		</>
	);
}


