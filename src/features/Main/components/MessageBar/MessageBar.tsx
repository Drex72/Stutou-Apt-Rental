import React from 'react'
import './MessageBarStyles.scss'

const MessageBar = () => {
    return (
        <div>
            <>
                <input type="checkbox" id="check" />
                <div className="window">
                    <label className="top-bar" htmlFor="check">
                        <div className="kapsayici">
                            <div className="profile">
                                <img
                                    className="pp"
                                    src="https://i.pinimg.com/564x/58/ac/2e/58ac2e722527319666603da8a7570f53.jpg"
                                />
                                <div className="online" />
                                <a>Messages</a>
                            </div>
                            {/**/}
                            <div className="icons">
                                <p className="symbol">❮</p>
                            </div>
                        </div>
                    </label>
                    <input className="search-bar" type="text" />
                    <a
                        className="connect"
                        href="https://www.linkedin.com/in/devrimos/"
                        target="_blank"
                    >
                        Make new connections
                    </a>
                </div>
            </>

        </div>
    )
}

export default MessageBar