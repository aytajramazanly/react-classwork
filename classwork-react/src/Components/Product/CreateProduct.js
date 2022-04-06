import React from 'react'
import { useHistory } from 'react-router-dom';
import {Form,FormGroup,Input,Label,Button} from 'reactstrap'
import {productService} from '../../API/Services/ProductService'
import Banner from '../Banner/banner';

function CreateProduct() {
    //Change state obj
    const [name,setName]=React.useState();
    const [price,setPrice]=React.useState();
    const [image,setImage]=React.useState();
    const [description,setDesc]=React.useState();
    const history=useHistory();
    const handleChange=(e)=>{
        switch (e.target.name) {
            case "name":
                setName( e.target.value)
                break;
            case "price":
                setPrice(e.target.value)
                break;
            case "image":
            setImage(e.target.value)
            break;
            case "description":
            setDesc(e.target.value)
            break;
            default:
                break;
        }
    }
    const handleSubmit=()=>{
        const user={
            name,
            price,
            image,
            description
        } 
        productService.postProduct(user).then((resp)=>handleRedirect())
    }
    const handleRedirect=()=>{
        history.push("/products",{isAuth:true})
    }
  return (
    <div>
        <Banner title="create product"/>
        <Form inline>
            <FormGroup floating>
                <Input
                    id="name"
                    name="name"
                    placeholder="name"
                    type="text"
                    onChange={handleChange}
                />
                <Label for="name">
                    Email
                </Label>
            </FormGroup>
            <FormGroup floating>
                <Input
                    id="price"
                    name="price"
                    placeholder="price"
                    type="number"
                    onChange={handleChange}
                />
                <Label for="price">
                    Price
                </Label>
            </FormGroup>
            <FormGroup floating>
                <Input
                    id="image"
                    name="image"
                    placeholder="image"
                    type="text"
                    onChange={handleChange}
                />
                <Label for="image">
                    Image Path
                </Label>
            </FormGroup>
            <FormGroup floating>
                <Input
                    id="description"
                    name="description"
                    placeholder="description"
                    type="text"
                    onChange={handleChange}
                />
                <Label for="description">
                    Description
                </Label>
            </FormGroup>
            <Button onClick={handleSubmit} className="add-btn">
                Submit
            </Button>
        </Form>
    </div>
  )
}

export default CreateProduct