import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { connect } from 'react-redux';
import { removeItem, removeAllItems } from '../../store/adminPanel/actions'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    margin: '1% 0 3%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '50%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

const ControlledExpansionPanels = ({ users, removeItem, removeAllItems }) => {
  const classes = useStyles();

  return users.length ? 
    (
        <div style={{ margin: '2% 0' }}>
            <button 
                className='removeAllItemsButton' 
                onClick={() => removeAllItems()}>
                Delete All
            </button>
            {users.map(user => (
                <div className={classes.root}>
                    <ExpansionPanel >
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                            style={{background: '#3f51b5', color: 'white', borderRadius: '8px'}}>
                            <Typography className={classes.heading}><button title='Delete' className="removeUserButton" onClick={() => removeItem(user.id)}><span style={{fontWeight: '700'}}>&times;</span></button></Typography>
                            <Typography className={classes.secondaryHeading} style={{color: 'white', fontWeight: '700'}}>{user.firstName} {user.lastName}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <div style={{width: '100%'}}>
                            <ExpansionPanel>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2bh-content"
                                    id="panel2bh-header">
                                    <Typography className={classes.heading}>Account Info</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                        <ul>
                                            <li key={user.email}>Email: {user.email}</li>
                                            <li key={user.password}>Password: {user.password}</li>
                                            <li key={user.gender}>Gender: {user.gender}</li>
                                            <li key={user.birthday}>Birthday: {user.birthday}</li>
                                            <li key={user.registrationDate}>Date of registration: {user.registrationDate}</li>
                                        </ul>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                            </div>
                            <div style={{width: '100%'}}>
                            <ExpansionPanel>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel3bh-content"
                                    id="panel3bh-header">
                                    <Typography className={classes.heading}>Work Experience</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                        {user.workplaces.map((work, index) => (
                                            <ul>
                                                <h4 style={{margin: '12px'}}>Workplace #{index + 1}</h4>
                                                <li key={work.enterprise}>Enterprise: {work.enterprise}</li>
                                                <li key={work.position}>Position: {work.position}</li>
                                                <li key={work.years}>Period: {work.years}</li>
                                            </ul>
                                        ))}
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                            </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </div>
            ))}
        </div>
    ) : (
        <div className='emptyUsersListAlert'>
            <span style={{ fontWeight: '700', margin: '0 20px 0 40px' }}>⚠</span><span style={{ fontWeight: '700' }}>There are no users:</span><span> try to add it in another tab</span>
        </div>
    )
}

const mapStateToProps = state => (
    {
        users: state.addUserPage.users
    }
) 

const mapDispatchToProps = {
    removeItem,
    removeAllItems
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlledExpansionPanels)