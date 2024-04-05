import React, {useState} from 'react'


const App = () => {
    const [value, setValue] = useState("")
    const [error, setError] = useState("")
    const surpriseOptions = ['Who invented Nvidia?', 'who s the first create the hamburger', 'the latest trend in quantium']

    const surprise = () => {
        const randomValue = surpriseOptions[Math.floor(Math.random() * surpriseOptions.length)]
        setValue(randomValue)
    }
    const [chatHistory, setChatHistory] = useState([])

    const getResponse = async () => {

        if (!value) {
            setError("Error! Please ask a question!")
            setValue(null)
            return
        }
        try {
            const options = {
                method: 'POST',
                body: JSON.stringify({
                    history: chatHistory,
                    message: value
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            const response = await fetch('http://localhost:8000/gemini', options)
            const data = await response.text()
            console.log(data)
            setChatHistory((oldChatHistory) => [
                ...oldChatHistory,
                {
                    role: "user",
                    parts: [{ text: value }],
                }, {
                    role: "model",
                    parts: [{ text: data }],
                },
            ])

            setValue("")
        } catch (error) {
            console.error(error)
            setError("Something went wrong!  please try again later!")
        }
    }

    const clear = ()=>{
        setValue("")
        setError("")
        setChatHistory([])
    }
    return (
        <div className="app">
            <section className="search-section">
                <p>What do you want to know?
                    <button className="surprise" onClick={surprise} disabled={!chatHistory}> surprise me</button>
                </p>
                <div className="input-container">
                    <input
                        value={value}
                        placeholder={"when is chrismas? ..."}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    {!error && <button onClick={getResponse}>Ask me</button>}
                    {error && <button onClick={clear}>Clear</button>}
                </div>
                {error && <p>{error}</p>}
                <div className="search-result">
                    {chatHistory.map((chatItem, _index) => <div key={_index}>
                            <p className='answer'> { chatItem.role } : { chatItem.parts[0].text }</p>
                        </div>
                    )}

                </div>
            </section>

        </div>
    )
}

export default App
