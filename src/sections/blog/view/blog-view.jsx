import React, { useState, useEffect } from 'react';

import {
  Alert,
  Button,
  Card,
  CardContent,
  Checkbox,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';

// ----------------------------------------------------------------------


// ----------------------------------------------------------------------


// ----------------------------------------------------------------------

export default function BlogView() {
  const [selectedFilter, setSelectedFilter] = useState(undefined);
  const [newEmployee, setNewEmployee] = useState({ skill_name: '', description: '' });
  const [data2, setData2] = useState([]);
  const [roles, setRoles] = useState([]);
  const [menus, setMenus] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const filterTypes = [
    { value: 'terminated', display: 'Terminated' },
    { value: 'release', display: 'Release' },
  ];

  useEffect(() => {
    // Fetch roles and menus when the component mounts
    fetchRoles();
    fetchMenus();
  }, []);

  const fetchRoles = () => {
    // Simulate fetching roles
    const fetchedRoles = [
      { role_name: 'Admin' },
      { role_name: 'User' },
      // Add more roles as needed
    ];
    setRoles(fetchedRoles);
  };

  const fetchMenus = () => {
    // Simulate fetching menus
    const fetchedMenus = [
      { menu_name: 'Dashboard' },
      { menu_name: 'Settings' },
    ];
    setMenus(fetchedMenus);
  };

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewEmployee({ ...newEmployee, [name]: value });
  };

  const addEmployee = () => {
    if (!newEmployee.skill_name || !newEmployee.description) {
      setErrorMessage('Skill name and description are required.');
      return;
    }
    
    try {
      // Simulate adding employee
      const newEmployeeData = {
        id: data2.length + 1, // Generate a new ID
        skill_name: newEmployee.skill_name,
        description: newEmployee.description,
      };
      setData2([...data2, newEmployeeData]);
      setNewEmployee({ skill_name: '', description: '' });
      setErrorMessage('');  // Clear any previous error messages
    } catch (error) {
      setErrorMessage('Failed to add employee.');
    }
  };

  const isMenuAssigned = (roleName, menuName) => false;

  const onChange = (value, event) => {
    // Logic to handle change
  };

  const displayData = () => {
    // Logic to display data
  };

  return (
    <Container>
       <div style={{ textAlign: 'center' }}>
        <Typography variant="h1" style={{ color: '#2d3091', fontFamily: 'Bablyon' }}>
          Admin Service&apos;s
        </Typography>
        <FormControl fullWidth>
          <InputLabel>Choose an option</InputLabel>
          <Select value={selectedFilter} onChange={handleFilterChange}>
            <MenuItem value={undefined}>-- Choose an option --</MenuItem>
            {filterTypes.map((type) => (
              <MenuItem key={type.value} value={type.value}>
                {type.display}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <hr />

      {selectedFilter === 'terminated' && (
        <Card style={{ marginTop: '20px' }}>
          <CardContent>
            <Typography variant="h1" style={{ color: '#2d3091', fontFamily: 'Bablyon', textAlign: 'center' }}>
              Skill Matrix
            </Typography>
            <div className="row g-3" style={{ paddingLeft: '200px' }}>
              <div className="col-md">
                <TextField
                  label="Skill Name"
                  variant="filled"
                  fullWidth
                  name="skill_name"
                  value={newEmployee.skill_name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md">
                <TextField
                  label="Description"
                  variant="filled"
                  fullWidth
                  name="description"
                  value={newEmployee.description}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md">
                <Button variant="contained" color="success" onClick={addEmployee}>
                  Add
                </Button>
              </div>
            </div>
            <div className="row g-3" style={{ textAlign: 'center' }}>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell>Skill Name</TableCell>
                      <TableCell>Description</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data2.map((employee) => (
                      <TableRow key={employee.id}>
                        <TableCell>{employee.id}</TableCell>
                        <TableCell>{employee.skill_name}</TableCell>
                        <TableCell>{employee.description}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </CardContent>
        </Card>
      )}

      {selectedFilter === 'release' && (
        <Card style={{ marginTop: '20px' }}>
          <CardContent>
            <Typography
              variant="h1"
              style={{ color: '#2d3091', fontFamily: 'Bablyon', textAlign: 'center' }}
            >
              Menu management
            </Typography>
            {roles.length === 0 ? (
              <Alert severity="error" style={{ textAlign: 'center' }}>
                {errorMessage}
              </Alert>
            ) : (
              <div style={{ fontFamily: 'Bablyon' }}>
                {roles.map((data) => (
                  <div className="row" key={data.role_name}>
                    <Checkbox />
                    {data.role_name}
                    <ul>
                      {menus.map((data1) => (
                        <li key={data1.menu_name}>
                          <Checkbox
                            checked={isMenuAssigned(data.role_name, data1.menu_name)}
                            onChange={(event) => onChange(`${data1.menu_name} ${data.role_name}`, event)}
                            value={`${data1.menu_name} ${data.role_name}`}
                          />
                          {data1.menu_name}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <Button variant="contained" color="primary" onClick={displayData}>
                  Submit
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </Container>
  );
}
