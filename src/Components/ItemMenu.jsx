import PropTypes from 'prop-types';
export default function ItemMenu(props) {
    return (
        <>
            <li className='menu'>
                <span>{props.icone}</span>
                <span>{props.texto}</span>
            </li>

        </>

    )

    
}
ItemMenu.propTypes = {
    icone: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired,
}
