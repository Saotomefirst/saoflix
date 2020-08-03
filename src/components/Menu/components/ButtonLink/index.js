import React from 'react';


function ButtonLink (props) {
    /*
    props =>    { className: "o nome do className"
                , href: "/"
                , children: {o que estiver entre as tagas de aberturea e fechamento!}
                }
     */
    //console.log(props);
    return ( 
        <a href={props.href} className={props.className}>
            {props.children}
        </a>
    );
}
export default ButtonLink;