// import React, {useState} from "react";
// import styled from "styled-components";
// import './App.css'
// import { TypeAnimation } from 'react-type-animation';
//
// const App = () => {
//     const [cardList, setCardList] = useState([
//         {id: 1, order: 1, text: 'card 1'},
//         {id: 2, order: 2, text: 'card 2'},
//         {id: 3, order: 3, text: 'card 3'},
//         {id: 4, order: 4, text: 'card 4'}
//     ])
//
//     const [currentCard, setCurrentCard] = useState(null)
//
//     function dragStartHandler(e, card) {
//         console.log("drag", card)
//         setCurrentCard(card)
//     }
//     function dragEndHandler(e) {
//         e.target.style.background = 'white'
//     }
//
//     function dragOverHandler(e) {
//         e.preventDefault()
//         e.target.style.background = 'lightgray'
//     }
//
//     function dropHandler(e, card) {
//         e.preventDefault()
//         console.log('drop', card)
//         setCardList(cardList.map(c => {
//             if (c.id === card.id)
//                 return {...c, order: currentCard.order}
//
//             if (c.id === currentCard.id)
//                 return {...c, order: card.order}
//
//             return c
//         }))
//
//         e.target.style.background = "white"
//     }
//
//     const sortCards = (a, b) => {
//         if (a.order > b.order)
//             return 1
//         else
//             return -1
//     }
//
//     return (
//         // <Container>
//         //     <List>
//         //         {cardList.sort(sortCards).map(card =>
//         //                 <Card
//         //                     onDragStart={(e) => dragStartHandler(e, card)}
//         //                     onDragLeave={(e) => dragEndHandler(e)}
//         //                     onDragEnd={(e) => dragEndHandler(e)}
//         //                     onDragOver={(e) => dragOverHandler(e)}
//         //                     onDrop={(e) => dropHandler(e, card)}
//         //                     draggable={"true"}
//         //                     className={'card'}>
//         //                     {card.text}
//         //                 </Card>
//         //         )}
//         //     </List>
//         // </Container>
//
//         <TypeAnimation
//             sequence={[
//                 'Надя', // Types 'One'
//                 1000, // Waits 1s
//                 'Надечка',
//                 1000,
//                 'Нет, не так',// Deletes 'One' and types 'Two'
//                 2000, // Waits 2s
//                 'Я тебя люблю', // Types 'Three' without deleting 'Two'
//                 () => {
//                     console.log('Done typing!'); // Place optional callbacks anywhere in the array
//                 }
//             ]}
//             wrapper="div"
//             cursor={true}
//             repeat={0}
//             style={{ fontSize: '2em' }}
//         />
//
//         // <div className='app'>
//         //     {cardList.sort(sortCards).map(card =>
//         //             <div>
//         //                 <div
//         //                     onDragStart={(e) => dragStartHandler(e, card)}
//         //                     onDragLeave={(e) => dragEndHandler(e)}
//         //                     onDragEnd={(e) => dragEndHandler(e)}
//         //                     onDragOver={(e) => dragOverHandler(e)}
//         //                     onDrop={(e) => dropHandler(e, card)}
//         //                     draggable={"true"}
//         //                     className={'card'}>
//         //                     {card.text}
//         //                 </div>
//         //                 <br/>
//         //             </div>
//         //     )}
//         // </div>
//     )
// }
//
// export default App






import React, { useState } from 'react';
import './App.css';
import {BrowserRouter, HashRouter, Link, Route, Router, Routes} from 'react-router-dom';
import Login from './Components/Login/Login';
import Preferences from './Components/Preferences/Preferences';
import useToken from "./Components/useToken";

function SmallApp() {
    const { token, setToken } = useToken();

    if(!token) {
        return <Login setToken={setToken} />
    }

    return (
        <div className="wrapper">
            {/*<h1>Application</h1>*/}
            <BrowserRouter>
                <Routes>
                    <Route path="/herec" element={<Preferences />}>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
        // <div>
        //     <div>
        //         <Link to="/">Home</Link>
        //         <Link to="/about">About</Link>
        //         <Link to="/users">Users</Link>
        //     </div>
        //     <HashRouter>
        //         <Routes>
        //             <Route path="/about" element={<About/>}>
        //             </Route>
        //             <Route path="/users" element={<Users/>}>
        //             </Route>
        //             <Route path="/" element={<Home/>}>
        //             </Route>
        //         </Routes>
        //     </HashRouter>
        // </div>
    );
}

function App() {

    return (
        <div>
            <SmallApp/>
        </div>
    )
}

export default App;