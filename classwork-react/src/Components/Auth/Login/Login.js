import React from 'react'
import './login.scss'
import {Form,FormGroup,Input,Label,Button} from 'reactstrap'
import DangerToast from '../../Toasts/DangerToast';
import { useHistory } from 'react-router-dom';
import Banner from '../../Banner/banner'

function Login() {
    const history = useHistory();
    const [isAuth,setAuth]=React.useState(true);
    const [username,setUsername]=React.useState();
    const [password, setPassword]=React.useState();
    
    const handleChangeUsername=(e)=>{
        setUsername(e.target.value)
    }
    const handleChangePassword=(e)=>{
        setPassword( e.target.value)
    }
    const handleSubmit=()=>{
        if (username==="admin" && password==="admin123") {
            setAuth(true)
            history.push("/products", {isAuth})
        }
        else{
            setAuth(false)
        }
    }
  return (
   <>
    <Banner title="login"/>
    <div className='login-form'>
       <Form inline>
            <FormGroup floating>
            <Input
                id="exampleEmail"
                name="username"
                placeholder="Username"
                type="text"
                onChange={handleChangeUsername}
            />
            <Label for="exampleEmail">
                Username
            </Label>
            </FormGroup>
            <FormGroup floating>
            <Input
                id="examplePassword"
                name="password"
                placeholder="Password"
                type="password"
                onChange={handleChangePassword}
            />
            <Label for="examplePassword">
                Password
            </Label>
            </FormGroup>
            <Button onClick={handleSubmit} color="warning" >
             Login
            </Button>
        </Form>
        {isAuth ? "" : (<DangerToast/>)}
    </div>
   </>
  )
}

export default Login