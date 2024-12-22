import { useEffect } from "react"

// with + funcion que aporta al componente
export const withLog = (Component) => {

    function ComponentWithLog (props) {

        useEffect (()=> {

            console.log('se monto el componente')

        }, [])

        return (

            <Component>{...props}</Component>

        )      
        
    }

    return ComponentWithLog

}

export default withLog