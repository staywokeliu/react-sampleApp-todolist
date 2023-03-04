import React, { useState } from 'react'

const InputFrom = ({ taskList, setTaskList }) => {

    const [inputText, setInputText] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        // inputの情報を出力する
        // console.log(inputText)

        /* タスクを追加 */
        setTaskList([
            ...taskList,
            {
                id: taskList.length,
                text: inputText,
                completed: false
            }
        ]);

        // ...とは、以前の情報を含み、追加

        /* 入力した文字を消す */
        setInputText("");

    };

    const handleChange = (e) => {
        //var inputText = e.target.value;
        setInputText(e.target.value);
        //console.log(inputText);
    }

    return (
        <div className='inputForm'>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={inputText} />
                <button>
                    <i className="fa-light fa-plus"></i>
                </button>
            </form>

        </div>
    )
}

export default InputFrom
