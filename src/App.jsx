import React from 'react'
import { Typography,
     AppBar,
      Card,
       CardActions,
       Toolbar,
        CardContent,
         CardMedia, 
         Grid,
          CssBaseline, 
          Container} from '@material-ui/core'

import AccessAlarmOutlined from "@material-ui/icons/AccessAlarmOutlined";

const App = () => {
  return (
    <>

    <CssBaseline />
    <AppBar  position="relative">
    <Toolbar>
  
        <AccessAlarmOutlined/>

        <Typography variant="h6" >
            Photo Album
        </Typography>
        </Toolbar>
    </AppBar>

    <main>
        <div>
            <Container maxWidth="sm">
                <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
                    Photo Album
                </Typography>

                <Typography variant='h5' align='center' color='textSecondary' paragraph>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate incidunt eaque repudiandae facere sit impedit fugiat. Tempora id, aut sapiente, nobis, est eius corrupti doloremque provident obcaecati ut adipisci culpa.
                </Typography>
            </Container>
        </div>
    </main>




     </>
    
      )
     
}

export default App
