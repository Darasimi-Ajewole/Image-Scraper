import React, { useState, useMemo } from "react";
import debounce from 'lodash.debounce';
import { urlChecker } from '../utils/validate';
import { Input, Label } from 'semantic-ui-react';
import 'semantic-ui-css/components/input.min.css';
import 'semantic-ui-css/components/form.min.css';
import 'semantic-ui-css/components/icon.min.css';
import 'semantic-ui-css/components/button.min.css';
import 'semantic-ui-css/components/label.min.css';


const Form = ({ handleSubmit, history }) => {
  const [searchEntry, setSearchEntry] = useState("");
  const [wrongEntry, setWrongEntry] = useState(true); 

  const validateUrl = url => {
    const correctInput = urlChecker(url);
    const errMsg = correctInput ? null: 'Enter a valid url';
    
    setWrongEntry(errMsg);
    return correctInput
  }

  const debounceCallbacks = useMemo(() => debounce(validateUrl, 100), []);

  // update search text state
  const onSearchChange = e =>  {
    setSearchEntry(e.target.value);
    debounceCallbacks(e.target.value);
  }

  const onSubmit = (e) => {
    if (!validateUrl(searchEntry)) return null
  
    e.preventDefault();
    let url = appendHttp(searchEntry)
    setSearchEntry(url);
    handleSubmit(history, url)
  }

  return (
    <>
    <form
      className="search-form"
      onSubmit={onSubmit}
    >
      <Input
        type="text"
        name="search"
        placeholder="Enter URL"
        onChange={onSearchChange}
        value={searchEntry}
        label={<ScrapeButton wrongEntry={wrongEntry} />}
        labelPosition='right'
        error={Boolean(searchEntry.trim() && wrongEntry)}
      />
    </form>
    {
      searchEntry.trim() && wrongEntry && 
      <Label basic color='red' pointing>
        { wrongEntry }
      </Label>
    }
    </>
  );
};


const ScrapeButton = ({wrongEntry}) => (
  <button
    type="submit"
    className="active"
    disabled={wrongEntry}
  >
  {
    <svg x="0px" y="0px" viewBox="0 0 297 297" height="32pt" width="32pt">
      <g>
        <g id="XMLID_29_">
          <g>
            <path style={{ fill: "#A38671" }} d="M279.075,17.918c5.31,5.31,8.12,12.65,7.7,20.15c-0.41,7.46-3.98,14.43-9.8,19.12l-90.36,66.83     c-1.76-2.71-3.79-5.23-6.1-7.54s-4.83-4.33-7.53-6.1l66.83-90.35c4.69-5.83,11.65-9.4,19.12-9.81     C266.415,9.808,273.775,12.608,279.075,17.918z M267.865,48.028c5.21-5.21,5.21-13.68,0-18.89c-2.53-2.53-5.88-3.92-9.45-3.92     s-6.93,1.39-9.45,3.92c-5.21,5.21-5.21,13.68,0,18.89c2.61,2.61,6.03,3.91,9.45,3.91     C261.835,51.938,265.255,50.638,267.865,48.028z"/>
            <path style={{ fill: "#BDC3C7" }} d="M173.325,123.678c13.3,13.3,15.2,35.92,5.37,63.7c-10.6,29.93-33.64,63.5-66.75,97.31     l-99.64-99.64c33.81-33.11,67.38-56.15,97.31-66.75C137.395,108.468,160.015,110.378,173.325,123.678z"/>
            <path d="M286.275,10.718c7.35,7.36,11.24,17.53,10.67,27.91c-0.58,10.39-5.57,20.07-13.69,26.56c-0.05,0.04-0.1,0.08-0.15,0.12     l-91.82,67.91c5.87,15.39,4.94,35.15-3,57.56c-11.47,32.41-36.62,68.63-72.72,104.73c-0.96,0.95-2.25,1.49-3.6,1.49     s-2.64-0.54-3.6-1.49L1.485,188.628c-1.98-1.99-1.98-5.21,0-7.2c36.1-36.1,72.32-61.24,104.73-72.72     c22.42-7.94,42.17-8.87,57.56-3l67.91-91.82c0.04-0.05,0.08-0.1,0.12-0.15c6.5-8.12,16.18-13.11,26.56-13.68     C268.765-0.522,278.925,3.368,286.275,10.718z M286.775,38.068c0.42-7.5-2.39-14.84-7.7-20.15c-5.3-5.31-12.66-8.11-20.14-7.7     c-7.47,0.41-14.43,3.98-19.12,9.81l-66.83,90.35c2.7,1.77,5.22,3.79,7.53,6.1s4.34,4.83,6.1,7.54l90.36-66.83     C282.795,52.498,286.365,45.528,286.775,38.068z M178.695,187.378c9.83-27.78,7.93-50.4-5.37-63.7     c-13.31-13.3-35.93-15.21-63.71-5.38c-29.93,10.6-63.5,33.64-97.31,66.75l99.64,99.64     C145.055,250.878,168.095,217.308,178.695,187.378z"/>
            <path d="M267.865,29.138c5.21,5.21,5.21,13.68,0,18.89c-2.61,2.61-6.03,3.91-9.45,3.91c-3.42,0-6.84-1.3-9.45-3.91     c-5.21-5.21-5.21-13.68,0-18.89c2.52-2.53,5.88-3.92,9.45-3.92C261.985,25.218,265.335,26.608,267.865,29.138z M260.795,40.958     c1.31-1.31,1.31-3.44,0-4.75c-0.64-0.64-1.48-0.99-2.38-0.99s-1.74,0.35-2.38,0.99c-1.31,1.31-1.31,3.44,0,4.75     S259.475,42.268,260.795,40.958z"/>
          </g>
        </g>
      </g>
    </svg>
  }
  </button>

);


const appendHttp = (url) => {
  if (url.startsWith('http')) return url
  return `https://${url}`
}

export default Form;
