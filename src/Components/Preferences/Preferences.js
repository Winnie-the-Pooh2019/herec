import React, {useState, createRef} from 'react';
import {
    Container,
    ListGroup,
    Button,
} from 'react-bootstrap';
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {TypeAnimation} from "react-type-animation";
import {MDBFooter} from 'mdb-react-ui-kit';

function Preferences() {
    const [items, setItems] = useState(() => []);

    const message = [
        {
            id: 1,
            text: 'Солнышко,',
            nodeRef: createRef(null),
        },
        {
            id: 2,
            text: 'люблю',
            nodeRef: createRef(null),
        },
        {
            id: 3,
            text: 'тебя',
            nodeRef: createRef(null),
        }
    ]
    return (
        <div>
            <Container style={{marginTop: '2rem'}}>
                <TypeAnimation
                    sequence={[
                        'Тыкни', // Types 'One'
                        1000, // Waits 1s
                        'Нажми на Button',
                        1000,
                        'Нет, не так',// Deletes 'One' and types 'Two'
                        2000, // Waits 2s
                        'Нажми на кнопку получишь результат👾',// Types 'Three' without deleting 'Two'
                        () => {
                            console.log('Done typing!'); // Place optional callbacks anywhere in the array
                        }
                    ]}
                    wrapper="div"
                    cursor={true}
                    repeat={0}
                    style={{alignContent: "center"}}
                />
                <ListGroup style={{marginBottom: '1rem'}}>
                    <TransitionGroup className="todo-list">
                        {items.map(({id, text, nodeRef}) => (
                            <CSSTransition
                                key={id}
                                nodeRef={nodeRef}
                                timeout={500}
                                classNames="item"
                            >
                                <ListGroup.Item ref={nodeRef}>
                                    <Button
                                        className="remove-btn"
                                        variant="danger"
                                        size="sm"
                                        onClick={() =>
                                            setItems((items) =>
                                                items.filter((item) => item.id !== id)
                                            )
                                        }
                                    >
                                        &times;
                                    </Button>
                                    {text}
                                </ListGroup.Item>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
                <Button
                    onClick={() => {
                        // const text = prompt('Enter some text');
                        console.log(items.length)
                        if (items.length !== message.length) {
                            setItems((items) => [
                                ...items,
                                message[items.length]
                            ]);
                        }
                    }}
                >
                    Далее
                </Button>
            </Container>

            <MDBFooter bgColor='light' className='text-center text-lg-left'>
                <div className='text-center p-3' style={{backgroundColor: 'rgba(255, 255, 255)'}}>
                    &copy; {new Date().getFullYear()} Copyright:{' '}
                    <a className='text-dark' href='https://mdbootstrap.com/'>
                        <TypeAnimation
                            sequence={[
                                'От Ивана', // Types 'One'
                                1000, // Waits 1s
                                'От Еванушки🙃', // Deletes 'One' and types 'Two'
                                2000, // Waits 2s
                                '❤',
                                5000,// Types 'Three' without deleting 'Two'
                                () => {
                                    console.log('Done typing!'); // Place optional callbacks anywhere in the array
                                }
                            ]}
                            wrapper="div"
                            cursor={true}
                            repeat={Infinity}
                            style={{alignContent: "center"}}
                        />
                    </a>
                </div>
            </MDBFooter>
        </div>
    );
}

export default Preferences;