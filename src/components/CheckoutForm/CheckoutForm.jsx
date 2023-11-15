import { useState } from "react";
import './CheckoutForm.css';

const CheckoutForm = ({onConfirm}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name, email, phone
        }

        onConfirm(userData)
    }

    return(
    <form onSubmit={handleConfirm} className="checkout-form">
      <div className="input-group">
        <label className="input-label">Nombre</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={name} 
          onChange={({target}) => setName(target.value)} 
          required 
          className="input-field"
        />
      </div>
      <div className="input-group">
        <label className="input-label">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={email} 
          onChange={({target}) => setEmail(target.value)} 
          required 
          className="input-field"
        />
      </div>
      <div className="input-group">
        <label className="input-label">Telefono</label>
        <input 
          type="tel" 
          id="phone" 
          name="phone" 
          value={phone} 
          onChange={({target}) => setPhone(target.value)} 
          required 
          className="input-field"
        />
      </div>
      <button type="submit" className="submit-button">Submit</button>
    </form>
    )

}

export default CheckoutForm;
