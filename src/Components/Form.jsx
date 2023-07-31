import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Form = ({ setFormData }) => {
    const [text, setText] = useState("");
    const [city, setCity] = useState("Select Your City");
    const [lang, setLang] = useState([]);

    const handleLang = (e) => {
        let options = e.target.options;

        for (let i = 0; i < options.length; i++) {
            let langValue = options[i].value;
            if (options[i].selected) {
                setLang((prevLang) => [...prevLang, langValue]);
            } else {
                setLang((prevLang) => prevLang.filter((lang) => lang !== langValue));
            }
            setLang((prevLang) => [...new Set(prevLang)]);
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
                {/* <label htmlFor='lang'>Language Known: </label>
                Hindi:<input name='lang' type='checkbox' value={"Hindi"} onChange={handleLang} />
                English:<input name='lang' type='checkbox' value={"English"} onChange={handleLang} />
                Telgu:<input name='lang' type='checkbox' value={"Telgu"} onChange={handleLang} />
                Punjabi:<input name='lang' type='checkbox' value={"Punjabi"} onChange={handleLang} />
                <br /> */}
                <label for="lang">Language Known: </label>
                <select name="lang" id="lang" onChange={handleLang} multiple>
                    <option value={"Hindi"}>Hindi</option>
                    <option value={"English"}>English</option>
                    <option value={"Telgu"}>Telgu</option>
                    <option value={"Punjabi"}>Punjabi</option>
                </select>
                <Link to="/display">
                    <button onClick={submitData}>Submit</button>
                </Link>
            </form>

        </div>
    )
};

export default Form;