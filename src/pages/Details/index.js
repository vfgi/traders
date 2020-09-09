import React, { useState, useEffect } from 'react';
import axios from 'axios';
import history from '../../assets/utils/history';

import './index.css'

import Input from '../../components/input'
import Button from '../../components/button'
import Select from '../../components/select'
import currency from '../../assets/utils/currency'
import removeCurrency from '../../assets/utils/removeCurrency'


const Cars = (params) => {
    const id = params.location.state
    const [brands, setBrands] = useState({})
    const [title, setTitle] = useState('')
    const [model, setModel] = useState('')
    const [year, setYear] = useState('')
    const [selectedBrand, setSelectedBrand] = useState('')
    const [color, setColor] = useState('')
    const [price, setPrice] = useState('')
    const [mileage, setMileage] = useState('')
    
    
    useEffect(() => {
        async function Brands(){
            const res = await axios.get('http://localhost:3000/brands')
            setBrands(res.data)
        }
        Brands()

        if(id) {
            async function Details(id){
                const res = await axios.get(`http://localhost:3000/cars/${id}`)
                const info = res.data
                setTitle(info.title)
                setModel(info.model)
                setPrice(currency(info.price))
                setYear(info.year)
                setColor(info.color)
                setMileage(info.km)
                setSelectedBrand(info.brand)
            }
            Details(id)
        }
    }, [])

    async function save() {
        const carInfo = {
            title: title,
            model: model,
            brand: selectedBrand,
            year: year,
            color: color,
            km: parseInt(mileage, 10),
            price: parseInt(removeCurrency(price), 10)
        }
        if(id){
            await axios.put(`http://localhost:3000/cars/${id}`, carInfo)
                .then(() => history.push('/list'))
                .catch(error => {
                console.log(error);
            });
        }
        else{
            await axios.post('http://localhost:3000/cars', carInfo)
                .then(() => history.push('/list'))
                .catch(error => {
                console.log(error);
            }); 
        }
        
    }

    async function remove () {
        await axios.delete(`http://localhost:3000/cars/${id}`)
        .then(() => history.push('/list'))
        .catch(error => {
            console.log(error);
        }); 
    }

    return (
        <div className='container'>
            <form onSubmit={() => {
                        save()
                        history.push('/list')
                        }}>
                <Input Placeholder="Titulo" onChange={(e) => setTitle(e.target.value)} value={title} required/>
                <div className='divided'>
                    <Input Placeholder="Modelo" onChange={(e) => setModel(e.target.value)} value={model} required/>
                    <Input Placeholder="Ano" onChange={(e) => setYear(e.target.value)} value={year} type='number' required/>
                </div>
                <Select options={brands} onChange={(e) => setSelectedBrand(e.target.value)} defaultValue={selectedBrand} required/>
                <div className='divided'>
                    <Input Placeholder="Cor" onChange={(e) => setColor(e.target.value)} value={color} required/>
                    <Input Placeholder="Preço" onChange={(e) => setPrice(e.target.value)} required value={currency(price)}/>
                </div>
                <div className='divided'>
                    <Input Placeholder="Kilometragem" onChange={(e) => setMileage(e.target.value)} required value={mileage} type='number'/>
                </div>
                <div className='buttons'>
                    <Button Value='Remover' ClassName='outlined' onClick={() => {
                        remove()
                        history.push('/list')
                        }}/>
                    <Button Value='Cancelar' ClassName='outlined' onClick={() => history.push('/')}/>
                    <Input ClassName='submit' type="submit" value="Salvar"/>
                </div>
            </form>
        </div>

    );
}

export default Cars
