import React from 'react'
import { CircularProgress } from 'material-ui'
import { Button } from '@material-ui/core'

export const FinalPage = ({ isLoading, pageReset }) => {
    return(
        <div className='formWrapper'>
            {isLoading ? 
                <CircularProgress color='#3f51b5' style={{ margin: '200px' }} /> : 
                <div>
                    <div>
                        <h2 className='formSubmitMessege' style={{ margin: '100px' }}>New user added!</h2>
                    </div>
                    <div>
                        <Button 
                            variant="contained" 
                            color="primary"
                            onClick={pageReset}>
                            Back to main page    
                        </Button>
                    </div>
                </div>
            }
        </div>
    )
}