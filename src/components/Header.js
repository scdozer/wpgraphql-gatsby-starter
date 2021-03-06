import React from 'react';
import { useStaticQuery, graphql, Link } from "gatsby";
import Menu from "./Menu";

const Header = () => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            wpgraphql {
            generalSettings {
                description
                title
            }
            }
        }
    `)

    const { title, description } = data.wpgraphql.generalSettings

    return(
        <>
            <h1><Link to="/" rel="home"> {title} </Link></h1>
            <Menu />
        </>
    )
}

export default Header