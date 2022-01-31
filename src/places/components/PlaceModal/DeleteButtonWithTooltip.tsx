import { CSSProperties, useState } from "react";
import Button from "../../../shared/form/Button/Button";
import deletesvg from '../../../assets/svg/delete.svg';


const DeleteButtonWithTootilp: React.FC<{ onDelete: () => void }> = () => {

    const [deleting, setDeleting] = useState(false);

    const tooltipStyle: CSSProperties = {
        position: 'absolute',
        backgroundColor: 'white',
        borderRadius: '0 0 0 10px',
        top: '-225%',
        width: '220%',
        border: '1px solid #ccc',
        padding: '10px',
    }

    return <div style={{ position: 'relative' }}>
        {deleting && <div style={tooltipStyle}>
            <h2 style={{ margin: 'auto 0' }}>Are you sure ?</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button danger style={{ paddingTop: 0, paddingBottom: 0 }} type="button">
                    yes
                </Button>
                <Button style={{ paddingTop: 0, paddingBottom: 0 }} onClick={() => { setDeleting(false) }} type="button">
                    Cancel
                </Button>
            </div>
        </div>}
        <Button danger style={{ paddingTop: 0, paddingBottom: 0 }} onClick={() => { setDeleting(true) }} type="button">
            <img src={deletesvg} style={{ width: 30, margin: 0, padding: 0 }} />
        </Button>
    </div>
}

export default  DeleteButtonWithTootilp;