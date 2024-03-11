import { useForm } from "react-hook-form"

type InputType = {
    todo: string;
}

export const TodoForm = () => {
    const { register, handleSubmit, reset } = useForm<InputType>();

    const submitForm = (data: InputType): void => {
        // バリデーション
        console.log(data);

        // inputをリセット
        reset();
    }

    return (
        <form onSubmit={handleSubmit(submitForm)}>
            <div>
                <label htmlFor="todo">Todo</label>
                <input type="text" title="todo" {...register("todo")} placeholder="タスクを入力してください" />
            </div>
            <div>
                <button type="submit">追加</button>
            </div>
        </form>
    )
}
