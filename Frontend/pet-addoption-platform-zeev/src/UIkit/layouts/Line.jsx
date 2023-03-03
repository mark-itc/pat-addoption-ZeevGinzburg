import './Line.css';

export const SideBySide = ({ children, addClass }) => {


    return (
        <div className={`SideBySide ${addClass || ''}`}>
            {children}
        </div>
    )
}

export const Between = (props) => {
    
    return (
         <SideBySide {...props} addClass="between" />
         )
}

export const OneAboveOther = (props) => {
    return <SideBySide {...props} addClass="OneAboveOther" />
}