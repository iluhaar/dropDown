import React from 'react'

const DropDown = ({ title, items, multiselect = false }) => {
    const [open, setOpen] = React.useState(false)
    const [selection, setSelection] = React.useState([])
    const [data, setData] = React.useState()

    const toggle = () => {
        setOpen(!open)
    }

    const handleClick = (item) => {
        if (!selection.some(current => current.id === item.id)) {
            if (!multiselect) {
                setSelection([item])
            } else if (multiselect) {
                setSelection([...selection, item])
            }
        } else {
            let selectionAfterRemoval = selection
            selectionAfterRemoval = selectionAfterRemoval.filter(
                current => current.id !== item.id
            )
            setSelection([...selectionAfterRemoval])
        }
        setData(item.value)
        
    }

    const isItemSelected = (item) => {
        if (selection.some(current => current.id === item.id)) {
            return true
        }
        return false
    }
    return (
        <div className="dd-wrapper">
            <div tabIndex={0}
                className="dd-header"
                role="button"
                onKeyPress={() => toggle(!open)}
                onClick={() => toggle(!open)} >
                <div className="dd-header__title">
                    <p className="dd-header__title--bold">{title}</p>
                </div>
                <div className="dd-header__action">
                    <p>
                        {open ? 'Close' : 'Open'}
                    </p>
                </div>
            </div>
            {open && (
                <ul className="dd-list">
                    {
                        items.map((item) => (
                            <li className="dd-list-item" key={item.id}>
                                <button type="button" onClick={() => handleClick(item)}>
                                    <span>{item.value}</span>
                                    <span>{isItemSelected(item) && "Selected"}</span>
                                </button>
                            </li>
                        ))
                    }
                </ul>
            )}
            <div>
                    {data}
            </div>

        </div >
    )
}

export default DropDown
