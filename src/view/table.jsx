
        import  React  from 'react';
        import {useEffect, useState} from 'react';
        import { fetchAllUser } from '../util/api';
        import { DataGrid } from '@mui/x-data-grid';
        
        import { Avatar } from '@mui/material';
        
        const columns = [
          { field: 'id', headerName: 'ID', width: 70 },
          { field: 'firstName', headerName: 'First name', width: 130 },
          { field: 'lastName', headerName: 'Last name', width: 130 },
          {
            field: 'email',
            headerName: 'Email',
            
            width: 150,
          },
          {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
          },
          {
            field:'avatar',
            headerName:'Avatar',
            width:70,
            sortable: false,
            renderCell:(params)=> <Avatar src={params.row.avatar} />
          }
        ];
        
        
         function TableUser() {
          const [listUsers,setListUsers]=useState([]);
          
          useEffect(()=>{
            getUsers();
          },[]);
          
        
        
        
        const getUsers = async()=>{
        let res = await fetchAllUser();
        
        setListUsers(res.data.data);
        }
        const rows = 
         
          listUsers.map((item)=>{
            return({ id: item.id , lastName: item.last_name, firstName: item.first_name, email: item.email , avatar:item.avatar}
          )})
        ;
        
        console.log(listUsers);
          return (
            <div style={{ display: 'flex', height: '100%' }}>
          <div style={{ flexGrow: 1 }}>
              <DataGrid
                rows={rows}
                columns={columns}
                
                 />
            </div>
            </div>
          );
        }




export default TableUser