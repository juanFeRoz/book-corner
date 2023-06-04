import React, { useState } from 'react'
import divider from '../img/divider.png'
import { Container } from 'react-bootstrap';


const Signup = () => {


  const [password, setPassword] = useState('');

  const errorMessage = validate(password);

  return (

    <Container>
      <form action="/action_page.php" className='ancho'>

        <div class="mb-3 mt-3">
          <label for="email" class="form-label" >Email:</label>
          <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" autoComplete='off' />
        </div>
        <div class="mb-3">
          <label for="date" class="form-label">¿Cuándo naciste?</label>
          <input type="date" class="form-control" id="date" placeholder="Enter fecha nacimiento" name="fecha_nacimiento" />

        </div>
        <div class="mb-3">
          <label for="pwd" class="form-label">Password:</label>
          <input
            type="password"
            class="form-control"
            id="pwd"
            placeholder="contraseña"
            name="password"
            value={password}
            onChange={ev => setPassword(ev.target.value)}
          />
          <p>{errorMessage}</p>

        </div>


        <div class="form-check mb-3">
          <label class="form-check-label">
            <input class="form-check-input" type="checkbox" name="remember" /> Acepto los terminos y condiciones
          </label>
        </div>
        <div class="separador">
          <img src={divider} />
        </div>
        <div class="espacio"></div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </Container>



  )
}

const validate = (password) => {

  if (password.length < 5) return 'Contraseña debe ser mayor de 5 caracters';
}

export default Signup;