import React from 'react'
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BarraNavegacion } from '../navbar/barra-navegacion';
{/* Agregé la barra de navegacion  :) danna*/}

{/* Agregé la Fondo  :) danna*/}
const Encuesta =()=> {
  return (
    <div className='fondoEncuesta'>
    <BarraNavegacion />{/* Así  :) danna*/}
    <Container>
   {/*centré el formulatrio y lo puse para que no acepte sin el @ del correo*/ }
    <form style ={{textAlign:'center'}}>
        <h2>Uso de internet en la casa </h2>

        <div class="mb-3 mt-3">
          <label for="text" class="form-label" >Nombre completo:</label>
          <input type="text" class="form-control" id="name" placeholder="Ingrese su nombre" name="name" autoComplete='off' />
        </div>

        <div class="mb-3">
          <label for="date" class="form-label">¿Cuándo naciste?</label>
          <input type="date" class="form-control" id="date" placeholder="Enter fecha nacimiento" name="fecha_nacimiento" />
        </div>
       
        <div class="form-group">
        <label for="inputAddress2">Direccion</label>
        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartamentos, casa, cojunto residencial"/>
        </div>

        <div class="form-group">
        <label for="inputAddress2">Ciudad</label>
        <input type="text" class="form-control" id="inputAddress2" placeholder="Ingrese su cuidad"/>
        </div>
       
            <div class="form-group " >
                <label for="inputState">Estrato social</label>
                <select id="inputState" class="form-control">
                <option selected>Seleccione</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>

                
                </select>
            </div>
        
        
            <label class="form-label">¿Cuantas personas conviven contigo?</label>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
                <label class="form-check-label" for="exampleRadios1">Solo yo
                </label>
            </div>

        <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
            <label class="form-check-label" for="exampleRadios1">De dos a cinco personas
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
            <label class="form-check-label" for="exampleRadios1">De cinco a diez personas
            </label>
        </div> 
        <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
            <label class="form-check-label" for="exampleRadios1">Más
            </label>
        </div> 
        
        <label class="form-label">¿Que tipo de dispositivos tienes en casa?</label>
        <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
        <label class="form-check-label" for="defaultCheck1">SmartPhone
        </label>
        </div>
        <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
        <label class="form-check-label" for="defaultCheck1"> Computador
        </label>
        </div>
        <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
        <label class="form-check-label" for="defaultCheck1"> Tablet
        </label>
        </div>
        <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
        <label class="form-check-label" for="defaultCheck1"> Smart tv
        </label>
        </div>

        <div class="col-auto my-1">
            <label class="mr-sm-2 sr-only">¿Que empresa le brinda servicios de internet?</label>
            <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
            <option selected>Choose...</option>
            <option value="1">Claro</option>
            <option value="2">Telcel</option>
            <option value="3">Tigo</option>
            <option value="3">Otro</option>
            </select>
        </div>
         
        <div class="form-group">
            <div><label for="customRange2">El nivel de satisfaccion con tu empresa</label>
            </div>
            <div>
            <input type="range" class="custom-range" min="0" max="800000" id="customRange2"/>
            </div>
        </div>
       
        <div class="input-group mb-3">
            <label class="form-check-label" for="defaultCheck1"/>Precio aproximado de su paquete 
            <div class="input-group-prepend">
            <span class="input-group-text">$</span>
            </div>
            <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"/>
            <div class="input-group-append">
            <span class="input-group-text">.000</span>
            </div>
        </div>

         <div className="custom-control custom-checkbox mb-3">
        <input type="checkbox" className="custom-control-input" id="customControlValidation1" required/>
        <label className="custom-control-label" htmlFor="customControlValidation1">Acepta las políticas de privacidad de datos</label>
        <div className="invalid-feedback">Este campo es obligatorio</div>
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>

    </form>
  </Container>
  </div>
  );
}
export default Encuesta;