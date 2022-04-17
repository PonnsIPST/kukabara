import React from "react";
import Input from "../../UI/Input/Input";

const Feedback = () => {
    return (
        <section>
            <h2>
                Обратная связь
            </h2>

            <div className="row">
                <div className="inputWrapper">
                    <h3>Инпут 1</h3>
                    <Input />
                </div>
            </div>

            <div className="row">
                <div className="inputWrapper">
                    <h3>Инпут 1</h3>
                    <Input />
                </div>
            </div>
            <div className="row">
                <div className="inputWrapper">
                    <h3>Инпут 1</h3>
                    <Input />
                </div>
            </div>
        </section>
    );
};

export default Feedback;