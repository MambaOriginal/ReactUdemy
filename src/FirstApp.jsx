// TODOS LOS FUNCTIONAL COMOPONENTS DEBEN NOMBRARSE CON UPPER Y PASCALCASE
//import { Fragment } from "react"; //fragmento reemplaza el tener que usar div innecesarias para poder pintar los componentes que usa la aplicacion
import PropTypes from 'prop-types'; //Para poder llamar esta libreria se debe hacer una instalacion por npm
//este elemento que estoy usando llamado title lo que hace es desestructurar la propiedad props
export const FirstApp = ({ title, subTitle,name }) => {
  return (
    /*  esta estructura pintaria los componentes sin que aparezca la etiqueta div
      <Fragment>
          <h2>First App</h2>
          <p>Parrafo</p>
      </Fragment>
      ahora bien este es otro metodo mucho mas simplificado y sin usar la importacion para definir un fragmentos se usa unicamente <></>
      React siempre necesita un nodo padre en este caso el fragment y cualquier cantidad de elementos dentro del mismo */
    <>
      <h2>First App</h2>
      <p>{title}</p>
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  )
};

//Se defiene luego de haber iniciliazado el functional component

FirstApp.propTypes = {
  //de este modo se puede retringir que valores recibe el functional component
  title: PropTypes.string.isRequired,
  //subTitle: PropTypes.number.isRequired,
  subTitle: PropTypes.string.isRequired,
}
//se pueden definir los valores por defecto que se mostraran si no se pasa ningun valor

FirstApp.defaultProps = {
 // title: 'No hay titulo',
  subTitle: 'No hay subtitulo',
  name:'Fernando Herrera',
}