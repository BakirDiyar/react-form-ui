import React, { useState, useRef, useEffect } from "react";
import Formulary from "../../components/form/Formulary";
import "./style.css";
import { useHistory } from "react-router-dom";

export default function Login() {
  const [data, setData] = useState({ email: "", pass: "" });
  const [messageForm, setMessage] = useState();
  const form = useRef(null);
  const hist = useHistory();

  useEffect(() => {});
  function onChange(e) {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  function submit(e) {
    e.preventDefault();
    setMessage("login succesfull");
    setTimeout(() => setMessage("Signing"), 3000);
    setData({ email: "", pass: "" });
    form.current.reset();
    hist.push("/dashboard");
  }

  return (
    <div className="login-app">
      <div className="container container-form pt-4">
        <div
          id="row-form"
          className="row row-form align-items-center justify-content-center pt-6"
        >
          <div className="col col-md-6 col-lg-5 text-center">
            <Formulary
              reff={form}
              data={data}
              onChange={onChange}
              message={messageForm}
              event={submit}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
