import React, {useState} from 'react'

function Form2(props) {
    const [text, setText] = useState('')

    const onSubmit = (event) => {
        event.preventDefault();
        props.onSave({
            id: new Date().getTime(),
            text: text
        });
        setText('');
    }

    return (
        <div>
            <form>
                <input type="text" value={text} onChange={({target}) => setText(target.value)} />
                <button onClick={onSubmit}>Add</button>
            </form>
        </div>
    )
}

export default Form2
