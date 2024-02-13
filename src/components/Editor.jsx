import React, { useState } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css';
import { Controlled as ControllEditor } from 'react-codemirror2';
import { ChevronLeft, ChevronRight } from '@material-ui/icons'; // Material-UI icons for left and right arrows

const Editor = (props) => {
    const {
        language,
        value,
        onChange,
        displayname
    } = props;

    const [open, setOpen] = useState(true);

    function handleChange(editor, data, value) {
        onChange(value);
    }

    const toggleOpen = () => {
        setOpen(prevOpen => !prevOpen);
    };

    return (
        <>
            <div className={`Editor-container ${open ? '' : 'collapse'}`}>
                <div className='Editor-title'>
                    {displayname}
                    {open ? <ChevronLeft onClick={toggleOpen} /> : <ChevronRight onClick={toggleOpen} />}
                </div>
                <ControllEditor
                    onBeforeChange={handleChange}
                    value={value}
                    className='code-mirror-wraper'
                    options={{
                        lineWrapping: true,
                        lint: true,
                        mode: language,
                        lineNumbers: true,
                        theme: 'material'
                    }}
                />
            </div>
        </>
    );
};

export default Editor;
