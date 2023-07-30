import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Form = ({ setFormData }) => {
    const [text, setText] = useState("");
    const [city, setCity] = useState("Select Your City");
    const [lang, setLang] = useState([]);

    const handleLang = (e) => {
        let langValue = e.target.value;
        if (e.target.checked) {
            // lang.push(langValue);
            setLang((prevLang) => [...prevLang, langValue]);
        } else {
            setLang((prevLang) => prevLang.filter((lang) => lang !== langValue));
        }
    }
    const formData = {
        input: text,
        location: city,
        lang: lang.join(", ")
    }
    const submitData = (e) => {
        // e.preventDefault();
        setFormData(formData);
        // console.log(formData);
    }
    return (
        <div className='form-data'>

            <form >

                <label htmlFor='name'>Name: </label>
                <input onChange={(e) => setText(e.target.value)} id='name' type='text' value={text} required />
                <br />
                <label htmlFor='city'>City: </label>
                <select id='city' value={city} onChange={(e) => setCity(e.target.value)}>
                    <option value={"Select Your City"}>Select Your City</option>
                    <option value={"Chennai"}>Chennai</option>
                    <option value={"Bangalore"}>Bangalore</option>
                    <option value={"Gurgaon"}>Gurgaon</option>
                </select>
                <br />
                <label htmlFor='lang'>Language Known: </label>
                Hindi:<input name='lang' type='checkbox' value={"Hindi"} onChange={handleLang} />
                English:<input name='lang' type='checkbox' value={"English"} onChange={handleLang} />
                Telgu:<input name='lang' type='checkbox' value={"Telgu"} onChange={handleLang} />
                Punjabi:<input name='lang' type='checkbox' value={"Punjabi"} onChange={handleLang} />
                <br />
                <Link to="/display">
                    <button onClick={submitData}>Submit</button>
                </Link>
            </form>

        </div>
    )
};

export default Form;