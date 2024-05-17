import React, { useState } from 'react';

import {
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
  Stack,
  Container,
  Card
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

// import ProductSort from '../product-sort';
// import ProductFilters from '../product-filters';
import ProductCartWidget from '../product-cart-widget';

// Your component code here...


// ----------------------------------------------------------------------

export default function ProductsView() {
  // const [openFilter, setOpenFilter] = useState(false);

  // const handleOpenFilter = () => {
  //   setOpenFilter(true);
  // };

  // const handleCloseFilter = () => {
  //   setOpenFilter(false);
  // };
  const [uploadedFiles, setUploadedFiles] = useState({});

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setUploadedFiles({ ...uploadedFiles, [name]: files[0] });
  };
  

  return (
    <Container>
      {/* <Typography variant="h4" sx={{ mb: 5 }}>
        Products
      </Typography> */}

      <Stack
        direction="row"
        alignItems="center"
        flexWrap="wrap-reverse"
        justifyContent="flex-end"
        sx={{ mb: 5 }}
      >
        {/* <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          <ProductFilters
            openFilter={openFilter}
            onOpenFilter={handleOpenFilter}
            onCloseFilter={handleCloseFilter}
          />

          <ProductSort />
        </Stack> */}
      </Stack>

      <Grid container spacing={3}>
      <Container maxWidth="md">
      <Box my={4}>
      <Card sx={{ maxWidth: '52rem' }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Immigration Documents
        </Typography>
        </Card>
      </Box>
      <Box mb={4}>
        <Typography variant="h5" component="h2" gutterBottom>
          Required Documents
        </Typography>
        <List>
          {['Passport', 'Visa', 'Birth Certificate', 'Marriage Certificate', 'Proof of Residency', 'Employment Verification', 'Medical Records'].map((doc) => (
            <ListItem key={doc}>
              <ListItemText primary={doc} />
              <Button variant="contained" component="label">
                Upload
                <input
                  type="file"
                  hidden
                  name={doc.toLowerCase().replace(/ /g, '-')}
                  onChange={handleFileChange}
                />
              </Button>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Box>
      <Box mb={4}>
        <Typography variant="h5" component="h2" gutterBottom>
          Additional Documents
        </Typography>
        <List>
          {['Educational Certificates', 'Police Clearance Certificate', 'Financial Statements', 'Tax Returns', 'Bank Statements'].map((doc) => (
            <ListItem key={doc}>
              <ListItemText primary={doc} />
              <Button variant="contained" component="label">
                Upload
                <input
                  type="file"
                  hidden
                  name={doc.toLowerCase().replace(/ /g, '-')}
                  onChange={handleFileChange}
                />
              </Button>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box mt={4}>
        <Typography variant="h6" component="h3" gutterBottom>
          Uploaded Files
        </Typography>
        <List>
          {Object.keys(uploadedFiles).map((key) => (
            <ListItem key={key}>
              <ListItemText primary={`${key}: ${uploadedFiles[key].name}`} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
      </Grid>

      <ProductCartWidget />
    </Container>
  );
}
