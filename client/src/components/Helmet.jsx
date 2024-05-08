/* eslint-disable react/prop-types */

const Helmet = (props) => {
    document.title = "211 Properties – " + props.title;
    return <div>{props.children}</div>
}

export default Helmet