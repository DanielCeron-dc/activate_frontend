import React, { forwardRef, useState } from 'react';
import Button from '../../form/Button/Button';
import classes from "./EditableText.module.css";

import editsvg from "../../../assets/svg/edit.svg";
import donesvg from "../../../assets/svg/done.svg";
import { ForwardedRef } from 'react';

type EditableTextProps = {
    type: 'p' | 'h3',
    active: boolean,
    ref: ForwardedRef<HTMLTextAreaElement>;
    children: string;
    name: string;
};

const EditableText = forwardRef<HTMLTextAreaElement, EditableTextProps>((props, ref) => {

    const [editing, setEditing] = useState(false);

    const chosenType = props.type === 'p' ? <>
        {!editing ? <p>
            {props.children}
            {props.active && <Button className={classes.button} onClick={() => setEditing(true)}><img src={editsvg} /></Button>}
        </p >
            :
            <>
                <textarea name={props.name} id="" rows={10} className={classes.p} ref={ref}>
                    {props.children}
                </textarea>
                <Button className={classes.button} onClick={() => setEditing(false)}><img src={donesvg} /></Button>
            </>

        }
    </> : <>
        {!editing ? <h3>
            {props.children}
            {props.active && <Button className={classes.button} onClick={() => setEditing(true)}><img src={editsvg} /></Button>}
        </h3 >
            :
            <>
                    <textarea name={props.name} id="" rows={3} className={classes.h3} ref={ref}>
                    {props.children}
                </textarea>
                <Button className={classes.button} onClick={() => setEditing(false)}><img src={donesvg} /></Button>
            </>
        }
    </>


    return <div className={classes.base}>
        {chosenType}
    </div>;


});
export default EditableText;