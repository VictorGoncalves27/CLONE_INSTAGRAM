import PropTypes from 'prop-types';
export default function ItemCentro(props) {
    return (
        <>
            <li className='interacao'>
                <span>{props.icone}</span>
            </li>
        </>


    )
}
ItemCentro.propTypes = {
    icone: PropTypes.string.isRequired,
    
}
