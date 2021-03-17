import React, {useEffect, useState} from 'react';
import axios from './api/axios';
import MUIDataTable from 'mui-datatables';
import {Input, Button, FormControl, Typography} from '@material-ui/core';
import { useForm } from 'react-hook-form';

function App() {
  const {register, handleSubmit} = useForm();
  const [data, setData] = useState([]);
  async function fetchData() {
    const guitars = await axios.get('/guitars');
    setData(guitars.data);
  }

  useEffect( () => {
    fetchData();
  }, []);
  console.log(data)

  const columns = [
    {
      name: 'id',
      label: '#',
    },
    {
      name: 'brands',
      label: 'Marca',
    },
    {
      name: 'type',
      label: 'Tipo',
    },
    {
      name: 'price',
      label: 'Preço',
      options: {
        customBodyRender: (value) => {
          return `R$ ${String(Number(value).toFixed(2)).replace('.', ',')}`;
        }
      }
    }
  ];

  const onSubmit = async (data) => {
    await axios.post('/guitars', data);
    fetchData();
  }

  return (
    <div className="App">
        <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{display: 'flex', justifyContent: 'center', margin: '2vw'}}>
        <Typography variant="h4">Casdastrar as melhores guitarras do mundo</Typography> 
        </div>
        <div style={{display: 'flex', justifyContent: 'center', margin: '2vw'}}>
          <FormControl>
            <Input name="brands" placeholder="Marca" inputRef={register({required: true})}/>
          </FormControl>
          <FormControl>
            <Input name="type" placeholder="Tipo" inputRef={register({required: true})}/>
          </FormControl>
          <FormControl>
            <Input name="price" placeholder="Preço" inputRef={register({required: true, type: "number"})}/>
          </FormControl>
            <Button color="primary" variant="contained" type="submit">Salvar guitarra</Button>
        </div>
        </form>
      <MUIDataTable 
        title={"As melhores guitarras do mundo"} 
        data={data} 
        columns={columns} 
      />
    </div>
  );
}

export default App;
