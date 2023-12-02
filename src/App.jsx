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
          Container,
          Button} from '@material-ui/core'

import AccessAlarmOutlined from "@material-ui/icons/AccessAlarmOutlined";
import useStyles from './styles.js';


const App = () => {

    const classes = useStyles();
    const cards = [1,2,3,4,5,6,7,8,9];
    
  return (
    <>

    <CssBaseline />
    <AppBar  position="relative">
    <Toolbar>
  
        <AccessAlarmOutlined className={classes.icon}/>

        <Typography variant="h6" >
            Photo Album
        </Typography>
        </Toolbar>
    </AppBar>

    <main>
        <div className={classes.container}>
            <Container maxWidth="sm" >
                <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
                    Photo Album
                </Typography>

                <Typography variant='h5' align='center' color='textSecondary' paragraph>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate incidunt eaque repudiandae facere sit impedit fugiat. Tempora id, aut sapiente, nobis, est eius corrupti doloremque provident obcaecati ut adipisci culpa.
                </Typography>

                <div className={classes.button}>
                    <Grid container spacing={2} justify="center">
                        <Grid item >
                            <Button variant='contained' color='primary'>
                                See My Photo
                            </Button>
                           
                        </Grid>
                        <Grid item >
                            <Button variant='outlined' color='primary'>
                                See My Photo
                            </Button>
                           
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
        <Container className={classes.cardGrid}>
            <Grid container spacing={4}>
                {cards.map((card) => (
                    <Grid item key={card} xs={12} sm={6} md={4}> 
                    <Card className={classes.card}>
                        <CardMedia
                        className={classes.cardMedia}
                        image="https://source.unsplash.com/random"
                        title="Image Title"
                        >
                         </CardMedia>
                        <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant='h5'>
                                        Heading
                                </Typography>
                                <Typography>
                                    This is a media card . You can use this
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color='primary'>View</Button>
                                <Button size='small' color='primary'>Edit</Button>
                            </CardActions>
                    </Card>
                </Grid>
                    
                ))}
                
            </Grid>
        </Container>
    </main>
            
        <footer className={classes.footer}>
                <Typography variant='h6' align='center' gutterBottom>
                    Footer
                </Typography>
                <Typography variant='subtitle1' align='center' color='textSecondary'
                >
                        Something here to give the purpose
                </Typography>
        </footer>



     </>
    
      )
     
}

export default App
