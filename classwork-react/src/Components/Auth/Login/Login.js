import React from 'react'
import './login.scss'
import {Form,FormGroup,Input,Label,Button} from 'reactstrap'
import DangerToast from '../../Toasts/DangerToast';
import { useHistory } from 'react-router-dom';
import Banner from '../../Banner/banner'

function Login() {
    const history = useHistory();
    const [isAuth,setAuth]=React.useState(true);
    const [credentials,setCredentials]=React.useState({
        username:"",
        password:""
    })

    const handleChangeCredentials=(e)=>{
        const {name,value}=e.target
        setCredentials(olduValue=>({...olduValue,[name]:value}))
    }
    const handleSubmit=()=>{
        if (credentials.username==="admin" && credentials.password==="admin123") {
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
                onChange={handleChangeCredentials}
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
                onChange={handleChangeCredentials}
            />
            <Label for="examplePassword">
                Password
            </Label>
            </FormGroup>
            <Button onClick={handleSubmit} color="warning" >
             Login
            </Button>
        </Form>
        {!isAuth && <DangerToast/>}
    </div>
   </>
  )
}

export default Login