import React, {useState} from 'react';
import PropTypes from 'prop-types';
import toast, {Toaster} from 'react-hot-toast';
import "bootstrap/dist/css/bootstrap.min.css"

async function loginUser(credentials) {
    return {token: 'test123'}
}

export default function Login({setToken}) {
    const [username, setUserName] = useState();

    const handleSubmit = async e => {

        e.preventDefault();

        if (!(/^Надя|Надежда$/ig).test(username)) {
            toast("Неверное имя🤪")

            return
        }

        const token = await loginUser({
            username
        });
        setToken(token);
    }

    return (
        <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={handleSubmit}>
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Кто ты?</h3>
                    <div className="form-group mt-3">
                        <label>Напиши-ка свое имя</label>
                        <input
                            className="form-control mt-1"
                            placeholder=""
                            onChange={e => setUserName(e.target.value)}
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            Продолжить
                        </button>
                    </div>
                </div>
            </form>
            <Toaster/>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}