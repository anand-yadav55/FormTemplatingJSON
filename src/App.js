import {Container,
    Grid,
    Paper,
    Box,
    Card,
    CardContent,
    Typography} from '@material-ui/core';

function App(props) {
  const data = props.data;
  console.log(data)

  return (
    <Container maxWidth='md' pt={4} m={3}>

      <Card variant='outlined'>
        <CardContent>
          <Typography variant='h5' component='h2'>
            {data.formName}
          </Typography>
          <Typography variant='body2' component='p'>
            {data.formDesc}
          </Typography>
        </CardContent>
      </Card>
      <Card>
        <Grid container spacing={2}>
          {data.data.map((item, idx)=>{
            let rules;
            if(item.fieldrules){
              if(item.fieldrules.length!==0){
                rules = item.fieldrules[0];
                console.log(rules)
              }
            }
            return <Grid key={idx} item xs={12}>
              <Paper elevation={2}>
                
                  <Box>
 
                    <label htmlFor={item.fieldname}>{item.fieldlabel}</label>
                    
                    switch({item.fieldname}){
                      case "text":{
                        
                      }
                    }
                    {(item.fieldtype==='select')?
                      <select name={item.fieldname}
                        placeholder={item.placeholder}
                        required={
                          (rules)?
                              (rules.required?true:false)
                              :
                              false
                        }  
                      >
                        {
                          
                          item.options.map((item, idx)=>{
                            return <option key={idx} value={item}>{item}</option>
                          })
                          
                        }
                      </select>
                        :
                        <input 
                          name={item.fieldname} 
                          placeholder={item.fieldplaceholder} 
                          required={
                            (rules)?
                              (rules.required?true:false)
                              :
                              false
                          } 
                          type={item.fieldtype}
                        />
                    }
                  </Box>
                
              </Paper>
            </Grid>
          })}
        </Grid>
      </Card>
    </Container>
  );
}

export default App;
